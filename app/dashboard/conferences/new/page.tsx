import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NewConferencePage() {
  return (
    <div className="mx-auto max-w-5xl p-8">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <Link href="/dashboard/conferences">
            <Button variant="ghost">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back
            </Button>
          </Link>

          <h1 className="mt-4 text-4xl font-bold">
            Create Conference
          </h1>

          <p className="mt-2 text-muted-foreground">
            Fill the details below to create a new conference.
          </p>

        </div>

      </div>

      <div className="rounded-2xl border bg-card p-8 shadow-sm">

        <form className="grid gap-6 md:grid-cols-2">

          <div>
            <label className="mb-2 block text-sm font-medium">
              Conference Name
            </label>

            <input
              className="w-full rounded-xl border px-4 py-3"
              placeholder="IEEE DELCON 2027"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Short Name
            </label>

            <input
              className="w-full rounded-xl border px-4 py-3"
              placeholder="DELCON"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Venue
            </label>

            <input
              className="w-full rounded-xl border px-4 py-3"
              placeholder="BITS Pilani"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Mode
            </label>

            <select className="w-full rounded-xl border px-4 py-3">
              <option>Offline</option>
              <option>Online</option>
              <option>Hybrid</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Start Date
            </label>

            <input
              type="date"
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              End Date
            </label>

            <input
              type="date"
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Submission Deadline
            </label>

            <input
              type="date"
              className="w-full rounded-xl border px-4 py-3"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Registration Fee (₹)
            </label>

            <input
              type="number"
              className="w-full rounded-xl border px-4 py-3"
              placeholder="1000"
            />
          </div>

          <div className="md:col-span-2">

            <label className="mb-2 block text-sm font-medium">
              Description
            </label>

            <textarea
              rows={5}
              className="w-full rounded-xl border px-4 py-3"
              placeholder="Conference description..."
            />

          </div>

          <div className="md:col-span-2 flex justify-end gap-4">

            <Button variant="outline">
              Cancel
            </Button>

            <Button>
              Create Conference
            </Button>

          </div>

        </form>

      </div>

    </div>
  );
}