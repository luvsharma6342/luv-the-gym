import { NextResponse } from "next/server";
import { z } from "zod";
import { connectDB } from "@/lib/mongodb";
import { Contact } from "@/models/Contact";


const ContactSchema = z.object({
  firstName: z.string().min(2, "Name is short"),
  lastName: z.string().min(2, "Name is short"),
  email: z.string().email("Invalid email"),
  phone: z.string().optional(),
  message: z.string().min(10, "Message is too short"),
});


export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Validate data
    const parsed = ContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { ok: false, errors: parsed.error.flatten() },
        { status: 400 }
      );
    }

    console.log("Parsed data:", parsed.data);

    //   Connect to Database
    await connectDB();

    //   Save document
    const doc = await Contact.create(parsed.data);

    // Return success
    return NextResponse.json({ ok: true, id: doc._id }, { status: 201 });
    //   eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("POST /api/contact error:", err);
    return NextResponse.json(
      { ok: false, error: "Server error. Please try again later." },
      { status: 500 }
    );
  }
}
