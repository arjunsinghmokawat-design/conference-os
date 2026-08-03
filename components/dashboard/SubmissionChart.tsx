"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  { month: "Jan", papers: 120 },
  { month: "Feb", papers: 180 },
  { month: "Mar", papers: 240 },
  { month: "Apr", papers: 310 },
  { month: "May", papers: 420 },
  { month: "Jun", papers: 510 },
  { month: "Jul", papers: 640 },
];

export default function SubmissionChart() {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-6">
        <h2 className="text-xl font-bold">
          Paper Submissions
        </h2>

        <p className="text-sm text-muted-foreground">
          Monthly submission trend
        </p>
      </div>

      <div className="h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient
                id="submissionGradient"
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="0%" stopColor="#3b82f6" stopOpacity={0.4} />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" opacity={0.2} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <Tooltip />

            <Area
              type="monotone"
              dataKey="papers"
              stroke="#3b82f6"
              strokeWidth={3}
              fill="url(#submissionGradient)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}