import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function AnimatedCounter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let frame = 0;
    const total = 44;
    const tick = () => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / total, 4);
      setCount(Math.round(value * progress));
      if (frame < total) window.requestAnimationFrame(tick);
    };
    window.requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}
