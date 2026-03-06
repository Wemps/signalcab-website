import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { Check, Users, Ticket, ArrowRight, Apple, Mail, ChevronDown, ChevronUp, Shield, Clock, Sparkles, Infinity, TestTube } from "lucide-react";
import { TESTFLIGHT_URL } from "../config";
import { Footer } from "./Footer";
import { PricingCards } from "./PricingCards";

const foundingBenefits = [
  { icon: Infinity, text: "Unlimited licenses for every member", color: "#00ffaa" },
  { icon: Clock, text: "Full year of free access — no strings", color: "#00d9ff" },
  { icon: Shield, text: "Direct line to the dev team for feedback", color: "#a78bfa" },
  { icon: Sparkles, text: "Shape the club features roadmap with us", color: "#00ffaa" },
  { icon: Users, text: "Priority support for your whole roster", color: "#00d9ff" },
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
    a: "We're currently running a Founding Clubs pilot program — selected clubs get free unlimited licenses for a full year in exchange for real-world feedback. Once the founding cohort is full, club pricing will move to a paid tier. Email clubs@signalcab.com to apply.",
  },
  {
    q: "What protocols are included?",
    a: "All plans include DCC-EX (stable), WiThrottle (beta), and upcoming Z21/SRCP support. There's no protocol gating — every plan gets every protocol.",
  },
];

export function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const navigate = useNavigate();

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
              <span className="text-[#9ca3af]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, fontWeight: 500 }}>
                Simple, transparent pricing
              </span>
            </div>
            <h1 className="text-[#f9fafb] mb-4" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(36px, 5vw, 56px)', fontWeight: 700, lineHeight: 1.1 }}>
              Pick Your{" "}
              <span className="bg-gradient-to-r from-[#00ffaa] to-[#00d9ff] bg-clip-text text-transparent">
                Ticket
              </span>
            </h1>
            <p className="text-[#9ca3af] max-w-xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.7 }}>
              Signal Cab is <span className="text-[#00ffaa]" style={{ fontWeight: 600 }}>completely free during beta</span> — join via TestFlight and get full access at no cost. The tiers below reflect our planned pricing at launch.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <PricingCards />

      {/* Founding Clubs Program */}
      <section className="py-16 sm:py-24 bg-[#0d1117] relative overflow-hidden">
        {/* Background effects */}
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
            {/* Animated urgency badge */}
            <motion.div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
              style={{
                background: "linear-gradient(135deg, #a78bfa20, #00ffaa15)",
                border: "1px solid #a78bfa40",
              }}
              animate={{ boxShadow: ["0 0 20px #a78bfa15", "0 0 30px #a78bfa25", "0 0 20px #a78bfa15"] }}
              transition={{ duration: 2, repeat: 999, ease: "easeInOut" }}
            >
              <motion.div
                className="w-2 h-2 rounded-full bg-[#00ffaa]"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: 999, ease: "easeInOut" }}
              />
              <span style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 1.5, color: "#a78bfa", textTransform: "uppercase" as const }}>
                Limited Pilot Program
              </span>
            </motion.div>

            <h2 className="text-[#f9fafb] mb-4" style={{ fontFamily: "Lora, serif", fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700 }}>
              Founding{" "}
              <span className="bg-gradient-to-r from-[#a78bfa] to-[#00ffaa] bg-clip-text text-transparent">
                Clubs
              </span>
            </h2>
            <p className="text-[#9ca3af] max-w-2xl mx-auto" style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.7 }}>
              We're recruiting a small group of model railroad clubs to deploy Signal Cab at their locations.
              Help us build the best club experience — and run your layout for free while we do.
            </p>
          </motion.div>

          {/* Main card with gradient border */}
          <motion.div
            className="relative rounded-3xl p-[1px] mb-8"
            style={{
              background: "linear-gradient(135deg, #a78bfa60, #00ffaa40, #00d9ff40, #a78bfa60)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#111827] rounded-3xl overflow-hidden">
              {/* Top banner */}
              <div
                className="relative px-6 sm:px-10 py-6 overflow-hidden"
                style={{ background: "linear-gradient(135deg, #a78bfa12, #00ffaa08)" }}
              >
                <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-[#a78bfa]/8 rounded-full blur-[100px]" />
                <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#a78bfa]/15 shrink-0">
                      <Users size={24} className="text-[#a78bfa]" />
                    </div>
                    <div>
                      <div className="text-[#f3f4f6]" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 20 }}>
                        Founding Club Pass
                      </div>
                      <div className="text-[#9ca3af]" style={{ fontFamily: "Inter, sans-serif", fontSize: 13 }}>
                        Limited spots available — applications reviewed on a rolling basis
                      </div>
                    </div>
                  </div>

                  {/* Price callout */}
                  <div className="flex items-baseline gap-1 shrink-0">
                    <span className="text-[#f9fafb]" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 44 }}>
                      $0
                    </span>
                    <span className="text-[#6b7280]" style={{ fontFamily: "Inter, sans-serif", fontSize: 15 }}>
                      /year
                    </span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="relative flex items-center">
                <div className="w-4 h-4 rounded-full -ml-2 shrink-0 bg-[#0d1117]" />
                <div className="flex-1 border-t-2 border-dashed border-[#a78bfa20]" />
                <div className="w-4 h-4 rounded-full -mr-2 shrink-0 bg-[#0d1117]" />
              </div>

              {/* Body */}
              <div className="px-6 sm:px-10 py-8">
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                  {/* Left: What you get */}
                  <div>
                    <div className="text-[#6b7280] mb-4" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase" as const }}>
                      What your club gets
                    </div>
                    <ul className="space-y-3">
                      {foundingBenefits.map((b) => (
                        <li key={b.text} className="flex items-start gap-3">
                          <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: `${b.color}12` }}>
                            <b.icon size={15} style={{ color: b.color }} />
                          </div>
                          <span className="text-[#d1d5db] pt-1" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.5 }}>
                            {b.text}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Right: What we ask */}
                  <div>
                    <div className="text-[#6b7280] mb-4" style={{ fontFamily: "Space Grotesk, sans-serif", fontWeight: 700, fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase" as const }}>
                      What we ask
                    </div>
                    <ul className="space-y-3">
                      {[
                        "Deploy Signal Cab at your club for real-world testing",
                        "Share honest feedback on the club experience",
                        "Help us understand multi-operator workflows",
                        "Occasional check-ins with the dev team",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check size={14} className="mt-1 shrink-0 text-[#a78bfa]" />
                          <span className="text-[#9ca3af]" style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.5 }}>
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Urgency note */}
                    <div
                      className="mt-6 px-4 py-3 rounded-xl flex items-start gap-3"
                      style={{ backgroundColor: "#a78bfa08", border: "1px solid #a78bfa20" }}
                    >
                      <Clock size={14} className="text-[#a78bfa] mt-0.5 shrink-0" />
                      <p className="text-[#9ca3af]" style={{ fontFamily: "Inter, sans-serif", fontSize: 12, lineHeight: 1.6 }}>
                        This is a <span className="text-[#a78bfa]" style={{ fontWeight: 600 }}>temporary program</span> while we build out club-specific features.
                        Once we've filled our founding cohort, this offer closes and club pricing moves to a paid tier.
                      </p>
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-8 pt-8 border-t border-[#1f2937] flex flex-col sm:flex-row items-center justify-between gap-5">
                  <div className="text-center sm:text-left">
                    <div className="text-[#f3f4f6] mb-1" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 16 }}>
                      Think your club is a good fit?
                    </div>
                    <div className="text-[#6b7280]" style={{ fontFamily: "Inter, sans-serif", fontSize: 13 }}>
                      Tell us about your layout, your members, and how you run operations.{" "}
                      <button onClick={() => navigate("/clubs")} className="text-[#a78bfa] hover:underline" style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13 }}>
                        Learn more about the program &rarr;
                      </button>
                    </div>
                  </div>
                  <a
                    href="mailto:clubs@signalcab.com?subject=Founding%20Club%20Application"
                    className="shrink-0 flex items-center gap-2 px-7 py-3.5 rounded-xl transition-all active:translate-y-0.5"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 15,
                      background: "linear-gradient(135deg, #a78bfa, #7c5ce0)",
                      color: "#fff",
                      boxShadow: "0 4px 24px rgba(167, 139, 250, 0.3)",
                    }}
                  >
                    <Mail size={16} />
                    Apply Now
                    <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-[#f9fafb] mb-4" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700 }}>
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
                  <span className="text-[#f3f4f6] pr-4" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 15 }}>
                    {faq.q}
                  </span>
                  {openFaq === i ? (
                    <ChevronUp size={18} className="text-[#6b7280] shrink-0" />
                  ) : (
                    <ChevronDown size={18} className="text-[#6b7280] shrink-0" />
                  )}
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-[#9ca3af]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.7 }}>
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
            <h2 className="text-[#f9fafb] mb-3" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(24px, 3.5vw, 36px)', fontWeight: 700 }}>
              Free During Beta
            </h2>
            <p className="text-[#6b7280] mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.7 }}>
              Join via TestFlight and get full access to every feature at no cost while we're in beta. No credit card, no commitment.
            </p>
            {/* <button
              className="inline-flex items-center gap-2 bg-[#00ffaa] text-[#0a0f1a] px-8 py-4 rounded-xl shadow-[0_4px_24px_rgba(0,255,170,0.25)] hover:shadow-[0_4px_32px_rgba(0,255,170,0.4)] transition-all active:translate-y-0.5"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16 }}
            >
              <Apple size={20} />
              Download on the App Store
              <ArrowRight size={16} />
            </button> */}
            <a
              href={TESTFLIGHT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl transition-all active:translate-y-0.5"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: 16,
                backgroundColor: "#9d5bff",
                color: "#fff",
                boxShadow: "0 4px 24px rgba(157, 91, 255, 0.3)",
              }}
            >
              <TestTube size={20} />
              Join Free Beta
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}