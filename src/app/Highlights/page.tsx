import Image from "next/image";

export default function page() {
  return (
    <div className="relative  max-w-[54rem] bg-[#1e0f2a] text-white  rounded-2xl shadow-lg max-w-5xl mx-auto border border-[#1a0b2e] ">

      {/* Top Icon */}
      <div className="flex justify-center my-10">
        <div className="border p-3 border-purple-400 flex my-10 items-center justify-center rounded-lg animate-border-spin">
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
      <h3 className="text-center text-[#c069ff] mt-10 text-lg">Highlights</h3>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 scale-75 md:scale-90 lg:scale-100 mt-16 text-center border font-sans">

        {/* First Stat */}
        <div className="border border-white">
          <p className="text-[9.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            12X
          </p>
          <p className="text-purple-300 mb-8  text-4xl -mt-8">Faster Growth</p>
        </div>

        {/* Second Stat */}
        <div className="border border-white">
          <p className="text-[9.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            62%
          </p>
          <p className="text-purple-300 mb-8  text-4xl -mt-8">Increased efficiency</p>
        </div>

        {/* Third Stat */}
        <div className="border border-white">
          <p className="text-[9.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            78%
          </p>
          <p className="text-purple-300 mb-8  text-4xl -mt-8">Increased Revenue</p>
        </div>

        {/* Fourth Stat */}
        <div className="border border-white">
          <p className="text-[9.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
            5.7M
          </p>
          <p className="text-purple-300 mb-8  text-4xl -mt-8">Active AI assistants</p>
        </div>



      </div>

      <div className="border border-white text-center font-sans scale-75 -mt-40 md:-mt-10  lg:mt-0 md:scale-90 lg:scale-100 ">
        <p className="text-[6.5rem] md:text-[9.5rem] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-purple-600">
          15 000 +
        </p>
        <p className="text-purple-300 mb-8  text-4xl -mt-8">Satisfied Clients</p>
      </div>

    </div>
  );
}
