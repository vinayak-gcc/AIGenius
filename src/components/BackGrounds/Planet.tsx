"use client"

import Image from "next/image";


export default function Planet() {


  return (

    <div className="max-h-[32rem] relative w-full h-screen bg-[#281547] flex justify-center items-center overflow-hidden">

      <Image
        src="/Images/planetArc.svg"
        alt="Contact Logo"
        width={40}
        height={40}
        className="opacity-80"
      />


     

        {/* Background Horizon */}
        <div className="absolute bottom-0 w-full h-1/3 bg-[#24133e]  "></div>


      {/* Stars */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute bg-white rounded-full opacity-50"
            style={{
              width: `${Math.random() * 2}px`,
              height: `${Math.random() * 2}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>


    </div>
  );
}
