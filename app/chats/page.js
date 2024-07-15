"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function ChatPage() {
  const [chats, setChats] = useState([]);
  const fetchChats = async () => {
    try {
      const { data } = await axios.get("/api/chat");
      setChats(data);
    } catch (err) {
      console.log("Failed to fetch chats: ", err);
    }
  };

  useEffect(() => {
    fetchChats();
  }, []);

  return (
    <main className="border-2 border-green-900 rounded-lg p-4 m-2 text-black bg-slate-200">
      {chats.map((chat) => (
        <div key={chat._id}>{chat.chatName}</div>
      ))}
    </main>
  );
}
