// app/api/store-contact-us-form/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const formData = await req.formData();

    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      website_url: formData.get("website_url") as string,
      message: formData.get("message") as string,
      package_price: Number(formData.get("package_price")),
      ip_address: formData.get("ip_address") as string,
    };

    // ✅ Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    // ✅ Save to database using Prisma
    const contact = await prisma.contactForm.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        website_url: data.website_url,
        message: data.message,
        package_price: data.package_price,
        ip_address: data.ip_address,
      },
    });

    return NextResponse.json({
      success: true,
      message: "Form submitted successfully",
      data: contact,
    });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { success: false, message: "Something went wrong" },
      { status: 500 }
    );
  }
}   