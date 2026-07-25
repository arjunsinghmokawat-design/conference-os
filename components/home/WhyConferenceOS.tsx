import {
  BrainCircuit,
  Clock3,
  ShieldCheck,
  Wallet,
  BarChart3,
  Globe,
} from "lucide-react";

const benefits = [
  {
    icon: BrainCircuit,
    title: "AI-Powered Automation",
    description:
      "Reduce manual work with intelligent reviewer suggestions, email generation, and workflow automation.",
  },
  {
    icon: Clock3,
    title: "Save Time",
    description:
      "Manage submissions, reviews, registrations, and certificates from one dashboard.",
  },
  {
    icon: ShieldCheck,
    title: "Secure & Reliable",
    description:
      "Role-based access, secure authentication, and reliable data management.",
  },
  {
    icon: Wallet,
    title: "Integrated Payments",
    description:
      "Collect registration fees and track payments without external tools.",
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description:
      "Track submissions, acceptance rates, registrations, and conference insights in one place.",
  },
  {
    icon: Globe,
    title: "Accessible Anywhere",
    description:
      "Fully responsive platform that works seamlessly across desktop, tablet, and mobile.",
  },
];

export default function WhyConferenceOS() {
  return (
    <section
      id="why"
      className="relative overflow-hidden py-24 bg-gradient-to-b from-background via-muted/20 to-background"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Why ConferenceOS?
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Everything Your Conference Needs.
            <span className="text-primary"> One Platform.</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            ConferenceOS combines paper submission, peer review, registrations,
            payments, certificates, analytics, and AI-powered automation into a
            single modern platform.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="group rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-primary/40 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-all duration-300 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-muted-foreground">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}