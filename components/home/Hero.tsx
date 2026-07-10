import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-10 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-600/20 blur-3xl"></div>

      <div className="relative mx-auto flex min-h-[80vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-300">
          🚀 AI Powered Conference Platform
        </span>

        <h1 className="mt-8 text-5xl font-extrabold leading-tight md:text-7xl">
          Manage Your
          <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Conference Smarter
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-slate-300 md:text-xl">
          One platform to manage conference websites, paper submissions,
          reviewers, registrations, payments and certificates.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">
            Book Demo
          </Button>
        </div>
      </div>
    </section>
  );
}