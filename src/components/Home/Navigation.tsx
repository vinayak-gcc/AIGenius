"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > window.innerHeight / 2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 text-xl">
      <div className="flex items-center justify-center text-center">
        {isScrolled ? (
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="bg-[#22112f] p-3 rounded-full text-purple-300 transition-all duration-300 ease-in"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        ) : null}
        {(menuOpen || !isScrolled) && (
          <ul className="flex items-center justify-center gap-8 text-base mx-6 text-purple-300 py-4 px-6 rounded-full font-light bg-[#22112f]">
            {["About", "Strengths", "Services", "Testimonials", "Contact"].map((item) => (
              <li key={item}>
                <Link href={item} className="hover:text-purple-400 transition-colors">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
