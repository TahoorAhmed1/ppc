import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { fullName, email, phone, description } = await req.json();

  if (!fullName || !email || !description) {
    return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 });
  }

  try {
    const quote = await prisma.quoteRequest.create({ data: { fullName, email, phone, description } });
    return NextResponse.json({ success: true, message: "Quote request saved", data: quote });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}