<template>
  <motion.a
    :href="href"
    class="icon-link"
    :class="`icon-link--${variant}`"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
    :while-hover="{ y: -2 }"
    :while-focus="{ y: -2 }"
    :while-press="{ y: 0 }"
    :transition="{ duration: 0.2, ease: EASE_PREMIUM }"
  >
    <span class="icon-link__glyph" aria-hidden="true">
      <slot />
    </span>
    <span class="visually-hidden">{{ label }}</span>
  </motion.a>
</template>

<script setup lang="ts">
import { motion } from 'motion-v';
import { EASE_PREMIUM } from '@/composables/useMotionPresets';

withDefaults(
  defineProps<{
    href: string;
    label: string;
    external?: boolean;
    variant?: 'light' | 'dark';
  }>(),
  { external: true, variant: 'light' },
);
</script>

<style lang="scss" scoped>
.icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: $radius-sm;
  border: 1px solid $color-border-strong;
  color: $color-ink;
  transition:
    color var(--duration-fast) var(--ease-premium),
    border-color var(--duration-fast) var(--ease-premium),
    background-color var(--duration-fast) var(--ease-premium),
    box-shadow var(--duration-fast) var(--ease-premium);

  // The lift itself is now driven by motion-v's `whileHover`/`whileFocus`
  // (see template); this stays CSS-only for color/border/shadow and the
  // glyph's own scale, which native :hover/:focus-visible already handle.
  &:hover,
  &:focus-visible {
    color: $color-accent;
    border-color: $color-accent;
    background: $color-accent-soft;
    box-shadow: $shadow-sm;

    .icon-link__glyph {
      transform: scale(1.12);
    }
  }
}

.icon-link--dark {
  border-color: $color-hero-border;
  color: $color-hero-ink-secondary;

  &:hover,
  &:focus-visible {
    color: $color-hero-accent;
    border-color: $color-hero-accent;
    background: rgba(255, 92, 51, 0.12);
  }
}

.icon-link__glyph {
  display: inline-flex;
  transition: transform var(--duration-fast) var(--ease-premium);
}
</style>
