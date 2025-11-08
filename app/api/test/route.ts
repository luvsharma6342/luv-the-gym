// app/api/test/route.ts

import { connectDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const conn = await connectDB();
    console.log("✅ MongoDB Connected Host:", conn.connection.host);
    return NextResponse.json({ ok: true, msg: "MongoDB Atlas Connected Successfully!" });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error("❌ MongoDB Connection Error:", err.message);
    return NextResponse.json({ ok: false, msg: "MongoDB Connection Failed" });
  }
}
