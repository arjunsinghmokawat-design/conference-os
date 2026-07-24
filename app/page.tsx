import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Stats from "@/components/home/Stats";
import DashboardPreview from "@/components/home/DashboardPreview";
import Features from "@/components/home/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Stats />
      <DashboardPreview />
      <section id="features">
        <Features />
      </section>
    </main>
  );
}