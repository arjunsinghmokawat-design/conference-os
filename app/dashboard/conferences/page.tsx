import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import Link from "next/link";

const conferences = [
  {
    id: 1,
    name: "IEEE DELCON 2027",
    venue: "BITS Pilani",
    deadline: "15 Aug 2027",
    status: "Open",
  },
  {
    id: 2,
    name: "AI Summit 2027",
    venue: "New Delhi",
    deadline: "02 Sep 2027",
    status: "Review",
  },
  {
    id: 3,
    name: "ICML Workshop",
    venue: "Online",
    deadline: "10 Sep 2027",
    status: "Registration",
  },
];

export default function ConferencesPage() {
  return (
    <div className="p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>
          <h1 className="text-4xl font-bold">
            Conferences
          </h1>

          <p className="mt-2 text-muted-foreground">
            Manage all your conferences.
          </p>
        </div>

        <Link href="/dashboard/conferences/new">
          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Create Conference
          </Button>
        </Link>

      </div>

      <div className="overflow-hidden rounded-2xl border">

        <table className="w-full">

          <thead className="bg-muted/50">

            <tr>

              <th className="px-6 py-4 text-left">Conference</th>

              <th className="px-6 py-4 text-left">Venue</th>

              <th className="px-6 py-4 text-left">Deadline</th>

              <th className="px-6 py-4 text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            {conferences.map((conference) => (

              <tr
                key={conference.id}
                className="border-t hover:bg-muted/30"
              >

                <td className="px-6 py-4 font-medium">
                  {conference.name}
                </td>

                <td className="px-6 py-4">
                  {conference.venue}
                </td>

                <td className="px-6 py-4">
                  {conference.deadline}
                </td>

                <td className="px-6 py-4">

                  <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
                    {conference.status}
                  </span>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}