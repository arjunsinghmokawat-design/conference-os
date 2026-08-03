"use client";

import { Bell, Plus, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/layout/ThemeToggle";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 flex h-16 items-center justify-between border-b bg-background/80 px-6 backdrop-blur">
      <div className="relative w-full max-w-md">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <input
          type="text"
          placeholder="Search conferences..."
          className="w-full rounded-xl border bg-background py-2 pl-10 pr-4 outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" size="icon">
          <Bell className="h-5 w-5" />
        </Button>

        <ThemeToggle />

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Create Conference
        </Button>
      </div>
    </header>
  );
}