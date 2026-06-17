import { motion } from "framer-motion";
import { Section } from "./Section";
import whatVoyager from "../assets/what-voyager.mp4";

const before = [
  {
    main: 'Analytics บอกว่า "มีคนหลุด"',
    sub: "รู้แค่ผลลัพธ์ แต่ไม่รู้สาเหตุ",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="12" width="4" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="10" y="7" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <rect x="17" y="3" width="4" height="18" rx="1" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
  },
  {
    main: 'Monitoring บอกว่า "ระบบ error"',
    sub: "รู้แค่ปัญหาระบบ แต่ไม่รู้กระทบใคร",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    main: "แต่ไม่มีใครเชื่อมสองสิ่งนี้เข้าด้วยกัน",
    sub: "ต่างทีม ต่างข้อมูล ต่างมุมมอง",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="17" cy="11" r="3" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M3 21v-1a6 6 0 0112 0v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const after = [
  {
    main: "รวม behavior + journey + service log",
    sub: "เชื่อมทุกสัญญาณเข้าด้วยกัน",
  },
  {
    main: "ให้ AI วิเคราะห์ เชื่อมโยง สรุป",
    sub: "หาสาเหตุที่แท้จริงได้เร็วขึ้น",
  },
  {
    main: "เป็น insight ที่ทุกทีมเข้าใจได้ทันที",
    sub: "ตัดสินใจได้เร็วขึ้น และแม่นยำขึ้น",
  },
];

const teams = [
  {
    role: "QA", benefit: "เห็น evidence ของ journey",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5"/><path d="M21 21l-4.35-4.35" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  },
  {
    role: "PO", benefit: "เห็น customer impact",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5"/><path d="M3 9h18M9 21V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  },
  {
    role: "Dev", benefit: "เห็น technical clue",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><polyline points="16 18 22 12 16 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><polyline points="8 6 2 12 8 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    role: "BU", benefit: "เห็น business priority",
    icon: (<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><rect x="3" y="12" width="4" height="9" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="10" y="7" width="4" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/><rect x="17" y="3" width="4" height="18" rx="1" stroke="currentColor" strokeWidth="1.5"/></svg>),
  },
];

const footer = [
  {
    text: "ทุกทีมเห็นภาพเดียวกัน",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="9" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><circle cx="15" cy="7" r="3" stroke="currentColor" strokeWidth="1.5"/><path d="M3 21v-1a6 6 0 0112 0v1M15 11a6 6 0 016 6v1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>),
  },
  {
    text: "ไม่ต้องเริ่มจากศูนย์ทุกครั้ง",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><polyline points="1 4 1 10 7 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/><path d="M3.51 15a9 9 0 102.13-9.36L1 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
  {
    text: "ไม่ต้องรอ Developer",
    icon: (<svg width="14" height="14" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="1.5"/><polyline points="12 6 12 12 16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>),
  },
];

export function WhatVoyagerSection() {
  return (
    <Section id="solution" bgVideo={whatVoyager}>
      <div className="grid w-full gap-8 lg:grid-cols-[1fr_1.3fr] lg:items-center">

        {/* ── Left: Headline + Teams + Footer ── */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5 }}
            className="text-[10px] font-semibold uppercase tracking-[0.22em] text-voyager-cyan"
          >
            05 / 08 · Voyager Does
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mt-3 text-[clamp(1.6rem,2.4vw,2.8rem)] font-semibold leading-[1.2] text-voyager-mist"
          >
            เปลี่ยนจาก{" "}
            <span className="text-voyager-mist/50">"เกิดอะไรขึ้น"</span>
            <br />
            เป็น{" "}
            <span className="text-voyager-cyan">"ทำไมมันถึงเกิดขึ้น"</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.14 }}
            className="mt-3 text-sm leading-6 text-voyager-mist/60"
          >
            Voyager เชื่อม behavior, journey และ service log<br />
            ให้ AI วิเคราะห์และสรุปเป็น insight ที่ทุกทีมเข้าใจตรงกัน
          </motion.p>

          {/* 4 Teams */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.22 }}
            className="mt-6 grid grid-cols-2 gap-2.5"
          >
            {teams.map((t, i) => (
              <div key={i} className="flex items-center gap-3 rounded-lg border border-voyager-purple/18 bg-voyager-ink/52 px-3.5 py-3 backdrop-blur-sm">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-voyager-purple/30 bg-voyager-purple/10 text-voyager-purple">
                  {t.icon}
                </div>
                <div>
                  <p className="text-[11px] font-bold uppercase tracking-[0.1em] text-voyager-cyan">{t.role}</p>
                  <p className="mt-0.5 text-[12px] leading-4 text-voyager-mist/70">{t.benefit}</p>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Footer — visible pill */}
          <motion.div
            initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.38 }}
            className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1.5 rounded-lg border border-voyager-cyan/18 bg-voyager-ink/50 px-4 py-2.5 backdrop-blur-sm"
          >
            {[
              "ทุกทีมเห็นภาพเดียวกัน",
              "ไม่ต้องเริ่มจากศูนย์ทุกครั้ง",
              "ไม่ต้องรอ Developer",
            ].map((t, i) => (
              <span key={i} className="flex items-center gap-2">
                {i > 0 && <span className="text-voyager-mist/20">·</span>}
                <span className="text-[11px] font-semibold text-voyager-mist/72">{t}</span>
              </span>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Before / divider / After ── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.16 }}
          className="flex flex-col gap-0"
        >
          {/* Before */}
          <div className="rounded-xl border border-voyager-purple/20 bg-voyager-ink/62 p-5 backdrop-blur-sm">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-red-400/70" />
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-voyager-mist/72">
                Before — ข้อมูลยังแยกส่วน
              </p>
            </div>
            <ul className="space-y-3.5">
              {before.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-voyager-purple/25 bg-voyager-purple/10 text-voyager-purple/70">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[13px] font-semibold leading-5 text-voyager-mist/78">{item.main}</p>
                    <p className="mt-0.5 text-[11px] text-voyager-mist/48">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Transformation band */}
          <div className="relative my-2 flex h-9 items-center justify-center overflow-visible">
            {/* Glowing line full-width */}
            <div className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-voyager-cyan/70 to-transparent" />
            <div className="absolute inset-x-0 top-1/2 h-4 -translate-y-1/2 bg-gradient-to-r from-transparent via-voyager-cyan/12 to-transparent blur-sm" />
            {/* Center pill */}
            <div className="relative z-10 rounded-full border border-voyager-cyan/40 bg-voyager-ink px-4 py-1 shadow-[0_0_24px_rgba(93,202,165,0.45)]">
              <span className="text-[9px] font-bold uppercase tracking-[0.2em] text-voyager-cyan">
                ✦ Voyager
              </span>
            </div>
          </div>

          {/* After — vibrant, solution */}
          <div className="relative overflow-hidden rounded-xl border border-voyager-cyan/40 bg-voyager-ink/70 p-5 shadow-[0_0_48px_rgba(93,202,165,0.18)] backdrop-blur-sm">
            <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-voyager-cyan/14 blur-3xl" />
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 rounded-full bg-voyager-purple/8 blur-2xl" />
            <div className="mb-4 flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-voyager-cyan shadow-[0_0_6px_rgba(93,202,165,0.9)]" />
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-voyager-cyan">
                After — Voyager ทำให้ทุกอย่างเชื่อมโยง
              </p>
            </div>
            <ul className="space-y-4">
              {after.map((item, i) => (
                <li key={i} className={`flex items-start gap-3 ${i === 0 ? "rounded-lg border border-voyager-cyan/20 bg-voyager-cyan/5 p-3" : ""}`}>
                  <span className={`shrink-0 text-voyager-cyan drop-shadow-[0_0_8px_rgba(93,202,165,0.8)] ${i === 0 ? "mt-0" : "mt-0.5"}`}>
                    <svg width={i === 0 ? 22 : 20} height={i === 0 ? 22 : 20} viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5"/>
                      <path d="M8 12l3 3 5-6" stroke="currentColor" strokeWidth={i === 0 ? 2 : 1.8} strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <div>
                    <p className={`font-semibold leading-5 text-voyager-cyan ${i === 0 ? "text-[15px]" : "text-[13px]"}`}>{item.main}</p>
                    <p className="mt-0.5 text-[11px] text-voyager-mist/62">{item.sub}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

      </div>
    </Section>
  );
}
