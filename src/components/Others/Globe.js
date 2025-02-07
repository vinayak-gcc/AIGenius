"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";

export default function Globe() {
  const canvasRef = useRef(null);
  const phiRef = useRef(1);

  useEffect(() => {
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 300, 
      height: 700, 
      phi: phiRef.current,
      theta: 0.41,
      dark: 1,
      diffuse: 1.63,
      mapSamples: 15000,
      mapBrightness: 6,
      baseColor: [0.447, 0.282, 0.553],
      markerColor: [0.447, 0.282, 0.553],
      glowColor: [0.447, 0.282, 0.553],
      markers: [
        { location: [37.7595, -122.4367], size: 0.03 },
        { location: [40.7128, -74.006], size: 0.1 },
      ],
      onRender: (state) => {
        phiRef.current += 0.005;
        state.phi = phiRef.current;
      },
    });

    return () => globe.destroy();
  }, []);

  return (
    <div className="flex ">
      <canvas ref={canvasRef} className="w-[20rem] ml-0 md:ml-4  md:scale-110  sm:h-[16rem] md:h-[18rem] mt-10 sm:mt-0 " />
    </div>
  );
}
