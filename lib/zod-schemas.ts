import { z } from 'zod';

export const SecEdgarFilingSchema = z.object({
  accessionNumber: z.string(),
  filingDate: z.string(),
  reportDate: z.string(),
  acceptanceDateTime: z.string(),
  act: z.string(),
  form: z.string(),
  fileNumber: z.string(),
  filmNumber: z.string(),
  items: z.string(),
  size: z.number(),
  isXBRL: z.number(),
  isInlineXBRL: z.number(),
  primaryDocument: z.string(),
  primaryDocDescription: z.string(),
});

export const RockstarNewswireItemSchema = z.object({
  id: z.string(),
  title: z.string(),
  link: z.string().url(),
  pubDate: z.string(),
  contentSnippet: z.string(),
  primaryTag: z.string().default('Rockstar Games'),
});

export type SecEdgarFiling = z.infer<typeof SecEdgarFilingSchema>;
export type RockstarNewswireItem = z.infer<typeof RockstarNewswireItemSchema>;
