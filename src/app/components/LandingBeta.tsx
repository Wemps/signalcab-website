import { Train, Gauge, Wifi, Sliders, ChevronDown, Repeat, Lightbulb, OctagonX, ArrowRight, Radio, Cpu, CircuitBoard, Search, Grip, Link, ShieldCheck, ShieldAlert, Mic, Sparkles, TestTube, Download, RefreshCw, Baby } from "lucide-react";
import { motion } from "motion/react";
import { Footer } from "./Footer";
import appIcon from "figma:asset/fcaaa15f3576d3bc1c1860ab3a3311ff14c9bdee.png";
import locomotiveBg from "figma:asset/75387c7359bf2c155c3d45c432aeaa4d61ba76c7.png";
import heroPhone from "@/assets/hero-image.png";
import heroWelcome from "@/assets/white-hero-welcome.png";
import heroAdd from "@/assets/white-hero-create.png";
import heroThrottle from "@/assets/white-hero-throttle.png";

import { TESTFLIGHT_URL } from "../config";

const features = [
  {
    icon: Grip,
    title: "Multi-Throttle",
    description: "Control multiple locomotives with a swipeable carousel. Quick-switch between active locos without missing a beat. Full 128 speed step resolution for smooth, precise control.",
    color: "#00d9ff",
  },
  {
    icon: Train,
    title: "Locomotive Library",
    description: "Full roster management with search, favorites, and group organization. Supports short (1–127) and long (128–10293) DCC addresses. Import from other popular DCC apps like DCC-EX.",
    color: "#00ffaa",
  },
  {
    icon: Sliders,
    title: "Function Library",
    description: "Guided setup flows walk you through every function — F0 through F28, with support for both momentary and latching modes. Decoder defaults for SoundTraxx, Digitrax, and NMRA built in — plus fully customizable labels, icons, and colors to build your own.",
    color: "#a78bfa",
  },
  {
    icon: Link,
    title: "Consist Control",
    description: "Build virtual and advanced consists with per-member direction, speed trim, and automated decoder programming.",
    color: "#00ffaa",
  },
  {
    icon: Sparkles,
    title: "Modern Apple Design",
    description: "Built with modern iOS design principles for a fast, intuitive experience. Tactile haptic feedback keeps you in sync with every speed change. Siri commands, App Shortcuts, and Spotlight integration let you open your library, trigger an E-Stop, or launch a specific locomotive — hands-free. Customizable iPhone Action Button support included.",
    color: "#f59e0b",
  },
  {
    icon: Baby,
    title: "Kid Mode",
    description: "Let the next generation take the throttle — safely. Kid Mode caps the maximum speed, restricts access to sensitive functions, and locks the throttle screen so young engineers can't accidentally navigate away or shut down a locomotive mid-run.",
    color: "#f97316",
  },
  {
    icon: ShieldCheck,
    title: "Safety & Layout Control",
    description: "You decide how Signal Cab protects your layout. Configure E-Stop behavior, manage main and programming track power, and set what happens when you close the app. DCC address conflict detection keeps your roster clean.",
    color: "#ef4444",
  },
  {
    icon: Cpu,
    title: "CV Programming",
    badge: "Beta",
    description: "Read and write configuration variables on the programming track — no separate programmer needed. Includes a visual speed curve editor with CV2–6 and full 28-point speed table support to fine-tune acceleration, deceleration, and trim to match your prototype.",
    color: "#f59e0b",
  },
  {
    icon: Download,
    title: "Roster Import",
    description: "Bring your existing fleet with you. Import locomotive rosters from DCC-EX and JMRI today, with DigiTrains Pro support coming soon — no re-entering your collection from scratch.",
    color: "#00d9ff",
  },
];

const steps = [
  { step: "01", title: "Join the Beta", description: "Sign up via TestFlight and install Signal Cab on your iPhone." },
  { step: "02", title: "Add Locomotives", description: "Enter DCC addresses and customize your fleet with photos and names." },
  { step: "03", title: "Drive & Report", description: "Take control with our precision throttle — and let us know what you think." },
];

export function LandingBeta() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pb-0">
        {/* Background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1a2a] to-[#0a1520]" />
          <div className="absolute right-0 bottom-0 h-full w-full opacity-[0.06]">
            <img src={locomotiveBg} alt="" className="w-full h-full object-cover" />
          </div>
          {/* Gradient orbs */}
          <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-[#00ffaa]/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-[#00d9ff]/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* App icon + title lockup */}
              <div className="flex items-center gap-3 mb-8">
                <img src={appIcon} alt="" className="w-14 h-14 rounded-2xl shadow-[0_0_30px_rgba(0,255,170,0.15)]" />
                <div>
                  <div className="text-[#00ffaa]" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 20, letterSpacing: 2 }}>
                    SIGNAL CAB
                  </div>
                  <div className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 12 }}>DCC Controller</div>
                </div>
              </div>

              {/* Beta badge */}
              <motion.div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6"
                style={{
                  background: "linear-gradient(135deg, #00ffaa18, #00d9ff10)",
                  border: "1px solid #00ffaa35",
                }}
                animate={{
                  boxShadow: [
                    "0 0 16px #00ffaa10",
                    "0 0 28px #00ffaa20",
                    "0 0 16px #00ffaa10",
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
                    fontSize: 11,
                    letterSpacing: 1.5,
                    color: "#00ffaa",
                    textTransform: "uppercase" as const,
                  }}
                >
                  Now in Beta — Join via TestFlight
                </span>
              </motion.div>

              <h1 className="text-[#f9fafb] mb-6" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 700, lineHeight: 1.05 }}>
                The Throttle<br />
                <span className="bg-gradient-to-r from-[#00ffaa] to-[#00d9ff] bg-clip-text text-transparent">Reimagined</span>
              </h1>

              <p className="text-[#9ca3af] mb-10 max-w-xl" style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.8 }}>
                Precision DCC control meets modern design. Manage your fleet,
                command your locomotives, and run your railroad — all from your iPhone.
                We're looking for beta testers to help shape the future of Signal Cab.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={TESTFLIGHT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-3 bg-[#9d5bff] text-white px-8 py-4 rounded-2xl shadow-[0_4px_24px_rgba(157,91,255,0.3)] hover:shadow-[0_4px_40px_rgba(157,91,255,0.5)] transition-all active:translate-y-0.5"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16 }}
                >
                  <TestTube size={22} />
                  Join the Beta
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
                <a href="#features" className="flex items-center justify-center gap-2 text-[#9ca3af] hover:text-[#f3f4f6] px-6 py-4 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 16 }}>
                  Learn More
                  <ChevronDown size={18} />
                </a>
              </div>

              {/* Social proof — hidden until real testimonials are available */}
            </motion.div>

            {/* App Preview */}
            <motion.div
              className="flex justify-center lg:justify-end"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <div className="relative">
                {/* Phone screenshot - bottom extends behind next section */}
                <div className="max-w-[500px] sm:max-w-[560px] mb-[-200px]">
                  <img
                    src={heroPhone}
                    alt="Signal Cab throttle interface"
                    className="w-full h-auto"
                  />
                </div>

                {/* Floating Feature Pills */}

                {/* Headlight/Function buttons area — top right */}
                <motion.div
                  className="absolute -right-16 top-[32%] bg-[#111827]/95 backdrop-blur-sm border border-[#1f2937] rounded-2xl px-4 py-3 shadow-xl hidden sm:flex items-center gap-3"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: 999, ease: "easeInOut" }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#a78bfa]/15 flex items-center justify-center">
                    <Lightbulb size={14} className="text-[#a78bfa]" />
                  </div>
                  <div>
                    <div className="text-[#f3f4f6]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12 }}>Function Control</div>
                    <div className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 10 }}>Lights, bells & horns</div>
                  </div>
                </motion.div>

                {/* Throttle slider area — left middle */}
                <motion.div
                  className="absolute -left-20 top-[45%] bg-[#111827]/95 backdrop-blur-sm border border-[#1f2937] rounded-2xl px-4 py-3 shadow-xl hidden sm:flex items-center gap-3"
                  animate={{ y: [0, 8, 0] }}
                  transition={{ duration: 4.5, repeat: 999, ease: "easeInOut", delay: 0.8 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00d9ff]/15 flex items-center justify-center">
                    <Gauge size={14} className="text-[#00d9ff]" />
                  </div>
                  <div>
                    <div className="text-[#f3f4f6]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12 }}>Smooth Throttle</div>
                    <div className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 10 }}>128 speed steps</div>
                  </div>
                </motion.div>

                {/* Loco name / switcher area — top left */}
                <motion.div
                  className="absolute -left-14 top-[18%] bg-[#111827]/95 backdrop-blur-sm border border-[#1f2937] rounded-2xl px-4 py-3 shadow-xl hidden sm:flex items-center gap-3"
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 3.5, repeat: 999, ease: "easeInOut", delay: 1.5 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#00ffaa]/15 flex items-center justify-center">
                    <Repeat size={14} className="text-[#00ffaa]" />
                  </div>
                  <div>
                    <div className="text-[#f3f4f6]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12 }}>Quick Switching</div>
                    <div className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 10 }}>Swap locos instantly</div>
                  </div>
                </motion.div>

                {/* E-Stop / direction area — bottom right */}
                <motion.div
                  className="absolute -right-12 bottom-[28%] bg-[#111827]/95 backdrop-blur-sm border border-[#1f2937] rounded-2xl px-4 py-3 shadow-xl hidden sm:flex items-center gap-3 z-20"
                  animate={{ y: [0, 6, 0] }}
                  transition={{ duration: 3.8, repeat: 999, ease: "easeInOut", delay: 2 }}
                >
                  <div className="w-8 h-8 rounded-lg bg-[#ef4444]/15 flex items-center justify-center">
                    <OctagonX size={14} className="text-[#ef4444]" />
                  </div>
                  <div>
                    <div className="text-[#f3f4f6]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12 }}>Emergency Stop</div>
                    <div className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 10 }}>One-tap E-Stop</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="relative z-10 py-16 sm:py-24 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-[#f9fafb] mb-4" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}>
              Everything You Need to <span className="text-[#00ffaa]">Run Your Layout</span>
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.7 }}>
              Built by model railroaders, for model railroaders. Signal Cab combines powerful DCC control with a beautiful, intuitive interface.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <motion.div
                key={feature.title}
                className="group p-6 bg-[#111827] rounded-2xl border border-[#1f2937] hover:border-[#374151] transition-all hover:shadow-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon size={24} style={{ color: feature.color }} />
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-[#f3f4f6]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 18 }}>
                    {feature.title}
                  </h3>
                  {feature.badge && (
                    <span style={{
                      fontFamily: 'Space Grotesk, sans-serif',
                      fontWeight: 600,
                      fontSize: 10,
                      letterSpacing: 0.5,
                      color: feature.color,
                      backgroundColor: `${feature.color}15`,
                      border: `1px solid ${feature.color}30`,
                      padding: '2px 8px',
                      borderRadius: 999,
                    }}>{feature.badge}</span>
                  )}
                </div>
                <p className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="pt-16 sm:pt-24 pb-0 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#f9fafb] mb-4" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}>
              Up and Running in <span className="text-[#00d9ff]">Minutes</span>
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.7 }}>
              No manuals, no complicated setup. Connect to your command station, add your locomotives, and drive — Signal Cab gets out of your way so you can focus on running your railroad.
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.step}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <div className="text-[#00ffaa] mb-4" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 48, opacity: 0.3 }}>
                  {step.step}
                </div>
                <h3 className="text-[#f3f4f6] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 20 }}>
                  {step.title}
                </h3>
                <p className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.7 }}>
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Step screenshots */}
          <div className="grid sm:grid-cols-3 gap-8 mt-16 mb-[-91px]">
            {[heroWelcome, heroAdd, heroThrottle].map((img, i) => (
              <motion.div
                key={i}
                className="flex justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12 }}
              >
                <img
                  src={img}
                  alt=""
                  className="w-[300px] rounded-t-3xl shadow-2xl"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Built for Reliability — Engineering Section */}
      <section id="specs" className="py-16 sm:py-24 bg-[#0d1117] relative z-10 overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#a78bfa]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#00ffaa]/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-[#f9fafb] mb-4" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}>
              Built for <span className="text-[#a78bfa]">Reliability</span>
            </h2>
            <p className="text-[#6b7280] max-w-2xl mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.7 }}>
              Signal Cab is engineered from the ground up for serious operators. Full protocol support, complete DCC coverage, and the technical depth your layout demands.
            </p>
          </motion.div>

          {/* Protocols */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#9ca3af] text-center mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
              Protocol Support
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  name: "DCC-EX Native",
                  status: "Stable",
                  statusColor: "#00ffaa",
                  desc: "Native DCC-EX protocol support for direct communication with EX-CommandStation. Full command set including programming, turnouts, and diagnostics.",
                  icon: CircuitBoard,
                  color: "#00ffaa",
                },
                {
                  name: "WiThrottle",
                  status: "Beta",
                  statusColor: "#00d9ff",
                  desc: "WiThrottle protocol implementation for connectivity with JMRI WiThrottle servers, MRC, and other compatible command stations.",
                  icon: Wifi,
                  color: "#00d9ff",
                },
                {
                  name: "Z21 / SRCP",
                  status: "Planned",
                  statusColor: "#6b7280",
                  desc: "Upcoming support for the Roco Z21 protocol and SRCP, expanding compatibility to Roco, Fleischmann, and university-standard command systems.",
                  icon: Radio,
                  color: "#a78bfa",
                },
              ].map((protocol, i) => (
                <motion.div
                  key={protocol.name}
                  className="p-6 bg-[#111827] rounded-2xl border border-[#1f2937] hover:border-[#374151] transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${protocol.color}15` }}>
                      <protocol.icon size={20} style={{ color: protocol.color }} />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-[11px]"
                      style={{
                        fontFamily: 'Space Grotesk, sans-serif',
                        fontWeight: 600,
                        color: protocol.statusColor,
                        backgroundColor: `${protocol.statusColor}15`,
                        border: `1px solid ${protocol.statusColor}30`,
                      }}>
                      {protocol.status}
                    </span>
                  </div>
                  <h3 className="text-[#f3f4f6] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 18 }}>
                    {protocol.name}
                  </h3>
                  <p className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.7 }}>
                    {protocol.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* No Frustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h3 className="text-[#9ca3af] text-center mb-6" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
              No Frustration
            </h3>
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
              {[
                {
                  title: "Command Station Discovery",
                  desc: "Signal Cab automatically finds your command station on the local network via mDNS. No IP addresses to enter, no manual setup — just connect to WiFi and go.",
                  color: "#00ffaa",
                  icon: Search,
                },
                {
                  title: "Auto-Reconnect",
                  desc: "Lost connection? Signal Cab reconnects automatically with exponential backoff and a configurable resume window (10–60 min) to pick up right where you left off.",
                  color: "#00d9ff",
                  icon: RefreshCw,
                },
                {
                  title: "Collision Prevention",
                  desc: "Signal Cab detects when two locomotives share the same DCC address before they go into service — critical for club sessions where operators bring their own equipment.",
                  color: "#f59e0b",
                  icon: ShieldAlert,
                },
              ].map((card, i) => (
                <motion.div
                  key={card.title}
                  className="p-6 bg-[#111827] rounded-2xl border border-[#1f2937] hover:border-[#374151] transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                    style={{ backgroundColor: `${card.color}15` }}>
                    <card.icon size={20} style={{ color: card.color }} />
                  </div>
                  <h3 className="text-[#f3f4f6] mb-2" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 600, fontSize: 18 }}>
                    {card.title}
                  </h3>
                  <p className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.7 }}>
                    {card.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 bg-[#0a0f1a] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#00ffaa]/5 via-transparent to-[#00d9ff]/5" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <img src={appIcon} alt="Signal Cab" className="w-20 h-20 rounded-2xl mx-auto mb-8 shadow-[0_0_40px_rgba(0,255,170,0.2)]" />
            <h2 className="text-[#f9fafb] mb-4" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}>
              Ready to Take Control?
            </h2>
            <p className="text-[#6b7280] mb-8 max-w-lg mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.7 }}>
              Join the Signal Cab beta and be among the first to experience the future of DCC locomotive control. Free via TestFlight — your feedback shapes what we build.
            </p>
            <a
              href={TESTFLIGHT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#9d5bff] text-white px-8 py-4 rounded-xl shadow-[0_4px_24px_rgba(157,91,255,0.3)] hover:shadow-[0_4px_32px_rgba(157,91,255,0.5)] transition-all active:translate-y-0.5"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16 }}
            >
              <TestTube size={20} />
              Join the Beta via TestFlight
              <ArrowRight size={16} />
            </a>
            <p className="text-[#4b5563] mt-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13 }}>
              Requires iOS 15+ and the TestFlight app
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}