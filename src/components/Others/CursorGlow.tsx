"use client";

import { useState, useEffect } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      
      {/* Glow effect exactly on the cursor */}
      <div
        className="absolute w-20 h-20 bg-purple-500 blur-2xl opacity-40 rounded-full transition-transform duration-75"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)", // Centers the glow exactly on the cursor
        }}
      />
    </div>
  );
}
