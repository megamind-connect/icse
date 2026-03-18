import { NextRequest, NextResponse } from "next/server";

const WEBHOOK_URL =process.env.NEXT_PUBLIC_ACCELR!;

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const response = await fetch(WEBHOOK_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    const data = await response.text();

    return NextResponse.json({ success: true, data }, { status: response.status });
  } catch (error) {
    console.error("Webhook proxy error:", error);
    return NextResponse.json({ success: false, error: "Failed to submit" }, { status: 500 });
  }
}
