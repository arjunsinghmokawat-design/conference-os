import {
  Users,
  FileText,
  UserCheck,
  IndianRupee,
} from "lucide-react";

const stats = [
  {
    title: "Participants",
    value: "1248",
    icon: Users,
  },
  {
    title: "Research Papers",
    value: "532",
    icon: FileText,
  },
  {
    title: "Reviewers",
    value: "42",
    icon: UserCheck,
  },
  {
    title: "Revenue",
    value: "₹2.4L",
    icon: IndianRupee,
  },
];

export default function DashboardPreview() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-6xl px-6">

        <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-900 shadow-2xl">

          <div className="flex items-center justify-between border-b border-slate-800 px-8 py-6">
            <div>
              <h2 className="text-3xl font-bold text-white">
                Conference Dashboard
              </h2>

              <p className="mt-1 text-slate-400">
                IEEE DELCON 2027
              </p>
            </div>

            <span className="rounded-full bg-green-500 px-4 py-2 text-sm font-semibold text-white">
              ● Live
            </span>
          </div>

          <div className="grid gap-6 p-8 md:grid-cols-4">

            {stats.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl bg-slate-800 p-6 transition hover:scale-105 hover:bg-slate-700"
              >
                <item.icon className="mb-4 h-8 w-8 text-blue-400" />

                <p className="text-slate-400">
                  {item.title}
                </p>

                <h3 className="mt-3 text-4xl font-bold text-white">
                  {item.value}
                </h3>
              </div>
            ))}

          </div>

          <div className="border-t border-slate-800 p-8">

            <h3 className="mb-6 text-xl font-bold text-white">
              Recent Activity
            </h3>

            <div className="space-y-4">

              <div className="rounded-xl bg-slate-800 p-4 text-white">
                ✅ Paper #248 accepted
              </div>

              <div className="rounded-xl bg-slate-800 p-4 text-white">
                🎉 35 new registrations today
              </div>

              <div className="rounded-xl bg-slate-800 p-4 text-white">
                💳 Payment received ₹18,500
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}