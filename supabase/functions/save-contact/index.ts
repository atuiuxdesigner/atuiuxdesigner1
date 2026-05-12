import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const SPREADSHEET_ID = "1yaofOHZWkmfCAABeOSt5ktQmwTJX_H0yPzf3_H1bImM";
const SHEET_NAME = "Sheet1";
const GATEWAY_URL = "https://connector-gateway.lovable.dev/google_sheets/v4";

const ALLOWED_ORIGINS = [
  "https://atuiuxdesigner.lovable.app",
  "https://id-preview--19c869cf-0dec-458e-9ee8-cdfadc90f436.lovable.app",
  "https://19c869cf-0dec-458e-9ee8-cdfadc90f436.lovableproject.com",
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

const ipLimiter = new Map<string, { count: number; resetAt: number }>();
function checkRateLimit(req: Request, corsHdrs: Record<string, string>): Response | null {
  const ip = req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  const now = Date.now();
  const limit = ipLimiter.get(ip);
  if (limit && limit.resetAt > now) {
    if (limit.count >= 5) {
      return new Response(JSON.stringify({ error: "Too many requests. Please try again later." }), {
        status: 429,
        headers: { ...corsHdrs, "Content-Type": "application/json" },
      });
    }
    limit.count++;
  } else {
    ipLimiter.set(ip, { count: 1, resetAt: now + 60_000 });
  }
  return null;
}

const HEADERS = ["Date", "Name", "Email", "Subject", "Message"];

async function ensureHeaders(authHeaders: Record<string, string>) {
  const res = await fetch(
    `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A1:E1`,
    { headers: authHeaders }
  );
  if (!res.ok) {
    const txt = await res.text();
    throw new Error(`Read header failed [${res.status}]: ${txt}`);
  }
  const data = await res.json();
  const firstRow: string[] = data?.values?.[0] ?? [];
  const hasHeaders = HEADERS.every((h, i) => firstRow[i] === h);
  if (hasHeaders) return;

  const putRes = await fetch(
    `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A1:E1?valueInputOption=RAW`,
    {
      method: "PUT",
      headers: { ...authHeaders, "Content-Type": "application/json" },
      body: JSON.stringify({ values: [HEADERS] }),
    }
  );
  if (!putRes.ok) {
    const txt = await putRes.text();
    throw new Error(`Write header failed [${putRes.status}]: ${txt}`);
  }
}

function sanitize(s: unknown, max: number) {
  return String(s ?? "").slice(0, max).replace(/^[=+\-@]/, "'$&");
}

serve(async (req) => {
  const origin = req.headers.get("origin");
  const corsHdrs = getCorsHeaders(origin);
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHdrs });

  const rl = checkRateLimit(req, corsHdrs);
  if (rl) return rl;

  try {
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    const GOOGLE_SHEETS_API_KEY = Deno.env.get("GOOGLE_SHEETS_API_KEY");
    if (!LOVABLE_API_KEY || !GOOGLE_SHEETS_API_KEY) {
      console.error("Missing connector secrets");
      return new Response(JSON.stringify({ error: "Service configuration error" }), {
        status: 500,
        headers: { ...corsHdrs, "Content-Type": "application/json" },
      });
    }

    const body = await req.json();
    const name = sanitize(body.name, 200).trim();
    const email = sanitize(body.email, 255).trim();
    const subject = sanitize(body.subject, 300).trim();
    const message = sanitize(body.message, 5000).trim();

    if (!name || !email || !subject || !message) {
      return new Response(JSON.stringify({ error: "All fields are required." }), {
        status: 400,
        headers: { ...corsHdrs, "Content-Type": "application/json" },
      });
    }
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    if (!emailOk) {
      return new Response(JSON.stringify({ error: "Invalid email." }), {
        status: 400,
        headers: { ...corsHdrs, "Content-Type": "application/json" },
      });
    }

    const authHeaders = {
      Authorization: `Bearer ${LOVABLE_API_KEY}`,
      "X-Connection-Api-Key": GOOGLE_SHEETS_API_KEY,
    };

    await ensureHeaders(authHeaders);

    const date = new Date().toISOString();
    const appendRes = await fetch(
      `${GATEWAY_URL}/spreadsheets/${SPREADSHEET_ID}/values/${SHEET_NAME}!A:E:append?valueInputOption=RAW&insertDataOption=INSERT_ROWS`,
      {
        method: "POST",
        headers: { ...authHeaders, "Content-Type": "application/json" },
        body: JSON.stringify({ values: [[date, name, email, subject, message]] }),
      }
    );
    if (!appendRes.ok) {
      const txt = await appendRes.text();
      console.error(`Append failed [${appendRes.status}]: ${txt}`);
      return new Response(JSON.stringify({ error: "Failed to save. Please try again." }), {
        status: 502,
        headers: { ...corsHdrs, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHdrs, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("save-contact error:", (e as Error).message);
    return new Response(JSON.stringify({ error: "An error occurred. Please try again." }), {
      status: 500,
      headers: { ...corsHdrs, "Content-Type": "application/json" },
    });
  }
});
