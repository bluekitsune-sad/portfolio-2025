import { SectionProvider } from "@/context/SectionContext";
import { AnimatedGridMainBackground } from "@/components/animated-ui/AnimatedGridMainBackground";
import MobileColumn from "@/components/MobileColumn";
import MainGrid from "@/components/MainGrid";

export default function Home() {
  return (
    <SectionProvider>
      <AnimatedGridMainBackground>
        <MainGrid />
        <MobileColumn />
        <div className="text-xs pb-4">
          <p>
            Made by <span className="italic text-teal-200">Saad Yousuf</span>
          </p>
        </div>
      </AnimatedGridMainBackground>
    </SectionProvider>
  );
}
