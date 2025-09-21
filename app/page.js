"use client";

import { AnimatedGridMainBackground } from "../components/animated-ui/AnimatedGridMainBackground";
import { MobileColumn } from "../components/MobileColumn";
import { VentoGrid } from "../components/VentoGrid";

export default function Home() {
  return (
    <AnimatedGridMainBackground>
      <VentoGrid />
      <MobileColumn />
      <div className="text-xs pb-4">
        <p>
          Made by <span className="italic text-teal-200">Saad Yousuf</span>
        </p>
      </div>
    </AnimatedGridMainBackground>
  );
}
