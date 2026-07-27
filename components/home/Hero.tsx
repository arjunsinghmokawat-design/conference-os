import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
          🚀 AI Powered Conference Platform
        </span>

        <h1 className="mt-8 max-w-5xl text-5xl font-extrabold tracking-tight text-foreground md:text-7xl">
          Manage Your
          <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
            Conference Smarter
          </span>
        </h1>

        <p className="mt-6 max-w-3xl text-lg text-muted-foreground md:text-xl">
          One platform to manage conference websites, paper submissions,
          reviewers, registrations, payments and certificates with AI-powered
          automation.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Link href="/signup">
            <Button size="lg">
              Get Started
            </Button>
          </Link>

          <Link href="/contact">
            <Button variant="outline" size="lg">
              Book Demo
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}