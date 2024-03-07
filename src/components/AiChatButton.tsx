"use client";

import { Bot } from "lucide-react";
import { useState } from "react";
import AIChatBox from "./AiChatBox";
import { BsRobot } from "react-icons/bs";

export default function AIChatButton() {
  const [chatBoxOpen, setChatBoxOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setChatBoxOpen(true)}
        title="Open Chat Box"
        className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-white p-2 duration-500 hover:bg-gray-400"
      >
        <BsRobot className="text-6xl text-black" />
        <p className="text-center font-bold text-black">chat</p>
      </button>
      <div>
        <AIChatBox open={chatBoxOpen} onClose={() => setChatBoxOpen(false)} />
      </div>
    </>
  );
}
