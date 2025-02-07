import Link from "next/link"
import ServicesCards from "./ServicesCards"
import Advantages2 from "../../app/Advantages/page2"

export default function Page() {
    return (
        <div className="min-h-screen bg-[#211138] -mt-20 md:-mt-4 text-white px-6">
            {/* Hero Section */}
            <div className="max-w-6xl mx-auto space-y-12 scale-95">
                <div className="space-y-8 text-center pt-12">

                    <button className="px-4 py-2 bg-purple-900/50 text-[#d782ff]  text-sm rounded-full border border-2 animate-border-spin">
                        Services
                    </button>

                    <h1 className="text-5xl  md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
                        Extensive Catalog of
                        <br />
                        Tailored Solutions
                    </h1>

                    <p className="text-lg md:text-xl text-purple-300/80 max-w-3xl mx-auto">
                    Custom AI ML Solutions for the FinTech Industry
                    </p>
                    
                    <Link href="#contact">
                    <button className="px-8 py-3 mt-8 bg-purple-900/50 text-[#d782ff]  text-md rounded-xl border border-2 animate-border-spin ">
                       
                        Contact Us
                       
                    </button>
                    </Link>

                </div>

                <ServicesCards />

                <Advantages2 />

            </div>
        </div>
    )
}

