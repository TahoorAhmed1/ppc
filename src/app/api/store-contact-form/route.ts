// app/api/store-package-inquiry/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      name,
      email,
      phone,
      message,
      packageId,
      package_name,
      package_price,
    } = body;

    // ✅ Basic validation
    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Save to database using Prisma
    const inquiry = await prisma.packageInquiry.create({
      data: {
        name,
        email,
        phone,
        message,
        packageId,
        package_name,
        package_price: Number(package_price),
      },
    });

    return NextResponse.json({
      success: true,
      message: "Package inquiry submitted successfully",
      data: inquiry,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}