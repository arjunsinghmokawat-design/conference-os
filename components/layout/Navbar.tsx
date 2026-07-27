"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import ThemeToggle from "./ThemeToggle";
import MobileMenu from "./MobileMenu";

import { useState } from "react";

const navLinks = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Docs", href: "#docs" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <motion.header
        initial={{ y: -70 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-background/70 backdrop-blur-xl"
      >
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-bold text-white shadow-lg">
              C
            </div>

            <div>
              <h1 className="font-bold">ConferenceOS</h1>
              <p className="text-xs text-muted-foreground">
                AI Conference Platform
              </p>
            </div>
          </Link>

          {/* Desktop */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Right Side */}
          <div className="flex items-center gap-2">
            <ThemeToggle />

            <div className="hidden md:flex items-center gap-2">
              <Link href="/login">
                <Button variant="ghost">Login</Button>
              </Link>

              <Link href="/signup">
                <Button>Get Started</Button>
              </Link>
            </div>

            {/* Mobile Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setOpen(true)}
            >
              <Menu className="size-5" />
            </Button>
          </div>
        </div>
      </motion.header>

      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
}