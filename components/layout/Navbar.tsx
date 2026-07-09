import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-800/60 bg-slate-950/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
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
        </div>

        <nav className="hidden gap-8 text-sm text-slate-300 md:flex">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Docs</a>
          <a href="#">Contact</a>
        </nav>

        <div className="flex gap-3">
          <Button variant="ghost">
            Login
          </Button>

          <Button>
            Get Started
          </Button>
        </div>
      </div>
    </header>
  );
}