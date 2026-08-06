import Link from "next/link";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { prisma } from "@/lib/prisma";

export default async function ConferencesPage() {
  const conferences = await prisma.conference.findMany({
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <div className="p-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-4xl font-bold">Conferences</h1>

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
              <th className="px-6 py-4 text-left">Submission Deadline</th>
              <th className="px-6 py-4 text-left">Status</th>
            </tr>
          </thead>

          <tbody>
            {conferences.length === 0 ? (
              <tr>
                <td
                  colSpan={4}
                  className="px-6 py-10 text-center text-muted-foreground"
                >
                  No conferences found.
                </td>
              </tr>
            ) : (
              conferences.map((conference) => (
                <tr
                  key={conference.id}
                  className="border-t hover:bg-muted/30"
                >
                  <td className="px-6 py-4 font-medium">
                    {conference.title}
                  </td>

                  <td className="px-6 py-4">
                    {conference.venue}
                  </td>

                  <td className="px-6 py-4">
                    {new Date(
                      conference.submissionDeadline
                    ).toLocaleDateString("en-GB")}
                  </td>

                  <td className="px-6 py-4">
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-xs font-medium text-green-600">
                      {conference.status}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}