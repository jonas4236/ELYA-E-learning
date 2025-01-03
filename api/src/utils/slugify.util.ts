import slugify from 'slugify';

export function slugifyLib(text: string): string {
  return slugify(text, { replacement: '-', lower: true, strict: true });
}
