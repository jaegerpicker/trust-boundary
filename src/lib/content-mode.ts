import config from '../../site-mode.json' with { type: 'json' };

export type ContentMode = 'product' | 'security';
export type Audience = ContentMode | 'shared';
export function selectMode(value: unknown): ContentMode {
  if (value !== 'product' && value !== 'security') {
    throw new Error('site-mode.json mode must be product or security');
  }
  return value;
}
export const contentMode = selectMode(config.mode);
export const isSecurity = contentMode === 'security';

// Product keeps its existing archive. Security discovery focuses on security.
// Published direct routes remain stable; draft status always takes precedence.
export function isDiscoverable(data: { draft?: boolean; audience?: Audience }, mode = contentMode) {
  return !data.draft && (mode === 'product' || (data.audience ?? 'shared') !== 'product');
}
export function isPublished(data: { draft?: boolean }) {
  return !data.draft;
}
