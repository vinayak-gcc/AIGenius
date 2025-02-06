"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLUListElement>(null);

  // Detect scroll position
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > window.innerHeight / 2);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu if clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="fixed bottom-12 left-1/2 -translate-x-1/2 z-50 text-xl">
      <div className="relative flex items-center justify-center text-center">
        {isScrolled && (
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="bg-[#22112f] p-3 rounded-full text-purple-300 transition-all duration-300 ease-in"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        )}

        {(menuOpen || !isScrolled) && (
          <ul
            ref={menuRef}
            className="flex flex-col shadow-none  rounded-none sm:flex-row items-center justify-center gap-8 text-base mx-6 text-purple-300 py-4 px-6 rounded-full font-light
              bg-[#22112f]/60 backdrop-blur-md border border-white/20 shadow-lg
              absolute bottom-full mb-2 sm:static"
          >
            {[
              { name: "About", href: "#about" },
              { name: "Strengths", href: "#strengths" },
              { name: "Services", href: "#services" },
              { name: "Testimonials", href: "#testimonials" },
              { name: "Contact", href: "#contact" },
            ].map(({ name, href }) => (
              <li key={name}>
                <Link href={href} className="hover:text-purple-400 transition-colors">
                  {name}
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
