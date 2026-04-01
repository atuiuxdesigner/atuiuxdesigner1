import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const ALLOWED_ORIGINS = [
  "https://atuiuxdesigner.lovable.app",
  "https://id-preview--19c869cf-0dec-458e-9ee8-cdfadc90f436.lovable.app",
];

function getCorsHeaders(origin: string | null) {
  const allowedOrigin =
    origin && ALLOWED_ORIGINS.some((o) => origin.startsWith(o))
      ? origin
      : ALLOWED_ORIGINS[0];
  return {
    "Access-Control-Allow-Origin": allowedOrigin,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
  };
}

serve(async (req) => {
  const origin = req.headers.get("origin");
  const corsHdrs = getCorsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHdrs });
  }

  try {
    const GOOGLE_SHEET_WEBHOOK_URL = Deno.env.get("GOOGLE_SHEET_WEBHOOK_URL");
    if (!GOOGLE_SHEET_WEBHOOK_URL) {
      console.error("GOOGLE_SHEET_WEBHOOK_URL not configured");
      return new Response(
        JSON.stringify({ error: "Service configuration error" }),
        {
          status: 500,
          headers: { ...corsHdrs, "Content-Type": "application/json" },
        }
      );
    }

    const body = await req.json();

    if (!body.type || !body.message_summary) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { ...corsHdrs, "Content-Type": "application/json" },
        }
      );
    }

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
      console.error("Google Sheet save failed:", sheetResponse.status);
      return new Response(
        JSON.stringify({ error: "Failed to save data. Please try again." }),
        {
          status: 502,
          headers: { ...corsHdrs, "Content-Type": "application/json" },
        }
      );
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHdrs, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("Save-to-sheet function error");
    return new Response(
      JSON.stringify({ error: "An error occurred. Please try again." }),
      {
        status: 500,
        headers: { ...corsHdrs, "Content-Type": "application/json" },
      }
    );
  }
});
