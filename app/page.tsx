import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import DashboardPreview from "@/components/home/DashboardPreview";
import Stats from "@/components/home/Stats";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <main className="bg-slate-950 min-h-screen">
      <Navbar />
      <Hero />

            <DashboardPreview />

      <Stats />
      <Features />
    </main>
  );
}