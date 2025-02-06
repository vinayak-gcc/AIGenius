import FeatureCard from "./FeatureCard";


export default function Page() {
  return (
    <div className="min-h-screen bg-[#211138] text-white px-6">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="space-y-8 text-center pt-12">
          
        <button className="px-4 py-2  text-[#d782ff]  text-sm rounded-full border border-2 animate-border-spin">Strengths</button>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-500 to-purple-300 bg-clip-text text-transparent">
            Elevate Your Potential
            <br />
            With Our AI Solutions
          </h1>

          <p className="text-lg md:text-xl text-purple-300/80 max-w-3xl mx-auto">
            Discover the transformative power of AI. Our solutions revolutionize your approach, ensuring success in
            dynamic landscape.
          </p>
        </div>

        <FeatureCard />
        
      </div>
    </div>
  )
}

