<template>
  <section id="highlights" class="highlights" aria-labelledby="highlights-heading">
    <motion.div
      class="section-inner"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="IN_VIEW_ONCE"
      :variants="fadeUpVariants"
    >
      <SectionHeading
        title="Engineering Highlights"
        lede="Selected outcomes from real production systems across e-commerce, healthcare, and network automation."
        heading-id="highlights-heading"
        compact
      />

      <AccordionSection
        label="Explore Engineering Highlights"
        :subtitle="`${resume.highlights.length} selected outcomes from production systems`"
        panel-id="highlights-panel"
      >
        <ul class="highlights__grid">
          <motion.li
            v-for="item in resume.highlights"
            :key="item.stat"
            class="highlights__tile"
            :while-hover="{ y: -3 }"
            :transition="{ duration: 0.2, ease: EASE_PREMIUM }"
          >
            <q-icon :name="item.icon" size="22px" />
            <p class="highlights__stat">{{ item.stat }}</p>
            <p class="highlights__description">{{ item.description }}</p>
            <p class="highlights__employer">{{ item.employer }}</p>
          </motion.li>
        </ul>
      </AccordionSection>
    </motion.div>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v';
import { resume } from '@/data/resume';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import AccordionSection from '@/components/ui/AccordionSection.vue';
import { fadeUpVariants, IN_VIEW_ONCE, EASE_PREMIUM } from '@/composables/useMotionPresets';
</script>

<style lang="scss" scoped>
.highlights {
  border-bottom: 1px solid $color-border;
}

// Section-level padding lives in the shared .section-inner utility
// (app.scss) — the inner div uses that class directly instead of a local
// highlights__inner copy of the same values.

.highlights__grid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 700px) {
  .highlights__grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }
}

@media (min-width: 1024px) {
  .highlights__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

// Same left-accent-border card language as the Experience timeline and
// About's identity spine, not a new "stat dashboard" pattern.
.highlights__tile {
  padding: 22px 24px;
  background: $color-surface;
  border: 1px solid $color-border;
  border-left: 3px solid $color-accent;
  border-radius: $radius-md;
  box-shadow: $shadow-sm;
  transition:
    box-shadow var(--duration-fast) var(--ease-premium),
    border-left-color var(--duration-fast) var(--ease-premium);

  // The lift itself is now driven by motion-v's `whileHover` (see template).
  // The accent spine deepens a shade and the icon lifts slightly — the
  // existing accent responding, not a new highlight color being introduced.
  &:hover {
    box-shadow: $shadow-md;
    border-left-color: $color-accent-hover;

    .q-icon {
      transform: translateY(-2px);
    }
  }

  .q-icon {
    display: block;
    color: $color-accent;
    margin-bottom: 14px;
    transition: transform var(--duration-fast) var(--ease-premium);
  }
}

.highlights__stat {
  margin: 0 0 8px;
  font-family: $font-serif;
  font-size: 1.1875rem;
  font-weight: 500;
  line-height: 1.3;
  color: $color-ink;
}

.highlights__description {
  margin: 0 0 14px;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: $color-ink-secondary;
}

.highlights__employer {
  margin: 0;
  font-family: $font-mono;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  color: $color-muted;
}

@media (max-width: 599px) {
  .highlights__description {
    text-align: justify;
    text-align-last: left;
    hyphens: auto;
  }
}
</style>
