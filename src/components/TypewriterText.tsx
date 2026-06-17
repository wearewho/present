import { useEffect, useState } from "react";

export type TextSegment = { text: string; className?: string };

export function TypewriterText({ segments, enabled = true }: { segments: TextSegment[]; enabled?: boolean }) {
  const [visibleCount, setVisibleCount] = useState(0);

  const totalChars = segments.reduce((sum, s) => sum + s.text.length, 0);

  useEffect(() => {
    if (!enabled) { setVisibleCount(0); return; }
    setVisibleCount(0);
    let count = 0;
    const timer = window.setInterval(() => {
      count += 1;
      setVisibleCount(count);
      if (count >= totalChars) window.clearInterval(timer);
    }, 38);
    return () => window.clearInterval(timer);
  }, [enabled, totalChars]);

  let remaining = visibleCount;
  const rendered = segments.map((seg, i) => {
    if (remaining <= 0) return null;
    const visible = seg.text.slice(0, remaining);
    remaining -= seg.text.length;
    return (
      <span key={i} className={seg.className}>
        {visible}
      </span>
    );
  });

  return (
    <pre className="min-h-[300px] whitespace-pre-wrap rounded-md border border-voyager-cyan/20 bg-voyager-ink/72 p-5 text-sm leading-7 text-voyager-mist shadow-glow md:text-base">
      {rendered}
      {enabled && visibleCount < totalChars && (
        <span className="ml-1 inline-block h-5 w-2 translate-y-1 animate-pulse bg-voyager-cyan" />
      )}
    </pre>
  );
}
