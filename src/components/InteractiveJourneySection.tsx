import { Fragment, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { journeySteps } from "../data/journeySteps";
import { Section } from "./Section";
import journeyBelt from "../assets/journey-belt.mp4";

const chipColor: Record<string, string> = {
  behavior: "border-voyager-cyan/30 bg-voyager-cyan/10 text-voyager-cyan",
  service:  "border-voyager-purple/35 bg-voyager-purple/12 text-voyager-purple",
  insight:  "border-voyager-mist/18 bg-voyager-mist/6 text-voyager-mist/55",
};
const chipLabel: Record<string, string> = {
  behavior: "Behavior",
  service:  "Service",
  insight:  "Insight",
};

export function InteractiveJourneySection() {
  const [activeIndex, setActiveIndex] = useState(3); // Payment default

  const active = journeySteps[activeIndex];

  return (
    <Section id="map" bgVideo={journeyBelt} className="!px-0 py-0" fullBleed>
      <div className="flex min-h-screen flex-col justify-center px-8 pb-20 pt-24 md:px-14 lg:px-20">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">

          {/* ── Left: content ── */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-[10px] font-semibold uppercase tracking-[0.22em] text-voyager-purple"
            >
              07 / 10 · Journey Belt
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.06 }}
              className="mt-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-voyager-cyan"
            >
              Follow the Customer Journey
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="mt-4 text-[clamp(2rem,3.6vw,4rem)] font-semibold leading-[1.1] text-voyager-mist"
            >
              เราเริ่มเห็น journey<br />เป็นภาพเดียวกัน
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.18 }}
              className="mt-4 text-lg leading-7 text-voyager-mist"
            >
              ทุก step ของลูกค้าถูกเชื่อมกับ behavior และ signal ที่เกี่ยวข้อง
            </motion.p>

            {/* Quote — plain text, no big card */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.26 }}
              className="mt-6 border-l-2 border-voyager-cyan/50 pl-4 text-sm italic leading-7 text-voyager-mist/72"
            >
              ไม่ใช่แค่รู้ว่าลูกค้าหลุด<br />แต่รู้ว่าเขาหลุดหลังจากผ่านอะไรมาบ้าง
            </motion.p>
          </div>

          {/* ── Right: journey visual ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-xl bg-voyager-ink/22 px-5 py-6 backdrop-blur-[2px]"
          >
            {/* Step nodes — pt-10 gives room for labels sitting above circles */}
            <div className="flex items-start pt-10">
              {journeySteps.map((step, i) => {
                const isActive = i === activeIndex;
                const isFriction = step.friction;
                return (
                  <Fragment key={step.id}>
                    {i > 0 && (
                      <div className="relative min-w-[12px] flex-1" style={{ marginTop: "23px" }}>
                        <div className={`h-[2px] w-full transition-colors duration-500 ${i <= activeIndex ? "bg-voyager-cyan/90" : "bg-voyager-mist/35"}`} />
                        <div className={`absolute left-1/2 top-0 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full transition-colors duration-500 ${i <= activeIndex ? "bg-voyager-cyan shadow-[0_0_10px_rgba(93,202,165,0.9)]" : "bg-voyager-mist/40"}`} />
                      </div>
                    )}
                    <button
                      onClick={() => setActiveIndex(i)}
                      className="relative w-12 shrink-0 flex flex-col items-center group"
                    >
                      {/* Label ABOVE the circle */}
                      <span className={`absolute -top-9 w-max text-center text-[11px] font-semibold leading-4 transition-colors duration-300 ${
                        isActive && isFriction
                          ? "text-voyager-purple"
                          : isActive
                          ? "text-voyager-cyan"
                          : "text-voyager-mist/50"
                      }`}>
                        {step.title.split(" ").map((word, wi) => (
                          <span key={wi} className="block">{word}</span>
                        ))}
                      </span>

                      <div className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 text-sm font-bold transition-all duration-400 ${
                        isActive && isFriction
                          ? "border-voyager-purple bg-voyager-purple/20 text-voyager-purple shadow-[0_0_52px_rgba(169,143,255,0.8)]"
                          : isActive
                          ? "border-voyager-cyan bg-voyager-cyan/20 text-voyager-cyan shadow-[0_0_28px_rgba(93,202,165,0.5)]"
                          : "border-voyager-mist/18 bg-voyager-ink/55 text-voyager-mist/45 group-hover:border-voyager-mist/35 group-hover:text-voyager-mist/70"
                      }`}>
                        {i + 1}
                        {isActive && (
                          <span className="absolute inset-0 animate-ping rounded-full border-2 border-current opacity-25" />
                        )}
                        {isFriction && !isActive && (
                          <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 rounded-full bg-voyager-purple shadow-violet" />
                        )}
                      </div>
                      {/* Vertical connector + bottom dot */}
                      {isActive ? (
                        <div className="flex flex-col items-center mt-1">
                          <div className={`w-[2px] h-14 ${isFriction ? "bg-voyager-purple/75" : "bg-voyager-cyan/75"}`} />
                          <div className={`h-2 w-2 rounded-full ${isFriction ? "bg-voyager-purple shadow-[0_0_8px_rgba(169,143,255,0.9)]" : "bg-voyager-cyan shadow-[0_0_8px_rgba(93,202,165,0.9)]"}`} />
                        </div>
                      ) : (
                        <div className="mt-2 h-8" />
                      )}
                    </button>
                  </Fragment>
                );
              })}
            </div>

            {/* Detail card — flush under the connector dot */}
            <div className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
                  className={`rounded-md border p-5 backdrop-blur-sm ${
                    active.friction
                      ? "border-voyager-purple/35 border-t-[2px] border-t-voyager-purple/80 bg-voyager-ink/72"
                      : "border-voyager-mist/12 border-t-[2px] border-t-voyager-cyan/60 bg-voyager-ink/60"
                  }`}
                >
                  {/* Card header */}
                  <p className="mb-4 text-xs font-semibold uppercase tracking-[0.14em] text-voyager-mist/40">
                    Selected Step:{" "}
                    <span className={`normal-case tracking-normal text-sm font-semibold ${active.friction ? "text-voyager-purple" : "text-voyager-cyan"}`}>
                      {active.title}
                    </span>
                  </p>

                  {/* Details grid */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    {active.details.map((item, di) => (
                      <div key={di} className="flex flex-col gap-1.5">
                        <span className={`w-fit rounded-full border px-1.5 py-px text-[8px] font-bold uppercase tracking-[0.12em] ${chipColor[item.type]}`}>
                          {chipLabel[item.type]}
                        </span>
                        <p className="text-sm font-semibold leading-5 text-voyager-mist/85">{item.label}</p>
                        <p className="text-xs leading-5 text-voyager-mist/52">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </div>
    </Section>
  );
}
