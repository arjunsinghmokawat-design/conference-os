import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 font-bold text-white">
            C
          </div>

          <div>
            <h1 className="text-xl font-bold text-white">
              ConferenceOS
            </h1>
            <p className="text-xs text-slate-400">
              Conference Management Platform
            </p>
          </div>
        </Link>

        {/* Navigation */}
        <nav className="hidden gap-8 text-sm md:flex">
          <a
            href="#features"
            className="text-slate-300 hover:text-white transition"
          >
            Features
          </a>

          <a
            href="#pricing"
            className="text-slate-300 hover:text-white transition"
          >
            Pricing
          </a>

          <a
            href="#docs"
            className="text-slate-300 hover:text-white transition"
          >
            Docs
          </a>

          <a
            href="#contact"
            className="text-slate-300 hover:text-white transition"
          >
            Contact
          </a>
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-3">
          <Link href="/login">
            <button className="rounded-lg px-4 py-2 text-white hover:bg-slate-800 transition">
              Login
            </button>
          </Link>

          <Link href="/signup">
            <button className="rounded-lg bg-blue-600 px-5 py-2 font-medium text-white transition hover:bg-blue-700">
              Get Started
            </button>
          </Link>
        </div>
      </div>
    </header>
  );
}