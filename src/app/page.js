import Image from "next/image";
import HeroCenter from "@/components/HeroCenter";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-background text-foreground">
      <div className="grid-bg absolute inset-0 -z-10" aria-hidden></div>
      <div className="pt-20 pb-24">
        <HeroCenter />
      </div>
    </main>
  );
}
