import { motion } from "framer-motion";

export function SectionHeading({ eyebrow, title, copy, align = "center" }: { eyebrow: string; title: string; copy?: string; align?: "center" | "left" }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-3xl"}
    >
      <p className="section-kicker mb-4 text-xs font-semibold">{eyebrow}</p>
      <h2 className="text-balance text-3xl font-semibold leading-tight text-voyager-mist md:text-5xl">{title}</h2>
      {copy ? <p className="mt-5 max-w-2xl text-base leading-8 text-voyager-mist/68 md:text-lg">{copy}</p> : null}
    </motion.div>
  );
}
