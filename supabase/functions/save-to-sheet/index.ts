import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const GOOGLE_SHEET_WEBHOOK_URL = Deno.env.get("GOOGLE_SHEET_WEBHOOK_URL");
    if (!GOOGLE_SHEET_WEBHOOK_URL) {
      console.error("GOOGLE_SHEET_WEBHOOK_URL not configured");
      return new Response(
        JSON.stringify({ error: "Sheet webhook not configured" }),
        {
          status: 500,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    const body = await req.json();

    // Validate required fields
    if (!body.type || !body.message_summary) {
      return new Response(
        JSON.stringify({ error: "Missing required fields: type, message_summary" }),
        {
          status: 400,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    // Sanitize inputs
    const sanitized = {
      timestamp: new Date().toISOString(),
      name: String(body.name || "").slice(0, 200),
      email: String(body.email || "").slice(0, 255),
      phone: String(body.phone || "").slice(0, 50),
      company: String(body.company || "").slice(0, 200),
      type: ["inquiry", "meeting_request", "general"].includes(body.type)
        ? body.type
        : "general",
      preferred_date: String(body.preferred_date || "").slice(0, 50),
      preferred_time: String(body.preferred_time || "").slice(0, 50),
      message_summary: String(body.message_summary || "").slice(0, 1000),
      full_chat: String(body.full_chat || "").slice(0, 5000),
    };

    const sheetResponse = await fetch(GOOGLE_SHEET_WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(sanitized),
    });

    if (!sheetResponse.ok) {
      const errText = await sheetResponse.text();
      console.error("Google Sheet error:", sheetResponse.status, errText);
      return new Response(
        JSON.stringify({ error: "Failed to save to sheet" }),
        {
          status: 502,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("save-to-sheet error:", e);
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
