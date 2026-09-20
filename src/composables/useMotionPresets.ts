/**
 * Shared motion-v presets — the single source of truth for this site's
 * scroll-reveal and stagger timing, so every section reads as one system
 * instead of each hand-picking its own numbers. Replaces the old
 * IntersectionObserver + CSS-transition `v-reveal` directive: motion-v's
 * `whileInView` drives the same "fade/lift in once, on first scroll into
 * view" behavior, but through the Web Animations API rather than a
 * class-toggle-triggered CSS transition (which is what could end up
 * silently producing no visible transition at all, depending on timing).
 */

export const EASE_PREMIUM = [0.22, 1, 0.36, 1] as const;

// margin expands the trigger area upward so the reveal starts a little
// before the section is 20% into the viewport, giving the eye more of the
// motion to actually catch while scrolling rather than firing late.
export const IN_VIEW_ONCE = { once: true, amount: 0.2, margin: '0px 0px -80px 0px' } as const;

/** A single element fading/lifting in — section wrappers, cards on their own. */
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 22 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: EASE_PREMIUM } },
};

/** Parent for a staggered group — apply alongside `fadeUpItemVariants` on each child. */
export function staggerContainerVariants(staggerChildren = 0.08) {
  return {
    hidden: {},
    visible: { transition: { staggerChildren } },
  };
}

/** Child of a `staggerContainerVariants` parent — inherits hidden/visible from it. */
export function fadeUpItemVariants(distance = 16) {
  return {
    hidden: { opacity: 0, y: distance },
    visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE_PREMIUM } },
  };
}
