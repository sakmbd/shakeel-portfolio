<template>
  <header ref="headerEl" class="site-header">
    <div class="site-header__inner">
      <a class="site-header__brand" href="#top" @click="onNavClick($event, '#top')">{{
        identity.name
      }}</a>

      <nav class="site-nav site-nav--desktop" aria-label="Primary">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :class="{ 'is-active': activeSection === item.href }"
          :aria-current="activeSection === item.href ? 'location' : undefined"
          @click="onNavClick($event, item.href)"
        >
          {{ item.label }}
        </a>
      </nav>

      <div class="site-header__actions">
        <button
          type="button"
          class="site-header__toggle"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav-panel"
          aria-label="Toggle navigation menu"
          @click="mobileOpen = !mobileOpen"
        >
          <q-icon :name="mobileOpen ? 'close' : 'menu'" size="22px" />
        </button>
      </div>
    </div>

    <div
      id="mobile-nav-panel"
      class="site-nav--mobile"
      :class="{ 'is-open': mobileOpen }"
      :aria-hidden="!mobileOpen"
      :inert="!mobileOpen"
    >
      <nav aria-label="Primary">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          @click="onMobileNavClick($event, item.href)"
        >
          {{ item.label }}
        </a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { resume } from '@/data/resume';
import { scrollToSection } from '@/utils/scrollToSection';

const identity = resume.identity;
const mobileOpen = ref(false);
const headerEl = ref<HTMLElement | null>(null);
const activeSection = ref<string | null>(null);

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && mobileOpen.value) mobileOpen.value = false;
}

function handleOutsideClick(e: MouseEvent) {
  if (mobileOpen.value && headerEl.value && !headerEl.value.contains(e.target as Node)) {
    mobileOpen.value = false;
  }
}

let observer: IntersectionObserver | null = null;

// Nav links keep their #section href for semantics/fallback, but clicks are
// intercepted so the scroll happens via scrollIntoView instead of native
// hash navigation — this keeps the address bar clean (history-mode routing
// + SSG means a "#about" fragment would otherwise land in the URL). The
// active item is set immediately here rather than waiting on the
// IntersectionObserver to notice the jump.
function onNavClick(e: MouseEvent, href: string) {
  e.preventDefault();
  scrollToSection(href.slice(1));
  activeSection.value = href;
}

function onMobileNavClick(e: MouseEvent, href: string) {
  onNavClick(e, href);
  mobileOpen.value = false;
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('click', handleOutsideClick);

  const sections = navItems
    .map((item) => document.getElementById(item.href.slice(1)))
    .filter((el): el is HTMLElement => el !== null);

  if (sections.length > 0 && 'IntersectionObserver' in window) {
    // The callback's own `entries` argument only lists the sections whose
    // intersection state changed in this particular batch, not every
    // currently-tracked one, so it isn't enough on its own to decide the
    // active item — e.g. scrolling from Experience back up through
    // Highlights/Featured Experience (neither of which is a tracked nav
    // target) shouldn't leave "Experience" highlighted just because it was
    // the last tracked element to report a change. Each callback is only a
    // "the scroll position moved, re-check everything" trigger; the actual
    // verdict is recomputed from scratch every time using a plain
    // scrollspy rule: of the tracked sections whose top has scrolled up to
    // (or above) the trigger line, the LAST one in page order is active.
    // This also covers the final section on its own: Experience is tall
    // enough that it can still be "the last one reached" even once Contact
    // is fully in view, so once Contact's own top also crosses the trigger
    // line — which it always eventually will, however short it is — it
    // naturally wins by being later in page order, no separate "reached
    // the bottom of the page" special case required.
    const triggerLine = () => window.innerHeight * 0.55;

    observer = new IntersectionObserver(
      () => {
        const line = triggerLine();
        let current: string | null = null;
        for (const item of navItems) {
          const el = document.getElementById(item.href.slice(1));
          if (el && el.getBoundingClientRect().top < line) {
            current = item.href;
          }
        }
        if (current) {
          activeSection.value = current;
        }
      },
      // threshold:0 with this rootMargin just needs to fire whenever any
      // tracked section's boundary crosses roughly the same trigger line —
      // the callback recomputes the real verdict itself above.
      { rootMargin: '-84px 0px -45% 0px', threshold: 0 },
    );
    sections.forEach((el) => observer!.observe(el));
  }
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.removeEventListener('click', handleOutsideClick);
  observer?.disconnect();
});
</script>

<style lang="scss" scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba($color-page-bg, 0.85);
  backdrop-filter: saturate(140%) blur(8px);
  border-bottom: 1px solid $color-border;
}

// Horizontal padding uses the same $section-inner-x token as
// .section-inner and About, so the brand/nav content lines up with the main
// sections' left/right content edges. Vertical padding stays the header's
// own compact bar height, unrelated to section rhythm.
.site-header__inner {
  max-width: $card-max-width;
  width: calc(100% - 40px);
  margin: 0 auto;
  padding: 16px $section-inner-x;
  display: flex;
  align-items: center;
  gap: 28px;
}

// Mirrors .profile-card's own mobile override (which goes edge-to-edge at
// this breakpoint) so the header bar's content inset matches the sections'
// — without it, the calc(100% - 40px)/margin:auto centering above would add
// an extra ~20px inset on top of the padding, misaligning the header from
// About/the sections at phone widths.
@media (max-width: 599px) {
  .site-header__inner {
    width: 100%;
    margin: 0;
    padding: 16px $section-inner-x-mobile;
  }
}

.site-header__brand {
  font-family: $font-serif;
  font-weight: 500;
  font-size: 19px;
  color: $color-ink;
  text-decoration: none;
  white-space: nowrap;
  margin-inline-end: auto;
}

.site-nav--desktop {
  display: none;
  gap: 32px;

  a {
    position: relative;
    display: inline-flex;
    align-items: center;
    height: 32px;
    color: $color-ink-secondary;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;
    transition: color 0.15s ease;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 4px;
      height: 2px;
      background: $color-accent;
      border-radius: 1px;
      transform: scaleX(0);
      transition: transform 0.15s ease;
    }

    &:hover {
      color: $color-ink;
    }

    &.is-active {
      color: $color-ink;

      &::after {
        transform: scaleX(1);
      }
    }
  }
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.site-header__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: $radius-sm;
  border: 1px solid $color-border-strong;
  background: transparent;
  color: $color-ink;
  cursor: pointer;
  transition: border-color 0.15s ease;

  &:hover {
    border-color: $color-accent;
  }
}

.site-nav--mobile {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.2s ease;
  border-top: 1px solid transparent;

  nav {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
  }

  a {
    padding: 14px 0;
    color: $color-ink;
    text-decoration: none;
    font-weight: 500;
    font-size: 15px;
    border-bottom: 1px solid $color-border;

    &:last-child {
      border-bottom: none;
    }
  }

  &.is-open {
    grid-template-rows: 1fr;
    border-top-color: $color-border;

    nav {
      padding-block: 8px;
    }
  }
}

@media (min-width: 768px) {
  .site-nav--desktop {
    display: flex;
  }

  .site-header__toggle {
    display: none;
  }

  .site-nav--mobile {
    display: none;
  }
}
</style>
