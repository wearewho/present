import { motion } from "framer-motion";
import { Section } from "./Section";
import particles from "../assets/particles.mp4";
import greenhouseDome from "../assets/greenhouse-dome.png";

const cards = [
  {
    num: "01",
    title: "มีของจริงให้ลอง",
    body: "มี stack และ flow จริง\nให้ทีมทดลองกับงานจริง",
    color: "cyan", active: false,
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    num: "02",
    title: "ทีมที่อยู่กับระบบนี้",
    body: "ร่วมกันไล่ ร่วมกันแก้\nกว่าจะขึ้นมาเป็นรูปเป็นร่าง",
    color: "cyan", active: true,
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="15" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 21v-1a6 6 0 0112 0v1M15 11a6 6 0 016 6v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  },
  {
    num: "03",
    title: "เราสร้างความเข้าใจนี้มานาน",
    body: "Dev ต้องเข้าใจทั้ง flow\nระบบ และ business context",
    color: "purple", active: false,
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    num: "04",
    title: "เลยเป็นโอกาสที่ต่อยอดได้",
    body: "ระบบจริง ทีมจริง pain จริง\nจึงต่อยอดเป็นเครื่องมือ\nที่แก้ pain ได้จริง",
    color: "purple", active: false,
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4.5 16.5l-1.5 5 5-1.5L19.5 9 15 4.5 4.5 16.5z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M15 4.5L19.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  },
];

export function WhyGreenhouseSection() {
  return (
    <Section id="why-greenhouse" bgVideo={particles} videoCover>
      <div className="flex flex-col gap-4" style={{ marginTop: "-2vh" }}>

        {/* Top row: headline left + dome visual right */}
        <div className="flex items-center gap-6">

          {/* Left */}
          <div className="w-[52%] shrink-0">
            <motion.p
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-[10px] font-semibold uppercase tracking-[0.24em] text-voyager-cyan"
            >
              07 / 08 · WHY GREEN HOUSE
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.9, delay: 0.07, ease: [0.16, 1, 0.3, 1] }}
              className="mt-2 text-[clamp(1.9rem,3vw,3.4rem)] font-semibold leading-[1.15] text-voyager-mist"
            >
              Green <span className="text-voyager-cyan">House</span><br />
              คือสนามทดลองที่มีของจริง<br />
              ให้เราได้ลงมือสร้าง
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.15 }}
              className="mt-4 border-l-2 border-voyager-cyan/40 pl-4"
            >
              <p className="text-[13px] leading-7 text-voyager-mist/55">
                เพราะ Voyager ไม่ได้มีแค่ไอเดีย<br />
                แต่มีทั้งทีมที่เข้าใจ pain จริง<br />
                และ environment ที่พร้อมให้ลองกับระบบจริง
              </p>
            </motion.div>
          </div>

          {/* Right: dome visual — ขยับขึ้นเพื่อไม่ทับ cards */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.92 }} whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }} transition={{ duration: 1.1, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="relative flex-1 flex items-center justify-center"
            style={{ minHeight: "220px", marginBottom: "-60px", marginTop: "-10px" }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(93,202,165,0.2),rgba(169,143,255,0.08)_55%,transparent_75%)] blur-2xl" />
            <img
              src={greenhouseDome}
              alt="Green House"
              className="relative z-10 w-full max-w-[480px] object-contain drop-shadow-[0_0_50px_rgba(93,202,165,0.6)]"
              style={{ marginTop: "-30px" }}
            />
            {/* Fade ใต้ภาพกัน card ทับ */}
            <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[rgba(7,8,22,0.95)] to-transparent z-20" />
          </motion.div>
        </div>

        {/* 4-column cards */}
        <div className="grid grid-cols-4 gap-3 relative z-10">
          {cards.map((card, i) => {
            const isCyan = card.color === "cyan";
            const border = card.active
              ? "border-voyager-cyan/70 shadow-[0_0_0_1px_rgba(93,202,165,0.3),0_0_28px_rgba(93,202,165,0.25)]"
              : isCyan ? "border-voyager-cyan/18" : "border-voyager-purple/18";
            const bg = card.active ? "bg-voyager-cyan/8" : "bg-voyager-ink/72";
            const numColor = isCyan ? "text-voyager-cyan" : "text-voyager-purple";
            const iconBox = card.active
              ? "border-voyager-cyan/40 bg-voyager-cyan/15 text-voyager-cyan"
              : isCyan ? "border-voyager-cyan/20 bg-voyager-cyan/8 text-voyager-cyan/60"
              : "border-voyager-purple/20 bg-voyager-purple/8 text-voyager-purple/60";
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ duration: 0.55, delay: 0.1 + i * 0.09 }}
                className={`rounded-xl border ${border} ${bg} p-4 backdrop-blur-sm`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className={`text-[1.5rem] font-black leading-none ${numColor}`}>{card.num}</div>
                  <div className={`flex h-8 w-8 items-center justify-center rounded-lg border ${iconBox}`}>
                    {card.icon}
                  </div>
                </div>
                <h3 className="text-[14px] font-semibold leading-5 text-voyager-mist/90">{card.title}</h3>
                <p className="mt-2 text-[13px] font-medium leading-[1.7] text-voyager-mist/75 whitespace-pre-line">{card.body}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Closing quote — compact, no wasted space */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.3 }}
          className="relative overflow-hidden rounded-xl border border-voyager-cyan/35 bg-voyager-ink/60 backdrop-blur-sm"
        >
          <div className="pointer-events-none absolute -left-10 top-0 h-24 w-48 rounded-full bg-voyager-cyan/16 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 bottom-0 h-24 w-48 rounded-full bg-voyager-purple/12 blur-3xl" />
          <div className="relative flex flex-col items-center gap-3 px-8 py-4 text-center">
            <div className="flex items-center gap-3">
              <span className="shrink-0 text-[2.8rem] leading-none text-voyager-cyan/50 font-serif">"</span>
              <div className="flex flex-col items-center gap-1">
                <p className="text-[19px] font-semibold leading-8 text-voyager-mist/80">
                  ในเมื่อเรารู้จักระบบนี้ดีที่สุด...
                </p>
                <p className="text-[21px] font-bold leading-8 text-voyager-cyan">
                  ทำไมเราไม่สร้างเครื่องมือที่แก้มันเลยล่ะ?
                </p>
              </div>
              <span className="shrink-0 self-end text-[2.8rem] leading-none text-voyager-cyan/50 font-serif">"</span>
            </div>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
