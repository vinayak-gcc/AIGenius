"use client";

import Image from "next/image";

export default function ContactSection() {


    return (
        <div className="relative min-h-screen flex flex-col items-center justify-center text-white px-6">


            {/* Icon */}
            <div className="flex items-center justify-center w-16 h-16 animate-border-spin border bg-opacity-10 backdrop-blur-md">

                <Image
                    src="/Images/Contact.svg"
                    alt="Contact Logo"
                    width={40}
                    height={40}
                />

            </div>

            <p className="text-[#D387FF]  text-sm mt-10 mb-6 ">
                Contact Us
            </p>

            {/* Contact Info */}
            <div className="my-6 w-full max-w-[40rem] ">
                {[
                    { title: "Email", value: "hello@algenius.com" },
                    { title: "Phone", value: "+1 (505) 929-2090" },
                    
                ].map(({ title, value }, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-md bg-white/10 border border-purple-800 shadow-md text-center"
                    >
                        <p className="text-2xl font-semibold text-[#D387FF] my-2">{title}</p>
                        <p className="text-3xl font-semibold text-[#8754a4] ">{value}</p>
                    </div>
                ))}
            </div>


        </div>
    );
}
