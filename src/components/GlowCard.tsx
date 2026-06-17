import type { PropsWithChildren } from "react";

export function GlowCard({ children, className = "" }: PropsWithChildren<{ className?: string }>) {
  return <div className={`rounded-md border border-voyager-mist/10 bg-voyager-navy/48 shadow-glow ${className}`}>{children}</div>;
}
