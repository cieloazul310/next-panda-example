export function isInternal(href: string | URL | undefined | null) {
  if (!href) return false;
  return /^\/(?!\/)/.test(href.toString());
}
