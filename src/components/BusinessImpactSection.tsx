import { motion } from "framer-motion";
import { Section } from "./Section";
import impactSignal from "../assets/impact-signal.mp4";

const stats = [
  {
    pct: "75.4%", pctNum: 75.4, tag: "Main Source",
    label: "มาจาก 3rd-party system", sub: "708 คำสั่งซื้อ · ~฿7M",
    accent: true,
  },
  {
    pct: "40.8%", pctNum: 40.8, tag: "Data Gap",
    label: "คำสั่งซื้อมูลค่า ฿0", sub: "406 รายการ · ยังไม่ถูกตรวจสอบ",
    accent: false,
  },
  {
    pct: "83%", pctNum: 83, tag: "High Impact Path",
    label: "ความเสียหายมาจาก Device Bundle Existing", sub: "฿7.7M",
    accent: true,
  },
];

const months = [
  { label: "ม.ค.", value: 0.42 },
  { label: "ก.พ.", value: 2.67 },
  { label: "มี.ค.", value: 3.27, peak: true },
  { label: "เม.ย.", value: 1.95 },
];
const MAX_VAL = 3.27;

export function BusinessImpactSection() {
  return (
    <Section id="impact" bgVideo={impactSignal} mirrorVideo className="!px-0 py-0" fullBleed>
      <div className="flex min-h-screen flex-col justify-center px-8 py-10 md:px-14 lg:px-20" style={{ marginTop: "-8vh" }}>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">

          {/* ── Left ── */}
          <div>
            {/* Eyebrow */}
            <motion.p
              initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-[10px] font-semibold uppercase tracking-[0.22em] text-voyager-purple"
            >
              04 / 08 · Business Impact · TrueVC · ม.ค.–พ.ค. 2569
            </motion.p>

            {/* Headline */}
            <motion.h2
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="mt-3 text-[clamp(1.8rem,3vw,3.4rem)] font-semibold leading-[1.1] text-voyager-mist"
            >
              Invisible Problems<br />Create <span className="text-voyager-cyan">Real Impact</span>
            </motion.h2>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.12 }}
              className="mt-2.5 text-sm leading-6 text-voyager-mist/68"
            >
              เมื่อปัญหาที่มองไม่เห็นกระทบลูกค้า มันกลายเป็นผลกระทบทางธุรกิจที่วัดได้จริง
            </motion.p>

            {/* Metrics row — hero + 2 secondary side by side */}
            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-5 flex gap-2.5"
            >
              {/* Hero: ฿9.3M */}
              <div className="flex-[1.6] rounded-md border border-voyager-purple/40 bg-voyager-ink/70 px-5 py-4 shadow-[0_0_32px_rgba(169,143,255,0.12)] backdrop-blur-sm">
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-voyager-cyan/30 bg-voyager-cyan/10 text-voyager-cyan">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="8" r="5" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M12 3v2M12 11v2M9.5 8H7M17 8h-2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      <path d="M5 17c0-2.21 3.134-4 7-4s7 1.79 7 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-voyager-mist/45">มูลค่าคำสั่งซื้อที่ได้รับผลกระทบ</p>
                    <p className="mt-1 text-[clamp(2.4rem,4vw,4.2rem)] font-bold leading-none text-voyager-purple">฿9.3M</p>
                    <p className="mt-2 text-sm text-voyager-mist/55">จาก <span className="font-semibold text-voyager-mist/80">994 รายการ</span></p>
                  </div>
                </div>
              </div>
              {/* Secondary metrics stacked */}
              <div className="flex flex-1 flex-col gap-2.5">
                {[
                  { val: "฿9,388", label: "มูลค่าเฉลี่ยต่อคำสั่งซื้อ", icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                      <path d="M3 6h18M16 10a4 4 0 01-8 0" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  )},
                  { val: "฿113,800", label: "มูลค่าสูงสุดต่อคำสั่งซื้อ", icon: (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M3 17l4-4 4 4 4-6 4 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  )},
                ].map((m) => (
                  <div key={m.val} className="flex flex-1 items-center gap-3 rounded-md border border-voyager-mist/10 bg-voyager-ink/55 px-4 py-3 backdrop-blur-sm">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-voyager-cyan/25 bg-voyager-cyan/8 text-voyager-cyan">
                      {m.icon}
                    </div>
                    <div>
                      <p className="text-[10px] text-voyager-mist/42">{m.label}</p>
                      <p className="mt-0.5 text-lg font-semibold text-voyager-purple/72">{m.val}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Voyager Observation */}
            <motion.div
              initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.44 }}
              className="mt-4 rounded-md border border-voyager-cyan/22 bg-voyager-ink/55 px-4 py-4 backdrop-blur-sm"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="text-voyager-cyan">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/></svg>
                </span>
                <p className="text-[9px] font-bold uppercase tracking-[0.18em] text-voyager-cyan">Voyager Observation</p>
              </div>
              <ul className="space-y-2.5">
                {[
                  <>คำสั่งซื้อบางส่วนเกิดปัญหาจาก <strong className="text-voyager-mist/95">3rd-party</strong></>,
                  <>โดยเฉพาะเส้นทาง <strong className="text-voyager-mist/95">Device Bundle Existing</strong></>,
                  <>มูลค่าสูงไม่ได้กระจายเท่ากัน — การ <strong className="text-voyager-mist/95">prioritize ตาม impact</strong> สำคัญที่สุด</>,
                ].map((obs, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <span className="mt-0.5 shrink-0 text-voyager-cyan">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <p className="text-[13px] leading-5 text-voyager-mist/75">{obs}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* ── Right ── */}
          <div className="space-y-2.5">
            {/* 3 stat cards — horizontal row */}
            <div className="flex gap-2.5">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.16 + i * 0.1 }}
                className={`relative flex-1 overflow-hidden rounded-lg backdrop-blur-sm ${s.accent ? "border border-voyager-purple/20 bg-voyager-ink/65" : "border border-voyager-mist/8 bg-voyager-ink/45"}`}
              >
                {/* Ambient glow top-right */}
                {s.accent && (
                  <div className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-voyager-purple/15 blur-2xl" />
                )}
                <div className="relative px-5 py-4">
                  {/* Top row: tag chip */}
                  <span className={`inline-block rounded-full px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.14em] ${s.accent ? "border border-voyager-purple/35 bg-voyager-purple/12 text-voyager-purple" : "border border-voyager-mist/15 bg-voyager-mist/6 text-voyager-mist/45"}`}>
                    {s.tag}
                  </span>
                  {/* Percentage */}
                  <p className={`mt-1.5 text-[1.7rem] font-bold leading-none tracking-tight ${s.accent ? "text-voyager-purple" : "text-voyager-mist/55"}`}>
                    {s.pct}
                  </p>
                  {/* Label + sub */}
                  <p className={`mt-1.5 text-xs font-medium leading-4 ${s.accent ? "text-voyager-mist/80" : "text-voyager-mist/55"}`}>{s.label}</p>
                  <p className={`mt-0.5 text-[10px] ${s.accent ? "text-voyager-mist/42" : "text-voyager-mist/32"}`}>{s.sub}</p>
                  {/* Progress bar */}
                  <div className="mt-3 h-[2px] w-full overflow-hidden rounded-full bg-voyager-mist/8">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${s.pctNum}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                      className={`h-full rounded-full ${s.accent ? "bg-gradient-to-r from-voyager-purple/60 to-voyager-purple" : "bg-voyager-mist/25"}`}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
            </div>

            {/* Monthly bar chart — Order Error by month (negative framing) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.48 }}
              className="rounded-md border border-red-500/15 bg-voyager-ink/65 px-5 py-4 backdrop-blur-sm"
            >
              <p className="mb-3 text-[9px] font-bold uppercase tracking-[0.16em] text-voyager-mist/40">มูลค่า Order Error รายเดือน (฿M)</p>
              {/* Bars */}
              <div className="flex h-28 items-end gap-3 border-b border-l border-voyager-mist/15 pb-1">
                {months.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${(m.value / MAX_VAL) * 96}px` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.55 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`relative flex-1 rounded-t-sm ${m.peak ? "bg-red-500 shadow-[0_0_20px_rgba(239,68,68,0.5)]" : "bg-red-500/45"}`}
                  >
                    <div className={`absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full border-2 bg-voyager-ink ${m.peak ? "border-red-400 shadow-[0_0_10px_rgba(239,68,68,0.9)]" : "border-red-500/40"}`} />
                  </motion.div>
                ))}
              </div>
              {/* Labels */}
              <div className="mt-1.5 flex gap-3">
                {months.map((m, i) => (
                  <div key={i} className="flex flex-1 flex-col items-center gap-0.5">
                    <p className={`text-[10px] font-semibold ${m.peak ? "text-red-400" : "text-voyager-mist/42"}`}>{m.label}</p>
                    <p className={`text-[9px] font-semibold ${m.peak ? "text-red-400" : "text-voyager-mist/32"}`}>
                      ฿{m.value}M{m.peak ? " ⚠" : ""}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </Section>
  );
}
