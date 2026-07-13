import {
  CheckCircle,
  CreditCard,
  UserPlus,
  FileCheck,
} from "lucide-react";

const activities = [
  {
    icon: CheckCircle,
    title: "Paper #248 Accepted",
    time: "2 min ago",
    color: "text-green-400",
  },
  {
    icon: CreditCard,
    title: "Payment Received ₹18,500",
    time: "10 min ago",
    color: "text-orange-400",
  },
  {
    icon: UserPlus,
    title: "35 New Registrations",
    time: "25 min ago",
    color: "text-blue-400",
  },
  {
    icon: FileCheck,
    title: "Reviewer Assigned",
    time: "1 hour ago",
    color: "text-purple-400",
  },
];

export default function RecentActivity() {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">

      <h2 className="mb-6 text-xl font-bold text-white">
        Recent Activity
      </h2>

      <div className="space-y-5">

        {activities.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="flex items-center justify-between rounded-xl bg-slate-800 p-4"
            >
              <div className="flex items-center gap-4">

                <Icon
                  className={item.color}
                  size={22}
                />

                <div>

                  <p className="font-medium text-white">
                    {item.title}
                  </p>

                  <p className="text-sm text-slate-400">
                    {item.time}
                  </p>

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </div>
  );
}