import { motion } from "framer-motion";

export function JourneyNode({ label, active, warning, onClick }: { label: string; active?: boolean; warning?: boolean; onClick?: () => void }) {
  return (
    <button
      onClick={onClick}
      className={`group relative rounded-md border p-4 text-left transition ${
        active ? "border-voyager-cyan bg-voyager-cyan/12" : warning ? "border-voyager-purple/50 bg-voyager-purple/10" : "border-voyager-mist/10 bg-voyager-ink/45 hover:border-voyager-cyan/40"
      }`}
    >
      <span className="block text-sm font-semibold text-voyager-mist">{label}</span>
      {active ? <motion.span layoutId="journey-active" className="absolute inset-0 rounded-md border border-voyager-cyan/60 shadow-glow" /> : null}
      {warning ? <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-voyager-purple shadow-violet" /> : null}
    </button>
  );
}
