import {
  UploadCloud,
  UserCheck,
  ClipboardCheck,
  CheckCircle2,
  CreditCard,
  Award,
  ArrowDown,
} from "lucide-react";

const workflow = [
  {
    icon: UploadCloud,
    title: "Paper Submission",
    description: "Authors submit research papers through the portal.",
  },
  {
    icon: UserCheck,
    title: "Reviewer Assignment",
    description: "Program chairs assign expert reviewers automatically.",
  },
  {
    icon: ClipboardCheck,
    title: "Peer Review",
    description: "Reviewers evaluate submissions and provide feedback.",
  },
  {
    icon: CheckCircle2,
    title: "Acceptance Decision",
    description: "Authors receive acceptance or revision notifications.",
  },
  {
    icon: CreditCard,
    title: "Registration",
    description: "Accepted authors complete registration and payment.",
  },
  {
    icon: Award,
    title: "Certificate & Proceedings",
    description: "Certificates and proceedings are generated automatically.",
  },
];

export default function Workflow() {
  return (
    <section className="bg-muted/30 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            Workflow
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Conference Management Made Simple
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            From paper submission to certificate generation, everything happens
            in one seamless workflow.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {workflow.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative rounded-2xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Icon className="h-7 w-7" />
                </div>

                <div className="absolute right-6 top-6 text-4xl font-bold text-muted-foreground/20">
                  0{index + 1}
                </div>

                <h3 className="text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="mt-3 leading-7 text-muted-foreground">
                  {step.description}
                </p>

                {index !== workflow.length - 1 && (
                  <ArrowDown className="mx-auto mt-8 h-6 w-6 text-muted-foreground lg:hidden" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}