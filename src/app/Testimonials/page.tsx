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
        alt="EmilyLogo"
        width={120}
        height={50}
        />
      ),
      text: "Implementing AI solutions from Algenius has revolutionized our business operations. With their predictive analytics tools, we've gained invaluable insights into market trends, allowing us to make strategic decisions with confidence. Our efficiency has skyrocketed, and we're thrilled with the results!",
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
      text: "Thanks to the AI personalization engine provided by Algenius, we've seen a remarkable increase in customer engagement and satisfaction. The tailored experiences have strengthened our brand loyalty and driven significant revenue growth. Highly recommended!",
      author: {
        image: "/Images/Emily.jpg",
        name: "Emily Rodriguez",
        role: "Operations Manager",
      },
    },
    {
      logo: (
        <Image 
        src="/Images/DavidLogo.svg"
        alt="EmilyLogo"
        width={120}
        height={50}
        />
      ),
      text: "The AI chatbot developed by Algenius has transformed our customer support experience. It's efficient, responsive, and provides instant solutions to our clients' queries round the clock. Our customers love the personalized assistance, and it has significantly improved our service ratings.",
      author: {
        image: "/Images/David.jpg",
        name: "David Thompson",
        role: "Sales Executive",
      },
    },
    {
      logo: (
        <Image 
        src="/Images/MichaelLogo.svg"
        alt="EmilyLogo"
        width={120}
        height={50}
        />
      ),
      text: "Integrating AI solutions from Algenius has been a game-changer for our supply chain management. Their optimization tools have helped us streamline processes, reduce costs, and improve overall efficiency. We're now better equipped to meet customer demands and stay ahead in our industry.",
      author: {
        image: "/Images/Michael.jpg",
        name: "Michael Chen",
        role: "Supply Chain Director",
      },
    },
  ]

  return (
    <div className="min-h-screen  scale-90 py-16 px-4 mx-12 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#d782ff] text-md font-medium -mt-4 md:mt-10 text-center mb-12">
          Testimonials
          </h2>
        <div className="grid md:grid-cols-2 border">
         
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-[#1E1433] border-[0.2px] border-white p-8 flex flex-col gap-6">
              {testimonial.logo}
              <p className="text-[#9c5ab2] leading-relaxed max-w-[29rem] ">
                {testimonial.text}
                </p>
              <div className="flex items-center gap-4">
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
            </div>
          ))}

        </div>
      </div>
     
    </div>
  )
}

