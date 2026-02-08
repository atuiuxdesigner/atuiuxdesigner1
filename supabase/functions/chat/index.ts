import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `You are Atul Thorat's AI portfolio assistant. You help visitors learn about Atul and his work. Be friendly, concise, and professional.

## About Atul
- Computer Engineering graduate who discovered UX design in 2023
- Working at Youhonk since 2024 as a Product Designer
- 1+ years of experience, 50+ sprints completed, 1000+ users impacted
- Based in Pune, India
- Design philosophy: User-centered design, making things work beautifully

## Skills
- UX Design, UI Design, Figma, User Research, Prototyping, Usability Testing
- Information Architecture, Wireframing, Interaction Design
- Design Systems, Responsive Design

## Case Studies

### 1. Youhonk Delivery App
A mobile app for pickup and drop partners. Designed the complete delivery workflow including onboarding, order management, real-time navigation, OTP verification for pickups and dropoffs, delivery history, chat support, profile management, and KYC verification.

### 2. Youhonk Customer App
A vehicle repair booking app for customers. Enables users to book vehicle repairs, track service progress, and communicate with workshops.

### 3. Youhonk Vendor App
A workshop management app for vendors/workshops. Helps workshops manage incoming repair orders, update service status, and communicate with customers.

## Contact Information
- Email: atuiuxdesigner@gmail.com
- WhatsApp: +91 96238 80889
- Location: Pune, India
- Portfolio: atuiuxdesigner.lovable.app

## Instructions
- Answer questions about Atul's work, skills, and experience using the context above.
- If someone wants to hire Atul, schedule a meeting, or share their contact info, use the save_lead tool.
- If someone asks something unrelated to Atul or design, politely redirect.
- Keep responses concise (2-4 sentences unless more detail is requested).
- Use markdown formatting for readability.`;

const TOOLS = [
  {
    type: "function",
    function: {
      name: "save_lead",
      description:
        "Save visitor contact information or meeting request. Use when someone shares their name, email, phone, company, or wants to schedule a meeting/call with Atul.",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string", description: "Visitor's name" },
          email: { type: "string", description: "Visitor's email" },
          phone: { type: "string", description: "Visitor's phone number" },
          company: { type: "string", description: "Visitor's company" },
          type: {
            type: "string",
            enum: ["inquiry", "meeting_request", "general"],
            description: "Type of lead",
          },
          preferred_date: {
            type: "string",
            description: "Preferred meeting date",
          },
          preferred_time: {
            type: "string",
            description: "Preferred meeting time",
          },
          message_summary: {
            type: "string",
            description: "Brief summary of the conversation",
          },
        },
        required: ["type", "message_summary"],
        additionalProperties: false,
      },
    },
  },
];

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) throw new Error("LOVABLE_API_KEY is not configured");

    const response = await fetch(
      "https://ai.gateway.lovable.dev/v1/chat/completions",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${LOVABLE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "google/gemini-3-flash-preview",
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages,
          ],
          stream: true,
          tools: TOOLS,
        }),
      }
    );

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(
          JSON.stringify({
            error: "Rate limit exceeded. Please try again in a moment.",
          }),
          {
            status: 429,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      if (response.status === 402) {
        return new Response(
          JSON.stringify({
            error: "AI usage limit reached. Please try again later.",
          }),
          {
            status: 402,
            headers: { ...corsHeaders, "Content-Type": "application/json" },
          }
        );
      }
      const t = await response.text();
      console.error("AI gateway error:", response.status, t);
      return new Response(
        JSON.stringify({ error: "AI service unavailable" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // We need to process the stream to handle tool calls
    const reader = response.body!.getReader();
    const decoder = new TextDecoder();
    let buffer = "";
    let toolCallAccumulator: Record<number, { name: string; arguments: string }> = {};
    let hasToolCall = false;
    let contentChunks: string[] = [];

    const { readable, writable } = new TransformStream();
    const writer = writable.getWriter();
    const encoder = new TextEncoder();

    // Process stream in background
    (async () => {
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          buffer += decoder.decode(value, { stream: true });

          let newlineIndex: number;
          while ((newlineIndex = buffer.indexOf("\n")) !== -1) {
            let line = buffer.slice(0, newlineIndex);
            buffer = buffer.slice(newlineIndex + 1);
            if (line.endsWith("\r")) line = line.slice(0, -1);
            if (!line.startsWith("data: ")) continue;

            const jsonStr = line.slice(6).trim();
            if (jsonStr === "[DONE]") {
              // If we accumulated tool calls, execute them
              if (hasToolCall) {
                for (const tc of Object.values(toolCallAccumulator)) {
                  try {
                    const args = JSON.parse(tc.arguments);
                    if (tc.name === "save_lead") {
                      const SHEET_URL = Deno.env.get("GOOGLE_SHEET_WEBHOOK_URL");
                      if (SHEET_URL) {
                        await fetch(
                          `${Deno.env.get("SUPABASE_URL")}/functions/v1/save-to-sheet`,
                          {
                            method: "POST",
                            headers: {
                              "Content-Type": "application/json",
                              Authorization: `Bearer ${Deno.env.get("SUPABASE_ANON_KEY")}`,
                            },
                            body: JSON.stringify(args),
                          }
                        );
                      }
                      // Send a message to the user confirming the save
                      const confirmMsg = `data: ${JSON.stringify({
                        choices: [
                          {
                            delta: {
                              content:
                                "\n\n✅ I've saved your information. Atul will get back to you soon!",
                            },
                          },
                        ],
                      })}\n\n`;
                      await writer.write(encoder.encode(confirmMsg));
                    }
                  } catch (e) {
                    console.error("Tool call error:", e);
                  }
                }
              }
              await writer.write(encoder.encode("data: [DONE]\n\n"));
              break;
            }

            try {
              const parsed = JSON.parse(jsonStr);
              const delta = parsed.choices?.[0]?.delta;

              // Check for tool calls
              if (delta?.tool_calls) {
                hasToolCall = true;
                for (const tc of delta.tool_calls) {
                  const idx = tc.index ?? 0;
                  if (!toolCallAccumulator[idx]) {
                    toolCallAccumulator[idx] = { name: "", arguments: "" };
                  }
                  if (tc.function?.name) {
                    toolCallAccumulator[idx].name = tc.function.name;
                  }
                  if (tc.function?.arguments) {
                    toolCallAccumulator[idx].arguments += tc.function.arguments;
                  }
                }
                continue;
              }

              // Forward content chunks
              if (delta?.content) {
                await writer.write(encoder.encode(line + "\n\n"));
              }
            } catch {
              // skip malformed
            }
          }
        }
      } catch (e) {
        console.error("Stream processing error:", e);
      } finally {
        await writer.close();
      }
    })();

    return new Response(readable, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (e) {
    console.error("chat error:", e);
    return new Response(
      JSON.stringify({
        error: e instanceof Error ? e.message : "Unknown error",
      }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
