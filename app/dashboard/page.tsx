import Topbar from "@/components/dashboard/Topbar";
import StatCards from "@/components/dashboard/StatCards";
import SubmissionChart from "@/components/dashboard/SubmissionChart";
import AIInsights from "@/components/dashboard/AIInsights";
import UpcomingConferences from "@/components/dashboard/UpcomingConferences";
import RecentActivity from "@/components/dashboard/RecentActivity";

export default function DashboardPage() {
  return (
    <>
      <Topbar />

      <div className="space-y-8 p-8">
        <div>
          <h1 className="text-4xl font-bold">
            Dashboard
          </h1>

          <p className="mt-2 text-muted-foreground">
            Welcome back, Arjun 👋
          </p>
        </div>

        <StatCards />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SubmissionChart />
          </div>

          <AIInsights />
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <UpcomingConferences />

          <RecentActivity />
        </div>
      </div>
    </>
  );
}