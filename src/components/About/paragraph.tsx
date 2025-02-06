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


      <section className="flex relative z-40 flex-col justify-center items-center min-h-screen max-w-[50rem] mx-auto px-8 py-12">
        <div className="max-w-4xl text-white p-10 rounded-2xl shadow-xl border border-purple-500">
          <h2 className="text-4xl font-bold text-[#5c3c70] mb-2">
            At <strong className="text-purple-300">
              AIgenius</strong>{" "}, we&apos;re on a mission
          </h2>
          <p className="text-4xl text-[#5c3c70] ">
            to push the boundaries of AI{" "}
            <span className="text-purple-400">🚀</span> innovation. Founded by a
            team of passionate experts, our journey began with a vision{" "}
            <strong className="text-purple-300">to transform industries</strong>{" "}
            through the power of artificial intelligence.
          </p>

          <p className="mt-6 text-4xl text-[#5c3c70]">
            With a relentless pursuit of excellence and a commitment to delivering
            tangible results,{" "}
            <strong className="text-purple-300">
              we&apos;ve established ourselves as leaders in the field
            </strong>
            . Our diverse team brings together expertise from across disciplines
            to craft bespoke AI solutions tailored to your needs.
          </p>

          <p className="mt-6 text-4xl text-[#5c3c70]">
            Whether you&apos;re seeking to{" "}
            <strong className="text-purple-300">
              streamline operations, enhance customer experiences, or unlock
              opportunities
            </strong>
            , we&apos;re here to make it happen. Join us as we continue to redefine
            what&apos;s possible in the world of AI.
          </p>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
