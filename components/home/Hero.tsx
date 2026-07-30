"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, PlayCircle, Sparkles, Users, FileText, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-20">
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-10 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl" />
        <div className="absolute right-10 top-40 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <div className="relative mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-2">

        <motion.div
          initial={{opacity:0,y:30}}
          animate={{opacity:1,y:0}}
          transition={{duration:0.6}}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-600 dark:text-blue-400">
            <Sparkles className="size-4" />
            AI Powered Conference Platform
          </div>

          <h1 className="text-5xl font-extrabold leading-tight md:text-7xl">
            Manage
            <span className="block bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500 bg-clip-text text-transparent">
              Conferences Smarter
            </span>
            with AI
          </h1>

          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            One platform to manage conference websites, paper submissions,
            reviewers, registrations, payments and certificates with powerful AI automation.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="/signup">
              <Button size="lg">
                Get Started
                <ArrowRight className="ml-2 size-4" />
              </Button>
            </Link>

            <Link href="/contact">
              <Button variant="outline" size="lg">
                <PlayCircle className="mr-2 size-4" />
                Book Demo
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4">
            <div>
              <h3 className="text-2xl font-bold">320+</h3>
              <p className="text-sm text-muted-foreground">Conferences</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">50K+</h3>
              <p className="text-sm text-muted-foreground">Authors</p>
            </div>

            <div>
              <h3 className="text-2xl font-bold">1M+</h3>
              <p className="text-sm text-muted-foreground">Papers</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{opacity:0,x:40}}
          animate={{opacity:1,x:0}}
          transition={{duration:0.7}}
          className="relative"
        >
          <div className="rounded-3xl border bg-background/70 p-6 shadow-2xl backdrop-blur">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="text-xl font-bold">Conference Dashboard</h2>
              <span className="rounded-full bg-green-500/15 px-3 py-1 text-xs font-medium text-green-600">
                Live
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-xl border p-4">
                <div className="flex items-center gap-3">
                  <CalendarDays className="size-5 text-blue-600" />
                  <span>Upcoming Conferences</span>
                </div>
                <strong>12</strong>
              </div>

              <div className="flex items-center justify-between rounded-xl border p-4">
                <div className="flex items-center gap-3">
                  <FileText className="size-5 text-cyan-600" />
                  <span>Paper Submissions</span>
                </div>
                <strong>328</strong>
              </div>

              <div className="flex items-center justify-between rounded-xl border p-4">
                <div className="flex items-center gap-3">
                  <Users className="size-5 text-indigo-600" />
                  <span>Registered Authors</span>
                </div>
                <strong>1,842</strong>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
