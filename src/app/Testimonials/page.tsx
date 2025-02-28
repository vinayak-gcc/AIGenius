/* eslint-disable @next/next/no-img-element */
import type React from "react"
import Image from "next/image"

interface Testimonial {
  logo: React.ReactNode
  text: string
  author: {
    image: string
    name: string
    role: string
  }
}

export default function Testimonials() {
  const testimonials: Testimonial[] = [
    {
      logo: (
        <Image 
        src="/Images/SarahLogo.svg"
        alt="SarahLogo"
        width={120}
        height={50}
        />
      ),
      text: "Implementing AI solutions from Algenius has revolutionized our business operations.",
      author: {
        image: "/Images/Sarah.jpg",
        name: "Sarah Johnson",
        role: "Marketing Director",
      },
    },
    {
      logo: (
        <Image 
        src="/Images/EmilyLogo.svg"
        alt="EmilyLogo"
        width={120}
        height={50}
        />
      ),
      text: "Our AI-powered chatbot now handles over 80% of customer inquiries, reducing response times significantly.",
      author: {
        image: "/Images/Emily.jpg",
        name: "Emily Rodriguez",
        role: "Customer Engagement Head",
      },
    },
    {
      logo: (
        <Image 
        src="/Images/DavidLogo.svg"
        alt="DavidLogo"
        width={120}
        height={50}
        />
      ),
      text: "AIgenius FinTech transformed our risk management strategy, giving us real-time fraud detection that saved millions.",
      author: {
        image: "/Images/David.jpg",
        name: "David Thompson",
        role: "CFO of Investment Firm",
      },
    },
    {
      logo: (
        <Image 
        src="/Images/MichaelLogo.svg"
        alt="MichaelLogo"
        width={120}
        height={50}
        />
      ),
      text: "The AI ML agent provided market insights that improved our portfolio performance by 30%.",
      author: {
        image: "/Images/Michael.jpg",
        name: "Michael Chen",
        role: "Portfolio Manager",
      },
    },
  ]

  return (
    <div className="min-h-screen flex items-center justify-center -mt-8 md:mt-0 bg-[#211138] py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mx-14 scale-95">
        <h2 className="text-[#d782ff] text-md font-medium -mt-4 md:mt-10 text-center mb-12">
          <span className="h-[1px] w-12 bg-purple-400/30 text-purple-300 " />
          <div className="absolute mt-10 flex justify-center items-center mx-auto rounded-[11px] opacity-100 flex-shrink-0 flex-grow-0 flex-row gap-2 overflow-hidden p-2 relative z-10 box-border">
            <span className="h-[2px] w-12 bg-purple-400/30" />
            <span className="text-lg text-[#ae68cc] ">Testimonials</span>
            <span className="h-[2px] w-12 bg-purple-400/30" />
          </div>
          <span className="h-[1px] w-12 bg-purple-400/30 text-purple-300 " />
        </h2>

        <div className="grid md:grid-cols-2 border border-[#2e1243] ">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#1E1433] border border-[#2e1243] p-8 flex flex-col gap-6">
              {testimonial.logo}
              <p className="text-[#9c5ab2] leading-relaxed max-w-[29rem] ">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-4">
                {/* Add a star icon or image here */}
                <span className="text-yellow-400">&#9733;</span>
                <img
                  src={testimonial.author.image || "/placeholder.svg"}
                  alt={testimonial.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <div className="text-[#9c5ab2] font-medium">{testimonial.author.name}</div>
                  <div className="text-[#9c5ab2] text-sm">{testimonial.author.role}</div>
                </div>
              </div>
              {/* Add another star at the end of the testimonial */}
              <div className="flex justify-end mt-4">
                <span className="text-yellow-400">&#9733;</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
