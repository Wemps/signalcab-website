/**
 * PricingWithClubTiers.tsx
 * ────────────────────────
 * Archived version of the pricing page that included the original
 * Club Tickets section with tiered bulk pricing (Small / Medium / Unlimited).
 * Preserved for future use — routed at /pricing-wclub.
 *
 * When ready to transition from the Founding Clubs pilot to paid club tiers,
 * swap this into /pricing or update the club tier pricing as needed.
 */

import { useState } from "react";
import { motion } from "motion/react";
import {
  Check,
  Users,
  Ticket,
  ArrowRight,
  Apple,
  Mail,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import { Footer } from "./Footer";
import { PricingCards } from "./PricingCards";

const clubTiers = [
  {
    members: "10",
    label: "Small Club",
    price: "$20",
    per: "/member/year",
    total: "$200/year",
    savings: "33% off",
    color: "#00d9ff",
  },
  {
    members: "25",
    label: "Medium Club",
    price: "$15",
    per: "/member/year",
    total: "$375/year",
    savings: "50% off",
    color: "#00ffaa",
  },
  {
    members: "\u221E",
    label: "Unlimited",
    price: "$500",
    per: "/year",
    total: "Flat rate",
    savings: "Best value",
    color: "#a78bfa",
  },
];

const faqs = [
  {
    q: "What's included in the free trial?",
    a: "Both the Monthly and Yearly Ticket include a 1-week free trial with full access to every feature. No restrictions, no feature gating — try everything before you commit.",
  },
  {
    q: "Can I switch between Monthly and Yearly?",
    a: "Yes. Both subscription plans are in the same group, so you can upgrade or downgrade anytime. When you switch, Apple handles the prorated billing automatically.",
  },
  {
    q: "What does Family Sharing mean?",
    a: "With the Yearly Ticket, you can share your subscription with up to 5 family members through Apple's Family Sharing. Each person gets their own locomotive library and settings.",
  },
  {
    q: "Is the Lifetime Ticket really forever?",
    a: "Yes — it's a one-time, non-consumable purchase. Pay once and you own Signal Cab permanently, including all future updates. No recurring charges.",
  },
  {
    q: "How do club licenses work?",
    a: "Club Tickets are bulk licenses purchased by a club organizer. Pick the tier that fits your club size — Small (up to 10), Medium (up to 25), or Unlimited — and every member gets full access to Signal Cab for a year.",
  },
  {
    q: "What protocols are included?",
    a: "All plans include DCC-EX (stable), WiThrottle (beta), and upcoming Z21/SRCP support. There's no protocol gating — every plan gets every protocol.",
  },
];

export function PricingWithClubTiers() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#0d1a2a] to-[#0a0f1a]" />
          <div className="absolute top-[10%] right-[20%] w-[500px] h-[500px] bg-[#00ffaa]/6 rounded-full blur-[180px]" />
          <div className="absolute bottom-[20%] left-[10%] w-[400px] h-[400px] bg-[#a78bfa]/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-[#111827] border border-[#1f2937] rounded-full px-4 py-1.5 mb-6">
              <Ticket size={14} className="text-[#00ffaa]" />
              <span
                className="text-[#9ca3af]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                Simple, transparent pricing
              </span>
            </div>
            <h1
              className="text-[#f9fafb] mb-4"
              style={{
                fontFamily: "Lora, serif",
                fontSize: "clamp(36px, 5vw, 56px)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Pick Your{" "}
              <span className="bg-gradient-to-r from-[#00ffaa] to-[#00d9ff] bg-clip-text text-transparent">
                Ticket
              </span>
            </h1>
            <p
              className="text-[#9ca3af] max-w-xl mx-auto"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 18,
                lineHeight: 1.7,
              }}
            >
              Every ticket unlocks the full Signal Cab experience. No feature
              gating, no upsells — just choose the plan that fits.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Individual Pricing Cards */}
      <PricingCards />

      {/* Club Tickets Section */}
      <section className="py-16 sm:py-24 bg-[#0d1117] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#a78bfa]/5 rounded-full blur-[180px]" />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-[#00ffaa]/4 rounded-full blur-[160px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-[#111827] border border-[#1f2937] rounded-full px-4 py-1.5 mb-6">
              <Users size={14} className="text-[#a78bfa]" />
              <span
                className="text-[#9ca3af]"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 13,
                  fontWeight: 500,
                }}
              >
                Bulk pricing for clubs
              </span>
            </div>
            <h2
              className="text-[#f9fafb] mb-4"
              style={{
                fontFamily: "Lora, serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                fontWeight: 700,
              }}
            >
              Club{" "}
              <span className="bg-gradient-to-r from-[#a78bfa] to-[#00ffaa] bg-clip-text text-transparent">
                Tickets
              </span>
            </h2>
            <p
              className="text-[#9ca3af] max-w-2xl mx-auto"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              Get your whole club running Signal Cab at a fraction of the
              individual price. One organizer purchases, every member gets full
              access.
            </p>
          </motion.div>

          {/* Tier Cards */}
          <div className="grid sm:grid-cols-3 gap-6 mb-12">
            {clubTiers.map((tier, i) => (
              <motion.div
                key={tier.label}
                className="relative rounded-2xl p-[1px] group"
                style={{
                  background:
                    tier.color === "#a78bfa"
                      ? `linear-gradient(135deg, ${tier.color}60, #00ffaa40, ${tier.color}60)`
                      : `linear-gradient(135deg, ${tier.color}30, ${tier.color}10)`,
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Best value badge */}
                {tier.color === "#a78bfa" && (
                  <div
                    className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full z-10"
                    style={{
                      background:
                        "linear-gradient(135deg, #a78bfa, #7c5ce0)",
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 700,
                      fontSize: 10,
                      letterSpacing: 1.2,
                      textTransform: "uppercase" as const,
                      color: "#fff",
                    }}
                  >
                    Most Popular
                  </div>
                )}

                <div className="bg-[#111827] rounded-2xl p-6 h-full flex flex-col">
                  {/* Member count badge */}
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${tier.color}15` }}
                    >
                      <span
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontWeight: 700,
                          fontSize: tier.members === "\u221E" ? 20 : 14,
                          color: tier.color,
                        }}
                      >
                        {tier.members}
                      </span>
                    </div>
                    <div>
                      <div
                        className="text-[#f3f4f6]"
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontWeight: 700,
                          fontSize: 16,
                        }}
                      >
                        {tier.label}
                      </div>
                      <div
                        className="text-[#6b7280]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12,
                        }}
                      >
                        {tier.members === "\u221E"
                          ? "Unlimited members"
                          : `Up to ${tier.members} members`}
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="mb-4">
                    <div className="flex items-baseline gap-1">
                      <span
                        className="text-[#f9fafb]"
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontWeight: 700,
                          fontSize: 36,
                        }}
                      >
                        {tier.price}
                      </span>
                      <span
                        className="text-[#6b7280]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: 14,
                        }}
                      >
                        {tier.per}
                      </span>
                    </div>
                    <div
                      className="text-[#6b7280] mt-1"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 13,
                      }}
                    >
                      {tier.total}
                    </div>
                  </div>

                  {/* Savings badge */}
                  <div
                    className="inline-flex self-start px-3 py-1 rounded-full mb-5"
                    style={{
                      backgroundColor: `${tier.color}12`,
                      border: `1px solid ${tier.color}30`,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 600,
                        fontSize: 11,
                        color: tier.color,
                      }}
                    >
                      {tier.savings}
                    </span>
                  </div>

                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {[
                      "Full access for every member",
                      "All protocols included",
                      "Centralized billing",
                      tier.members === "\u221E"
                        ? "No member cap ever"
                        : `Up to ${tier.members} licenses`,
                    ].map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5">
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0"
                          style={{ color: tier.color }}
                        />
                        <span
                          className="text-[#9ca3af]"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: 13,
                            lineHeight: 1.5,
                          }}
                        >
                          {feat}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <a
                    href="mailto:clubs@signalcab.com?subject=Club%20Ticket%20Inquiry"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl transition-all active:translate-y-0.5"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 14,
                      background:
                        tier.color === "#a78bfa"
                          ? "linear-gradient(135deg, #a78bfa, #7c5ce0)"
                          : `${tier.color}15`,
                      color:
                        tier.color === "#a78bfa" ? "#fff" : tier.color,
                      border:
                        tier.color === "#a78bfa"
                          ? "none"
                          : `1px solid ${tier.color}30`,
                    }}
                  >
                    <Mail size={14} />
                    Contact Us
                    <ArrowRight size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Club note */}
          <motion.p
            className="text-center text-[#6b7280]"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: 13,
              lineHeight: 1.7,
            }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Club Tickets are billed annually. Reach out to{" "}
            <a
              href="mailto:clubs@signalcab.com"
              className="text-[#a78bfa] hover:underline"
            >
              clubs@signalcab.com
            </a>{" "}
            to get started — we'll set up your club account and distribute
            licenses.
          </motion.p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-24 bg-[#0a0f1a]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-[#f9fafb] mb-4"
              style={{
                fontFamily: "Lora, serif",
                fontSize: "clamp(28px, 4vw, 36px)",
                fontWeight: 700,
              }}
            >
              Common <span className="text-[#00d9ff]">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-[#111827] border border-[#1f2937] rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <button
                  className="w-full flex items-center justify-between px-6 py-4 text-left"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span
                    className="text-[#f3f4f6] pr-4"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 15,
                    }}
                  >
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp
                      size={18}
                      className="text-[#6b7280] shrink-0"
                    />
                  ) : (
                    <ChevronDown
                      size={18}
                      className="text-[#6b7280] shrink-0"
                    />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p
                      className="text-[#9ca3af]"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14,
                        lineHeight: 1.7,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 sm:py-20 bg-[#0d1117] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ffaa]/5 via-transparent to-[#a78bfa]/5" />
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-[#f9fafb] mb-3"
              style={{
                fontFamily: "Lora, serif",
                fontSize: "clamp(24px, 3.5vw, 36px)",
                fontWeight: 700,
              }}
            >
              Try Signal Cab free for a week
            </h2>
            <p
              className="text-[#6b7280] mb-8"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              Start your free trial today. Full access, no credit card
              required upfront.
            </p>
            <button
              className="inline-flex items-center gap-2 bg-[#00ffaa] text-[#0a0f1a] px-8 py-4 rounded-xl shadow-[0_4px_24px_rgba(0,255,170,0.25)] hover:shadow-[0_4px_32px_rgba(0,255,170,0.4)] transition-all active:translate-y-0.5"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 16,
              }}
            >
              <Apple size={20} />
              Download on the App Store
              <ArrowRight size={16} />
            </button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
