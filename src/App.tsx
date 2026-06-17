import { useEffect } from "react";
import { AISummarySection } from "./components/AISummarySection";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { BusinessImpactSection } from "./components/BusinessImpactSection";
import { GreenHouseSection } from "./components/GreenHouseSection";
import { WhyGreenhouseSection } from "./components/WhyGreenhouseSection";
import { HeroSection } from "./components/HeroSection";
import { Layout } from "./components/Layout";
import { PainStatsSection } from "./components/PainStatsSection";
import { RoadmapSection } from "./components/RoadmapSection";
import { WhatVoyagerSection } from "./components/WhatVoyagerSection";
import { WhyStartedSection } from "./components/WhyStartedSection";

const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID as string | undefined;
const scriptSrc = "https://unpkg.com/@elevenlabs/convai-widget-embed";

export default function App() {
  useEffect(() => {
    if (!agentId || document.querySelector(`script[src="${scriptSrc}"]`)) return;
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <main className="relative min-h-screen bg-[radial-gradient(circle_at_20%_0%,rgba(93,202,165,0.16),transparent_30%),radial-gradient(circle_at_80%_12%,rgba(169,143,255,0.18),transparent_26%),linear-gradient(180deg,#070816_0%,#0B1026_42%,#1D123D_100%)]">
      <BackgroundEffects />
      {agentId && <elevenlabs-convai agent-id={agentId} style={{ display: "none" }} />}
      <Layout>
        <HeroSection />
        <WhyStartedSection />
        <PainStatsSection />
        <BusinessImpactSection />
        <WhatVoyagerSection />
        <AISummarySection />
        <WhyGreenhouseSection />
        {/* <GreenHouseSection /> */}
        <RoadmapSection />
      </Layout>
    </main>
  );
}
