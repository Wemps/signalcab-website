import { Train, Gauge, Wifi, Sliders, Zap, Shield, ChevronRight, Apple, Smartphone, Repeat, Lightbulb, OctagonX, ArrowRight, Star, Radio, Cpu, Power, Hash, Layers, SlidersHorizontal, Users, CircuitBoard, Vibrate, Volume2, Search, Grip, Link, ShieldCheck, Mic, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { Footer } from "./Footer";
import appIcon from "figma:asset/fcaaa15f3576d3bc1c1860ab3a3311ff14c9bdee.png";
import locomotiveBg from "figma:asset/75387c7359bf2c155c3d45c432aeaa4d61ba76c7.png";
import heroPhone from "figma:asset/2dc49ee224cdb04c4610e5a1e3a7138e071439c6.png";

const features = [
  {
    icon: Grip,
    title: "Multi-Throttle",
    description: "Control multiple locomotives with a swipeable carousel. Quick-switch between active locos without missing a beat.",
    color: "#00d9ff",
  },
  {
    icon: Train,
    title: "Locomotive Library",
    description: "Full roster management with search, favorites, and group organization. Import from other popular DCC apps like DCC-EX.",
    color: "#00ffaa",
  },
  {
    icon: Sliders,
    title: "Function Library",
    description: "Guided setup flows walk you through every function. Decoder defaults for SoundTraxx, Digitrax, and NMRA built in — plus fully customizable labels, icons, and colors to build your own.",
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
    description: "Built with modern design principles for a fast, intuitive experience. Tactile haptic feedback on the throttle, Siri commands, App Shortcuts, and customizable iPhone Action Button support.",
    color: "#f59e0b",
  },
  {
    icon: ShieldCheck,
    title: "Configurable Safety",
    description: "Choose your E-Stop behavior: stop your trains, stop all, or cut power. Address conflict detection and app-close safety options.",
    color: "#ef4444",
  },
];

const steps = [
  { step: "01", title: "Connect", description: "Pair Signal Cab with your DCC command station via WiFi." },
  { step: "02", title: "Add Locomotives", description: "Enter DCC addresses and customize your fleet with photos and names." },
  { step: "03", title: "Drive", description: "Take control with our precision throttle and function controls." },
];

export function LandingV1() {
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

              <h1 className="text-[#f9fafb] mb-6" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 700, lineHeight: 1.05 }}>
                The Throttle<br />
                <span className="bg-gradient-to-r from-[#00ffaa] to-[#00d9ff] bg-clip-text text-transparent">Reimagined</span>
              </h1>

              <p className="text-[#9ca3af] mb-10 max-w-xl" style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.8 }}>
                Precision DCC control meets modern design. Manage your fleet, 
                command your locomotives, and run your railroad — all from your iPhone.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="group flex items-center justify-center gap-3 bg-[#00ffaa] text-[#0a0f1a] px-8 py-4 rounded-2xl shadow-[0_4px_24px_rgba(0,255,170,0.25)] hover:shadow-[0_4px_40px_rgba(0,255,170,0.4)] transition-all active:translate-y-0.5"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16 }}>
                  <Apple size={22} />
                  Get Signal Cab
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="flex items-center justify-center gap-2 text-[#9ca3af] hover:text-[#f3f4f6] px-6 py-4 transition-colors"
                  style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 16 }}>
                  Watch Demo
                  <ChevronRight size={18} />
                </button>
              </div>

              {/* Social proof */}
              <div className="mt-12 flex items-center gap-6">
                <div className="flex -space-x-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1f2937] to-[#374151] border-2 border-[#0a0f1a] flex items-center justify-center">
                      <span className="text-[#6b7280]" style={{ fontSize: 10, fontFamily: 'Inter, sans-serif', fontWeight: 600 }}>
                        {["MR", "SL", "JT", "KW"][i - 1]}
                      </span>
                    </div>
                  ))}
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={14} className="text-[#f59e0b] fill-[#f59e0b]" />
                    ))}
                  </div>
                  <div className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 12 }}>Loved by 2,000+ operators</div>
                </div>
              </div>
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
                <h3 className="text-[#f3f4f6] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 18 }}>
                  {feature.title}
                </h3>
                <p className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.7 }}>
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-[#0a0f1a]">
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
        </div>
      </section>

      {/* Built for Reliability — Engineering Section */}
      <section id="specs" className="py-16 sm:py-24 bg-[#0d1117] relative overflow-hidden">
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
            <p className="text-[#a78bfa] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
              Engineering
            </p>
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

          {/* Technical Capabilities Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-12">
            {[
              { icon: Hash, value: "1–10293", label: "DCC Addresses", sub: "Short & long addressing", color: "#00ffaa" },
              { icon: SlidersHorizontal, value: "F0–F28", label: "Function Range", sub: "Momentary & latching", color: "#a78bfa" },
              { icon: Power, value: "Track Power", label: "Power Control", sub: "Main & prog tracks", color: "#ef4444" },
              { icon: Gauge, value: "128", label: "Speed Steps", sub: "Smooth resolution", color: "#00d9ff" },
            ].map((spec, i) => (
              <motion.div
                key={spec.label}
                className="bg-[#111827] rounded-2xl border border-[#1f2937] p-5 text-center hover:border-[#374151] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-9 h-9 rounded-lg flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: `${spec.color}12` }}>
                  <spec.icon size={18} style={{ color: spec.color }} />
                </div>
                <div className="mb-1" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 22, color: spec.color }}>
                  {spec.value}
                </div>
                <div className="text-[#f3f4f6] mb-0.5" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13 }}>
                  {spec.label}
                </div>
                <div className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11 }}>
                  {spec.sub}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Deep Technical Detail Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "mDNS Auto-Discovery",
                desc: "Automatic detection of command stations on your local network. No manual IP configuration — just connect to WiFi and Signal Cab finds your station.",
                color: "#00ffaa",
                icon: Search,
              },
              {
                title: "Auto-Reconnect",
                desc: "Lost connection? Signal Cab reconnects with exponential backoff and a configurable resume window (10–60 min) to pick up right where you left off.",
                color: "#00d9ff",
                icon: Wifi,
              },
              {
                title: "Speed Curve Editor",
                desc: "Edit CV2–6 and full 28-point speed tables with visual presets. Fine-tune acceleration, deceleration, and trim to match your prototype's characteristics.",
                color: "#a78bfa",
                icon: Sliders,
              },
              {
                title: "CV Programming",
                desc: "Read and write configuration variables on the programming track. Full decoder setup without needing a separate programmer or computer.",
                color: "#f59e0b",
                icon: Cpu,
              },
              {
                title: "Decoder Templates",
                desc: "Prebuilt function maps for SoundTraxx, Digitrax, and NMRA defaults. Or use the guided setup wizard to map functions step-by-step.",
                color: "#00d9ff",
                icon: Layers,
              },
              {
                title: "Siri & App Shortcuts",
                desc: "Trigger actions from Siri, Spotlight, or the Action Button. Open your library, fire an emergency stop, or launch a specific loco — hands-free.",
                color: "#00ffaa",
                icon: Mic,
              },
            ].map((card, i) => (
              <motion.div
                key={card.title}
                className="p-6 bg-[#111827] rounded-2xl border border-[#1f2937] hover:border-[#374151] transition-all"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: `${card.color}15` }}>
                  <card.icon size={20} style={{ color: card.color }} />
                </div>
                <h3 className="text-[#f3f4f6] mb-2" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16 }}>
                  {card.title}
                </h3>
                <p className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.7 }}>
                  {card.desc}
                </p>
              </motion.div>
            ))}
          </div>
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
              Download Signal Cab and experience the future of DCC locomotive control. Free to download, powerful to use.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="flex items-center justify-center gap-2 bg-[#00ffaa] text-[#0a0f1a] px-8 py-4 rounded-xl shadow-[0_4px_24px_rgba(0,255,170,0.25)] hover:shadow-[0_4px_32px_rgba(0,255,170,0.4)] transition-all"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16 }}>
                <Apple size={20} />
                Download for iOS
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#1f2937] text-[#f3f4f6] border border-[#374151] px-8 py-4 rounded-xl hover:bg-[#1f2937]/80 transition-all"
                style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: 16 }}>
                <Smartphone size={20} />
                Android Coming Soon
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}