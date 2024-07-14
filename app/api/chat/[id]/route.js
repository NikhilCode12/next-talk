import { chats } from "@/app/constant/data";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  const userChats = chats.find((chat) => id === chat._id);
  if (!userChats)
    return NextResponse.json({ msg: `No such user chats exists!` });
  return NextResponse.json({ msg: userChats });
}
