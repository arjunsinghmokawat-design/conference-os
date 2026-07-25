import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Dr. Sarah Johnson",
    role: "Conference Chair",
    organization: "IEEE International Conference",
    review:
      "ConferenceOS transformed our conference workflow. From paper submission to certificate generation, everything was seamless and efficient.",
  },
  {
    name: "Prof. Amit Sharma",
    role: "Program Chair",
    organization: "BITS Pilani",
    review:
      "The reviewer management and analytics dashboard saved us countless hours. Highly recommended for academic conferences.",
  },
  {
    name: "Emily Carter",
    role: "Research Author",
    organization: "University of Oxford",
    review:
      "Submitting papers, tracking reviews, and completing registration was incredibly simple. A modern platform built for researchers.",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="bg-gradient-to-b from-background via-muted/20 to-background py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            Testimonials
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight md:text-5xl">
            Trusted by Researchers Worldwide
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            See what conference organizers, reviewers, and researchers say
            about ConferenceOS.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="rounded-3xl border bg-card p-8 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-5 flex">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-5 w-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>

              <p className="leading-7 text-muted-foreground">
                "{item.review}"
              </p>

              <div className="mt-8">
                <h3 className="text-lg font-semibold">{item.name}</h3>

                <p className="text-sm text-muted-foreground">
                  {item.role}
                </p>

                <p className="text-sm font-medium text-primary">
                  {item.organization}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}