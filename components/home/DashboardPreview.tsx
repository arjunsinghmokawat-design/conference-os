import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  CreditCard,
  FileText,
  Users,
} from "lucide-react";

export default function DashboardPreview() {
  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-600 dark:text-blue-400">
            Dashboard Preview
          </span>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
            Everything You Need,
            <span className="block bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              In One Dashboard
            </span>
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Monitor submissions, reviewers, registrations, payments and
            certificates with powerful analytics.
          </p>
        </div>

        {/* Dashboard */}

        <div className="rounded-3xl border bg-card p-8 shadow-2xl">

          {/* Top Cards */}

          <div className="grid gap-6 md:grid-cols-4">

            <div className="rounded-2xl border p-6">
              <FileText className="mb-4 h-8 w-8 text-blue-600" />

              <h3 className="text-3xl font-bold">327</h3>

              <p className="text-muted-foreground">
                Paper Submissions
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <Users className="mb-4 h-8 w-8 text-emerald-600" />

              <h3 className="text-3xl font-bold">86</h3>

              <p className="text-muted-foreground">
                Active Reviewers
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <CreditCard className="mb-4 h-8 w-8 text-purple-600" />

              <h3 className="text-3xl font-bold">₹8.4L</h3>

              <p className="text-muted-foreground">
                Registration Revenue
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <CheckCircle2 className="mb-4 h-8 w-8 text-orange-600" />

              <h3 className="text-3xl font-bold">241</h3>

              <p className="text-muted-foreground">
                Accepted Papers
              </p>
            </div>

          </div>

          {/* Bottom */}

          <div className="mt-10 grid gap-8 lg:grid-cols-2">

            {/* Chart */}

            <div className="rounded-2xl border p-6">
              <div className="mb-6 flex items-center gap-3">
                <BarChart3 className="h-6 w-6 text-blue-600" />

                <h3 className="text-lg font-semibold">
                  Weekly Submissions
                </h3>
              </div>

              <div className="flex h-56 items-end justify-between gap-3">

                {[45, 60, 80, 95, 70, 110, 130].map((height, index) => (
                  <div
                    key={index}
                    className="flex-1 rounded-t-xl bg-gradient-to-t from-blue-600 to-cyan-400 transition-all hover:opacity-80"
                    style={{
                      height: `${height}%`,
                    }}
                  />
                ))}

              </div>
            </div>

            {/* Activity */}

            <div className="rounded-2xl border p-6">

              <div className="mb-6 flex items-center gap-3">
                <CalendarDays className="h-6 w-6 text-blue-600" />

                <h3 className="text-lg font-semibold">
                  Recent Activities
                </h3>
              </div>

              <div className="space-y-5">

                {[
                  "New paper submitted",
                  "Reviewer assigned",
                  "Payment completed",
                  "Certificate generated",
                  "Registration approved",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-4 rounded-xl bg-muted/50 p-4"
                  >
                    <div className="h-3 w-3 rounded-full bg-emerald-500" />

                    <div>
                      <p className="font-medium">
                        {item}
                      </p>

                      <p className="text-sm text-muted-foreground">
                        Just now
                      </p>
                    </div>
                  </div>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}