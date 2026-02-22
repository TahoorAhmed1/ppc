import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const { email, number } = await req.json();

  if (!email || !number) {
    return NextResponse.json({ success: false, message: "Email and number required" }, { status: 400 });
  }

  try {
    const sub = await prisma.subscription.create({ data: { email, number } });
    return NextResponse.json({ success: true, message: "Subscription saved", data: sub });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ success: false, message: "Server error" }, { status: 500 });
  }
}