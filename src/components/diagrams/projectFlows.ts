import type { Locale } from "@/lib/content/types";
import type { FlowStep } from "./FlowDiagram";

const FLOWS: Record<string, Record<Locale, FlowStep[]>> = {
  clipforge: {
    it: [
      { title: "VOD / Diretta", detail: "Twitch, Kick" },
      { title: "Trascrizione", detail: "Whisper" },
      { title: "Rilevamento momenti salienti" },
      { title: "Clip verticale + sottotitoli" },
      { title: "Pubblicazione", detail: "TikTok" },
    ],
    en: [
      { title: "VOD / Livestream", detail: "Twitch, Kick" },
      { title: "Transcription", detail: "Whisper" },
      { title: "Highlight detection" },
      { title: "Vertical clip + captions" },
      { title: "Publish", detail: "TikTok" },
    ],
  },
  "ai-cv-tailor": {
    it: [
      { title: "Offerta di lavoro" },
      { title: "AI CV Tailor", detail: "regola anti-invenzione" },
      { title: "CV + lettera su misura" },
      { title: "Lancio pubblico", detail: "Product Hunt", highlight: true },
    ],
    en: [
      { title: "Job posting" },
      { title: "AI CV Tailor", detail: "anti-fabrication rule" },
      { title: "Tailored CV + cover letter" },
      { title: "Public launch", detail: "Product Hunt", highlight: true },
    ],
  },
  "discord-lead-gen": {
    it: [
      { title: "Ricerca lead", detail: "118 individuati" },
      { title: "Outreach personalizzato", detail: "105 contattati" },
      { title: "Risposte ricevute", detail: "alcune risposte" },
      { title: "Vendita chiusa", detail: "0 ad oggi", muted: true },
    ],
    en: [
      { title: "Lead sourcing", detail: "118 identified" },
      { title: "Personalized outreach", detail: "105 contacted" },
      { title: "Responses received", detail: "some responses" },
      { title: "Closed sale", detail: "0 to date", muted: true },
    ],
  },
  aicos: {
    it: [
      { title: "Audit richiesto", detail: "in prima persona" },
      { title: "Ricerca prospect + contenuti" },
      { title: "Controlli qualità & sicurezza" },
      { title: "Approvazione umana", detail: "mai bypassata", highlight: true },
      { title: "Outreach email" },
    ],
    en: [
      { title: "Audit requested", detail: "in person" },
      { title: "Prospect research + content" },
      { title: "Quality & safety checks" },
      { title: "Human approval gate", detail: "never bypassed", highlight: true },
      { title: "Email outreach" },
    ],
  },
};

export function getProjectFlow(id: string, locale: Locale): FlowStep[] {
  return FLOWS[id]?.[locale] ?? [];
}
