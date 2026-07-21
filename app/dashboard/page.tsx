import { auth } from "@/auth";
import { redirect } from "next/navigation";

import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import StatsCard from "@/components/dashboard/StatsCard";
import Analytics from "@/components/dashboard/Analytics";
import RecentActivity from "@/components/dashboard/RecentActivity";
import ConferenceTable from "@/components/dashboard/ConferenceTable";

import {
  CalendarDays,
  FileText,
  Users,
  IndianRupee,
} from "lucide-react";

export default async function DashboardPage() {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="flex min-h-screen bg-slate-950 text-white">
      <Sidebar />

      <section className="flex-1 p-8">
        <Topbar />

        <div className="mt-8">
          <h1 className="text-4xl font-bold">
            Welcome Back, {session.user.name ?? "User"} 👋
          </h1>

          <p className="mt-2 text-slate-400">
            {session.user.email}
          </p>
        </div>

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

        <div className="mt-10 grid gap-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <Analytics />
          </div>

          <RecentActivity />
        </div>

        <ConferenceTable />
      </section>
    </main>
  );
}