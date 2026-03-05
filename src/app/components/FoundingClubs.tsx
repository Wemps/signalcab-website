import { useState } from "react";
import { useNavigate } from "react-router";
import { motion } from "motion/react";
import {
  Users,
  Check,
  Mail,
  ArrowRight,
  Clock,
  Shield,
  Sparkles,
  Infinity,
  Train,
  Gauge,
  Sliders,
  Grip,
  Link,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
  ExternalLink,
} from "lucide-react";
import { Footer } from "./Footer";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import appIcon from "figma:asset/fcaaa15f3576d3bc1c1860ab3a3311ff14c9bdee.png";
import heroPhone from "figma:asset/2dc49ee224cdb04c4610e5a1e3a7138e071439c6.png";

/* ── Data ── */

const foundingBenefits = [
  {
    icon: Infinity,
    title: "10 Lifetime Licenses",
    text: "Your club receives 10 full Signal Cab licenses that work forever — completely free, no strings attached.",
    color: "#00ffaa",
  },
  {
    icon: Clock,
    title: "Discounted Additional Licenses",
    text: "Need more than 10? After the program ends, founding clubs get exclusive discounted pricing on every additional license.",
    color: "#00d9ff",
  },
  {
    icon: Shield,
    title: "Direct Dev Access",
    text: "A dedicated channel to the Signal Cab team. Report issues, request features, get answers fast.",
    color: "#a78bfa",
  },
  {
    icon: Sparkles,
    title: "Shape the Roadmap",
    text: "Your club's real-world feedback directly influences the features we build next.",
    color: "#00ffaa",
  },
];

const whatWeAsk = [
  "Deploy Signal Cab at your club for real-world operations",
  "Share honest feedback on what works and what doesn't",
  "Help us understand multi-operator and session workflows",
  "Occasional check-ins with the dev team (email or video)",
];

const signalCabHighlights = [
  {
    icon: Grip,
    title: "Multi-Throttle",
    text: "Run multiple locomotives with a swipeable carousel.",
    color: "#00d9ff",
  },
  {
    icon: Train,
    title: "Locomotive Library",
    text: "Full roster management with search, favorites, and import.",
    color: "#00ffaa",
  },
  {
    icon: Sliders,
    title: "Function Library",
    text: "Guided setup with built-in decoder defaults for major brands.",
    color: "#a78bfa",
  },
  {
    icon: Link,
    title: "Consist Control",
    text: "Build virtual and advanced consists with per-member config.",
    color: "#00ffaa",
  },
  {
    icon: Gauge,
    title: "128 Speed Steps",
    text: "Smooth, precise throttle with haptic feedback.",
    color: "#00d9ff",
  },
  {
    icon: ShieldCheck,
    title: "Configurable Safety",
    text: "E-Stop behavior, address conflict detection, and more.",
    color: "#ef4444",
  },
];

const clubFaqs = [
  {
    q: "Who can join?",
    a: "Any model railroad club — NMRA chapters, museum railroads, community groups, home-based ops clubs. We're looking for a mix of sizes and setups.",
  },
  {
    q: "How many clubs are you accepting?",
    a: "A small founding cohort. Once we've filled the group, this program closes. We'll update this page when spots are getting low.",
  },
  {
    q: "What does '10 lifetime licenses' mean?",
    a: "Your club receives 10 full Signal Cab licenses — no feature gating, no shared logins. Each license works forever at no cost, as a thank-you for participating.",
  },
  {
    q: "What's the time commitment?",
    a: "Minimal. Use Signal Cab during your normal operating sessions. We'll check in periodically via email or a short video call to hear how things are going.",
  },
  {
    q: "Do the licenses ever expire?",
    a: "No. The 10 licenses your club receives are free for life. They're yours to keep as a founding club benefit — no renewals, no future charges.",
  },
  {
    q: "What protocols does Signal Cab support?",
    a: "DCC-EX Native (stable), WiThrottle (beta), with Z21 and SRCP planned. All protocols are included — no upsells.",
  },
];

/* ── Component ── */

export function FoundingClubs() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* ════════════════════════════════════════════
          HERO
          ════════════════════════════════════════════ */}
      <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 overflow-hidden">
        {/* BG effects */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1a] via-[#100d20] to-[#0a0f1a]" />
          <div className="absolute top-[5%] right-[15%] w-[500px] h-[500px] bg-[#a78bfa]/8 rounded-full blur-[200px]" />
          <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-[#00ffaa]/5 rounded-full blur-[160px]" />
        </div>

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Urgency badge */}
              <motion.div
                className="inline-flex items-center gap-2 rounded-full px-5 py-2 mb-8"
                style={{
                  background: "linear-gradient(135deg, #a78bfa18, #00ffaa10)",
                  border: "1px solid #a78bfa35",
                }}
                animate={{
                  boxShadow: [
                    "0 0 20px #a78bfa10",
                    "0 0 35px #a78bfa20",
                    "0 0 20px #a78bfa10",
                  ],
                }}
                transition={{ duration: 2.5, repeat: 999, ease: "easeInOut" }}
              >
                <motion.div
                  className="w-2 h-2 rounded-full bg-[#00ffaa]"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.5, repeat: 999, ease: "easeInOut" }}
                />
                <span
                  style={{
                    fontFamily: "Space Grotesk, sans-serif",
                    fontWeight: 700,
                    fontSize: 12,
                    letterSpacing: 1.5,
                    color: "#a78bfa",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Limited Pilot Program — Join Now
                </span>
              </motion.div>

              <h1
                className="text-[#f9fafb] mb-6"
                style={{
                  fontFamily: "Lora, serif",
                  fontSize: "clamp(36px, 5.5vw, 60px)",
                  fontWeight: 700,
                  lineHeight: 1.08,
                }}
              >
                Run Your Club on{" "}
                <span className="bg-gradient-to-r from-[#a78bfa] to-[#00ffaa] bg-clip-text text-transparent">
                  Signal Cab
                </span>
                <br />
                <span
                  className="text-[#00ffaa]"
                  style={{ fontSize: "clamp(32px, 4.5vw, 52px)" }}
                >
                  Free for Life
                </span>
              </h1>

              <p
                className="text-[#9ca3af] max-w-2xl mx-auto mb-10"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 18,
                  lineHeight: 1.8,
                }}
              >
                We're hand-picking a small group of model railroad clubs to be
                our founding partners. Deploy Signal Cab at your club, give us
                real-world feedback, and your club gets 10 lifetime licenses — completely free.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:clubs@signalcab.com?subject=Founding%20Club%20Inquiry"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl transition-all active:translate-y-0.5"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 600,
                    fontSize: 16,
                    background: "linear-gradient(135deg, #a78bfa, #7c5ce0)",
                    color: "#fff",
                    boxShadow: "0 4px 30px rgba(167, 139, 250, 0.35)",
                  }}
                >
                  <Mail size={18} />
                  Join the Program
                  <ArrowRight size={16} />
                </a>
                <button
                  onClick={() => navigate("/")}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-[#9ca3af] hover:text-[#f3f4f6] border border-[#1f2937] hover:border-[#374151] transition-all"
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 500,
                    fontSize: 16,
                  }}
                >
                  Learn About Signal Cab
                  <ExternalLink size={16} />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          WHAT IS SIGNAL CAB — light overview
          ════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#0d1117] relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-[#00d9ff]/4 rounded-full blur-[140px]" />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left — text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <img
                  src={appIcon}
                  alt="Signal Cab"
                  className="w-12 h-12 rounded-xl shadow-[0_0_20px_rgba(0,255,170,0.12)]"
                />
                <div>
                  <div
                    className="text-[#00ffaa]"
                    style={{
                      fontFamily: "Space Grotesk, sans-serif",
                      fontWeight: 700,
                      fontSize: 16,
                      letterSpacing: 1.5,
                    }}
                  >
                    SIGNAL CAB
                  </div>
                  <div
                    className="text-[#6b7280]"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                    }}
                  >
                    DCC Controller for iOS
                  </div>
                </div>
              </div>

              <h2
                className="text-[#f9fafb] mb-4"
                style={{
                  fontFamily: "Lora, serif",
                  fontSize: "clamp(24px, 3.5vw, 36px)",
                  fontWeight: 700,
                }}
              >
                Modern DCC Control,{" "}
                <span className="text-[#00ffaa]">Built for Clubs</span>
              </h2>
              <p
                className="text-[#9ca3af] mb-8"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: 16,
                  lineHeight: 1.8,
                }}
              >
                Signal Cab replaces clunky handheld throttles with a beautiful
                iOS app. Multi-throttle support, full function mapping, consist
                building, and CV programming — all from your members' iPhones.
                It connects to your existing command station over WiFi.
              </p>

              <div className="grid grid-cols-2 gap-4">
                {signalCabHighlights.map((h) => (
                  <div key={h.title} className="flex items-start gap-3">
                    <div
                      className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 mt-0.5"
                      style={{ backgroundColor: `${h.color}12` }}
                    >
                      <h.icon size={14} style={{ color: h.color }} />
                    </div>
                    <div>
                      <div
                        className="text-[#f3f4f6]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontWeight: 600,
                          fontSize: 13,
                        }}
                      >
                        {h.title}
                      </div>
                      <div
                        className="text-[#6b7280]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: 11,
                          lineHeight: 1.5,
                        }}
                      >
                        {h.text}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => navigate("/")}
                className="mt-8 inline-flex items-center gap-2 text-[#00ffaa] hover:gap-3 transition-all"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 14,
                }}
              >
                See the full feature breakdown
                <ArrowRight size={14} />
              </button>
            </motion.div>

            {/* Right — phone image */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
            >
              <div className="relative max-w-[340px] sm:max-w-[400px]">
                {/* Glow behind phone */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#a78bfa]/10 to-[#00ffaa]/8 rounded-[60px] blur-[60px] scale-90" />
                <img
                  src={heroPhone}
                  alt="Signal Cab app interface"
                  className="relative w-full h-auto"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          THE PROGRAM — main founding clubs card
          ════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#0a0f1a] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-[#a78bfa]/6 rounded-full blur-[200px]" />
        <div className="absolute bottom-0 right-[10%] w-[400px] h-[400px] bg-[#00ffaa]/4 rounded-full blur-[160px]" />

        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section header */}
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div
              className="text-[#a78bfa] mb-3"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: 12,
                letterSpacing: 2,
                textTransform: "uppercase" as const,
              }}
            >
              The Program
            </div>
            <h2
              className="text-[#f9fafb] mb-4"
              style={{
                fontFamily: "Lora, serif",
                fontSize: "clamp(28px, 4vw, 44px)",
                fontWeight: 700,
              }}
            >
              What Founding Clubs{" "}
              <span className="bg-gradient-to-r from-[#a78bfa] to-[#00ffaa] bg-clip-text text-transparent">
                Get
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
              This isn't a beta test. Signal Cab is production-ready. We need
              club-scale deployments to refine the multi-operator experience —
              and we're rewarding participating clubs with 10 lifetime licenses.
            </p>
          </motion.div>

          {/* Benefits grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-12">
            {foundingBenefits.map((b, i) => (
              <motion.div
                key={b.title}
                className="bg-[#111827] rounded-2xl border border-[#1f2937] p-6 hover:border-[#374151] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex items-start gap-4">
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: `${b.color}12` }}
                  >
                    <b.icon size={22} style={{ color: b.color }} />
                  </div>
                  <div>
                    <div
                      className="text-[#f3f4f6] mb-1"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontWeight: 600,
                        fontSize: 16,
                      }}
                    >
                      {b.title}
                    </div>
                    <p
                      className="text-[#9ca3af]"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 14,
                        lineHeight: 1.6,
                      }}
                    >
                      {b.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* The Deal card — gradient border */}
          <motion.div
            className="relative rounded-3xl p-[1px] mb-12"
            style={{
              background:
                "linear-gradient(135deg, #a78bfa60, #00ffaa40, #00d9ff40, #a78bfa60)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-[#111827] rounded-3xl overflow-hidden">
              {/* Header band */}
              <div
                className="relative px-6 sm:px-10 py-6 overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #a78bfa10, #00ffaa08)",
                }}
              >
                <div className="absolute top-0 right-0 w-[300px] h-[200px] bg-[#a78bfa]/8 rounded-full blur-[100px]" />
                <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-[#a78bfa]/15 shrink-0">
                      <Users size={24} className="text-[#a78bfa]" />
                    </div>
                    <div>
                      <div
                        className="text-[#f3f4f6]"
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontWeight: 700,
                          fontSize: 22,
                        }}
                      >
                        Founding Club Pass
                      </div>
                      <div
                        className="text-[#9ca3af]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: 13,
                        }}
                      >
                        Limited spots — join while the program is open
                      </div>
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1 shrink-0">
                    <span
                      className="text-[#f9fafb]"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 700,
                        fontSize: 48,
                      }}
                    >
                      $0
                    </span>
                    <span
                      className="text-[#6b7280]"
                      style={{
                        fontFamily: "Inter, sans-serif",
                        fontSize: 16,
                      }}
                    >
                      /forever
                    </span>
                  </div>
                </div>
              </div>

              {/* Perforated divider */}
              <div className="relative flex items-center">
                <div className="w-4 h-4 rounded-full -ml-2 shrink-0 bg-[#0a0f1a]" />
                <div className="flex-1 border-t-2 border-dashed border-[#a78bfa20]" />
                <div className="w-4 h-4 rounded-full -mr-2 shrink-0 bg-[#0a0f1a]" />
              </div>

              {/* Body */}
              <div className="px-6 sm:px-10 py-8">
                <div className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
                  {/* What you get — summary */}
                  <div>
                    <div
                      className="text-[#6b7280] mb-4"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 700,
                        fontSize: 11,
                        letterSpacing: 1.5,
                        textTransform: "uppercase" as const,
                      }}
                    >
                      Included
                    </div>
                    <ul className="space-y-3">
                      {[
                        "10 Signal Cab licenses — yours to keep forever",
                        "Full feature access — throttle, functions, consists, CV programming",
                        "All current and upcoming protocol support",
                        "Priority support channel with the dev team",
                        "Influence on the club features roadmap",
                        "Licenses never expire — free for life",
                      ].map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check
                            size={14}
                            className="mt-1 shrink-0 text-[#00ffaa]"
                          />
                          <span
                            className="text-[#d1d5db]"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: 14,
                              lineHeight: 1.5,
                            }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* What we ask */}
                  <div>
                    <div
                      className="text-[#6b7280] mb-4"
                      style={{
                        fontFamily: "Space Grotesk, sans-serif",
                        fontWeight: 700,
                        fontSize: 11,
                        letterSpacing: 1.5,
                        textTransform: "uppercase" as const,
                      }}
                    >
                      What we ask
                    </div>
                    <ul className="space-y-3">
                      {whatWeAsk.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <Check
                            size={14}
                            className="mt-1 shrink-0 text-[#a78bfa]"
                          />
                          <span
                            className="text-[#9ca3af]"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: 14,
                              lineHeight: 1.5,
                            }}
                          >
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Urgency callout */}
                    <div
                      className="mt-6 px-4 py-3 rounded-xl flex items-start gap-3"
                      style={{
                        backgroundColor: "#a78bfa08",
                        border: "1px solid #a78bfa20",
                      }}
                    >
                      <Clock
                        size={14}
                        className="text-[#a78bfa] mt-0.5 shrink-0"
                      />
                      <p
                        className="text-[#9ca3af]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12,
                          lineHeight: 1.6,
                        }}
                      >
                        This is a{" "}
                        <span
                          className="text-[#a78bfa]"
                          style={{ fontWeight: 600 }}
                        >
                          limited-time program
                        </span>
                        . Once our founding cohort is full, this offer closes.
                        Founding club licenses are free for life — join while
                        spots are available.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Ideal clubs section */}
          <motion.div
            className="bg-[#111827] rounded-2xl border border-[#1f2937] p-6 sm:p-8 mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3
              className="text-[#f3f4f6] mb-2"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 18,
              }}
            >
              Who we're looking for
            </h3>
            <p
              className="text-[#6b7280] mb-6"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 14,
                lineHeight: 1.7,
              }}
            >
              We want a diverse mix of clubs to stress-test Signal Cab in real
              conditions. If any of these describe you, we'd love to hear from
              you:
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                {
                  label: "NMRA Chapters & Divisions",
                  desc: "With regular meetings and scheduled operating sessions",
                },
                {
                  label: "DCC-EX or WiThrottle Layouts",
                  desc: "Connected layouts with WiFi connection capabilities",
                },
                {
                  label: "Any Club Size",
                  desc: "As long as you're a registered club with regular meetings",
                },
                {
                  label: "iOS & Android Members",
                  desc: "A majority of members have access to an iOS or Android device",
                },
                {
                  label: "Willing to Deploy & Recruit",
                  desc: "Ability to get members on board and give the app a real try",
                },
                {
                  label: "Tech-Forward Clubs",
                  desc: "Members or clubs that love technology and trying new things",
                },
              ].map((item) => (
                <div
                  key={item.label}
                  className="bg-[#0a0f1a] rounded-xl px-4 py-3"
                >
                  <div
                    className="text-[#f3f4f6]"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                    {item.label}
                  </div>
                  <div
                    className="text-[#6b7280]"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontSize: 12,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ════════════════════════════════════════════
          FAQ
          ════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#0d1117]">
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
              Club <span className="text-[#a78bfa]">Questions</span>
            </h2>
          </motion.div>

          <div className="space-y-3">
            {clubFaqs.map((faq, i) => (
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

      {/* ════════════════════════════════════════════
          BOTTOM CTA
          ════════════════════════════════════════════ */}
      <section className="py-16 sm:py-24 bg-[#0a0f1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#a78bfa]/5 via-transparent to-[#00ffaa]/5" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img
              src={appIcon}
              alt="Signal Cab"
              className="w-16 h-16 rounded-2xl mx-auto mb-6 shadow-[0_0_30px_rgba(167,139,250,0.2)]"
            />
            <h2
              className="text-[#f9fafb] mb-4"
              style={{
                fontFamily: "Lora, serif",
                fontSize: "clamp(26px, 4vw, 40px)",
                fontWeight: 700,
              }}
            >
              Think your club is a good fit?
            </h2>
            <p
              className="text-[#9ca3af] mb-4 max-w-xl mx-auto"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              Tell us about your layout, your members, and how you run
              operations. We'll get back to you within a few days.
            </p>
            <p
              className="text-[#6b7280] mb-8"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 13,
              }}
            >
              Spots are limited. Once the founding cohort is full, this page
              will be updated.
            </p>

            <a
              href="mailto:clubs@signalcab.com?subject=Founding%20Club%20Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl transition-all active:translate-y-0.5"
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: 16,
                background: "linear-gradient(135deg, #a78bfa, #7c5ce0)",
                color: "#fff",
                boxShadow: "0 4px 30px rgba(167, 139, 250, 0.35)",
              }}
            >
              <Mail size={18} />
              Join — clubs@signalcab.com
              <ArrowRight size={16} />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}