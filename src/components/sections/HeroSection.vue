<template>
  <section id="top" class="hero" aria-label="Introduction">
    <div class="hero__inner">
      <span class="hero__mark" aria-hidden="true"></span>

      <p class="hero__eyebrow">Senior Software Engineer</p>

      <h1 class="hero__name">
        <span class="visually-hidden">{{ identity.name }}</span>
        <span class="hero__name-visible" aria-hidden="true">{{ visibleName }}</span
        ><span v-if="showCaret" class="hero__caret" aria-hidden="true"></span>
      </h1>

      <p class="hero__title">{{ identity.title }}</p>

      <p class="hero__summary">
        Senior Full Stack Developer with 10+ years of experience building scalable web applications,
        specializing in Vue.js with hands-on experience in React.js, Node.js, TypeScript, REST APIs,
        and GraphQL, alongside microservices, API architecture, and database optimization.
      </p>

      <ul class="hero__facts">
        <li>10+ Years Experience</li>
        <li>Full-Stack Engineer</li>
        <li>Open to Relocation</li>
      </ul>

      <div class="hero__bottom">
        <div class="hero__actions">
          <motion.a
            class="btn btn--primary"
            :href="siteConfig.resumePdfPath"
            download
            :while-hover="{ y: -2 }"
            :while-press="{ y: 0, scale: 0.98 }"
            >Download Resume</motion.a
          >
          <motion.a
            class="btn btn--outline-dark"
            href="#contact"
            :while-hover="{ y: -2 }"
            :while-press="{ y: 0, scale: 0.98 }"
            @click="onContactClick"
            >Contact Me</motion.a
          >
        </div>

        <div class="hero__social" aria-label="Social and contact links">
          <IconLink
            :href="`mailto:${identity.email}`"
            label="Email Shakeel Ahamed"
            :external="false"
            variant="dark"
          >
            <q-icon name="mail" size="19px" />
          </IconLink>
          <IconLink :href="identity.github" label="Shakeel Ahamed on GitHub" variant="dark">
            <IconGitHub />
          </IconLink>
          <IconLink :href="identity.linkedin" label="Shakeel Ahamed on LinkedIn" variant="dark">
            <IconLinkedIn />
          </IconLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue';
import { motion } from 'motion-v';
import { resume } from '@/data/resume';
import { siteConfig } from '@/config/site.config';
import { scrollToSection } from '@/utils/scrollToSection';
import IconLink from '@/components/ui/IconLink.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';

const identity = resume.identity;

// Character-by-character "typing" reveal, driven by plain Vue state rather
// than a CSS animation-timing-function — this is the actual visual effect;
// it cannot be silently neutralized by any CSS-level interference (a stray
// global rule, an invalid steps() edge case, etc.) the way the previous
// CSS-only implementation could be. The full name is still always real,
// crawlable text via .visually-hidden (app.scss's standard sr-only
// utility) — the animated span is aria-hidden so assistive tech reads the
// name once, from the hidden element, never as a mid-typing fragment.
const CHAR_INTERVAL_MS = 85; // 14 chars * 85ms ≈ 1.2s — within the ~1-1.5s target
const CARET_HOLD_MS = 500; // brief hold after typing finishes, then the caret is removed

const revealedCount = ref(0);
const showCaret = ref(false);
const visibleName = computed(() => identity.name.slice(0, revealedCount.value));

let intervalId: ReturnType<typeof setInterval> | undefined;
let caretTimeoutId: ReturnType<typeof setTimeout> | undefined;

onMounted(() => {
  // Reduced motion: show the complete name immediately, no timer, no caret.
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    revealedCount.value = identity.name.length;
    return;
  }

  showCaret.value = true;
  intervalId = setInterval(() => {
    revealedCount.value += 1;

    if (revealedCount.value >= identity.name.length) {
      clearInterval(intervalId);
      intervalId = undefined;
      caretTimeoutId = setTimeout(() => {
        showCaret.value = false;
      }, CARET_HOLD_MS);
    }
  }, CHAR_INTERVAL_MS);
});

onBeforeUnmount(() => {
  clearInterval(intervalId);
  clearTimeout(caretTimeoutId);
});

// Kept as a real #contact href for semantics/fallback, but the click is
// intercepted so the URL stays clean (history-mode routing + SSG means a
// native hash jump would otherwise land "#contact" in the address bar).
function onContactClick(e: MouseEvent) {
  e.preventDefault();
  scrollToSection('contact');
}
</script>

<style lang="scss" scoped>
.hero {
  background: $color-hero-bg;
}

.hero__inner {
  padding: 52px 48px 44px;
}

@media (min-width: 1024px) {
  .hero__inner {
    padding: 72px 64px 56px;
  }
}

.hero__mark {
  display: block;
  width: 44px;
  height: 4px;
  border-radius: 2px;
  background: $color-hero-accent;
  margin-bottom: 22px;
}

.hero__eyebrow {
  font-family: $font-sans;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $color-hero-accent;
  margin: 0 0 10px;
}

// First-load "typing" reveal: the name is always real, present text — see
// .visually-hidden above (app.scss's standard sr-only utility) for the
// crawlable/accessible copy, and the script's onMounted for the plain Vue
// timer that progressively fills .hero__name-visible. Nothing here is a
// CSS animation, so there's no animation-timing-function edge case that can
// silently neutralize it.
.hero__name {
  font-family: $font-serif;
  font-weight: 700;
  font-size: clamp(2.75rem, 6vw, 4.75rem);
  line-height: 1.02;
  letter-spacing: -0.01em;
  color: $color-hero-ink;
  margin: 0 0 14px;
  max-width: 16ch;
}

// Blinking terminal-style caret, only ever rendered (see v-if in the
// template) while the script's timer is actively typing — reduced motion
// never sets showCaret to true, so this element (and its animation) simply
// never exists in that case, rather than needing its own CSS override.
.hero__caret {
  display: inline-block;
  width: 3px;
  height: 0.78em;
  margin-left: 2px;
  border-radius: 1px;
  background: $color-hero-accent;
  vertical-align: -0.05em;
  animation: hero-caret-blink 1s step-end infinite;
}

@keyframes hero-caret-blink {
  50% {
    opacity: 0;
  }
}

.hero__title {
  font-family: $font-sans;
  font-size: clamp(1.0625rem, 1.8vw, 1.25rem);
  font-weight: 600;
  line-height: 1.4;
  color: $color-hero-ink;
  margin: 0 0 16px;
}

// No max-width — the summary fills .hero__inner's own content width, same
// as .hero__title and every other Hero element. It previously capped at
// $prose-max-width (or an approximated calc() on desktop), which is why it
// fell short of the right edge the other sections' content reaches.
.hero__summary {
  font-size: 0.9rem;
  font-style: italic;
  line-height: 1.65;
  color: $color-hero-ink-secondary;
  margin: 0 0 24px;
  text-align: justify;
  text-align-last: left;
  hyphens: auto;
}

@media (min-width: 1024px) {
  .hero__title {
    white-space: nowrap;
  }
}

.hero__facts {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 8px;
  column-gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: $color-hero-ink-secondary;

  li {
    display: flex;
    align-items: center;
    gap: 16px;

    &:not(:first-child)::before {
      content: '';
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: $color-hero-accent;
      flex-shrink: 0;
    }
  }
}

.hero__bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero__social {
  display: flex;
  gap: 10px;
  padding-inline-start: 20px;
  border-inline-start: 1px solid $color-hero-border;
}

@media (max-width: 599px) {
  .hero__inner {
    padding: 40px 24px 32px;
  }

  // The base clamp's min bound (2.75rem) doesn't yield to the preferred 6vw
  // value until ~733px, so on phones it sits at a flat, oversized floor that
  // forces an unnecessarily large wrap. Scale it down further here so the
  // name fits comfortably at narrow widths; unaffected above 599px, so
  // desktop rendering (driven by the base clamp) is untouched.
  .hero__name {
    font-size: clamp(2.1rem, 10vw, 2.75rem);
  }

  .hero__social {
    padding-inline-start: 0;
    border-inline-start: none;
    width: 100%;
    justify-content: center;
  }
}
</style>
