"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Eyebrow } from "@/components/ui/Eyebrow";

const faqs = [
  {
    question: "What's the difference between mainland and free zone?",
    answer:
      "Mainland companies can trade directly with the UAE market and require a local sponsor (we arrange this). Free zone companies offer 100% foreign ownership but are limited to operating within the zone or internationally. We'll help you choose based on your business model.",
  },
  {
    question: "How long does company setup take?",
    answer:
      "Most free zone setups take 3-5 business days. Mainland setups typically take 1-2 weeks depending on the activity type and approvals required. We'll give you a realistic timeline during your consultation.",
  },
  {
    question: "Do I need to be in Dubai to start the process?",
    answer:
      "No. We can begin remotely — most documentation can be handled digitally. You'll need to visit Dubai for your Emirates ID and to finalize certain steps, but we'll coordinate the timing to minimize your trips.",
  },
  {
    question: "What are the costs involved?",
    answer:
      "Costs vary based on company type, free zone selection, visa requirements, and office space needs. We provide a detailed quote after understanding your requirements — no hidden fees, everything itemized.",
  },
  {
    question: "Can you help with bank account opening?",
    answer:
      "Yes. Bank account opening is one of the trickiest parts of Dubai setup. We prepare your documentation, recommend banks suited to your business type, and accompany you to appointments when needed.",
  },
];

export function FAQSection() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background texture */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.03'%3E%3Cpath d='M0 0h40v40H0V0zm20 20v20H0V20h20zm20 0v20H20V20h20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <Eyebrow>FAQ</Eyebrow>
          <h2 className="text-4xl lg:text-5xl text-secondary mt-3 max-w-3xl mx-auto leading-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4">
              <button
                onClick={() =>
                  setActiveAccordion(activeAccordion === index ? null : index)
                }
                className={`w-full p-4 text-left transition-all duration-300 border-b border-primary ${
                  activeAccordion === index
                    ? "shadow-xl"
                    : "hover:shadow-lg"
                }`}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-2xl font-semibold text-secondary pr-4">
                    {faq.question}
                  </h3>
                  <div
                    className={`flex-shrink-0 text-primary w-10 h-10 flex items-center justify-center transition-colors duration-300`}
                  >
                    {activeAccordion === index ? (
                      <Minus className="w-5 h-5" />
                    ) : (
                      <Plus className="w-5 h-5" />
                    )}
                  </div>
                </div>
                {activeAccordion === index && (
                  <p className="mt-5 text-gray-600 leading-relaxed pr-12">
                    {faq.answer}
                  </p>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

