"use client";

import {
  CalendarDays,
  FileText,
  Users,
  IndianRupee,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Conferences",
    value: "48",
    change: "+12%",
    description: "vs last month",
    icon: CalendarDays,
  },
  {
    title: "Paper Submissions",
    value: "1,284",
    change: "+230",
    description: "new today",
    icon: FileText,
  },
  {
    title: "Registered Authors",
    value: "8,920",
    change: "+152",
    description: "active users",
    icon: Users,
  },
  {
    title: "Revenue",
    value: "₹8.4L",
    change: "+18%",
    description: "this month",
    icon: IndianRupee,
  },
];

export default function StatCards() {
  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.title}
            className="rounded-2xl border bg-card p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            <div className="flex items-center justify-between">
              <div className="rounded-xl bg-primary/10 p-3">
                <Icon className="h-6 w-6 text-primary" />
              </div>

              <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-2 py-1 text-xs font-medium text-green-600">
                <TrendingUp className="h-3 w-3" />
                {stat.change}
              </div>
            </div>

            <h2 className="mt-5 text-3xl font-bold">{stat.value}</h2>

            <p className="mt-1 text-sm font-medium">{stat.title}</p>

            <p className="mt-2 text-xs text-muted-foreground">
              {stat.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}