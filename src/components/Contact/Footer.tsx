"use client";

import Image from "next/image";
const Footer = () => {
    return (
        <footer className="w-full 2xl:-mt-16  bg-[#211138] text-gray-400 py-8 flex flex-col items-center">

            {/* Logo */}
            <div className="p-3 rounded-xl  scale-90 bg-[#1A0B2E] border animate-border-spin ">
                <Image
                    src="/Images/Logo.svg"
                    alt="Contact Logo"
                    width={25}
                    height={25}
                />
            </div>

            {/* Navigation Links */}
            <nav className="flex gap-4  my-8 text-sm text-sm">
                <a href="#about" className="hover:text-[#D387FF] text-purple-500">
                    About
                </a>
                <a href="#strengths" className="hover:text-[#D387FF] text-purple-500 ">
                    Strengths
                </a>
                <a href="#services" className="hover:text-[#D387FF] text-purple-500 ">
                    Services
                </a>
                <a href="#testimonials" className="hover:text-[#D387FF] text-purple-500 ">
                    Testimonials
                </a>
                <a href="#contact" className="hover:text-[#D387FF] text-purple-500 ">
                    Contact
                </a>
            </nav>

            {/* Social Icons */}
            <div className="flex gap-6 mt-4 scale-[0.6]">
                <a href="#" title="X" className="hover:text-[#D387FF]">
                    <Image
                        src="/Images/X.svg"
                        alt="Contact Logo"
                        width={40}
                        height={40}
                    />
                </a>
                <a href="#" title="Facebook" className="hover:text-[#D387FF]">
                    <Image
                        src="/Images/Facebook.svg"
                        alt="Contact Logo"
                        width={40}
                        height={40}
                    />
                </a>
                <a href="#" title="Linkedin" className="hover:text-[#D387FF]">
                    <Image
                        src="/Images/Linkedin.svg"
                        alt="Contact Logo"
                        width={40}
                        height={40}
                    />
                </a>
                <a href="#" title="Medium" className="hover:text-[#D387FF]">
                    <Image
                        src="/Images/Medium.svg"
                        alt="Contact Logo"
                        width={40}
                        height={40}
                    />
                </a>
            </div>

            <div className="text-purple-400 mt-8 mb-4 text-sm ">
            © 2024, All Rights Reserved
            </div>
            
        </footer>
    );
};

export default Footer;
