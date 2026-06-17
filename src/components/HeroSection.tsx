import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import heroMissionLoop from "../assets/hero-mission-loop.mp4";
import voyagerLogo from "../assets/voyager-logo.png";
import { Section } from "./Section";

const heroVideoUrl = "https://www.youtube.com/embed/29klu5R_cYo?autoplay=1";

export function HeroSection() {
  const [watching, setWatching] = useState(false);

  useEffect(() => {
    if (!watching) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === "Escape") setWatching(false); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [watching]);
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -90]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.38]);

  return (
    <Section id="hero" className="min-h-screen !px-0 py-0" fullBleed>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video className="absolute inset-0 h-full w-full object-cover object-center" src={heroMissionLoop} autoPlay muted loop playsInline preload="auto" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,4,13,0.95)_0%,rgba(3,4,13,0.72)_34%,rgba(3,4,13,0.12)_66%,rgba(3,4,13,0.20)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_47%,rgba(169,143,255,0.16),transparent_30%),linear-gradient(180deg,rgba(3,4,13,0.10),rgba(3,4,13,0.62))]" />
        <div className="absolute bottom-0 right-0 h-[58vh] w-[58vw] bg-[radial-gradient(circle_at_55%_45%,rgba(93,202,165,0.16),transparent_38%)]" />
        <div className="hero-stars absolute inset-0" />
      </div>
      <motion.div style={{ y, opacity }} className="relative z-10 min-h-screen px-6 pb-10 pt-5 md:px-16 md:pt-3 lg:px-24">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="flex items-center">
          <img src={voyagerLogo} alt="Voyager Story Hub" className="h-16 w-auto object-contain md:h-[4.6rem]" />
        </motion.div>

        <div className="mt-10 max-w-[46rem] md:mt-8 xl:mt-10">
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.02 }} className="section-kicker text-xs font-semibold text-voyager-cyan/90">
            Story Hub · Town Hall Mission
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="mt-7 text-balance text-[clamp(3.1rem,5vw,6.4rem)] font-semibold leading-[0.96] text-voyager-mist drop-shadow-[0_18px_42px_rgba(0,0,0,0.72)]"
          >
            <span className="block">From Pain</span>
            <span className="block">to Journey</span>
            <span className="block text-voyager-cyan drop-shadow-[0_0_30px_rgba(93,202,165,0.24)]">Intelligence</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.18, ease: [0.16, 1, 0.3, 1] }} className="mt-6 max-w-xl text-xl leading-9 text-voyager-mist/76 drop-shadow-[0_8px_24px_rgba(0,0,0,0.68)]">
            จาก pain จริงของทีม<br />สู่ AI ที่ช่วยให้องค์กรเข้าใจ Customer Journey ได้ชัดขึ้น
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.28 }} className="mt-9 flex flex-wrap gap-3">
            <a href="#why" className="group inline-flex min-w-64 items-center justify-between rounded-full bg-voyager-cyan px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-voyager-ink shadow-glow transition hover:scale-[1.02]">
              Begin Journey
              <span className="text-xl transition group-hover:translate-x-1">→</span>
            </a>
            <button onClick={() => setWatching(true)} className="rounded-full border border-voyager-mist/22 bg-voyager-ink/22 px-7 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-voyager-mist/82 backdrop-blur transition hover:border-voyager-purple hover:text-voyager-purple">
              Watch Story
            </button>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.42 }} className="mt-8 flex flex-wrap items-center gap-4">
            <span className="text-4xl font-semibold text-voyager-cyan">01</span>
            <span className="text-xl text-voyager-mist/54">/ 08</span>
            <span className="text-voyager-mist/28">·</span>
            <span className="text-sm font-semibold uppercase tracking-[0.12em] text-voyager-mist">Story <span className="text-voyager-mist/52">— จุดเริ่มต้นของการเดินทาง</span></span>
          </motion.div>
        </div>

      </motion.div>
      {watching ? (
        <div className="fixed inset-0 z-[80] grid place-items-center bg-voyager-ink/92 p-5 backdrop-blur-md" onClick={() => setWatching(false)}>
          <button className="absolute right-6 top-6 z-10 rounded-full border border-voyager-mist/20 bg-voyager-ink/80 px-4 py-2 text-sm font-semibold text-voyager-mist/70 backdrop-blur transition hover:border-voyager-cyan hover:text-voyager-cyan">
            Close · Esc
          </button>
          <div className="w-full max-w-6xl overflow-hidden rounded-sm border border-voyager-mist/18 bg-voyager-ink shadow-[0_42px_140px_rgba(0,0,0,0.72)]" onClick={(e) => e.stopPropagation()}>
            <iframe className="aspect-video w-full" src={heroVideoUrl} title="Voyager Story Hub video" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen />
          </div>
        </div>
      ) : null}
    </Section>
  );
}
