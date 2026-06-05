import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const ALLOWED_PRODUCTS = [
  "Mylar Bags", "Tuck Boxes", "Coffee Packaging", "Kraft Boxes",
  "Rigid Boxes", "Tin Packaging", "Candle Boxes", "Soap Boxes",
  "Gift Boxes", "Bakery Boxes", "Display Boxes", "Pillow Boxes",
  "Christmas Boxes", "Cosmetic Boxes", "Other",
];

const ALLOWED_UNITS = ["inches", "cm", "mm"];

function validate(body: Record<string, unknown>): { valid: boolean; errors: string[] } {
  const errors: string[] = [];

  // product_type
  if (!body.product_type || !ALLOWED_PRODUCTS.includes(body.product_type as string)) {
    errors.push("Invalid product type.");
  }

  // name
  const name = typeof body.name === "string" ? body.name.trim() : "";
  if (!name || name.length > 100) errors.push("Name is required and must be ≤100 characters.");

  // email
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRe.test(email) || email.length > 255) errors.push("A valid email is required (≤255 chars).");

  // phone (optional)
  if (body.phone != null && body.phone !== "") {
    const phone = String(body.phone).trim();
    if (phone.length > 20 || !/^[+\d\s().-]+$/.test(phone)) errors.push("Phone must be ≤20 chars, digits/symbols only.");
  }

  // quantity
  const qty = Number(body.quantity);
  if (!Number.isInteger(qty) || qty < 50 || qty > 1000000) errors.push("Quantity must be an integer between 50 and 1,000,000.");

  // dimensions (optional)
  for (const dim of ["length", "width", "height"] as const) {
    if (body[dim] != null && body[dim] !== "") {
      const v = Number(body[dim]);
      if (isNaN(v) || v <= 0 || v > 10000) errors.push(`${dim} must be a positive number ≤10,000.`);
    }
  }

  // unit
  if (body.dimension_unit && !ALLOWED_UNITS.includes(body.dimension_unit as string)) {
    errors.push("Invalid dimension unit.");
  }

  // colors (optional)
  if (body.colors && String(body.colors).length > 200) errors.push("Colors must be ≤200 characters.");

  // message (optional)
  if (body.message && String(body.message).length > 2000) errors.push("Message must be ≤2,000 characters.");

  return { valid: errors.length === 0, errors };
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    const { valid, errors } = validate(body);

    if (!valid) {
      return new Response(JSON.stringify({ error: errors.join(" ") }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL")!,
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!
    );

    const { error } = await supabase.from("quote_requests").insert({
      product_type: body.product_type,
      length: body.length ? parseFloat(body.length) : null,
      width: body.width ? parseFloat(body.width) : null,
      height: body.height ? parseFloat(body.height) : null,
      dimension_unit: body.dimension_unit || "inches",
      colors: body.colors ? String(body.colors).slice(0, 200) : null,
      quantity: parseInt(body.quantity),
      name: String(body.name).trim().slice(0, 100),
      email: String(body.email).trim().slice(0, 255),
      phone: body.phone ? String(body.phone).trim().slice(0, 20) : null,
      message: body.message ? String(body.message).trim().slice(0, 2000) : null,
    });

    if (error) {
      return new Response(JSON.stringify({ error: "Failed to save quote request." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch {
    return new Response(JSON.stringify({ error: "Invalid request." }), {
      status: 400,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
