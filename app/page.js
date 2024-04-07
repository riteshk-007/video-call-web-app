"use client";
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [roomId, setRoomId] = useState("");
  return (
    <div className="h-screen flex items-center justify-center flex-col bg-gray-200">
      <h1 className="text-2xl font-bold text-gray-200 my-3 bg-sky-500 px-4 py-2 rounded-xl shadow-2xl">
        Video Calling Web App
      </h1>
      <input
        type="text"
        placeholder="Enter Room ID"
        className="border-2 border-gray-300 p-2 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50"
        onChange={(e) => setRoomId(e.target.value)}
        value={roomId}
      />
      <Link href={`/room/${roomId}`}>
        <button className="bg-sky-500 text-gray-200 px-4 py-2 rounded-lg shadow-lg mt-3">
          Join Room
        </button>
      </Link>
    </div>
  );
}
