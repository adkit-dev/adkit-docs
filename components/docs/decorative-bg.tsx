"use client"

import { Spotlight } from "@/components/ui/spotlight-new"

export function DecorativeBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top - Left only */}
      <div className="absolute top-0 left-0 right-0 h-[900px]">
        <Spotlight
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(270, 70%, 75%, .08) 0, hsla(270, 70%, 55%, .02) 50%, hsla(270, 70%, 45%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(270, 70%, 75%, .06) 0, hsla(270, 70%, 55%, .02) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(270, 70%, 75%, .04) 0, hsla(270, 70%, 45%, .02) 80%, transparent 100%)"
          translateY={-350}
          width={560}
          height={1380}
          smallWidth={240}
          duration={7}
          xOffset={100}
          rotate={45}
          side="left"
        />
      </div>

      {/* Middle - Right only */}
      <div className="absolute top-[1200px] left-0 right-0 h-[900px]">
        <Spotlight
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(270, 70%, 75%, .06) 0, hsla(270, 70%, 55%, .015) 50%, hsla(270, 70%, 45%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(270, 70%, 75%, .04) 0, hsla(270, 70%, 55%, .015) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(270, 70%, 75%, .03) 0, hsla(270, 70%, 45%, .01) 80%, transparent 100%)"
          translateY={-300}
          width={480}
          height={1200}
          smallWidth={200}
          duration={9}
          xOffset={80}
          rotate={50}
          side="right"
        />
      </div>

      {/* Bottom - Both sides */}
      <div className="absolute top-[2200px] left-0 right-0 h-[900px]">
        <Spotlight
          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(270, 70%, 75%, .05) 0, hsla(270, 70%, 55%, .01) 50%, hsla(270, 70%, 45%, 0) 80%)"
          gradientSecond="radial-gradient(50% 50% at 50% 50%, hsla(270, 70%, 75%, .03) 0, hsla(270, 70%, 55%, .01) 80%, transparent 100%)"
          gradientThird="radial-gradient(50% 50% at 50% 50%, hsla(270, 70%, 75%, .02) 0, hsla(270, 70%, 45%, .008) 80%, transparent 100%)"
          translateY={-350}
          width={520}
          height={1300}
          smallWidth={220}
          duration={11}
          xOffset={90}
          rotate={40}
          side="both"
        />
      </div>
    </div>
  )
}
