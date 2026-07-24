import {
  Brain,
  FileText,
  Users,
  CreditCard,
  Award,
  BarChart3,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI Powered Management",
    description:
      "Automate conference workflows with intelligent AI assistance.",
  },
  {
    icon: FileText,
    title: "Paper Submission",
    description:
      "Simple and secure submission portal with version management.",
  },
  {
    icon: Users,
    title: "Reviewer Portal",
    description:
      "Assign reviewers, track progress and manage evaluations easily.",
  },
  {
    icon: CreditCard,
    title: "Registration & Payments",
    description:
      "Integrated registration and secure online payment system.",
  },
  {
    icon: Award,
    title: "Certificates",
    description:
      "Generate personalized certificates automatically with QR verification.",
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description:
      "Monitor submissions, registrations and conference performance in real time.",
  },
];

export default function Features() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            Features
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything You Need to Run a Conference
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            ConferenceOS provides all the essential tools required to organize,
            manage and automate academic conferences from submission to
            certificate generation.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div
                key={feature.title}
                className="group rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-500/30 hover:shadow-xl"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-100 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-500/10 dark:text-blue-400">
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-foreground">
                  {feature.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}