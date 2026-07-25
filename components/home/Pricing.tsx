import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for exploring ConferenceOS.",
    features: [
      "1 Conference",
      "50 Paper Submissions",
      "Basic Dashboard",
      "Email Support",
    ],
    button: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    price: "$49",
    description: "Best for universities and IEEE conferences.",
    features: [
      "Unlimited Conferences",
      "Unlimited Papers",
      "AI Reviewer Suggestions",
      "Registration & Payments",
      "Certificates",
      "Priority Support",
    ],
    button: "Start Free Trial",
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For organizations managing multiple conferences.",
    features: [
      "Everything in Pro",
      "Dedicated Support",
      "Custom Integrations",
      "SSO Authentication",
      "Advanced Analytics",
      "Unlimited Storage",
    ],
    button: "Contact Sales",
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-muted/20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Pricing
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Simple & Transparent Pricing
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Choose the plan that best fits your conference.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                plan.popular ? "border-primary ring-2 ring-primary/20" : ""
              }`}
            >
              {plan.popular && (
                <span className="absolute right-6 top-6 rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  Most Popular
                </span>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <p className="mt-2 text-muted-foreground">
                {plan.description}
              </p>

              <div className="mt-8 text-5xl font-bold">
                {plan.price}
              </div>

              <button className="mt-8 w-full rounded-xl bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
                {plan.button}
              </button>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}