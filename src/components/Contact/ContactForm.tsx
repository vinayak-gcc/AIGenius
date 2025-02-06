"use client"

import { useState } from "react";

const ContactForm = () => {
 
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError("All fields are required.");
      return;
    }
    setError("");
    alert("Message sent!"); // Replace with actual submission logic
  };

  return (

    <>


    <div className="min-h-screen flex w-full  flex-col items-center justify-center bg-[#0D021F] px-4">

      <div className="w-full font-sans">
        <h2 className="text-2xl font-bold text-center text-3xl mt-4 text-[#D387FF] ">
          Let&apos;s Get Started!</h2>
        <p className="text-center text-md my-4 text-gray-400 mb-6">
          We&apos;re eager to connect and assist with your <br/> project or address any inquiries you have.
        </p>

      </div>

      <div className="w-full max-w-[40rem] scale-90 bg-[#1A0B2E] p-8 rounded-2xl shadow-lg">

        {error && <p className="text-red-400 text-sm text-center">
          {error}
        </p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 bg-[#2D1B47] text-white rounded-lg  placeholder:text-[#D387FF] placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 bg-[#2D1B47] text-white rounded-lg  placeholder:text-[#D387FF] placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
          />

          <textarea
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 max-h-24 bg-[#2D1B47] text-white rounded-lg placeholder:text-[#D387FF] placeholder:text-sm  focus:outline-none focus:ring-2 focus:ring-purple-500 h-32"
          />

          <button
            type="submit"
            className="w-full p-3 bg-[#d369ff] hover:bg-purple-600 text-black font-medium text-sm tracking-wide rounded-lg transition"
          >
            Send a Message
          </button>
        </form>
      </div>
    </div>

    </>

  );
};

export default ContactForm;
