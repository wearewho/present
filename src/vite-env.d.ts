/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ELEVENLABS_AGENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare namespace React {
  namespace JSX {
    interface IntrinsicElements {
      "elevenlabs-convai": {
        "agent-id"?: string;
        className?: string;
        style?: React.CSSProperties;
      };
    }
  }
}
