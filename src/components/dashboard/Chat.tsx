"use client";
import { usePrivy } from "@privy-io/react-auth";
import React, { useEffect, useRef, useState } from "react";

type Message = {
  id: string;
  text: string;
};

const Chat = () => {
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
        text: input,
      };

      socketRef.current.send(JSON.stringify(newMessage));
      setInput("");
    } else {
      console.error("WebSocket is not connected.");
    }
  };

  return (
    <div className="p-4">
      <div className="border p-4 h-80 overflow-y-auto">
        {messages.map((msg , index) => (
          <div key={index} className="mb-2">
            <strong>{msg.id}</strong> {msg.text}
          </div>
        ))}
      </div>

      <div className="mt-4 flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="border p-2 flex-1"
        />
        <button
          onClick={sendMessage}
          className="bg-blue-500 text-white px-4 py-2"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat;
