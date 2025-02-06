import Image from "next/image";
import type React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
}

function FeatureCard({ title, description, imageSrc }: FeatureCardProps) {
  return (
    <div className="bg-[#523076] bg-opacity-25 rounded-[32px] p-8 flex flex-col items-center text-center    ">
      <div className="w-16 h-16 mb-6 bg-[#381b4f] rounded-2xl flex items-center justify-center animate-border-spin border">
        <Image src={imageSrc} alt={title} width={40} height={40} className="rounded-xl" />
      </div>
      <h2 className="text-[#da83ff] text-2xl lg:text-3xl font-medium mb-4 leading-tight max-w-[12rem]">{title}</h2>
      <p className="text-[#ae68cc] leading-relaxed">{description}</p>
    </div>
  );
}

export default function ServicesCards() {
  return (
    <div className="min-h-screen mx-auto mx-4 scale-90 lg:p-12">
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto" 
      
      >
       
        <FeatureCard
          imageSrc="/Images/FourSquares.svg"
          title="Predictive Analytics"
          description="Attain valuable foresight and make data-driven decisions with unwavering confidence."
        />
        <FeatureCard
          imageSrc="/Images/Automation.svg"
          title="Intelligent Automation"
          description="Transform your operations to streamline repetitive tasks and minimize manual effort."
        />
        <FeatureCard
          imageSrc="/Images/Clover.svg"
          title="Personalization Engines"
          description="Analyze user behavior, preferences, and demographics to tailor recommendations."
        />
        <FeatureCard
          imageSrc="/Images/FourHearts.svg"
          title="Management Solutions"
          description="Mitigate risks and make informed decisions with our comprehensive risk management solutions."
        />
        <FeatureCard
          imageSrc="/Images/FourCircles.svg"
          title="Chatbot Development"
          description="Enhance customer engagement and deliver instant responses with AI-powered chatbots."
        />
        <FeatureCard
          imageSrc="/Images/HalfMoon.svg"
          title="Supply Chain Optimization"
          description="Optimize your supply chain operations for maximum efficiency and cost savings."
        />
      </div>

    </div>
  );
}
