import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Send, Github, ArrowRight, MessageSquare, Clock, Users } from "lucide-react";
import { Footer } from "./Footer";

export function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subjectLine = subject || "Signal Cab Website Inquiry";
    const body = `${message}\n\n—\n${name}\n${email}`;
    window.location.href = `mailto:yo@signalcab.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      {/* Hero */}
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute top-[30%] right-[20%] w-[400px] h-[400px] bg-[#00ffaa]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[10%] left-[15%] w-[300px] h-[300px] bg-[#00d9ff]/5 rounded-full blur-[120px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12 sm:mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p
              className="text-[#00ffaa] mb-3"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              Get In Touch
            </p>
            <h1
              className="text-[#f9fafb] mb-4"
              style={{
                fontFamily: "Lora, serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              We'd Love to{" "}
              <span className="bg-gradient-to-r from-[#00ffaa] to-[#00d9ff] bg-clip-text text-transparent">
                Hear From You
              </span>
            </h1>
            <p
              className="text-[#6b7280] max-w-xl mx-auto"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 16, lineHeight: 1.7 }}
            >
              Have a question, feature request, or want to report a bug? Drop us
              a line and we'll get back to you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="relative pb-16 sm:pb-24 bg-[#0a0f1a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
            {/* Sidebar */}
            <motion.div
              className="lg:col-span-2 space-y-6"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Direct email card */}
              <div className="p-6 bg-[#111827] rounded-2xl border border-[#1f2937]">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ backgroundColor: "#00ffaa15" }}
                >
                  <Mail size={24} className="text-[#00ffaa]" />
                </div>
                <h3
                  className="text-[#f3f4f6] mb-1"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 16 }}
                >
                  Email Us Directly
                </h3>
                <a
                  href="mailto:yo@signalcab.com"
                  className="text-[#00ffaa] hover:underline"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: 14 }}
                >
                  yo@signalcab.com
                </a>
              </div>

              {/* Info cards */}
              {[
                {
                  icon: MessageSquare,
                  title: "General Inquiries",
                  desc: "Questions about Signal Cab, partnerships, or press? We're all ears.",
                  color: "#00d9ff",
                },
                {
                  icon: Clock,
                  title: "Response Time",
                  desc: "We typically respond within 24-48 hours during the work week.",
                  color: "#a78bfa",
                },
                {
                  icon: Users,
                  title: "Club Inquiries",
                  desc: "Interested in the Founding Clubs pilot? Mention your club name and size.",
                  color: "#00ffaa",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="p-5 bg-[#111827] rounded-2xl border border-[#1f2937]"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{ backgroundColor: `${card.color}15` }}
                    >
                      <card.icon size={20} style={{ color: card.color }} />
                    </div>
                    <div>
                      <h4
                        className="text-[#f3f4f6] mb-1"
                        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14 }}
                      >
                        {card.title}
                      </h4>
                      <p
                        className="text-[#6b7280]"
                        style={{ fontFamily: "Inter, sans-serif", fontSize: 13, lineHeight: 1.6 }}
                      >
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* GitHub link */}
              <a
                href="https://github.com/wemps"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 bg-[#111827] rounded-2xl border border-[#1f2937] hover:border-[#374151] transition-all group"
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center"
                  style={{ backgroundColor: "#f3f4f615" }}
                >
                  <Github size={20} className="text-[#f3f4f6]" />
                </div>
                <div className="flex-1">
                  <h4
                    className="text-[#f3f4f6]"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 14 }}
                  >
                    Open an Issue on GitHub
                  </h4>
                  <p
                    className="text-[#6b7280]"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: 12 }}
                  >
                    Bug reports & feature requests
                  </p>
                </div>
                <ArrowRight
                  size={16}
                  className="text-[#4b5563] group-hover:text-[#00ffaa] group-hover:translate-x-1 transition-all"
                />
              </a>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              className="lg:col-span-3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <form
                onSubmit={handleSubmit}
                className="p-6 sm:p-8 bg-[#111827] rounded-2xl border border-[#1f2937]"
              >
                <h2
                  className="text-[#f9fafb] mb-6"
                  style={{ fontFamily: "Lora, serif", fontSize: 24, fontWeight: 700 }}
                >
                  Send a Message
                </h2>

                <div className="grid sm:grid-cols-2 gap-5 mb-5">
                  {/* Name */}
                  <div>
                    <label
                      className="block text-[#9ca3af] mb-2"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13 }}
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your name"
                      className="w-full bg-[#0a0f1a] border border-[#1f2937] rounded-xl px-4 py-3 text-[#f3f4f6] placeholder-[#4b5563] focus:outline-none focus:border-[#00ffaa] focus:shadow-[0_0_0_3px_rgba(0,255,170,0.1)] transition-all"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: 14 }}
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label
                      className="block text-[#9ca3af] mb-2"
                      style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13 }}
                    >
                      Email
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full bg-[#0a0f1a] border border-[#1f2937] rounded-xl px-4 py-3 text-[#f3f4f6] placeholder-[#4b5563] focus:outline-none focus:border-[#00ffaa] focus:shadow-[0_0_0_3px_rgba(0,255,170,0.1)] transition-all"
                      style={{ fontFamily: "Inter, sans-serif", fontSize: 14 }}
                    />
                  </div>
                </div>

                {/* Subject */}
                <div className="mb-5">
                  <label
                    className="block text-[#9ca3af] mb-2"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13 }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    value={subject}
                    onChange={(e) => setSubject(e.target.value)}
                    placeholder="What's this about?"
                    className="w-full bg-[#0a0f1a] border border-[#1f2937] rounded-xl px-4 py-3 text-[#f3f4f6] placeholder-[#4b5563] focus:outline-none focus:border-[#00ffaa] focus:shadow-[0_0_0_3px_rgba(0,255,170,0.1)] transition-all"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: 14 }}
                  />
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label
                    className="block text-[#9ca3af] mb-2"
                    style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 13 }}
                  >
                    Message
                  </label>
                  <textarea
                    required
                    rows={6}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us what's on your mind..."
                    className="w-full bg-[#0a0f1a] border border-[#1f2937] rounded-xl px-4 py-3 text-[#f3f4f6] placeholder-[#4b5563] focus:outline-none focus:border-[#00ffaa] focus:shadow-[0_0_0_3px_rgba(0,255,170,0.1)] transition-all resize-none"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: 14, lineHeight: 1.6 }}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-3 w-full bg-[#00ffaa] text-[#0a0f1a] px-8 py-4 rounded-2xl shadow-[0_4px_24px_rgba(0,255,170,0.25)] hover:shadow-[0_4px_40px_rgba(0,255,170,0.4)] transition-all active:translate-y-0.5"
                  style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 16 }}
                >
                  <Send size={18} />
                  Send Message
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform"
                  />
                </button>

                <p
                  className="text-[#4b5563] text-center mt-4"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: 12 }}
                >
                  This will open your default email client addressed to yo@signalcab.com
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
