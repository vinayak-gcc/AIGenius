import React from "react";
import Image from "next/image";

const benefits = [
  { title: "Efficiency", description: "With our AI-powered solutions, adaptability becomes a cornerstone of your business strategy, ensuring you're always ready to seize new opportunities.", image: "/Images/Efficiency.svg" },
  { title: "Personalization", description: "Tailor your communication strategy to deliver personalized messages that align with customer preferences and behavior.", image: "/Images/Personalization.svg" },
  { title: "Insights", description: "Access actionable insights and predictive analytics to fuel informed decision-making and strategic planning. Stay ahead of the curve with real-time data analysis.", image: "/Images/Insights.svg" },
  { title: "Scalability", description: "Scale your operations seamlessly, maintaining quality standards while controlling costs, to navigate the ever-changing market landscape with agility and resilience.", image: "/Images/Scalability.svg" },
  { title: "Adaptability", description: "AI services continuously learn and adapt based on feedback and new data, ensuring they stay relevant and effective in dynamic environments.", image: "/Images/Adaptability.svg" },
  { title: "Precision", description: "By analyzing complex data sets quickly and accurately, AI enables businesses to make informed choices that drive competitive advantage.", image: "/Images/Precision.svg" }
];

const AlgeniusSolutions = () => {
  return (

    <section className=" text-white py-16 px-8 -mt-16 md:mt-0 md:px-16 lg:px-24 relative">

      <div className="absolute inset-0 bg-grid-gray-900 opacity-20 pointer-events-none"></div>
      <div className="text-center mb-12 relative">
        <button className="px-4 py-2 bg-purple-900/50 text-[#d782ff] text-sm rounded-full border border-2 animate-border-spin">
          Advantages
        </button>
        <h1 className="text-5xl my-6 scale-90 md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
          Explore the Benefits of
          <br />
          Algenius Solutions
        </h1>
      </div>

      {/*  */}
      <div className="grid grid-cols-1 mx-16 md:grid-cols-2 gap-2 relative ">
        {benefits.map((benefit, index) => (
          <div key={index} className="p-4 rounded-xl gap-y-4 shadow-lg max-w-[40rem] scale-90 space-y-4 hover:shadow-purple-500/50 transition">

            <div className="flex items-center">
              <Image src={benefit.image} alt={benefit.title} width={40} height={40} className="mr-3" />
              <h3 className="text-2xl font-semibold md:ml-1 text-purple-400">{benefit.title}</h3>
            </div>

            <p className="text-[#9c5ab2] mt-2 ml-14">{benefit.description}</p>
          </div>
        ))}
      </div>
      
      {/* Global Reach Card */}
      <div className="relative flex bg-[#1a0f2a] my-14 mx-2 text-white p-10 rounded-2xl shadow-lg max-w-4xl mx-auto border border-purple-900">
        
        <div className="w-1/2">


        {/* Global Reach Tag */}
        <div className="inline-block bg-transparent border animate-border-spin border-purple-400 text-purple-300 text-sm px-4 py-1 rounded-full">
          Global Reach
        </div>

        {/* Title */}
        <h2 className="mt-4 text-3xl font-semibold text-purple-300 max-w-[22rem] ">
          Elevating Innovation <br />
          <span className="font-bold text-purple-400">Beyond Boundaries</span>
        </h2>

        {/* Description */}
        <p className="mt-3 text-gray-400 max-w-[22rem] ">
          Elevate your business to new heights with our cutting-edge artificial intelligence
          solutions deployed worldwide. Unlock your company&apos;s potential with advanced AI technologies.
        </p>

        {/* Contact Button */}
        <button className="mt-5 px-6 py-2 border border-purple-400 rounded-lg text-purple-400 animate-border-spin  hover:bg-purple-500 hover:text-white transition">
          Contact Us
        </button>
        
     
        </div>

        <div className="w-1/2 flex justify-center items-center">
          <Image 
          src="/Images/MovingCircle.svg"
          alt="Moving Planet"
          width={300}
          height={300}
          />
        </div>

      </div>


    </section>

  );
};

export default AlgeniusSolutions;
