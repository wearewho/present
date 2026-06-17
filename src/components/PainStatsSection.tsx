import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { AnimatedCounter } from "./AnimatedCounter";
import { Section } from "./Section";
import signalMoon from "../assets/signal-moon.mp4";

const stats = [
  { value: 89, label: "ยังต้องพึ่ง Developer ในการ investigate ปัญหา" },
  { value: 67, label: "ใช้เวลาหา root cause มากกว่า 30 นาที/case" },
  { value: 74, label: "เคยเจอปัญหาเดิมกลับมาเกิดซ้ำ" },
  { value: 71, label: "QA workflow สะดุดเพราะต้องรอ investigate" },
];

const quotes = [
  { text: "services เยอะ log ดูยาก ทำให้ใช้เวลาหาจุดที่เป็นสาเหตุค่อนข้างนาน", team: "Dev Team" },
  { text: "การ debug เพื่อหา error เพราะ log ไม่มีข้อมูลอะไรเลย", team: "Dev Team" },
  { text: "error กลางๆ ที่ไม่บอกสาเหตุ และต้องให้เดฟช่วย", team: "QA Team" },
];

export function PainStatsSection() {
  const statsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(statsRef, { once: true, amount: 0.2 });

  return (
    <Section id="pain" bgVideo={signalMoon} className="!px-0 py-0" fullBleed>
      <div className="flex min-h-screen flex-col justify-center px-8 pb-4 pt-0 md:px-14 lg:px-20" style={{ marginTop: "-10vh" }}>
        <div className="ml-auto w-full max-w-2xl">

          {/* Eyebrow */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-[10px] font-semibold uppercase tracking-[0.22em] text-voyager-cyan"
          >
            03 / 08 · Signal Moon &nbsp;·&nbsp; ผลสำรวจภายใน · 16 คน
          </motion.p>

          {/* Headline */}
          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 text-[clamp(1.9rem,3vw,3.4rem)] font-semibold leading-[1.1] text-voyager-mist"
          >
            The Problem Was Real
          </motion.h2>

          {/* 4 stat cards — 2×2 grid */}
          <div ref={statsRef} className="mt-7 grid grid-cols-2 gap-3">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, delay: 0.1 + index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="relative overflow-hidden rounded-md border border-voyager-mist/10 bg-voyager-ink/68 px-4 py-4 backdrop-blur-md"
              >
                {/* Top bar */}
                <div className="absolute left-0 top-0 h-[2px] w-full bg-voyager-mist/15" />
                <motion.div
                  animate={{ width: isInView ? `${stat.value}%` : "0%" }}
                  transition={{ duration: 1.1, delay: 0.3 + index * 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-0 h-[2px] bg-voyager-purple"
                />

                <div className="text-3xl font-semibold text-voyager-purple">
                  <AnimatedCounter value={stat.value} suffix="%" />
                </div>
                <p className="mt-2 text-sm leading-5 text-voyager-mist/80">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* 3 quote cards */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.38 }}
            className="mt-3 grid grid-cols-3 gap-3"
          >
            {quotes.map((q, i) => (
              <div
                key={i}
                className="flex flex-col justify-between rounded-md border border-voyager-mist/10 bg-voyager-ink/55 px-3 py-3 backdrop-blur-sm"
              >
                <p className="text-[12px] leading-[1.65] text-voyager-mist/78">"{q.text}"</p>
                <span className="mt-3 inline-block w-fit rounded-full border border-voyager-purple/30 bg-voyager-purple/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-[0.12em] text-voyager-purple/80">
                  {q.team}
                </span>
              </div>
            ))}
          </motion.div>

          {/* Key line */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-5"
          >
            <div className="mb-3 h-px w-8 bg-voyager-purple/60" />
            <p className="text-lg font-medium leading-8 text-voyager-mist/90">
              ปัญหาไม่ได้อยู่ที่ทีม<br />แต่อยู่ที่เรายังมองไม่เห็นภาพรวมมากพอ
            </p>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
