import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Section } from "./Section";
import { TypewriterText, type TextSegment } from "./TypewriterText";
import journeyBelt from "../assets/journey-belt.mp4";
import voyagerLogo from "../assets/voyager-logo.png";

// activeCard: -1=none, 0-3=which card is glowing, 4=all done → orb flash, 5=typing
const signals = [
  {
    type: "Behavior Signal",
    title: "Payment retry ×3",
    sub: "User attempted payment 3 times before drop-off",
    color: "cyan",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <circle cx="8" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 21v-1a5 5 0 0110 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M16 11l2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    type: "Journey Signal",
    title: "Drop at Payment Step",
    sub: "37% of users dropped at payment step",
    color: "purple",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    type: "Service Signal",
    title: "Payment Timeout Spike",
    sub: "Error rate spike in payment API in same time window",
    color: "red",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    type: "Business Impact",
    title: "฿113,800",
    sub: "Estimated revenue impact from this issue",
    color: "amber",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
        <path d="M3 17l4-4 4 4 4-6 4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M17 17l4-4M19 13v4h-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
];

const colorMap: Record<string, { chip: string; icon: string; border: string; glow: string; orbGlow: string }> = {
  cyan:   { chip: "border-voyager-cyan/30 bg-voyager-cyan/10 text-voyager-cyan",      icon: "border-voyager-cyan/30 bg-voyager-cyan/10 text-voyager-cyan",      border: "border-voyager-cyan/60",   glow: "shadow-[0_0_22px_rgba(93,202,165,0.5)]",   orbGlow: "rgba(93,202,165,0.5)" },
  purple: { chip: "border-voyager-purple/30 bg-voyager-purple/10 text-voyager-purple", icon: "border-voyager-purple/30 bg-voyager-purple/10 text-voyager-purple", border: "border-voyager-purple/60", glow: "shadow-[0_0_22px_rgba(169,143,255,0.5)]", orbGlow: "rgba(169,143,255,0.5)" },
  red:    { chip: "border-red-500/30 bg-red-500/10 text-red-400",                     icon: "border-red-500/30 bg-red-500/10 text-red-400",                     border: "border-red-500/60",        glow: "shadow-[0_0_22px_rgba(239,68,68,0.5)]",   orbGlow: "rgba(239,68,68,0.5)" },
  amber:  { chip: "border-amber-500/30 bg-amber-500/10 text-amber-400",               icon: "border-amber-500/30 bg-amber-500/10 text-amber-400",               border: "border-amber-500/60",      glow: "shadow-[0_0_22px_rgba(245,158,11,0.5)]",  orbGlow: "rgba(245,158,11,0.5)" },
};

const takeaways = [
  { label: "เข้าใจสาเหตุที่แท้จริง", icon: (<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
  { label: "ตัดสินใจได้เร็วขึ้น",    icon: (<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg>) },
  { label: "ลดผลกระทบต่อธุรกิจ",  icon: (<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="17 6 23 6 23 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { label: "ทุกทีมเข้าใจตรงกัน",    icon: (<svg width="15" height="15" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="15" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 21v-1a6 6 0 0112 0v1M15 11a6 6 0 016 6v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
];

const summarySegments: TextSegment[] = [
  { text: "AI JOURNEY SUMMARY · Session Analyzed ✓\n\n" },
  { text: "CUSTOMER JOURNEY", className: "font-bold text-voyager-purple" },
  { text: "\nProduct Detail → Cart → Checkout → " },
  { text: "Payment ✗", className: "font-bold text-red-400" },
  { text: "\n\n" },
  { text: "DETECTED FRICTION", className: "font-bold text-sky-400" },
  { text: "\n↳ Payment retry ×3 before drop-off\n↳ Time spike detected at checkout step\n\n" },
  { text: "MATCHED SIGNAL", className: "font-bold text-voyager-cyan" },
  { text: "\n↳ Payment service timeout in same time window\n↳ API error rate: 34% spike\n\n" },
  { text: "AI INSIGHT", className: "font-bold text-green-400" },
  { text: "\nThis was not just a drop-off.\nIt was a broken journey caused\nby service instability.\n\n" },
  { text: "─────────────────────────────────\n" },
  { text: "CONFIDENCE: " },
  { text: "92%", className: "font-bold text-green-400" },
  { text: "   SEVERITY: " },
  { text: "HIGH", className: "font-bold text-red-400" },
  { text: "\nREVENUE IMPACT: " },
  { text: "฿113,800", className: "font-bold text-amber-400" },
];

export function AISummarySection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [step, setStep] = useState(-1);
  // step: -1=idle, 0-3=card glowing, 4=orb flash, 5=typing

  useEffect(() => {
    if (!inView) return;
    // wait for cards to render, then sequence
    const timers = [
      setTimeout(() => setStep(0), 800),
      setTimeout(() => setStep(1), 1300),
      setTimeout(() => setStep(2), 1800),
      setTimeout(() => setStep(3), 2300),
      setTimeout(() => setStep(4), 2900), // orb flash
      setTimeout(() => setStep(5), 3600), // typing
    ];
    return () => timers.forEach(clearTimeout);
  }, [inView]);

  const orbGlowColor = step >= 0 && step <= 3
    ? colorMap[signals[step].color].orbGlow
    : step >= 4
    ? "rgba(93,202,165,0.9)"
    : "rgba(93,202,165,0.2)";

  return (
    <Section id="ai" bgVideo={journeyBelt} mirrorVideo>
      <div ref={ref} className="flex flex-col gap-6" style={{ marginTop: "2vh" }}>

        <div className="grid gap-6 lg:grid-cols-[0.75fr_220px_1fr] lg:items-center">

          {/* ── Left: Headline + Signal cards ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-[10px] font-semibold uppercase tracking-[0.22em] text-voyager-cyan"
            >
              06 / 08 · AI Journey Summary · Live Example
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-[clamp(1.6rem,2.6vw,3rem)] font-semibold leading-[1.15] text-voyager-mist"
            >
              From Data Signals<br />
              to One <span className="text-voyager-cyan">Shared Insight</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.14 }}
              className="mt-2 text-[13px] leading-6 text-voyager-mist/58"
            >
              Voyager เชื่อม behavior, journey, service log และ business impact<br />
              ให้กลายเป็น insight เดียวที่ทุกทีมเข้าใจตรงกัน
            </motion.p>

            <div className="mt-5 grid gap-2">
              {signals.map((s, i) => {
                const isActive = step === i;
                const isDone = step > i;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ duration: 0.45, delay: 0.1 + i * 0.08 }}
                    className={`flex items-center gap-2.5 rounded-lg border bg-voyager-ink/65 px-3 py-2.5 backdrop-blur-sm transition-all duration-500 ${
                      isActive
                        ? `${colorMap[s.color].border} ${colorMap[s.color].glow} bg-voyager-ink/80`
                        : isDone
                        ? `${colorMap[s.color].border.replace("/60", "/30")} border-opacity-30`
                        : "border-voyager-mist/10"
                    }`}
                  >
                    <motion.div
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${colorMap[s.color].icon}`}
                      animate={isActive ? { scale: [1, 1.15, 1] } : { scale: 1 }}
                      transition={{ duration: 0.4, repeat: isActive ? Infinity : 0, repeatType: "loop" }}
                    >
                      {s.icon}
                    </motion.div>
                    <div className="flex-1 min-w-0">
                      <span className={`inline-block rounded-full border px-2 py-px text-[8px] font-bold uppercase tracking-[0.12em] ${colorMap[s.color].chip}`}>
                        {s.type}
                      </span>
                      <p className={`mt-0.5 text-[13px] font-semibold leading-5 transition-colors duration-300 ${isActive ? "text-white" : "text-voyager-mist/90"}`}>
                        {s.title}
                      </p>
                      <p className="text-[11px] leading-4 text-voyager-mist/48">{s.sub}</p>
                    </div>
                    {/* Sent indicator */}
                    {isDone && (
                      <motion.div
                        initial={{ scale: 0, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className={`h-1.5 w-1.5 shrink-0 rounded-full ${
                          s.color === "cyan" ? "bg-voyager-cyan" :
                          s.color === "purple" ? "bg-voyager-purple" :
                          s.color === "red" ? "bg-red-400" : "bg-amber-400"
                        }`}
                      />
                    )}
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* ── Center: AI Engine Orb ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative flex h-32 w-32 items-center justify-center">
              {/* Outer glow ring — accumulates per card */}
              <motion.div
                className="absolute inset-0 rounded-full"
                animate={{
                  boxShadow: step < 0
                    ? "0 0 0px transparent"
                    : step === 4
                    ? `0 0 80px 20px rgba(93,202,165,0.7), 0 0 120px 40px rgba(93,202,165,0.3)`
                    : `0 0 ${12 + (Math.min(step + 1, 4)) * 10}px rgba(93,202,165,${0.15 + (Math.min(step + 1, 4)) * 0.1})`,
                }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 rounded-full border border-voyager-cyan/20" />
              <motion.div
                className="absolute inset-3 rounded-full border border-voyager-cyan/30"
                animate={{ rotate: 360 }}
                transition={{ duration: step >= 4 ? 3 : 10, repeat: Infinity, ease: "linear" }}
              />
              <div className="absolute inset-6 rounded-full bg-[radial-gradient(circle,rgba(93,202,165,0.22),rgba(169,143,255,0.18)_60%,transparent)] blur-sm" />
              <motion.div
                className="relative z-10 flex h-20 w-20 items-center justify-center rounded-full border border-voyager-cyan/40 bg-voyager-ink/80"
                animate={{
                  boxShadow: step >= 4
                    ? [`0 0 40px ${orbGlowColor}`, `0 0 80px rgba(93,202,165,0.9)`, `0 0 24px rgba(93,202,165,0.4)`]
                    : `0 0 ${8 + (Math.max(step, 0)) * 6}px ${orbGlowColor}`,
                }}
                transition={{ duration: step === 4 ? 0.8 : 0.5 }}
              >
                <img src={voyagerLogo} alt="Voyager" className="h-14 w-14 object-contain" />
              </motion.div>
            </div>

            <div className="text-center">
              <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-voyager-cyan">AI Engine</p>
              <p className="text-[9px] text-voyager-mist/40 mt-0.5">Signal Fusion</p>
            </div>

            <div className="flex items-center gap-1.5">
              {["Connect", "Analyze", "Understand"].map((label, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-voyager-cyan/40 text-[10px]">›</span>}
                  <motion.span
                    className="text-[9px] font-bold uppercase tracking-[0.12em]"
                    animate={step >= 4 ? { color: ["rgba(255,255,255,0.5)", "rgba(93,202,165,1)", "rgba(255,255,255,0.65)"] } : { color: "rgba(255,255,255,0.5)" }}
                    transition={{ duration: 0.5, delay: i * 0.2 }}
                  >
                    {label}
                  </motion.span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right: TypewriterText ── */}
          <div>
            {/* Status header */}
            <div className="mb-2 flex items-center gap-2">
              <motion.span
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-500 ${step >= 4 ? "bg-voyager-cyan shadow-[0_0_6px_rgba(93,202,165,0.9)]" : "bg-voyager-mist/30"}`}
                animate={step < 4 ? { opacity: [1, 0.3, 1] } : { opacity: 1 }}
                transition={{ duration: 1.2, repeat: step < 4 ? Infinity : 0 }}
              />
              <span className={`text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors duration-500 ${step >= 4 ? "text-voyager-cyan" : "text-voyager-mist/35"}`}>
                {step >= 4 ? "Session Analyzed ✓" : "Awaiting signals..."}
              </span>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={step >= 4 ? { opacity: 1 } : {}}
              transition={{ duration: 0.6 }}
            >
              <TypewriterText segments={summarySegments} enabled={step >= 5} />
            </motion.div>
          </div>

        </div>

        {/* ── Bottom takeaway bar ── */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={step >= 5 ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="w-fit rounded-xl border border-voyager-cyan/15 bg-voyager-ink/55 px-5 py-4 backdrop-blur-sm"
        >
          <p className="text-[12px] font-semibold text-voyager-mist/80">
            ไม่ใช่แค่เห็นว่าลูกค้าหลุด —{" "}
            <span className="text-voyager-cyan">แต่เห็นว่าหลุดเพราะอะไร และกระทบ business เท่าไหร่</span>
          </p>
          <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
            {takeaways.map((t, i) => (
              <div key={i} className="flex items-center gap-1.5">
                <span className="text-voyager-cyan/70">{t.icon}</span>
                <span className="text-[11px] text-voyager-mist/60">{t.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
