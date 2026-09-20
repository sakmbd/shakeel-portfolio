/**
 * Scrolls smoothly to an in-page section by id without touching
 * window.location — keeps the address bar clean (no "#id" fragment),
 * which history-mode routing + SSG requires to avoid hash URLs.
 *
 * Respects prefers-reduced-motion explicitly: Chrome does not gate a
 * JS-requested `behavior: 'smooth'` behind that preference on its own (only
 * CSS `scroll-behavior` is intended to be conditioned on it), so a caller
 * that wants smooth scrolling has to check and fall back to an instant jump
 * itself.
 */
export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const reduceMotion =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  target.scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth', block: 'start' });
}
