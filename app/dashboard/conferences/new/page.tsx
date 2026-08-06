import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import ConferenceForm from "@/components/forms/ConferenceForm";

export default function NewConferencePage() {
  return (
    <div className="mx-auto max-w-5xl p-8">
      <div className="mb-8">
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

      <ConferenceForm />
    </div>
  );
}