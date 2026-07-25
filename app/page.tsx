import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import TrustedBy from "@/components/home/TrustedBy";
import Stats from "@/components/home/Stats";
import DashboardPreview from "@/components/home/DashboardPreview";
import Features from "@/components/home/Features";
import Workflow from "@/components/home/Workflow";
import WhyConferenceOS from "@/components/home/WhyConferenceOS";
import Pricing from "@/components/home/Pricing";
import Testimonials from "@/components/home/Testimonials";

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

      <Workflow />

      <WhyConferenceOS />

      <Pricing />

      <Testimonials />
    </main>
  );
}