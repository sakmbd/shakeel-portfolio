<template>
  <motion.li class="timeline-item" :variants="fadeUpItemVariants()">
    <div class="timeline-item__rail" aria-hidden="true">
      <motion.span class="timeline-item__rail-line" :variants="railVariants"></motion.span>
      <motion.span
        class="timeline-item__dot"
        :class="{ 'timeline-item__dot--current': current }"
        :variants="dotVariants"
      ></motion.span>
    </div>

    <motion.div
      class="timeline-item__card"
      :class="{ 'is-open': open, 'is-current': current }"
      :while-hover="{ y: -3 }"
      :transition="{ duration: 0.2, ease: EASE_PREMIUM }"
    >
      <button
        type="button"
        class="timeline-item__trigger"
        :aria-expanded="open"
        :aria-controls="panelId"
        @click="open = !open"
      >
        <div class="timeline-item__headline">
          <h3 class="timeline-item__role">{{ entry.role }}</h3>
          <span v-if="current" class="timeline-item__badge">Current</span>
        </div>
        <p class="timeline-item__employer">{{ entry.employer }}</p>
        <p class="timeline-item__duration">
          {{ entry.duration }}<span v-if="durationLabel"> &middot; {{ durationLabel }}</span>
        </p>

        <span class="timeline-item__chevron" :class="{ 'is-open': open }" aria-hidden="true">
          <q-icon name="expand_more" size="22px" />
        </span>
      </button>

      <div class="timeline-item__panel" :class="{ 'is-open': open }">
        <div :id="panelId" class="timeline-item__panel-inner">
          <ul class="timeline-item__achievements">
            <li v-for="(achievement, i) in entry.achievements" :key="i">{{ achievement }}</li>
          </ul>

          <ul class="timeline-item__tech" aria-label="Technologies used">
            <li v-for="tech in entry.technologies" :key="tech">{{ tech }}</li>
          </ul>
        </div>
      </div>
    </motion.div>
  </motion.li>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { motion } from 'motion-v';
import type { ExperienceEntry } from '@/types/resume';
import { calculateDurationLabel } from '@/utils/duration';
import { fadeUpItemVariants, EASE_PREMIUM } from '@/composables/useMotionPresets';

const props = withDefaults(
  defineProps<{
    entry: ExperienceEntry;
    index: number;
    current?: boolean;
    defaultOpen?: boolean;
  }>(),
  { current: false, defaultOpen: false },
);

const open = ref(props.defaultOpen);
const panelId = computed(() => `timeline-panel-${props.index}`);
const durationLabel = computed(() => calculateDurationLabel(props.entry.duration));

// The rail "draws in" downward and the node pops in alongside the card,
// inheriting the same hidden/visible state as this <li> from the parent
// <motion.ol>'s stagger (see ExperienceTimelineSection.vue) — no separate
// delay needed here, they're already part of that same per-item step.
const railVariants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.5, ease: EASE_PREMIUM } },
};
const dotVariants = {
  hidden: { scale: 0.4, opacity: 0 },
  visible: { scale: 1, opacity: 1, transition: { duration: 0.4, ease: EASE_PREMIUM } },
};
</script>

<style lang="scss" scoped>
.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 20px 1fr;
  gap: 20px;
  padding-bottom: 24px;

  &:last-child {
    padding-bottom: 0;

    .timeline-item__rail-line {
      display: none;
    }
  }
}

.timeline-item__rail {
  position: relative;
  display: flex;
  justify-content: center;
}

// A real element (not a ::before) so motion-v's `variants` can animate it —
// Motion animates DOM elements directly, not pseudo-elements. Same
// position/size as the old pseudo-element line; transform-origin: top makes
// its scaleY(0 -> 1) reveal read as the rail "drawing in" downward.
.timeline-item__rail-line {
  position: absolute;
  top: 24px;
  bottom: -24px;
  width: 1px;
  background: $color-border-strong;
  transform-origin: top;
}

.timeline-item__dot {
  position: relative;
  z-index: 1;
  width: 13px;
  height: 13px;
  margin-top: 22px;
  border-radius: 50%;
  background: $color-surface;
  border: 2px solid $color-accent;
}

.timeline-item__dot--current {
  background: $color-accent;
}

.timeline-item__card {
  background: $color-surface;
  border: 1px solid $color-border;
  border-left: 3px solid $color-border-strong;
  border-radius: $radius-md;
  box-shadow: $shadow-sm;
  overflow: hidden;
  transition:
    border-color var(--duration-fast) var(--ease-premium),
    box-shadow var(--duration-fast) var(--ease-premium);

  &.is-current,
  &.is-open {
    border-left-color: $color-accent;
  }

  // The lift itself is now driven by motion-v's `whileHover` (see template).
  // Only top/right/bottom firm up here on hover — border-left-color is
  // driven separately by .is-current/.is-open above and must stay untouched,
  // so this avoids the border-color shorthand.
  &:hover {
    box-shadow: $shadow-md;
    border-top-color: $color-border-strong;
    border-right-color: $color-border-strong;
    border-bottom-color: $color-border-strong;
  }
}

.timeline-item__trigger {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  cursor: pointer;
  padding: 24px 56px 24px 28px;
  position: relative;
  font-family: inherit;

  &:hover .timeline-item__role {
    color: $color-accent;
  }
}

@media (min-width: 1024px) {
  .timeline-item__trigger {
    padding: 28px 64px 28px 32px;
  }

  .timeline-item__achievements {
    padding-inline: 46px 32px;
  }

  .timeline-item__tech {
    padding-inline: 32px;
  }
}

.timeline-item__headline {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.timeline-item__role {
  font-family: $font-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.25;
  color: $color-ink;
  margin: 0;
  transition: color var(--duration-fast) var(--ease-premium);
}

.timeline-item__badge {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: $color-accent-text;
  background: $color-accent-soft;
  border-radius: 999px;
  padding: 3px 10px;
}

.timeline-item__employer {
  margin: 6px 0 0;
  color: $color-ink-secondary;
  font-weight: 600;
  font-size: 1.0625rem;
}

.timeline-item__duration {
  margin: 6px 0 0;
  color: $color-muted;
  font-family: $font-mono;
  font-size: 0.8125rem;
  letter-spacing: 0.02em;
}

.timeline-item__chevron {
  position: absolute;
  top: 22px;
  right: 20px;
  color: $color-muted;
  display: inline-flex;
  transition: transform var(--duration-fast) var(--ease-premium);

  &.is-open {
    transform: rotate(180deg);
  }
}

.timeline-item__trigger:hover .timeline-item__chevron {
  color: $color-accent;
}

.timeline-item__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows var(--duration-base) var(--ease-premium);

  &.is-open {
    grid-template-rows: 1fr;
  }
}

.timeline-item__panel-inner {
  overflow: hidden;
  opacity: 0;
  transition: opacity var(--duration-fast) var(--ease-premium);
}

.timeline-item__panel.is-open .timeline-item__panel-inner {
  opacity: 1;
  transition-delay: 0.05s;
}

.timeline-item__achievements {
  margin: 0;
  padding: 4px 24px 22px 42px;
  color: $color-ink-secondary;
  font-size: 1rem;
  line-height: 1.75;

  li {
    margin-bottom: 14px;
    text-align: justify;
    text-align-last: left;
    hyphens: auto;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.timeline-item__tech {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 0;
  padding: 0 24px 22px;

  li {
    font-family: $font-mono;
    font-size: 0.75rem;
    color: $color-ink-secondary;
    background: $color-surface-tint;
    border: 1px solid $color-border;
    border-radius: 6px;
    padding: 5px 10px;
  }
}

@media (max-width: 599px) {
  // Drop the rail column entirely so the card claims the full mobile width
  // instead of being indented to make room for it. Desktop's two-column
  // grid (rail + card) is untouched above this breakpoint.
  .timeline-item {
    grid-template-columns: 1fr;
  }

  .timeline-item__rail {
    display: none;
  }

  .timeline-item__trigger {
    padding: 18px 44px 18px 16px;
  }

  .timeline-item__achievements {
    padding-inline: 16px 16px;
    padding-inline-start: 32px;
  }

  .timeline-item__tech {
    padding-inline: 16px;
  }
}
</style>
