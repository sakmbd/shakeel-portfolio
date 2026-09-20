<template>
  <div class="qc-accordion" :class="{ 'is-open': open }">
    <button
      type="button"
      class="qc-accordion__trigger"
      :aria-expanded="open"
      :aria-controls="panelId"
      @click="open = !open"
    >
      <span class="qc-accordion__text">
        <span class="qc-accordion__label">{{ label }}</span>
        <span v-if="subtitle" class="qc-accordion__subtitle">{{ subtitle }}</span>
      </span>
      <span class="qc-accordion__icon" aria-hidden="true">
        <span class="qc-accordion__icon-bar qc-accordion__icon-bar--h"></span>
        <span class="qc-accordion__icon-bar qc-accordion__icon-bar--v"></span>
      </span>
    </button>

    <motion.div
      class="qc-accordion__panel"
      :initial="false"
      :animate="{ height: open ? 'auto' : 0 }"
      :transition="{ duration: 0.35, ease: EASE_PREMIUM }"
    >
      <motion.div
        :id="panelId"
        class="qc-accordion__panel-inner"
        :initial="false"
        :animate="{ opacity: open ? 1 : 0 }"
        :transition="{ duration: 0.2, ease: EASE_PREMIUM, delay: open ? 0.08 : 0 }"
      >
        <slot />
      </motion.div>
    </motion.div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { motion } from 'motion-v';
import { EASE_PREMIUM } from '@/composables/useMotionPresets';

const props = withDefaults(
  defineProps<{
    label: string;
    subtitle?: string;
    panelId: string;
    defaultOpen?: boolean;
  }>(),
  { defaultOpen: false },
);

const open = ref(props.defaultOpen);
</script>

<style lang="scss" scoped>
// Generic defaults, tuned to the site's global tokens. Sections with their
// own local palette (e.g. Skills' $sk-* tokens) override the class names
// below via :deep() from their own <style> block rather than duplicating
// this structure.
.qc-accordion {
  margin-top: 8px;
}

// A bordered "card" trigger (not a bare text link) so the collapsed state
// reads as a deliberate, premium UI element rather than empty space under
// the heading/lede.
.qc-accordion__trigger {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 20px 24px;
  background: $color-surface;
  border: 1px solid $color-border;
  border-radius: $radius-md;
  box-shadow: $shadow-sm;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition:
    border-color var(--duration-fast) var(--ease-premium),
    background-color var(--duration-fast) var(--ease-premium),
    box-shadow var(--duration-fast) var(--ease-premium),
    transform var(--duration-fast) var(--ease-premium);

  // Hover is barely perceptible — a whisper-light neutral wash (2% of
  // $color-ink, not a solid fill) plus a slightly firmer border and a
  // hairline lift. The trigger is a secondary control and must never
  // compete with the section heading or the cards it reveals.
  &:hover {
    background: rgba(17, 24, 39, 0.02);
    border-color: $color-border-strong;
    box-shadow: $shadow-md;
    transform: translateY(-1px);
  }

  &:focus-visible {
    outline: 2px solid $color-accent;
    outline-offset: 2px;
  }
}

.qc-accordion__text {
  display: flex;
  flex-direction: column;
  gap: 5px;
  min-width: 0;
}

.qc-accordion__label {
  font-family: $font-sans;
  font-size: 0.8125rem;
  font-weight: 800;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $color-ink;
}

.qc-accordion__subtitle {
  font-family: $font-sans;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.5;
  color: $color-ink-secondary;
}

.qc-accordion__icon {
  position: relative;
  flex-shrink: 0;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid $color-border-strong;
  color: $color-accent-text;
  transition:
    border-color var(--duration-fast) var(--ease-premium),
    background-color var(--duration-fast) var(--ease-premium),
    transform var(--duration-fast) var(--ease-premium);
}

.qc-accordion__trigger:hover .qc-accordion__icon {
  transform: scale(1.06);
}

.qc-accordion__icon-bar {
  position: absolute;
  top: 50%;
  left: 50%;
  background: currentColor;
  border-radius: 1px;
  transform: translate(-50%, -50%);
}

.qc-accordion__icon-bar--h {
  width: 13px;
  height: 2px;
}

.qc-accordion__icon-bar--v {
  width: 2px;
  height: 13px;
  transition: transform var(--duration-fast) var(--ease-premium);
}

// "Open" only needs to read as "this is on" — a neutral off-white/grey, not
// an accent-highlighted card competing with the content it reveals.
.qc-accordion.is-open {
  .qc-accordion__trigger {
    background: $color-page-bg;
    border-color: $color-border-strong;
  }

  .qc-accordion__icon {
    border-color: $color-border-strong;
    background: $color-surface;
    color: $color-ink-secondary;
  }

  .qc-accordion__icon-bar--v {
    transform: translate(-50%, -50%) scaleY(0);
  }
}

// Height (0 <-> 'auto') and content opacity are animated by motion-v (see
// template) rather than a CSS grid-rows trick — `overflow: hidden` still
// clips the content while the panel's real height is animating.
.qc-accordion__panel {
  overflow: hidden;
}

.qc-accordion__panel-inner {
  padding-top: 24px;
}
</style>
