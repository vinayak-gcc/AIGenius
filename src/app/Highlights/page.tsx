import Image from "next/image";

export default function page() {
  return (

    <div className="relative  bg-[#211138] border border-[#211138] text-white  rounded-2xl   mx-auto  ">

      {/* Top Icon */}
      <div className="flex justify-center  -mt-6 my-10">
        <div className="border p-3 border-[#2e1243] flex my-10 items-center justify-center rounded-lg animate-border-spin">
          <Image
            src="/Images/Highlight.svg"
            alt="Highlight Logo"
            width={60}
            height={60}
            className="scale-90 "
          />
        </div>
      </div>

      {/* Section Title */}
      <h3 className="text-center text-[#c069ff] mt-10 -mb-24  md:mb-16 text-lg">
        Highlights
        </h3>

      {/* Stats Grid Open */}
      <div className="grid grid-cols-1  max-w-[56rem] mx-auto md:grid-cols-2 scale-75 md:scale-90 lg:scale-100 mt-20 text-center border 
       border-[#2e1243] font-sans -mt-10 md:mt-0">

        {/* First Stat */}
        <div className="border border-[#2e1243] ">
          <p className="text-[9.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            12X
          </p>
          <p className="text-purple-300 mb-8  text-4xl -mt-8">Faster Growth</p>
        </div>

        {/* Second Stat */}
        <div className="border border-[#2e1243]">
          <p className="text-[9.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            62%
          </p>
          <p className="text-purple-300 mb-8  text-4xl -mt-8">Increased efficiency</p>
        </div>

        {/* Third Stat */}
        <div className="border border-[#2e1243]">
          <p className="text-[9.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            78%
          </p>
          <p className="text-purple-300 mb-8  text-4xl -mt-8">Increased Revenue</p>
        </div>

        {/* Fourth Stat */}
        <div className="border border-[#2e1243]">
          <p className="text-[9.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            5.7M
          </p>
          <p className="text-purple-300 mb-8  text-4xl -mt-8">Active AI assistants</p>
        </div>

      </div>

      <div className="border border-t-0 border-[#2e1243] max-w-[56rem] mx-auto text-center font-sans scale-75 -mt-40 md:-mt-10 
       lg:mt-0 md:scale-90 lg:scale-100 ">
        <p className="text-[6.5rem] md:text-[9.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
          15 000 +
        </p>
        <p className="text-purple-300 mb-8  text-4xl -mt-8">Satisfied Clients</p>
      </div>

      {/* Stats Grid Close */}

    </div>

  );
}
