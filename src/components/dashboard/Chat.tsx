"use client";
import { usePrivy } from "@privy-io/react-auth";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  username?: string;
  userImg?: string;
  text: string;
};

const Chat = ({
  username,
  userImg,
}: {
  username?: string;
  userImg?: string;
}) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const socketRef = useRef<WebSocket | null>(null);
  const reconnectTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { user } = usePrivy();
  const userAddress = `${user?.wallet?.address.slice(
    0,
    4
  )}...${user?.wallet?.address.slice(-4)}`;
  // ✅ Function to connect WebSocket
  const connectWebSocket = () => {
    if (socketRef.current) {
      socketRef.current.close();
    }

    // ✅ Connect to port 3001 directly
    const socket = new WebSocket("ws://localhost:3001");
    socketRef.current = socket;

    // ✅ Handle Incoming Messages
    socket.onmessage = (event) => {
      const message = JSON.parse(event.data);
      setMessages((prev) => [...prev, message]);
    };

    // ✅ Handle Errors
    socket.onerror = (error) => {
      console.error("WebSocket error:", error);
    };

    // ✅ Handle Close and Attempt Reconnect
    socket.onclose = () => {
      console.warn("WebSocket disconnected. Attempting to reconnect...");
      if (reconnectTimeoutRef.current)
        clearTimeout(reconnectTimeoutRef.current);
      reconnectTimeoutRef.current = setTimeout(() => {
        connectWebSocket();
      }, 2000);
    };
  };

  // ✅ Automatically Connect WebSocket
  useEffect(() => {
    connectWebSocket();
    return () => socketRef.current?.close();
  }, []);

  const sendMessage = () => {
    if (input.trim() && socketRef.current?.readyState === WebSocket.OPEN) {
      const newMessage: Message = {
        id: userAddress,
        username: username,
        text: input,
        userImg: userImg,
      };

      socketRef.current.send(JSON.stringify(newMessage));
      setInput("");
    } else {
      console.error("WebSocket is not connected.");
    }
  };

  console.log(userImg);
  return (
    <div className="p-4">
      <div className="border border-[#ffffff]/20 rounded p-4 h-80 overflow-y-auto">
        {messages.map((msg, index) => (
          <div
            key={index}
            className="mb-2 flex gap-3 max-w-md h-fit rounded-lg text-white w-fit p-2 bg-[#282828]"
          >
            <img className="h-10 w-10" src={msg.userImg} alt="User Image" />
            <div>
              <Link href={`/${msg.username}`} className="hover:underline">
                <h5>{msg.username || msg.id}</h5>
              </Link>
              <p className="break-words max-w-[330px] h-fit">{msg.text}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4  flex gap-2 max-w-xl">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border border-[#ffffff]/20 p-2 bg-[#121212]  flex-1"
        />
        <button
          onClick={sendMessage}
          className="text-black rounded bg-white px-4 py-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
