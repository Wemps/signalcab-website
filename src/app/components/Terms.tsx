import { motion } from "motion/react";
import { Footer } from "./Footer";

export function Terms() {
  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <section className="relative pt-32 sm:pt-40 pb-16 sm:pb-24">
        <div className="absolute top-[30%] left-[20%] w-[400px] h-[400px] bg-[#00d9ff]/5 rounded-full blur-[150px]" />

        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
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
              Legal
            </p>
            <h1
              className="text-[#f9fafb] mb-8"
              style={{
                fontFamily: "Lora, serif",
                fontSize: "clamp(32px, 5vw, 48px)",
                fontWeight: 700,
                lineHeight: 1.1,
              }}
            >
              Terms of Service
            </h1>

            <div
              className="space-y-6 text-[#9ca3af]"
              style={{ fontFamily: "Inter, sans-serif", fontSize: 15, lineHeight: 1.8 }}
            >
              <p className="text-[#6b7280]" style={{ fontSize: 13 }}>
                Last updated: March 2026
              </p>

              <p>
                These Terms of Service ("Terms") govern your use of the Signal Cab
                mobile application ("App") provided by Cascade Made, LLC ("we,"
                "our," or "us"). By downloading or using the App, you agree to
                these Terms.
              </p>

              <h2
                className="text-[#f3f4f6] pt-4"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 18 }}
              >
                Use of the App
              </h2>
              <p>
                Signal Cab is a DCC locomotive controller designed for model
                railroad enthusiasts. The App communicates with DCC command stations
                over your local WiFi network to control model locomotives.
              </p>
              <p>
                You are responsible for ensuring your DCC equipment is properly
                configured and maintained. Signal Cab is provided as a control
                interface and does not replace proper safety practices for your
                model railroad.
              </p>

              <h2
                className="text-[#f3f4f6] pt-4"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 18 }}
              >
                Beta Program
              </h2>
              <p>
                During the beta period, Signal Cab is provided via Apple TestFlight.
                Beta software may contain bugs, incomplete features, or
                instabilities. By participating in the beta, you acknowledge that
                the App is under active development.
              </p>

              <h2
                className="text-[#f3f4f6] pt-4"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 18 }}
              >
                Intellectual Property
              </h2>
              <p>
                Signal Cab, its design, code, and content are the property of
                Cascade Made, LLC. You may not copy, modify, distribute, or reverse
                engineer the App.
              </p>

              <h2
                className="text-[#f3f4f6] pt-4"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 18 }}
              >
                Limitation of Liability
              </h2>
              <p>
                Signal Cab is provided "as is" without warranty of any kind. We are
                not liable for any damage to your model railroad equipment,
                locomotives, or command stations arising from use of the App.
              </p>

              <h2
                className="text-[#f3f4f6] pt-4"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 18 }}
              >
                Changes to Terms
              </h2>
              <p>
                We may update these Terms from time to time. Continued use of the
                App following any changes constitutes acceptance of the revised
                Terms.
              </p>

              <h2
                className="text-[#f3f4f6] pt-4"
                style={{ fontFamily: "Inter, sans-serif", fontWeight: 600, fontSize: 18 }}
              >
                Contact
              </h2>
              <p>
                If you have questions about these Terms, please contact us at{" "}
                <a
                  href="mailto:yo@signalcab.com"
                  className="text-[#00ffaa] hover:underline"
                >
                  yo@signalcab.com
                </a>
                .
              </p>

              <p className="text-[#4b5563] pt-6 border-t border-[#1f2937]" style={{ fontSize: 13 }}>
                &copy; 2026 Cascade Made, LLC. All rights reserved.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
