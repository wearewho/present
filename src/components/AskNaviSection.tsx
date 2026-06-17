import { useEffect } from "react";
import { Section } from "./Section";

const agentId = import.meta.env.VITE_ELEVENLABS_AGENT_ID as string | undefined;
const scriptSrc = "https://unpkg.com/@elevenlabs/convai-widget-embed";

export function AskNaviSection() {
  useEffect(() => {
    if (!agentId || document.querySelector(`script[src="${scriptSrc}"]`)) return;
    const script = document.createElement("script");
    script.src = scriptSrc;
    script.async = true;
    script.type = "text/javascript";
    document.body.appendChild(script);
  }, []);

  return (
    <Section id="ask-navi" className="min-h-[90vh]">
      <div className="overflow-hidden rounded-md border border-voyager-cyan/22 bg-[linear-gradient(135deg,rgba(93,202,165,0.12),rgba(169,143,255,0.16)_45%,rgba(11,16,38,0.88))] p-8 md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="section-kicker text-xs font-semibold">Ask Navi</p>
            <h2 className="mt-5 text-balance text-4xl font-semibold leading-tight text-voyager-mist md:text-6xl">Ask Navi about Voyager</h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-voyager-mist/70">ถาม Navi ได้ว่า Voyager คืออะไร ช่วยทีมยังไง และ Green House ต่อโปรเจคนี้ไปทางไหน</p>
          </div>
          <div className="min-h-[360px] rounded-md border border-voyager-mist/12 bg-voyager-ink/64 p-5">
            {agentId ? (
              <elevenlabs-convai agent-id={agentId} />
            ) : (
              <div className="flex h-full min-h-[320px] flex-col justify-between">
                <div className="flex items-center justify-between gap-4">
                  <span className="text-sm font-semibold text-voyager-cyan">Navi is almost ready</span>
                  <span className="rounded-full border border-voyager-purple/40 px-3 py-1 text-xs text-voyager-purple">Agent ID pending</span>
                </div>
                <div className="space-y-3">
                  <div className="w-4/5 rounded-md bg-voyager-mist/10 p-4 text-sm leading-6 text-voyager-mist/72">ElevenLabs Conversational AI widget will appear here.</div>
                  <div className="ml-auto w-4/5 rounded-md bg-voyager-cyan/14 p-4 text-sm leading-6 text-voyager-mist/78">Add VITE_ELEVENLABS_AGENT_ID to enable Ask Navi.</div>
                </div>
                <div className="h-12 rounded-md border border-voyager-mist/10 bg-voyager-navy/70" />
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}
