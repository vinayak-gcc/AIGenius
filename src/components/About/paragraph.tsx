import React from "react";
import Image from "next/image";
const AboutUs = () => {
  return (
    <div  className="bg-[#211138] -mt-[16rem] z-40 ">

      {/* Sparkle */}
          <div className=" relative z-40 -mt-20 max-w-[50rem] mx-auto rounded-lg  ">
            <div className=" pt-20">
               <Image
                 src="/Images/Sparkle.svg"
                 alt="Highlight Logo"
                 width={100}
                 height={100}
                 className="scale-90 ml-6  border p-3 animate-border-spin"
               />
               </div>
             </div>


      <section className="flex relative z-40 flex-col justify-center items-center min-h-screen max-w-[48rem] mx-auto px-8 py-12">
        <div className="max-w-4xl text-white p-10 rounded-2xl shadow-xl border border-purple-500">
          <h2 className="text-4xl font-bold text-[#5c3c70] mb-2">
          <strong className="text-purple-300"> AI-ML</strong>{" "}  Driven, Finance Solutions
          </h2>
          <p className="text-4xl text-[#5c3c70] ">
          Founded by industry experts, <br/> <strong className="text-purple-300">
          AIgenius FinTech</strong>{" "}, is committed to transforming financial services through AI innovation. 
          We develop cutting-edge AI models that predict market trends, automate financial operations, and personalize banking experiences.
          </p>

          <p className="mt-6 text-4xl text-[#5c3c70]">
          At AIgenius FinTech, we leverage <strong className="text-purple-300">AI </strong>and  machine learning to revolutionize
         financial operations. 
          Our AI-driven solutions <strong className="text-purple-300">enhance</strong> decision-making,
          <strong className="text-purple-300">optimize</strong> risk management, 
          and unlock new growth opportunities in banking, trading, and financial services.
          </p>

          <p className="mt-6 text-4xl text-[#5c3c70]">
          Our <strong className="text-purple-300">mission</strong>{" "},
          is to bring intelligence, automation, and efficiency to financial systems,
           reducing human error and maximizing profitability.
          </p>

    

        </div>
      </section>

    </div>
  );
};

export default AboutUs;
