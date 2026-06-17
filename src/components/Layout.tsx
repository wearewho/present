import { useEffect, useState, type PropsWithChildren } from "react";
import voyagerLogo from "../assets/voyager-logo.png";

const sections: [string, string, string][] = [
  ["hero",       "Launch",         "cyan"],
  ["why",        "Pain Planet",    "purple"],
  ["pain",       "Signal Moon",    "cyan"],
  ["impact",     "Impact Zone",    "purple"],
  ["solution",   "Voyager Does",   "cyan"],
  ["ai",             "Shared Insight", "cyan"],
  ["why-greenhouse", "Why G-House",   "cyan"],
  ["roadmap",        "Future Orbit",  "purple"],
];

export function Layout({ children }: PropsWithChildren) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const observers = sections.map(([id], index) => {
      const element = document.getElementById(id);
      if (!element) return null;
      const observer = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(index); },
        { threshold: 0.55 },
      );
      observer.observe(element);
      return observer;
    });
    return () => { observers.forEach((o) => o?.disconnect()); };
  }, []);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (!["ArrowDown", "ArrowUp"].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === "ArrowDown"
        ? Math.min(sections.length - 1, active + 1)
        : Math.max(0, active - 1);
      document.getElementById(sections[next][0])?.scrollIntoView({ behavior: "smooth", block: "start" });
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  const progress = `${((active + 1) / sections.length) * 100}%`;
  const activeColor = sections[active][2];
  const isPurple = activeColor === "purple";
  const textActive   = isPurple ? "text-voyager-purple" : "text-voyager-cyan";
  const barActive    = isPurple ? "bg-voyager-purple"   : "bg-voyager-cyan";
  const dotActiveCls = isPurple
    ? "bg-voyager-purple shadow-[0_0_8px_rgba(169,143,255,0.8)]"
    : "bg-voyager-cyan shadow-[0_0_8px_rgba(93,202,165,0.8)]";

  return (
    <>
      <div className="fixed inset-x-5 top-5 z-40 hidden md:block">

        {/* Dot nav — full width, label under each dot, progress bar embedded right */}
        <nav
          className="flex items-center justify-between rounded-full border border-voyager-mist/10 bg-voyager-ink/42 px-4 py-3 backdrop-blur"
          aria-label="Mission waypoints"
        >
          {/* Brand chip */}
          <a href="#hero" className="mr-3 flex shrink-0 items-center gap-1.5 rounded-full border border-voyager-mist/12 bg-voyager-ink/60 px-3 py-1">
            <img src={voyagerLogo} alt="" className="h-4 w-4" />
            <span className="text-[8px] font-bold uppercase tracking-[0.12em] text-voyager-mist/55">Voyager<br/>Story Hub</span>
          </a>

          {sections.map(([id, label], index) => {
            const isActive = index === active;
            const sColor = sections[index][2];
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-label={label}
                className="group relative flex flex-col items-center gap-1.5"
              >
                <span className={`block rounded-full transition-all duration-500 ${
                  isActive
                    ? `h-2.5 w-2.5 ${dotActiveCls}`
                    : "h-1.5 w-1.5 bg-voyager-mist/25 group-hover:bg-voyager-mist/55"
                }`} />
                <span className={`whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.1em] transition-colors duration-500 ${
                  isActive
                    ? sColor === "purple" ? "text-voyager-purple" : "text-voyager-cyan"
                    : "text-voyager-mist/30 group-hover:text-voyager-mist/55"
                }`}>
                  {label}
                </span>
              </a>
            );
          })}

          {/* Progress bar — inside nav pill on far right */}
          <div className="ml-4 flex shrink-0 items-center gap-2 border-l border-voyager-mist/12 pl-4">
            <div className="w-14 h-1 rounded-full bg-voyager-mist/12">
              <div
                className={`h-full rounded-full transition-all duration-500 ${barActive}`}
                style={{ width: progress }}
              />
            </div>
            <span className={`text-[9px] font-bold tabular-nums ${textActive}`}>
              {active + 1}/{sections.length}
            </span>
          </div>
        </nav>

      </div>
      {children}
    </>
  );
}
