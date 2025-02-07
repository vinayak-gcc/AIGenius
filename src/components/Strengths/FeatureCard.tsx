import { Flower } from "lucide-react"
import { Card } from "./Card"
import Image from "next/image"

export default function FeatureCard() {
    return (


        <div
            className="scale-90 bg-[#211138]  "
       
        >

                <div className="flex fex-col -mt-10 md:mt-0  mx-auto max-w-[60rem] sm:p-2 flex items-center justify-center">

                {/* Scalability and Adaptability */}
                <Card className="relative min-h-[20rem] bg-[#1d0c2d] mt-2 w-full max-w-[63rem]
                 border-purple-800/20 rounded-[32px] px-12 py-8  overflow-hidden sm:mx-5"
               
                >
                    {/* Grid Background */}
                    <div
                        className="absolute  "
                        style={{
                            background: `linear-gradient(180deg, var(--token-7fdc4aee-c32d-4703-a7c4-f2a6ba0c9c40, rgba(211, 135, 255, 0)) 0%, var(--token-1985450f-9fb3-495d-a870-78833301e366, rgba(211, 135, 255, 0.05)) 100%)`,
                        }}
                    >

                    </div>

                    {/* Content */}
                    <div className="relative grid md:grid-cols-2 gap-12 items-center">
                        <div className="space-y-6">

                            {/* Icon */}
                            <div className="h-14 w-14 mt-8 md:mt-2 bg-purple-900/50 rounded-2xl flex items-center justify-center">
                                <Flower className="h-8 w-8 text-purple-400" />
                            </div>



                            {/* Text Content */}
                            <div className="space-y-4">
                                <h2 className="text-4xl md:text-5xl font-bold">
                                    <span className="text-purple-300/70">Scalability &</span>
                                    <br />
                                    <span className="text-purple-300">Adaptability</span>
                                </h2>

                                <p className="text-purple-200/70 text-lg leading-relaxed max-w-lg">
                                Our AI solutions grow with your business, ensuring seamless expansion and real-time 
                                adaptability in volatile financial markets.
                                </p>
                            </div>
                        </div>

                        {/* Moving Circle */}
                        <div className="rounded-2xl Grid-bg lg:mt-2 mx-auto w-full bg-[#2d0a49] max-h-[20rem] aspect-square flex items-center justify-center">
                            <div className="relative animate-[spin_20s_linear_infinite]">
                                <Image
                                    src="Images/MovingCircle.svg"
                                    alt="MovingCircle Img"
                                    width={300}
                                    height={100}
                                />
                            </div>
                        </div>

                    </div>
                </Card>

                </div>

                {/* StreamLine And Personalized Cards */}
                <div className=" min-h-screen px-0 mt-10 sm:mt-0  max-w-[60rem] mx-auto sm:p-8 flex flex-col items-center justify-center">

                    <div className="grid md:grid-cols-2 gap-8 max-w-6xl w-full">

                        {/* Streamlined Operations Card */}
                        <div
                            className=" rounded-3xl p-8 flex flex-col space-y-8"
                            style={{
                                background: "linear-gradient(180deg, var(--token-675a22dd-1d94-4c53-b2d8-8feeb6d5836d, rgb(27, 11, 42)) 0%, var(--token-78a614f5-9954-436d-8189-02b092875a4a, rgb(35, 13, 55)) 100%)",
                            }}
                        >

                            <div className="space-y-4 mx-4">
                                <h2 className="text-purple-300 text-xl font-semibold">
                                    Automated <br /> Operations
                                </h2>
                                <p className="text-purple-200/70 text-md max-w-[28rem] ">
                                Reduce manual financial processes with AI-driven automation, from compliance checks to fraud detection.
                                </p>
                            </div>

                            <div className="bg-purple-950/50 Grid-bg rounded-2xl max-h-[18rem] aspect-square flex items-center justify-center">
                                
                                <div className="relative ">
                                    {/* StarinCircle Image */}
                                    <div className="rounded-2xl aspect-square flex items-center justify-center">
                                        <div className="relative animate-[float_4s_ease-in-out_infinite] ">
                                            <Image
                                                src="Images/StarinCircle.svg"
                                                alt="StarinCircle Img"
                                                width={240}
                                                height={110}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        {/* Personalized Experiences Card */}
                        <div
                            className=" rounded-3xl  p-8 flex flex-col space-y-8"
                            style={{
                                background: "linear-gradient(180deg, var(--token-675a22dd-1d94-4c53-b2d8-8feeb6d5836d, rgb(27, 11, 42)) 0%, var(--token-78a614f5-9954-436d-8189-02b092875a4a, rgb(35, 13, 55)) 100%)",
                            }}
                        >
                            <div className="space-y-4 mx-4">
                                <h2 className="text-purple-300 text-xl font-semibold">
                                    Personalized Financial <br /> Insights
                                </h2>
                                <p className="text-purple-200/70 text-md max-w-[28rem] ">
                                Leverage AI-powered recommendation engines to provide tailored investment and banking solutions for clients.
                                </p>
                            </div>

                            {/* Stack Image */}
                            <div className="bg-purple-950/50 rounded-2xl  Grid-bg p-8 max-h-[18rem] aspect-square flex items-center justify-center">
                                <div className="relative animate-[float_4s_ease-in-out_infinite]  ">
                                    <Image
                                        src="Images/Stack.svg"
                                        alt="Stack Img"
                                        width={240}
                                        height={110}
                                    />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

        </div>
    )
}

