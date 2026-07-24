import {
  Users,
  FileText,
  Globe,
  Award,
} from "lucide-react";

const stats = [
  {
    icon: Globe,
    value: "250+",
    label: "Conferences Hosted",
  },
  {
    icon: Users,
    value: "50K+",
    label: "Researchers",
  },
  {
    icon: FileText,
    value: "200K+",
    label: "Papers Submitted",
  },
  {
    icon: Award,
    value: "120K+",
    label: "Certificates Issued",
  },
];

export default function Stats() {
  return (
    <section className="border-y bg-muted/30">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-16 md:grid-cols-4">
        {stats.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="rounded-2xl border bg-card p-6 text-center shadow-sm transition hover:shadow-lg"
            >
              <Icon className="mx-auto mb-4 h-8 w-8 text-blue-600" />

              <h2 className="text-3xl font-bold">
                {item.value}
              </h2>

              <p className="mt-2 text-sm text-muted-foreground">
                {item.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}