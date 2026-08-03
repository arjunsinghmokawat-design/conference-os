import {
  Brain,
  CircleAlert,
  CircleCheck,
} from "lucide-react";

const insights = [
  {
    icon: CircleAlert,
    text: "17 papers are waiting for reviewer assignment.",
  },
  {
    icon: CircleCheck,
    text: "Registration is 82% complete.",
  },
  {
    icon: CircleAlert,
    text: "2 conferences close this week.",
  },
  {
    icon: CircleCheck,
    text: "AI predicts 35% increase in submissions.",
  },
];

export default function AIInsights() {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center gap-3">
        <Brain className="text-primary" />

        <div>
          <h2 className="font-bold text-xl">
            AI Insights
          </h2>

          <p className="text-sm text-muted-foreground">
            Smart recommendations
          </p>
        </div>
      </div>

      <div className="space-y-4">
        {insights.map((item, index) => {
          const Icon = item.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border p-4"
            >
              <Icon className="mt-1 h-5 w-5 text-primary" />

              <p className="text-sm">
                {item.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}