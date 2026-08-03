import { CalendarDays, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const conferences = [
  {
    name: "IEEE DELCON 2027",
    deadline: "15 Aug 2027",
    papers: 324,
    status: "Open",
  },
  {
    name: "AI Summit 2027",
    deadline: "02 Sep 2027",
    papers: 188,
    status: "Review",
  },
  {
    name: "ICML Workshop",
    deadline: "10 Sep 2027",
    papers: 92,
    status: "Registration",
  },
];

export default function UpcomingConferences() {
  return (
    <div className="rounded-2xl border bg-card p-6 shadow-sm">
      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold">
            Upcoming Conferences
          </h2>

          <p className="text-sm text-muted-foreground">
            Active conference overview
          </p>
        </div>

        <Button variant="ghost" size="sm">
          View All
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div className="space-y-4">
        {conferences.map((conference) => (
          <div
            key={conference.name}
            className="flex items-center justify-between rounded-xl border p-4 transition hover:bg-muted/40"
          >
            <div className="flex items-center gap-3">
              <div className="rounded-lg bg-primary/10 p-3">
                <CalendarDays className="h-5 w-5 text-primary" />
              </div>

              <div>
                <h3 className="font-semibold">
                  {conference.name}
                </h3>

                <p className="text-sm text-muted-foreground">
                  Deadline: {conference.deadline}
                </p>
              </div>
            </div>

            <div className="text-right">
              <p className="font-semibold">
                {conference.papers} Papers
              </p>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
                {conference.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}