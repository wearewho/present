import type { PropsWithChildren } from "react";
import cinematicCockpit from "../assets/cinematic-cockpit.png";

const planets: Record<string, { name: string; planet: string; ring: string; position: string; noRings?: boolean; noPlanet?: boolean }> = {
  why: {
    name: "Pain Planet",
    planet: "bg-[radial-gradient(circle_at_35%_32%,rgba(169,143,255,0.72),rgba(69,43,126,0.62)_35%,rgba(12,9,42,0)_72%)]",
    ring: "border-voyager-purple/26",
    position: "-left-24 top-20 md:-left-32 md:top-16",
    noRings: true,
    noPlanet: true,
  },
  pain: {
    name: "Signal Moon",
    planet: "bg-[radial-gradient(circle_at_40%_30%,rgba(93,202,165,0.68),rgba(19,72,82,0.62)_34%,rgba(7,8,22,0)_72%)]",
    ring: "border-voyager-cyan/22",
    position: "-right-20 bottom-4 md:-right-28 md:bottom-6",
    noPlanet: true,
  },
  map: {
    name: "Journey Belt",
    planet: "bg-[radial-gradient(circle_at_38%_34%,rgba(216,227,255,0.58),rgba(169,143,255,0.42)_26%,rgba(34,17,70,0)_70%)]",
    ring: "border-voyager-purple/30",
    position: "-left-24 bottom-8 md:-left-32 md:bottom-12",
  },
  ai: {
    name: "Shared Insight",
    planet: "bg-[radial-gradient(circle_at_48%_35%,rgba(93,202,165,0.76),rgba(169,143,255,0.28)_30%,rgba(7,8,22,0)_68%)]",
    ring: "border-voyager-cyan/30",
    position: "-right-24 top-14 md:-right-36 md:top-20",
    noPlanet: true,
  },
  "why-greenhouse": {
    name: "Why G-House",
    planet: "bg-[radial-gradient(circle_at_36%_30%,rgba(93,202,165,0.66),rgba(32,91,75,0.54)_35%,rgba(7,8,22,0)_72%)]",
    ring: "border-voyager-cyan/24",
    position: "-right-20 top-10 md:-right-28 md:top-12",
    noPlanet: true,
  },
  greenhouse: {
    name: "Green House",
    planet: "bg-[radial-gradient(circle_at_36%_30%,rgba(93,202,165,0.66),rgba(32,91,75,0.54)_35%,rgba(7,8,22,0)_72%)]",
    ring: "border-voyager-cyan/24",
    position: "-left-20 top-10 md:-left-28 md:top-12",
    noPlanet: true,
  },
  roadmap: {
    name: "Future Orbit",
    planet: "bg-[radial-gradient(circle_at_40%_30%,rgba(169,143,255,0.68),rgba(26,18,62,0.62)_38%,rgba(7,8,22,0)_72%)]",
    ring: "border-voyager-purple/30",
    position: "-right-24 bottom-0 md:-right-32 md:bottom-8",
  },
  "ask-navi": {
    name: "Navi Station",
    planet: "bg-[radial-gradient(circle_at_42%_28%,rgba(216,227,255,0.72),rgba(93,202,165,0.42)_26%,rgba(169,143,255,0.22)_46%,rgba(7,8,22,0)_72%)]",
    ring: "border-voyager-cyan/30",
    position: "-left-24 bottom-4 md:-left-36 md:bottom-8",
  },
};

export function Section({ id, children, className = "", fullBleed = false, bgVideo, mirrorVideo = false, videoCover = false }: PropsWithChildren<{ id: string; className?: string; fullBleed?: boolean; bgVideo?: string; mirrorVideo?: boolean; videoCover?: boolean }>) {
  const planet = planets[id];

  return (
    <section id={id} className={`mission-slide relative z-10 flex h-screen snap-start snap-always items-center overflow-hidden px-5 py-16 md:px-10 ${className}`}>
      {id !== "hero" ? (
        <div aria-hidden="true" className="absolute inset-0 -z-20">
          {bgVideo ? (
            <>
              <video className={`absolute inset-0 h-full w-full ${videoCover ? "object-cover" : "object-contain"}${mirrorVideo ? " scale-x-[-1]" : ""}`} src={bgVideo} autoPlay muted loop playsInline preload="auto" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,8,22,0.55)_0%,rgba(7,8,22,0.72)_52%,rgba(7,8,22,0.92)_100%)]" />
            </>
          ) : (
            <>
              <img src={cinematicCockpit} alt="" className="h-full w-full scale-110 object-cover opacity-[0.18] blur-[1px]" />
              <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,8,22,0.96),rgba(7,8,22,0.78)_48%,rgba(29,18,61,0.72)),radial-gradient(circle_at_70%_45%,rgba(93,202,165,0.08),transparent_30%)]" />
            </>
          )}
        </div>
      ) : null}
      {planet && !planet.noPlanet ? (
        <div aria-hidden="true" className={`pointer-events-none absolute ${planet.position} h-72 w-72 md:h-[34rem] md:w-[34rem]`}>
          <div className={`absolute inset-0 rounded-full ${planet.planet} opacity-45 blur-[8px]`} />
          {!planet.noRings && <div className={`absolute inset-[10%] rounded-full border ${planet.ring}`} />}
          {!planet.noRings && <div className={`absolute inset-[-12%] rounded-full border ${planet.ring} rotate-12 scale-x-125 opacity-55`} />}
          <p className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 translate-y-16 text-center text-xs font-semibold uppercase tracking-[0.18em] text-voyager-mist/28 md:block">
            {planet.name}
          </p>
        </div>
      ) : null}
      <div className={fullBleed ? "relative w-full" : "relative mx-auto w-full max-w-7xl"}>{children}</div>
    </section>
  );
}
