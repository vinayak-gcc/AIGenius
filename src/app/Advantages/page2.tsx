import React from "react";
import Image from "next/image";

const benefits = [
  { title: "Risk Assessment", description: "Analyze and mitigate financial risks efficiently.", image: "/Images/Efficiency.svg" },
  { title: "Portfolio Managemen", description: "Optimize investment strategies using AI models.", image: "/Images/Accuracy.svg" },
  { title: "Customer Service", description: "AI-powered chatbots for instant financial advisory.", image: "/Images/Scalability.svg" },
  { title: "Fraud Prevention", description: "Real-time fraud detection and transaction monitoring. ", image: "/Images/Security.svg" },
];



const AlgeniusSolutions = () => {

  return (

    <section className="flex flex-col items-center justify-center text-white py-4 px-8 -mt-2 md:mt-0 md:px-16 lg:px-24 relative">

      <div className="absolute inset-0 bg-grid-gray-900 opacity-20 pointer-events-none"></div>
      <div className="text-center mb-12 relative">

      <button className="px-4 py-2 bg-purple-900/50 text-[#d782ff] text-sm rounded-full border border-2 animate-border-spin">
      AI ML Agent for Finance
        </button>
       
        <h1 className="text-5xl mb-6 sm:mb-10 mt-14 scale-90 md:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
        Your Virtual <br/> Financial Expert

        <p className="text-5xl mb-6 sm:mb-10 mt-14 scale-90 text-xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
        Our AI agent acts as an intelligent assistant for financial institutions, automating:
        </p>

        </h1>
      </div>

      {/*  */}
      <div className="grid grid-cols-1 md:mx-16 md:grid-cols-2 gap-2 relative ">
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
      


    </section>

  );
};

export default AlgeniusSolutions;
