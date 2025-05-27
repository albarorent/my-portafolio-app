"use client";
import { useEffect, useState } from "react";
import Header from "@/layouts/Header";
import Main from "@/layouts/Main";

export default function Home() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.pageX, y: e.pageY }); // 👈 usa pageX/pageY
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="__variable_20b187 group/spotlight relative">
      <div
        className="pointer-events-none absolute inset-0 z-30 transition duration-300" // 👈 usa absolute
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(29, 78, 216, 0.15), transparent 80%)`,
        }}
      ></div>
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Header />
          <Main />
        </div>
      </div>
    </div>
  );
}
