import {
  LayoutDashboard,
  CalendarDays,
  FileText,
  Users,
  CreditCard,
  Award,
  Settings,
  LogOut,
} from "lucide-react";

const menuItems = [
  { icon: LayoutDashboard, title: "Dashboard", active: true },
  { icon: CalendarDays, title: "Conferences" },
  { icon: FileText, title: "Papers" },
  { icon: Users, title: "Reviewers" },
  { icon: CreditCard, title: "Payments" },
  { icon: Award, title: "Certificates" },
  { icon: Settings, title: "Settings" },
  { icon: LogOut, title: "Logout" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 bg-slate-900 border-r border-slate-800 p-6">

      <h1 className="text-3xl font-bold text-blue-400">
        ConferenceOS
      </h1>

      <p className="mt-2 text-sm text-slate-400">
        Admin Dashboard
      </p>

      <nav className="mt-10 space-y-2">

        {menuItems.map((item) => {
          const Icon = item.icon;

          return (
            <button
              key={item.title}
              className={`flex w-full items-center gap-3 rounded-xl px-4 py-3 transition ${
                item.active
                  ? "bg-blue-600 text-white"
                  : "text-slate-300 hover:bg-slate-800"
              }`}
            >
              <Icon size={20} />
              {item.title}
            </button>
          );
        })}

      </nav>

    </aside>
  );
}