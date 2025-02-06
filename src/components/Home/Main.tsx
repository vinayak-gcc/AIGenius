"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

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
    <>
      {/* Main Page Logo */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
        className="absolute mt-14 flex bg-[#371254] justify-center items-center mx-auto w-[42px] h-[42px] rounded-[11px] opacity-100 flex-shrink-0 flex-grow-0 flex-row gap-2 overflow-hidden p-2 relative z-10 box-border border-2 animate-border-spin helvetica"
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
            <span className="text-lg">AI Solutions</span>
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

        <motion.div variants={fadeInUp} className="text-[#9763b6] px-2 text-xl text-center">
          From revolutionizing industries to redefining <br /> possibilities, we&apos;re at the forefront of innovation.
        </motion.div>

        {/* Buttons */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row w-1/2 my-10 justify-center items-center gap-2 mx-2">
          <motion.button variants={fadeInUp} className="bg-purple-400 font-medium px-20 py-3 rounded-md text-black border-2 border-[#b773e1]">
            <Link href="About">About Us</Link>
          </motion.button>

          <motion.button variants={fadeInUp} className="text-[#b773e1] font-semibold bg-[#3a2448] px-16 py-3 rounded-md border-2 border-[#b773e1]">
            <Link href="Services">
            Our Services
            </Link>
          </motion.button>
        </motion.div>
      </motion.div>

      {/* Planet Arc Animation */}
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.8 } }} className="absolute mt-36 md:mt-10 animate-[float_6s_ease-in-out_infinite] border-white z-40">
        <Image src="/Images/PlanetArc.svg" alt="Contact Logo" width={4000} height={400} />
      </motion.div>
    </>
  );
};

export default Main;
