/**
 * Scrolls smoothly to an in-page section by id without touching
 * window.location — keeps the address bar clean (no "#id" fragment),
 * which history-mode routing + SSG requires to avoid hash URLs.
 */
export function scrollToSection(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
