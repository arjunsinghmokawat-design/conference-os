import {
  FileText,
  UserCheck,
  CreditCard,
  Award,
} from "lucide-react";

const activities = [
  {
    icon: FileText,
    title: "New paper submitted",
    subtitle: "Deep Learning for Healthcare",
    time: "5 min ago",
  },
  {
    icon: UserCheck,
    title: "Reviewer accepted invitation",
    subtitle: "Prof. John Smith",
    time: "20 min ago",
  },
  {
    icon: CreditCard,
    title: "Registration payment received",
    subtitle: "IEEE DELCON 2027",
    time: "1 hour ago",
  },
  {
    icon: Award,
    title: "Certificate generated",
    subtitle: "Author ID #2041",
    time: "3 hours ago",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <h2 className="mb-6 text-xl font-bold">
        Recent Activity
      </h2>

      <div className="space-y-5">
        {activities.map((activity, index) => {
          const Icon = activity.icon;

          return (
            <div
              key={index}
              className="flex items-start gap-4"
            >
              <div className="rounded-xl bg-primary/10 p-3">
                <Icon className="h-5 w-5 text-primary" />
              </div>

              <div className="flex-1">
                <h3 className="font-medium">
                  {activity.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {activity.subtitle}
                </p>
              </div>

              <span className="text-xs text-muted-foreground">
                {activity.time}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}