"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import CosmicBackground from "../Others/CosmicBg";

const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const staggerContainer = {
  hidden: { opacity: 1 },
  visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
};

const Main = () => {
  return (

    <div className="min-h-screen z-20">
      
      <div className="z-20 ">
      <CosmicBackground />
      </div>

    <div className="z-40">

      {/* Main Page Without Planet Arc Image */}
      <div className="xl:scale-110 ">
      
      {/* Main Page Logo */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="absolute mt-14 xl:mt-28 flex bg-[#371254] justify-center items-center mx-auto w-[42px] h-[42px] rounded-[11px] opacity-100 flex-shrink-0 flex-grow-0 flex-row gap-2 overflow-visible p-2 relative z-10 box-border border-2 animate-border-spin helvetica"
      >
        <div className="absolute inset-0 rounded-inherit scale-50">
          <Image src="/Images/Logo.svg" width={30} height={30} alt="Logo" className="w-full h-full " />
        </div>
      </motion.div>

      {/* AI Solutions Text */}
      <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
        <span className="h-[1px] w-12 bg-purple-400/30 text-purple-300 " />
        <div className="absolute mt-10 flex justify-center items-center mx-auto rounded-[11px] opacity-100 flex-shrink-0 flex-grow-0 flex-row gap-2 overflow-hidden p-2 relative z-10 box-border">
          <div className="text-purple-300 mb-8 flex items-center gap-4">
            <span className="h-[1px] w-12 bg-purple-400/30" />
            <span className="text-lg">
              AI-Powered FinTech Innovation
               </span>
            <span className="h-[1px] w-12 bg-purple-400/30" />
          </div>
        </div>
        <span className="h-[1px] w-12 bg-purple-400/30 text-purple-300 " />
      </motion.div>

      {/* Section */}
      <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="absolute flex flex-col justify-center items-center mx-auto rounded-[11px] opacity-100 flex-shrink-0 flex-grow-0 flex-row overflow-hidden p-1 relative z-10 box-border">
        <motion.div variants={fadeInUp} className="text-[3.3rem] sm:text-[6.7rem] lg:text-[7rem] font-bold text-[#9763b6] bg-gradient-to-r from-purple-400 to-purple-600 text-transparent bg-clip-text mb-6">
          AIgenius
        </motion.div>

        <motion.div variants={fadeInUp} className="text-[#9763b6] px-2 text-xl text-center max-w-[40rem]">
        Transforming Finance with Artificial Intelligence
        </motion.div>

        {/* Buttons */}
        <motion.div variants={fadeInUp} 
        className="flex flex-col sm:flex-row w-1/2 my-10 justify-center items-center gap-2 mx-2">
          
          <Link href="#about">
          <motion.button variants={fadeInUp} 
          className="bg-purple-400   hover:bg-purple-500 font-medium px-16 py-3 lg:px-20 rounded-md text-black border-2 border-[#b773e1]">
           
            About Us
          
          </motion.button>
          </Link>
          
          <Link href="#services">
          <motion.button variants={fadeInUp} 
          className="text-[#b773e1] hover:bg-[#2e1243] font-semibold bg-[#3a2448] px-12  sm:px-14 lg:px-20 py-3 rounded-md border-2 border-[#b773e1]">
           
            Our Services
          
          </motion.button>
          </Link>

        </motion.div>
      </motion.div>
      </div>

      {/* Planet Arc Animation */}
      <div
       className="flex items-center justify-center  animate-[float_6s_ease-in-out_infinite] z-40">
        <Image src="/Images/PlanetArc.svg" 
        alt="Planet Arc" 
        width={2000}
         height={5} 
         className="w-full"
         />
      </div>

      {/* Gradients  Start*/}



    {/* <div
      className="h-60 -mt-10  w-full"
      style={{
        background: `linear-gradient(
          to bottom,
          #08040e 25%,
          #11091c 50%,
          #190d2a 75%,
          #211138 100%
        )`,
      }}
    ></div> */}

      <div
        className="h-80 relative z-30 -mt-6 w-full"
        style={{
          background: `linear-gradient(
            to bottom,
            #0d0316 0%,
            #0f051a 11%,
            #11061e 22%,
            #140821 33%,
            #160925 44%,
            #180b29 56%,
            #1a0c2d 67%,
            #1d0e30 78%,
            #1f0f34 89%,
            #211138 100%
          )`,
        }}
      ></div>


{/* Gradients Close */}

    </div>

    </div>
  );
};

export default Main;
