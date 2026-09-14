<template>
  <li class="timeline-item">
    <div class="timeline-item__rail" aria-hidden="true">
      <span class="timeline-item__dot" :class="{ 'timeline-item__dot--current': current }"></span>
    </div>

    <div class="timeline-item__card" :class="{ 'is-open': open, 'is-current': current }">
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
    </div>
  </li>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { ExperienceEntry } from '@/types/resume';
import { calculateDurationLabel } from '@/utils/duration';

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

    .timeline-item__rail::before {
      display: none;
    }
  }
}

.timeline-item__rail {
  position: relative;
  display: flex;
  justify-content: center;

  &::before {
    content: '';
    position: absolute;
    top: 24px;
    bottom: -24px;
    width: 1px;
    background: $color-border-strong;
  }
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
  transition: border-left-color 0.15s ease;

  &.is-current,
  &.is-open {
    border-left-color: $color-accent;
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
  transition: color 0.15s ease;
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
  transition: transform 0.2s ease;

  &.is-open {
    transform: rotate(180deg);
  }
}

.timeline-item__panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.25s ease;

  &.is-open {
    grid-template-rows: 1fr;
  }
}

.timeline-item__panel-inner {
  overflow: hidden;
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
