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

    <div class="qc-accordion__panel" :class="{ 'is-open': open }">
      <div :id="panelId" class="qc-accordion__panel-inner">
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

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
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;

  // Hover is barely perceptible — a whisper-light neutral wash (2% of
  // $color-ink, not a solid fill) plus a slightly firmer border. The trigger
  // is a secondary control and must never compete with the section heading
  // or the cards it reveals.
  &:hover {
    background: rgba(17, 24, 39, 0.02);
    border-color: $color-border-strong;
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
    border-color 0.2s ease,
    background-color 0.2s ease;
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
  transition: transform 0.25s ease;
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

// Height transition via grid-template-rows (0fr collapsed -> 1fr expanded)
// so the collapse/expand animates smoothly without measuring pixel heights.
// The inner wrapper clips overflow during the transition.
.qc-accordion__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.3s ease;
}

.qc-accordion__panel.is-open {
  grid-template-rows: 1fr;
}

.qc-accordion__panel-inner {
  overflow: hidden;
  padding-top: 24px;
}
</style>
