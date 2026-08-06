"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";

const conferenceSchema = z.object({
  title: z.string().min(3, "Conference name is required"),
  shortName: z.string().min(2, "Short name is required"),
  venue: z.string().min(2, "Venue is required"),
  mode: z.string(),
  startDate: z.string(),
  endDate: z.string(),
  submissionDeadline: z.string(),
  registrationDeadline: z.string(),
  registrationFee: z.string(),
  description: z.string().optional(),
});

type ConferenceFormData = z.infer<typeof conferenceSchema>;

export default function ConferenceForm() {
  const router = useRouter();

  const [error, setError] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ConferenceFormData>({
    resolver: zodResolver(conferenceSchema),
    defaultValues: {
      mode: "Offline",
    },
  });

  async function onSubmit(data: ConferenceFormData) {
    setError("");

    const response = await fetch("/api/conferences", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      setError("Failed to create conference.");
      return;
    }

    router.push("/dashboard/conferences");
    router.refresh();
  }

  return (
    <div className="rounded-2xl border bg-card p-8 shadow-sm">

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid gap-6 md:grid-cols-2"
      >

        <div>
          <label className="mb-2 block text-sm font-medium">
            Conference Name
          </label>

          <input
            {...register("title")}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="IEEE DELCON 2027"
          />

          {errors.title && (
            <p className="mt-1 text-sm text-red-500">
              {errors.title.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Short Name
          </label>

          <input
            {...register("shortName")}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="DELCON"
          />

          {errors.shortName && (
            <p className="mt-1 text-sm text-red-500">
              {errors.shortName.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Venue
          </label>

          <input
            {...register("venue")}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="BITS Pilani"
          />

          {errors.venue && (
            <p className="mt-1 text-sm text-red-500">
              {errors.venue.message}
            </p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Mode
          </label>

          <select
            {...register("mode")}
            className="w-full rounded-xl border px-4 py-3"
          >
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
            {...register("startDate")}
            className="w-full rounded-xl border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            End Date
          </label>

          <input
            type="date"
            {...register("endDate")}
            className="w-full rounded-xl border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Submission Deadline
          </label>

          <input
            type="date"
            {...register("submissionDeadline")}
            className="w-full rounded-xl border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Registration Deadline
          </label>

          <input
            type="date"
            {...register("registrationDeadline")}
            className="w-full rounded-xl border px-4 py-3"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium">
            Registration Fee (₹)
          </label>

          <input
            type="number"
            {...register("registrationFee")}
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
            {...register("description")}
            className="w-full rounded-xl border px-4 py-3"
            placeholder="Conference description..."
          />
        </div>

        {error && (
          <div className="md:col-span-2 rounded-lg border border-red-300 bg-red-50 p-3 text-red-600">
            {error}
          </div>
        )}

        <div className="md:col-span-2 flex justify-end gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push("/dashboard/conferences")}
          >
            Cancel
          </Button>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? "Creating..." : "Create Conference"}
          </Button>
        </div>
      </form>
    </div>
  );
}