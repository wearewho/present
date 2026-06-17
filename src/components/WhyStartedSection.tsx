import { Fragment } from "react";
import { motion } from "framer-motion";
import { Section } from "./Section";
import crackedPlanet from "../assets/cracked-purple-planet.mp4";

const steps = [
  {
    label: "Product Page",
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="3" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="3" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
        <rect x="12" y="12" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.5" opacity="0.4" />
      </svg>
    ),
  },
  {
    label: "Cart",
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <path d="M2 3h3l2.5 10h9L18 7H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="9" cy="18" r="1.5" fill="currentColor" />
        <circle cx="15" cy="18" r="1.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Checkout",
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <rect x="3" y="6" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5" />
        <path d="M3 10h16" stroke="currentColor" strokeWidth="1.5" />
        <rect x="6" y="13" width="4" height="2" rx="0.5" fill="currentColor" opacity="0.6" />
      </svg>
    ),
  },
  {
    label: "Payment",
    drop: true as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <path d="M11 3L20 19H2L11 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M11 9v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="11" cy="15.5" r="0.9" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Order Confirmed",
    success: true as const,
    icon: (
      <svg width="20" height="20" viewBox="0 0 22 22" fill="none">
        <circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.5" />
        <path d="M7 11.5l3 3 5-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function WhyStartedSection() {
  return (
    <Section id="why" bgVideo={crackedPlanet} className="!px-0 py-0" fullBleed>
      <div className="flex min-h-screen flex-col justify-center px-8 pb-48 pt-0 md:px-14 lg:max-w-[65vw] lg:px-16" style={{ marginTop: "-8vh" }}>

        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-[10px] font-semibold uppercase tracking-[0.22em] text-voyager-purple"
        >
          02 / 08 · Pain Planet
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
          className="mt-4 text-[clamp(2.4rem,4.2vw,4.8rem)] font-semibold leading-[1.06] text-voyager-mist"
        >
          มันเริ่มจาก <span className="text-voyager-purple">pain</span> จริงของทีม<br />
          ไม่ใช่ idea ในกระดาษ
        </motion.h2>

        {/* Divider + subtitle */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.14 }}
          className="mt-6"
        >
          <div className="mb-4 h-px w-10 bg-voyager-cyan" />
          <p className="text-2xl font-medium leading-9 text-voyager-mist">
            ลูกค้าเจออะไรระหว่างทาง<br />ก่อนที่จะไม่ถึงปลายทาง?
          </p>
        </motion.div>

        {/* Horizontal funnel */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.24 }}
          className="mt-10 flex items-start"
        >
          {steps.map(({ label, icon, drop, success }, i) => (
            <Fragment key={label}>
              {i > 0 && (
                <div className="relative min-w-[24px] flex-1" style={{ marginTop: "23px" }}>
                  <div className="h-[1.5px] w-full bg-voyager-mist/60" />
                  <div className="absolute left-1/2 top-0 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-voyager-mist/75" />
                </div>
              )}

              <div className="relative w-12 shrink-0 flex flex-col items-center">
                <div className={`relative flex h-12 w-12 items-center justify-center rounded-full border-2 ${
                  drop
                    ? "border-voyager-purple bg-voyager-purple/25 text-voyager-purple shadow-[0_0_36px_rgba(169,143,255,0.55)]"
                    : success
                    ? "border-voyager-cyan/50 bg-voyager-cyan/10 text-voyager-cyan"
                    : "border-voyager-mist/20 bg-voyager-ink/55 text-voyager-mist/55"
                }`}>
                  {icon}
                  {drop && (
                    <>
                      <span className="absolute -right-0.5 -top-0.5 h-2.5 w-2.5 animate-pulse rounded-full bg-voyager-purple shadow-violet" />
                      <span className="absolute inset-0 animate-ping rounded-full border-2 border-voyager-purple opacity-40" />
                      <span className="absolute -inset-2 rounded-full bg-voyager-purple/10 blur-sm" />
                    </>
                  )}
                </div>

                {drop
                  ? <div className="mt-2 h-8 w-px border-l-2 border-dashed border-voyager-purple/70" />
                  : <div className="mt-2 h-8" />
                }

                <span className={`absolute top-[92px] w-max text-center text-xs font-semibold leading-5 ${
                  drop ? "text-voyager-purple" : success ? "text-voyager-cyan" : "text-voyager-mist/88"
                }`}>
                  {label}
                </span>

                {drop && (
                  <span className="absolute top-[110px] w-max text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-voyager-purple/60">
                    จุดที่พบ friction
                  </span>
                )}

                {drop && (
                  <div className="absolute top-[136px] left-1/2 -translate-x-1/2 w-64 rounded-md border border-voyager-purple/40 bg-voyager-ink/80 px-5 py-4 shadow-[0_0_20px_rgba(169,143,255,0.18)] backdrop-blur-sm">
                    <div className="flex items-start gap-3">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 shrink-0 text-voyager-purple">
                        <path d="M12 3L22 21H2L12 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
                        <path d="M12 10v5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        <circle cx="12" cy="18" r="0.9" fill="currentColor" />
                      </svg>
                      <div>
                        <p className="text-sm font-bold text-voyager-purple">ลูกค้าหลุดออกตรงนี้</p>
                        <p className="mt-1.5 text-xs leading-5 text-voyager-mist/75">
                          แต่ทีมยังไม่เห็นว่าเกิดอะไรขึ้นระหว่างทาง
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </Fragment>
          ))}
        </motion.div>

      </div>
    </Section>
  );
}
