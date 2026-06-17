import { motion } from "framer-motion";
import { Section } from "./Section";
import cosmicEnergy from "../assets/cosmic-energy.mp4";
import voyagerShip from "../assets/voyager-ship.png";

const phases = [
  {
    mvp: "MVP 1",
    label: "Observe",
    badge: "NOW",
    title: "Journey Intelligence",
    desc: "มองเห็น journey และ friction จริงของลูกค้า",
    bullets: [
      "AI Journey Summary วิเคราะห์ว่าลูกค้าหลุดเพราะอะไร",
      "Friction detection + service log correlation",
      "ทุกทีมเห็นภาพเดียวกัน ไม่ต้องรอ dev",
    ],
    active: true,
  },
  {
    mvp: "MVP 2",
    label: "Validate",
    badge: "NEXT",
    title: "Pre-Production Validation",
    desc: "ตรวจก่อน go-live ว่า product/campaign ขึ้นได้ถูกต้อง",
    bullets: [
      "ตรวจ data integrity, promotion, stock ก่อนขึ้น PDP",
      "Revenue at risk + Go/No-go recommendation",
      "Navi agent ให้ถามข้อมูลการ set ได้",
    ],
    active: false,
    next: true,
  },
  {
    mvp: "MVP 3",
    label: "Predict",
    badge: "FUTURE",
    title: "Prediction & Full Flow",
    desc: "ทำนายและ optimize journey ก่อนปัญหาเกิด",
    bullets: [
      "ทำนาย drop-off ก่อนลูกค้าหลุด",
      "Full flow simulation: PDP → Thank you",
      "Executive dashboard + revenue attribution",
    ],
    active: false,
  },
];

export function RoadmapSection() {
  return (
    <Section id="roadmap" bgVideo={cosmicEnergy} videoCover>
      {/* Ship decoration — outside flex so it's always on top */}
      <motion.img
        src={voyagerShip}
        alt=""
        initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }} transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="pointer-events-none absolute -bottom-8 -right-16 z-[9999] w-[330px] rotate-6 opacity-20 drop-shadow-[0_0_32px_rgba(93,202,165,0.2)]"
        aria-hidden
      />
      <div className="flex flex-col gap-6" style={{ marginTop: "-2vh" }}>

        {/* Headline + subtitle */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-[10px] font-semibold uppercase tracking-[0.24em] text-voyager-cyan"
          >
            08 / 08 · WHAT'S NEXT
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
            className="mt-2 text-[clamp(2rem,3.2vw,3.4rem)] font-semibold leading-[1.1] text-voyager-mist"
          >
            What's Next for{" "}
            <span className="bg-gradient-to-r from-voyager-cyan to-voyager-purple bg-clip-text text-transparent">
              Voyager
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
            className="mt-2 text-[13px] leading-6 text-voyager-mist/55"
          >
            จาก Observe → Validate → Predict{" "}
            <span className="text-voyager-mist/38">
              ต่อยอดจากการมองเห็น journey จริง ไปสู่การตรวจก่อน go-live และทำนายปัญหาล่วงหน้า
            </span>
          </motion.p>
        </div>

        {/* MVP Timeline — main element */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-stretch gap-3 md:flex-row md:gap-0"
        >
          {phases.map((p, i) => (
            <div key={i} className="flex min-w-0 flex-1 flex-col items-stretch md:flex-row">
              <div className={`relative min-w-0 flex-1 rounded-2xl border p-5 backdrop-blur-md ${
                p.active
                  ? "border-voyager-cyan/55 bg-voyager-cyan/8 shadow-[0_0_0_1px_rgba(93,202,165,0.2),0_0_40px_rgba(93,202,165,0.12)]"
                  : p.next
                  ? "border-voyager-purple/40 bg-voyager-purple/8"
                  : "border-voyager-mist/20 bg-voyager-ink/60"
              }`}>

                {/* MVP label + badge */}
                <div className="flex items-center gap-2 mb-3">
                  <span className={`text-[9px] font-bold uppercase tracking-[0.22em] ${
                    p.active ? "text-voyager-cyan" : p.next ? "text-voyager-purple/80" : "text-voyager-mist/50"
                  }`}>
                    {p.mvp}
                  </span>
                  {p.badge === "NOW" && (
                    <span className="rounded-full bg-voyager-cyan px-2.5 py-0.5 text-[8px] font-black uppercase tracking-[0.15em] text-voyager-ink">
                      NOW
                    </span>
                  )}
                  {p.badge === "NEXT" && (
                    <span className="rounded-full border border-voyager-purple/50 bg-voyager-purple/12 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.12em] text-voyager-purple/80">
                      NEXT
                    </span>
                  )}
                  {p.badge === "FUTURE" && (
                    <span className="rounded-full border border-voyager-mist/15 bg-voyager-mist/5 px-2.5 py-0.5 text-[8px] font-bold uppercase tracking-[0.12em] text-voyager-mist/28">
                      FUTURE
                    </span>
                  )}
                </div>

                {/* Label + title */}
                <p className={`text-[18px] font-black leading-none tracking-tight ${
                  p.active ? "text-voyager-cyan" : p.next ? "text-voyager-purple/85" : "text-voyager-mist/55"
                }`}>
                  {p.label}
                </p>
                <p className={`mt-1 text-[13px] font-semibold leading-5 ${
                  p.active ? "text-voyager-mist/90" : p.next ? "text-voyager-mist/75" : "text-voyager-mist/55"
                }`}>
                  {p.title}
                </p>
                <p className={`mt-1 text-[11px] leading-5 ${
                  p.active ? "text-voyager-mist/55" : p.next ? "text-voyager-mist/55" : "text-voyager-mist/42"
                }`}>
                  {p.desc}
                </p>

                {/* Divider */}
                <div className={`my-3 h-px w-full ${
                  p.active ? "bg-voyager-cyan/20" : p.next ? "bg-voyager-purple/20" : "bg-voyager-mist/15"
                }`} />

                {/* Bullets */}
                <ul className="flex flex-col gap-2">
                  {p.bullets.map((b, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <span className={`mt-[5px] h-1.5 w-1.5 shrink-0 rounded-full ${
                        p.active ? "bg-voyager-cyan" : p.next ? "bg-voyager-purple/65" : "bg-voyager-mist/40"
                      }`} />
                      <span className={`text-[11.5px] leading-[1.6] ${
                        p.active ? "text-voyager-mist/70" : p.next ? "text-voyager-mist/65" : "text-voyager-mist/50"
                      }`}>
                        {b}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Arrow connector */}
              {i < 2 && (
                <div className="hidden shrink-0 items-center px-2 md:flex">
                  <svg width="22" height="16" viewBox="0 0 22 16" fill="none">
                    <path
                      d="M1 8h18M15 3l6 5-6 5"
                      stroke={i === 0 ? "rgba(93,202,165,0.85)" : "rgba(169,143,255,0.65)"}
                      strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </motion.div>

        {/* Closing block */}
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.4 }}
          className="relative overflow-hidden rounded-2xl border border-voyager-mist/8 bg-voyager-ink/55 backdrop-blur-md"
        >
          <div className="pointer-events-none absolute -left-10 top-0 h-32 w-40 rounded-full bg-voyager-purple/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-32 w-40 rounded-full bg-voyager-cyan/12 blur-3xl" />
          <div className="relative flex flex-col items-center gap-3 px-12 py-5 text-center">
            <p className="text-[16px] italic leading-8 text-voyager-mist/72">
              <span className="text-[1.8rem] leading-none text-voyager-purple/45 font-serif align-bottom mr-1">"</span>
              Voyager ไม่ใช่แค่โปรเจกต์ AI ครับ
              มันคือความพยายามที่จะทำให้องค์กรเห็นปัญหาก่อนที่ลูกค้าจะเจอ"
            </p>
            <div className="h-px w-16 bg-gradient-to-r from-transparent via-voyager-mist/22 to-transparent" />
            <div className="flex items-baseline gap-2">
              <p className="text-[15px] font-semibold text-voyager-mist/65 tracking-wide">Your customers speak.</p>
              <p className="text-[17px] font-bold tracking-wide bg-gradient-to-r from-voyager-cyan to-voyager-purple bg-clip-text text-transparent">Voyager listens.</p>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
