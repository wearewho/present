import { motion } from "framer-motion";
import { Section } from "./Section";
import particles from "../assets/particles.mp4";
import greenhousePod from "../assets/greenhouse.png";

const beforeItems = [
  { text: "Pain จากงาน แต่ยังไม่มี direction ชัด", icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3M12 17h.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
  { text: "เครื่องมือกระจัดกระจาย ไม่เชื่อมกัน",     icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="5" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="19" cy="6" r="2" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="18" r="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 6h10M6.5 7.5l4 8M17.5 7.5l-4 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
  { text: "ไม่รู้ว่าจะ scale ยังไง",                icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="16 7 22 7 22 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>) },
  { text: "ไม่รู้ว่าลูกค้าเจออะไรระหว่างทาง",       icon: (<svg width="18" height="18" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/><path d="M3 21v-2a7 7 0 0114 0v2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>) },
];

const afterItems = [
  "Product positioning ชัด",
  "Pilot direction กับ TrueVC",
  "Customer journey intelligence ที่ scale ได้",
];

const learnings = [
  {
    num: "01", color: "purple",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
    title: "Pain ของทีมกว้างกว่าที่คิด",
    sub: "ไม่ใช่แค่ internal tool\nแต่เป็น market problem",
  },
  {
    num: "02", color: "cyan",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="15" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 21v-1a6 6 0 0112 0v1M15 11a6 6 0 016 6v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
    title: "ทุกทีมคือ user — ไม่ใช่แค่ dev",
    sub: "QA, PO, BU ต้องใช้ได้ทุกคน",
  },
  {
    num: "03", color: "purple",
    icon: (<svg width="22" height="22" viewBox="0 0 24 24" fill="none"><rect x="3" y="11" width="18" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M7 11V7a5 5 0 0110 0v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
    title: "PDPA compliance เป็น design constraint",
    sub: "ตั้งแต่แรก ไม่ใช่ afterthought",
  },
];

const lc: Record<string, { chip: string; border: string; icon: string; check: string }> = {
  purple: { chip: "text-voyager-purple", border: "border-voyager-purple/25", icon: "border-voyager-purple/30 bg-voyager-purple/10 text-voyager-purple", check: "" },
  cyan:   { chip: "text-voyager-cyan",   border: "border-voyager-cyan/25",   icon: "border-voyager-cyan/30 bg-voyager-cyan/10 text-voyager-cyan",     check: "" },
};

export function GreenHouseSection() {
  return (
    <Section id="greenhouse" bgVideo={particles} videoCover>
      <div className="flex flex-col gap-5" style={{ marginTop: "-2vh" }}>

        {/* Eyebrow + Headline */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="hidden"
          >
            07 / 08 · Green House 2026
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-[clamp(1.9rem,3vw,3.4rem)] font-semibold leading-[1.15] text-voyager-mist"
          >
            Green House เปลี่ยน Pain<br />
            ให้เป็น <span className="text-voyager-cyan">Product Direction</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.14 }}
            className="mt-1.5 text-[13px] text-voyager-mist/55"
          >
            จาก pain ที่ทีมเจอจริง สู่ product direction ที่ชัดขึ้น
          </motion.p>
        </div>

        {/* Middle: Before | Pod | After */}
        <div className="relative flex items-stretch gap-4">

          {/* Pod image — absolute center, spans full width */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="pointer-events-none absolute inset-x-0 z-30 flex justify-center" style={{ top: "-40%" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(93,202,165,0.15),rgba(169,143,255,0.08)_50%,transparent_75%)] blur-2xl" />
            <img
              src={greenhousePod}
              alt="Green House Pod"
              className="relative z-10 w-[42%] object-contain drop-shadow-[0_0_40px_rgba(93,202,165,0.35)]"
            />
          </motion.div>

          {/* Before card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
            className="relative z-20 w-[33%] shrink-0 rounded-xl border border-voyager-purple/25 bg-voyager-ink/85 p-5 backdrop-blur-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-voyager-purple">Before</span>
              <span className="text-voyager-mist/30">—</span>
              <span className="text-[10px] text-voyager-mist/50">ก่อนเข้า Green House</span>
            </div>
            <ul className="space-y-3">
              {beforeItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + i * 0.08 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-voyager-purple/25 bg-voyager-purple/10 text-voyager-purple/70">
                    {item.icon}
                  </div>
                  <p className="mt-1 text-[12px] leading-5 text-voyager-mist/70">{item.text}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Spacer for pod */}
          <div className="flex-1" />

          {/* After card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.65, delay: 0.1 }}
            className="relative z-20 w-[33%] shrink-0 rounded-xl border border-voyager-cyan/30 bg-voyager-ink/85 p-5 pl-16 shadow-[0_0_32px_rgba(93,202,165,0.1)] backdrop-blur-sm"
          >
            <div className="mb-4 flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-voyager-cyan">After</span>
              <span className="text-voyager-mist/30">—</span>
              <span className="text-[10px] text-voyager-mist/50">สิ่งที่ชัดขึ้น</span>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: 10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.2 + i * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-0.5 shrink-0 text-voyager-cyan drop-shadow-[0_0_6px_rgba(93,202,165,0.8)]">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <p className="text-[13px] leading-5 text-voyager-mist/85">{item}</p>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom: 3 key learning cards */}
        <div className="grid gap-3 lg:grid-cols-3">
          {learnings.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.12 + i * 0.1 }}
              className={`flex items-start gap-4 rounded-xl border ${lc[l.color].border} bg-voyager-ink/65 px-5 py-4 backdrop-blur-sm`}
            >
              <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border ${lc[l.color].icon}`}>
                {l.icon}
              </div>
              <div>
                <span className={`text-[9px] font-bold uppercase tracking-[0.14em] ${lc[l.color].chip}`}>{l.num}</span>
                <p className="mt-0.5 text-[13px] font-semibold leading-5 text-voyager-mist/90">{l.title}</p>
                <p className="mt-1 text-[11px] leading-5 text-voyager-mist/50 whitespace-pre-line">{l.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
          className="flex items-center justify-center gap-3"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-voyager-mist/20" />
          <p className="text-[11px] text-voyager-mist/38">
            จากไอเดียในทีม <span className="text-voyager-mist/55">→</span> สู่ product direction ที่พร้อมต่อยอด
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-voyager-mist/20" />
        </motion.div>

      </div>
    </Section>
  );
}
