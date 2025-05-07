// /src/app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, message, company } = body;

  // Honeypot spam check
  if (company) {
    return NextResponse.json({ status: "ok" }); // pretend it worked
  }

  // TODO: Send email or store message
  console.log("Contact form submission:", { name, email, message });

  return NextResponse.json({ status: "success" });
}
