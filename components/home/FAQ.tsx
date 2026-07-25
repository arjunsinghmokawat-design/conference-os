"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is ConferenceOS?",
    answer:
      "ConferenceOS is an AI-powered conference management platform that simplifies paper submissions, peer review, registrations, payments, certificates, and analytics.",
  },
  {
    question: "Who can use ConferenceOS?",
    answer:
      "Conference organizers, universities, IEEE conferences, journals, reviewers, and researchers can all use ConferenceOS.",
  },
  {
    question: "Does ConferenceOS support online payments?",
    answer:
      "Yes. ConferenceOS supports integrated registration and online payment workflows.",
  },
  {
    question: "Can I manage multiple conferences?",
    answer:
      "Yes. The Enterprise plan allows you to manage multiple conferences from one dashboard.",
  },
  {
    question: "Is my conference data secure?",
    answer:
      "Absolutely. ConferenceOS uses secure authentication, role-based access control, and encrypted data storage.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24">
      <div className="mx-auto max-w-4xl px-6">
        <div className="text-center">
          <span className="rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-bold md:text-5xl">
            Frequently Asked Questions
          </h2>

          <p className="mt-5 text-lg text-muted-foreground">
            Everything you need to know about ConferenceOS.
          </p>
        </div>

        <div className="mt-16 space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-2xl border bg-card"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="flex w-full items-center justify-between p-6 text-left"
              >
                <span className="font-semibold">
                  {faq.question}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 pb-6 text-muted-foreground">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}