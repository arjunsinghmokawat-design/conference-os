import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="rounded-3xl bg-primary p-12 text-center text-primary-foreground shadow-xl">
          <h2 className="text-4xl font-bold md:text-5xl">
            Ready to Simplify Your Conference?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg opacity-90">
            Join universities, research organizations, and conference
            committees using ConferenceOS to manage submissions, reviews,
            registrations, and certificates from one platform.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-white px-8 py-4 font-semibold text-primary transition hover:scale-105">
              Get Started
            </button>

            <button className="flex items-center gap-2 rounded-xl border border-white px-8 py-4 font-semibold transition hover:bg-white hover:text-primary">
              Book Demo
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}