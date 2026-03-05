import { Train, Gauge, Wifi, Sliders, Zap, Shield, ChevronRight, Apple, Smartphone, ArrowRight, Star } from "lucide-react";
import { motion } from "motion/react";
import { Footer } from "./Footer";
import appIcon from "figma:asset/fcaaa15f3576d3bc1c1860ab3a3311ff14c9bdee.png";
import locomotiveBg from "figma:asset/75387c7359bf2c155c3d45c432aeaa4d61ba76c7.png";
import tracksBg from "figma:asset/da7bef8967020ad874525197eb71ac1216454e90.png";
import logo from "figma:asset/b5f733e9f3a9a1b57f73caac2b271fc375e22b21.png";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const testimonials = [
  { name: "Mike R.", role: "HO Scale Enthusiast", text: "Signal Cab completely changed how I run my layout. The throttle feel is incredible.", rating: 5 },
  { name: "Sarah L.", role: "Club Layout Operator", text: "Our whole club switched to Signal Cab. Multiple operators, zero conflicts. It just works.", rating: 5 },
  { name: "James T.", role: "N Scale Collector", text: "Finally, a DCC app that doesn't feel like it was designed in 2005. Beautiful and functional.", rating: 5 },
];

const capabilities = [
  { icon: Train, label: "Fleet Management", desc: "Organize your entire locomotive roster", color: "#00ffaa" },
  { icon: Gauge, label: "128 Speed Steps", desc: "Ultra-smooth throttle resolution", color: "#00d9ff" },
  { icon: Sliders, label: "F0-F28 Functions", desc: "Complete function button mapping", color: "#a78bfa" },
  { icon: Wifi, label: "WiFi DCC", desc: "Wireless command station connection", color: "#00ffaa" },
  { icon: Zap, label: "Real-time", desc: "Sub-100ms command latency", color: "#f59e0b" },
  { icon: Shield, label: "Emergency Stop", desc: "One-tap E-Stop with haptics", color: "#ef4444" },
];

export function LandingV2() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero - Split layout with large imagery */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a0f1a] via-[#0d1a2a] to-[#0a1520]" />
          <div className="absolute right-0 bottom-0 w-[70%] opacity-[0.06]">
            <img src={locomotiveBg} alt="" className="w-full" />
          </div>
          <div className="absolute left-0 bottom-0 w-[50%] opacity-[0.03]">
            <img src={tracksBg} alt="" className="w-full" />
          </div>
          {/* Gradient orbs */}
          <div className="absolute top-[20%] right-[20%] w-[400px] h-[400px] bg-[#00ffaa]/8 rounded-full blur-[150px]" />
          <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-[#00d9ff]/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-32 pb-16 w-full">
          <div className="max-w-3xl mx-auto text-center lg:text-left lg:mx-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-8">
                <img src={appIcon} alt="" className="w-14 h-14 rounded-2xl shadow-[0_0_30px_rgba(0,255,170,0.15)]" />
                <div>
                  <div className="text-[#00ffaa]" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 20, letterSpacing: 2 }}>
                    SIGNAL CAB
                  </div>
                  <div className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 12 }}>DCC Locomotive Controller</div>
                </div>
              </div>

              <h1 className="text-[#f9fafb] mb-6" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(40px, 6vw, 64px)', fontWeight: 700, lineHeight: 1.05 }}>
                The Throttle<br />
                <span className="bg-gradient-to-r from-[#00ffaa] to-[#00d9ff] bg-clip-text text-transparent">Reimagined</span>
              </h1>

              <p className="text-[#9ca3af] mb-10 max-w-xl mx-auto lg:mx-0" style={{ fontFamily: 'Inter, sans-serif', fontSize: 18, lineHeight: 1.8 }}>
                Precision DCC control meets modern design. Manage your fleet, 
                command your locomotives, and run your railroad — all from your iPhone.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <button className="group flex items-center justify-center gap-3 bg-[#00ffaa] text-[#0a0f1a] px-8 py-4 rounded-2xl shadow-[0_4px_24px_rgba(0,255,170,0.25)] hover:shadow-[0_4px_40px_rgba(0,255,170,0.4)] transition-all"
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
              <div className="mt-12 flex items-center gap-6 justify-center lg:justify-start">
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
          </div>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section id="features" className="py-16 sm:py-24 bg-[#0d1117] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#00ffaa] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
              Capabilities
            </p>
            <h2 className="text-[#f9fafb] mb-4" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 700 }}>
              Powerful Control, <span className="text-[#00d9ff]">Beautiful Interface</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {capabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                className="group relative p-5 sm:p-6 bg-[#111827] rounded-2xl border border-[#1f2937] hover:border-[#374151] transition-all overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ backgroundColor: `${cap.color}10` }} />
                <cap.icon size={28} style={{ color: cap.color }} className="mb-4" />
                <h3 className="text-[#f3f4f6] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 16 }}>
                  {cap.label}
                </h3>
                <p className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13, lineHeight: 1.6 }}>
                  {cap.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* App Showcase - Visual Section */}
      <section id="how-it-works" className="py-16 sm:py-24 bg-[#0a0f1a] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00ffaa]/3 rounded-full blur-[200px]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Visual side */}
            <motion.div
              className="order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="relative max-w-sm mx-auto">
                {/* Phone frame */}
                <div className="bg-[#111827] rounded-[40px] p-3 border border-[#1f2937] shadow-[0_0_80px_rgba(0,255,170,0.08)]">
                  <div className="bg-gradient-to-b from-[#0d1a2a] to-[#0a0f1a] rounded-[32px] overflow-hidden aspect-[9/19]">
                    <div className="flex items-center justify-center pt-4 pb-2">
                      <div className="w-28 h-6 bg-[#1f2937] rounded-full" />
                    </div>
                    {/* Throttle screen mockup */}
                    <div className="px-5 pt-6">
                      <div className="text-center mb-6">
                        <div className="text-[#6b7280] mb-1" style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, textTransform: 'uppercase', letterSpacing: 2 }}>Controlling</div>
                        <div className="text-[#f9fafb]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 18 }}>Union Pacific 844</div>
                        <div className="text-[#6b7280] font-mono" style={{ fontSize: 12 }}>#844 \u2022 ƒM 13</div>
                      </div>

                      {/* Large speed display */}
                      <div className="text-center mb-6">
                        <div className="text-[#00ffaa]" style={{ fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 72 }}>67</div>
                        <div className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 12, letterSpacing: 2, textTransform: 'uppercase' }}>Speed %</div>
                      </div>

                      {/* Throttle bar */}
                      <div className="mx-auto w-12 h-40 bg-[#111827] rounded-full border border-[#1f2937] relative overflow-hidden mb-6">
                        <div className="absolute bottom-0 left-1 right-1 h-[67%] bg-gradient-to-t from-[#a78bfa] via-[#00d9ff] to-[#00ffaa] rounded-full opacity-80" />
                        <div className="absolute bottom-[63%] left-1/2 -translate-x-1/2 w-10 h-10 bg-[#a78bfa] rounded-full border-2 border-[#7c3aed] flex items-center justify-center shadow-[0_0_20px_rgba(167,139,250,0.4)]">
                          <span className="text-[#0a0f1a]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 11 }}>67</span>
                        </div>
                      </div>

                      {/* Controls */}
                      <div className="flex justify-center gap-3">
                        <div className="px-4 py-2.5 rounded-xl bg-[#1f2937] border border-[#374151]">
                          <span className="text-[#00d9ff]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12 }}>FWD</span>
                        </div>
                        <div className="px-4 py-2.5 rounded-xl bg-[#ef4444]/10 border-2 border-[#ef4444]">
                          <span className="text-[#ef4444]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 700, fontSize: 12 }}>E-STOP</span>
                        </div>
                        <div className="px-4 py-2.5 rounded-xl bg-[#1f2937] border border-[#374151]">
                          <span className="text-[#9ca3af]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 12 }}>REV</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text side */}
            <motion.div
              className="order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[#00ffaa] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
                Throttle Control
              </p>
              <h2 className="text-[#f9fafb] mb-6" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700 }}>
                Feels Like a <span className="text-[#a78bfa]">Real Throttle</span>
              </h2>
              <p className="text-[#9ca3af] mb-8" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.8 }}>
                Our precision throttle uses 128 speed steps with a cool-to-warm gradient 
                that gives you instant visual feedback. The tactile button design is inspired 
                by physical DCC controls — raised buttons that feel pressable with depth and shadow.
              </p>

              <div className="space-y-4">
                {[
                  { title: "Cool-to-Warm Gradient", desc: "Visual speed indicator from mint green to purple" },
                  { title: "Haptic Feedback", desc: "Feel every speed step change in your hand" },
                  { title: "E-Stop Always Visible", desc: "Emergency stop is always one tap away" },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#00ffaa] mt-2 shrink-0" />
                    <div>
                      <div className="text-[#f3f4f6]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 15 }}>{item.title}</div>
                      <div className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14 }}>{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-24 bg-[#0d1117]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[#00ffaa] mb-3" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 13, letterSpacing: 2, textTransform: 'uppercase' }}>
              Community
            </p>
            <h2 className="text-[#f9fafb]" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 36px)', fontWeight: 700 }}>
              What Operators Are <span className="text-[#00ffaa]">Saying</span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <motion.div
                key={t.name}
                className="p-6 bg-[#111827] rounded-2xl border border-[#1f2937]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star key={s} size={14} className="text-[#f59e0b] fill-[#f59e0b]" />
                  ))}
                </div>
                <p className="text-[#d1d5db] mb-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14, lineHeight: 1.7, fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
                <div>
                  <div className="text-[#f3f4f6]" style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 14 }}>{t.name}</div>
                  <div className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 12 }}>{t.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery / Photo Section */}
      <section id="specs" className="py-16 sm:py-24 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-6 items-stretch">
            {/* Large image */}
            <div className="lg:col-span-3 rounded-2xl overflow-hidden relative aspect-[4/3] lg:aspect-auto">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1740381300608-b05013a8bf9e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyYWlscm9hZCUyMHRyYWNrcyUyMHN1bnNldCUyMHNjZW5pY3xlbnwxfHx8fDE3NzI0MjcyODV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Railroad tracks"
                className="w-full h-full object-cover min-h-[300px]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1a] via-[#0a0f1a]/40 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-[#f9fafb] mb-2" style={{ fontFamily: 'Lora, serif', fontWeight: 700, fontSize: 24 }}>
                  Built for the Track
                </h3>
                <p className="text-[#9ca3af]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 14 }}>
                  Designed with real operators in mind, from basement layouts to club-scale operations.
                </p>
              </div>
            </div>

            {/* Stats column */}
            <div className="lg:col-span-2 grid grid-cols-2 lg:grid-cols-1 gap-4 sm:gap-6">
              {[
                { value: "2,000+", label: "Active Operators", color: "#00ffaa" },
                { value: "128", label: "Speed Steps", color: "#00d9ff" },
                { value: "<100ms", label: "Response Time", color: "#a78bfa" },
                { value: "4.9\u2605", label: "App Store Rating", color: "#f59e0b" },
              ].map((stat) => (
                <div key={stat.label} className="p-4 sm:p-5 bg-[#111827] rounded-2xl border border-[#1f2937] flex items-center gap-4">
                  <div className="shrink-0" style={{ color: stat.color, fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700, fontSize: 24 }}>
                    {stat.value}
                  </div>
                  <div className="text-[#6b7280]" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13 }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-32 bg-[#0d1117] relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00ffaa]/5 rounded-full blur-[150px]" />
        </div>
        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-center mb-8">
              <img src={logo} alt="Signal Cab" className="h-10 sm:h-12" />
            </div>
            <h2 className="text-[#f9fafb] mb-4" style={{ fontFamily: 'Lora, serif', fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: 700, lineHeight: 1.1 }}>
              Your Railroad.<br />
              <span className="text-[#00ffaa]">Your Control.</span>
            </h2>
            <p className="text-[#6b7280] mb-10 max-w-md mx-auto" style={{ fontFamily: 'Inter, sans-serif', fontSize: 16, lineHeight: 1.7 }}>
              Download Signal Cab today and experience DCC control the way it should be.
            </p>
            <button className="group inline-flex items-center gap-3 bg-[#00ffaa] text-[#0a0f1a] px-10 py-5 rounded-2xl shadow-[0_4px_40px_rgba(0,255,170,0.3)] hover:shadow-[0_4px_60px_rgba(0,255,170,0.5)] transition-all"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: 18 }}>
              <Apple size={24} />
              Download Free
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <p className="text-[#4b5563] mt-4" style={{ fontFamily: 'Inter, sans-serif', fontSize: 13 }}>
              iOS 15+ required \u2022 Android coming soon
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
