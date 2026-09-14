<template>
  <section id="education" class="education" aria-labelledby="education-heading">
    <div class="education__inner">
      <SectionHeading
        title="Education"
        lede="Academic background and qualifications."
        heading-id="education-heading"
      />

      <ul class="education__list">
        <li
          v-for="(entry, i) in resume.education"
          :key="entry.name"
          class="education__item"
          :class="{ 'education__item--lead': i === 0 }"
        >
          <h3 class="education__name">{{ entry.name }}</h3>
          <p class="education__description">{{ entry.description }}</p>
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">
import { resume } from '@/data/resume';
import SectionHeading from '@/components/ui/SectionHeading.vue';
</script>

<style lang="scss" scoped>
.education {
  border-bottom: 1px solid $color-border;
}

.education__inner {
  padding: 44px 48px;
}

@media (min-width: 1024px) {
  .education__inner {
    padding: 56px 64px;
  }
}

@media (max-width: 599px) {
  .education__inner {
    padding: 36px 24px;
  }
}

.education__list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 700px) {
  .education__list {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }

  // The primary degree spans the full row above the two school-level
  // entries — same lead/supporting asymmetry as Featured Experience's
  // .featured__card--lead, not a new pattern.
  .education__item--lead {
    grid-column: 1 / -1;
  }
}

// Same left-accent-border card language as Engineering Highlights and the
// Experience timeline cards.
.education__item {
  padding: 20px 24px;
  background: $color-surface;
  border: 1px solid $color-border;
  border-left: 3px solid $color-border-strong;
  border-radius: $radius-md;
  box-shadow: $shadow-sm;
}

.education__item--lead {
  border-left-color: $color-accent;
}

.education__name {
  margin: 0 0 6px;
  font-family: $font-serif;
  font-weight: 500;
  font-size: 1.0625rem;
  line-height: 1.3;
  color: $color-ink;
}

.education__item--lead .education__name {
  font-size: 1.25rem;
}

.education__description {
  margin: 0;
  font-size: 0.9375rem;
  line-height: 1.6;
  color: $color-ink-secondary;
}

// Matches the mobile-justify treatment already applied to Engineering
// Highlights' and Featured Experience's description/body copy.
@media (max-width: 599px) {
  .education__description {
    text-align: justify;
    text-align-last: left;
    hyphens: auto;
  }
}
</style>
