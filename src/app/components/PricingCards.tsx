import { motion } from "motion/react";
import { Check, Star, Users, Ticket, Crown, Zap, ArrowRight, Apple } from "lucide-react";

const plans = [
  {
    id: "monthly",
    name: "Monthly Ticket",
    price: "$7.99",
    period: "/month",
    trial: "1 week free trial",
    color: "#00d9ff",
    icon: Ticket,
    features: [
      "Full throttle & function control",
      "Locomotive library & roster",
      "Multi-throttle support",
      "Consist building",
      "CV programming",
      "All protocol support",
      "Decoder templates",
    ],
    extras: [],
    cta: "Start Free Trial",
    popular: false,
  },
  {
    id: "yearly",
    name: "Yearly Ticket",
    price: "$29.99",
    period: "/year",
    priceMonthly: "~$2.50/mo",
    savings: "Save 69%",
    trial: "1 week free trial",
    color: "#00ffaa",
    icon: Star,
    features: [
      "Full throttle & function control",
      "Locomotive library & roster",
      "Multi-throttle support",
      "Consist building",
      "CV programming",
      "All protocol support",
      "Decoder templates",
    ],
    extras: ["Family Sharing included"],
    cta: "Start Free Trial",
    popular: true,
  },
  {
    id: "lifetime",
    name: "Lifetime Ticket",
    price: "$79.99",
    period: "one-time",
    color: "#a78bfa",
    icon: Crown,
    features: [
      "Full throttle & function control",
      "Locomotive library & roster",
      "Multi-throttle support",
      "Consist building",
      "CV programming",
      "All protocol support",
      "Decoder templates",
      "All future updates",
    ],
    extras: [],
    cta: "Buy Lifetime Access",
    popular: false,
  },
];

function PerforatedDivider({ color }: { color: string }) {
  return (
    <div className="relative flex items-center my-0">
      {/* Left notch */}
      <div
        className="w-5 h-5 rounded-full -ml-2.5 shrink-0"
        style={{ backgroundColor: "#0a0f1a" }}
      />
      {/* Dashed line */}
      <div className="flex-1 border-t-2 border-dashed" style={{ borderColor: `${color}30` }} />
      {/* Right notch */}
      <div
        className="w-5 h-5 rounded-full -mr-2.5 shrink-0"
        style={{ backgroundColor: "#0a0f1a" }}
      />
    </div>
  );
}

export function PricingCards() {
  return (
    <section className="relative pb-20 sm:pb-28">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              className="relative flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              {/* Popular glow */}
              {plan.popular && (
                <div
                  className="absolute -inset-[1px] rounded-3xl opacity-40 blur-sm"
                  style={{ background: `linear-gradient(135deg, ${plan.color}, transparent, ${plan.color})` }}
                />
              )}

              <div
                className="relative bg-[#111827] rounded-3xl overflow-hidden border flex flex-col flex-1"
                style={{ borderColor: plan.popular ? `${plan.color}50` : "#1f2937" }}
              >
                {/* Top stub — ticket header (fixed height for alignment) */}
                <div className="p-6 pb-5 h-[280px] flex flex-col">
                  {/* Badge row */}
                  <div className="flex items-center justify-between mb-5">
                    <div
                      className="px-3 py-1 rounded-lg"
                      style={{
                        backgroundColor: `${plan.color}12`,
                        border: `1px solid ${plan.color}25`,
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontWeight: 700,
                          fontSize: 11,
                          letterSpacing: 1.5,
                          color: plan.color,
                          textTransform: "uppercase" as const,
                        }}
                      >
                        {plan.id === "monthly"
                          ? "Standard"
                          : plan.id === "yearly"
                          ? "Best Value"
                          : "Forever"}
                      </span>
                    </div>
                    {plan.trial ? (
                      <div className="flex items-center gap-1.5">
                        <Zap size={12} className="text-[#00ffaa]" />
                        <span
                          className="text-[#00ffaa]"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                            fontSize: 11,
                          }}
                        >
                          7 days free
                        </span>
                      </div>
                    ) : (
                      <div />
                    )}
                  </div>

                  {/* Icon + Name */}
                  <div className="flex items-center gap-3 mb-5">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center"
                      style={{ backgroundColor: `${plan.color}15` }}
                    >
                      <plan.icon size={22} style={{ color: plan.color }} />
                    </div>
                    <div>
                      <div
                        className="text-[#f3f4f6]"
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontWeight: 700,
                          fontSize: 18,
                        }}
                      >
                        {plan.name}
                      </div>
                      <div
                        className="text-[#6b7280]"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: 12,
                        }}
                      >
                        {plan.id === "monthly"
                          ? "Billed monthly"
                          : plan.id === "yearly"
                          ? "Billed annually"
                          : "One-time purchase"}
                      </div>
                    </div>
                  </div>

                  {/* Price block — pushed to bottom of stub */}
                  <div className="bg-[#0a0f1a] rounded-xl p-4 text-center mt-auto">
                    <div>
                      <span
                        className="text-[#f9fafb]"
                        style={{
                          fontFamily: "Space Grotesk, sans-serif",
                          fontWeight: 700,
                          fontSize: 44,
                        }}
                      >
                        {plan.price}
                      </span>
                      <span
                        className="text-[#6b7280] ml-1"
                        style={{
                          fontFamily: "Inter, sans-serif",
                          fontSize: 15,
                        }}
                      >
                        {plan.period}
                      </span>
                    </div>
                    {/* Always render the sub-price row to keep consistent height */}
                    <div className="h-6 flex items-center justify-center gap-2 mt-1">
                      {plan.priceMonthly ? (
                        <>
                          <span
                            className="text-[#9ca3af]"
                            style={{
                              fontFamily: "Inter, sans-serif",
                              fontSize: 13,
                            }}
                          >
                            {plan.priceMonthly}
                          </span>
                          <span
                            className="px-2 py-0.5 rounded-full"
                            style={{
                              fontFamily: "Space Grotesk, sans-serif",
                              fontWeight: 700,
                              fontSize: 11,
                              color: plan.color,
                              backgroundColor: `${plan.color}15`,
                            }}
                          >
                            {plan.savings}
                          </span>
                        </>
                      ) : null}
                    </div>
                  </div>
                </div>

                {/* Perforated tear line */}
                <PerforatedDivider color={plan.color} />

                {/* Bottom stub — details (flex-1 to fill remaining space) */}
                <div className="p-6 pt-5 flex flex-col flex-1">
                  {/* Features */}
                  <ul className="space-y-2.5 mb-6 flex-1">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <Check
                          size={14}
                          className="mt-0.5 shrink-0"
                          style={{ color: plan.color }}
                        />
                        <span
                          className="text-[#9ca3af]"
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontSize: 13,
                            lineHeight: 1.5,
                          }}
                        >
                          {f}
                        </span>
                      </li>
                    ))}
                    {plan.extras.map((e) => (
                      <li key={e} className="flex items-start gap-2.5">
                        <Users
                          size={14}
                          className="mt-0.5 shrink-0"
                          style={{ color: plan.color }}
                        />
                        <span
                          style={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 600,
                            fontSize: 13,
                            lineHeight: 1.5,
                            color: plan.color,
                          }}
                        >
                          {e}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA — anchored to bottom */}
                  <button
                    className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl transition-all active:translate-y-0.5 mt-auto"
                    style={{
                      fontFamily: "Inter, sans-serif",
                      fontWeight: 600,
                      fontSize: 15,
                      backgroundColor: plan.popular ? plan.color : "transparent",
                      color: plan.popular ? "#0a0f1a" : plan.color,
                      border: plan.popular ? "none" : `1.5px solid ${plan.color}60`,
                      boxShadow: plan.popular
                        ? `0 4px 24px ${plan.color}40`
                        : "none",
                    }}
                  >
                    {plan.id === "lifetime" ? (
                      <Crown size={16} />
                    ) : (
                      <Apple size={16} />
                    )}
                    {plan.cta}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <p
          className="text-center text-[#4b5563] mt-8"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 13 }}
        >
          All prices in USD. Subscriptions auto-renew. Cancel anytime.
        </p>
      </div>
    </section>
  );
}
