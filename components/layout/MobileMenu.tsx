"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

import { Button } from "@/components/ui/button";

const links = [
  { name: "Features", href: "#features" },
  { name: "Pricing", href: "#pricing" },
  { name: "Docs", href: "#docs" },
  { name: "Contact", href: "#contact" },
];

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function MobileMenu({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 250, damping: 30 }}
            className="fixed right-0 top-0 z-50 h-full w-80 border-l bg-background p-6 shadow-xl"
          >
            <div className="mb-10 flex items-center justify-between">
              <h2 className="text-xl font-bold">ConferenceOS</h2>

              <Button
                variant="ghost"
                size="icon"
                onClick={onClose}
              >
                <X className="size-5" />
              </Button>
            </div>

            <nav className="space-y-5">
              {links.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={onClose}
                  className="block text-lg font-medium transition hover:text-blue-600"
                >
                  {item.name}
                </a>
              ))}
            </nav>

            <div className="mt-10 space-y-3">
              <Link href="/login" onClick={onClose}>
                <Button variant="outline" className="w-full">
                  Login
                </Button>
              </Link>

              <Link href="/signup" onClick={onClose}>
                <Button className="w-full">
                  Get Started
                </Button>
              </Link>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}