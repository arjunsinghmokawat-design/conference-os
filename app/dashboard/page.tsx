import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import StatsCard from "@/components/dashboard/StatsCard";
import RecentActivity from "@/components/dashboard/RecentActivity";

import {
  CalendarDays,
  FileText,
  Users,
  IndianRupee,
} from "lucide-react";

export default function DashboardPage() {
  return (
    <main className="flex min-h-screen bg-slate-950 text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <section className="flex-1 p-8">

        {/* Topbar */}
        <Topbar />

        {/* Welcome */}
        <div className="mt-8">
          <h1 className="text-4xl font-bold">
            Welcome Back, Arjun 👋
          </h1>

          <p className="mt-2 text-slate-400">
            Manage your conferences from one dashboard.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">

          <StatsCard
            title="Conferences"
            value="12"
            icon={CalendarDays}
            color="bg-blue-600"
          />

          <StatsCard
            title="Research Papers"
            value="532"
            icon={FileText}
            color="bg-green-600"
          />

          <StatsCard
            title="Reviewers"
            value="42"
            icon={Users}
            color="bg-purple-600"
          />

          <StatsCard
            title="Revenue"
            value="₹2.4L"
            icon={IndianRupee}
            color="bg-orange-600"
          />

        </div>

        {/* Recent Activity */}
        <div className="mt-10">
          <RecentActivity />
        </div>

      </section>

    </main>
  );
}