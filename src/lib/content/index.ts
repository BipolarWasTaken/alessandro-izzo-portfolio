import { it } from "./it";
import { en } from "./en";
import type { Content, Locale } from "./types";

export const content: Record<Locale, Content> = { it, en };
export * from "./types";
