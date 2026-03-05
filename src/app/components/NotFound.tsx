import { useNavigate } from "react-router";
import { motion } from "motion/react";
import { ArrowLeft, TrainFront, AlertTriangle } from "lucide-react";
import { Footer } from "./Footer";

export function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0a0f1a]">
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background glow orbs */}
        <div className="absolute top-[30%] left-[40%] w-[400px] h-[400px] bg-[#ef4444]/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-[20%] right-[30%] w-[300px] h-[300px] bg-[#a78bfa]/5 rounded-full blur-[120px]" />

        <div className="relative max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Icon */}
            <motion.div
              className="inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-8"
              style={{ backgroundColor: "#ef444415" }}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, repeat: 999, ease: "easeInOut" }}
            >
              <AlertTriangle size={36} className="text-[#ef4444]" />
            </motion.div>

            {/* 404 number */}
            <div
              className="mb-4"
              style={{
                fontFamily: "Space Grotesk, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(80px, 15vw, 140px)",
                lineHeight: 1,
                color: "#1f2937",
              }}
            >
              404
            </div>

            <h1
              className="text-[#f9fafb] mb-4"
              style={{
                fontFamily: "Lora, serif",
                fontSize: "clamp(24px, 4vw, 36px)",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
            >
              End of the <span className="text-[#ef4444]">Line</span>
            </h1>

            <p
              className="text-[#6b7280] mb-10 max-w-md mx-auto"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: 16,
                lineHeight: 1.7,
              }}
            >
              This track doesn't go anywhere. The page you're looking for has
              been derailed, moved, or never existed.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate("/")}
                className="group flex items-center justify-center gap-3 bg-[#00ffaa] text-[#0a0f1a] px-8 py-4 rounded-2xl shadow-[0_4px_24px_rgba(0,255,170,0.25)] hover:shadow-[0_4px_40px_rgba(0,255,170,0.4)] transition-all active:translate-y-0.5"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 600,
                  fontSize: 16,
                }}
              >
                <ArrowLeft
                  size={18}
                  className="group-hover:-translate-x-1 transition-transform"
                />
                Back to Home
              </button>
              <button
                onClick={() => navigate("/pricing")}
                className="flex items-center justify-center gap-2 text-[#9ca3af] hover:text-[#f3f4f6] px-6 py-4 transition-colors"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                  fontSize: 16,
                }}
              >
                <TrainFront size={18} />
                View Pricing
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
