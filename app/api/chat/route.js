import { chats } from "@/app/constant/data";
import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json(chats);
}
