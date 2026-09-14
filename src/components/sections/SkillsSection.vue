<template>
  <section id="skills" class="skills" aria-labelledby="skills-heading">
    <div class="skills__inner">
      <SectionHeading
        eyebrow="Skills"
        title="Technology Stack"
        lede="The technologies behind 10+ years of full-stack delivery, from core languages to cloud, testing, and API tooling."
        heading-id="skills-heading"
      />

      <ul class="skills__core" aria-label="Core technology stack">
        <li v-for="tech in resume.coreStack" :key="tech">{{ tech }}</li>
      </ul>

      <div class="skills__map">
        <div v-for="group in resume.skills" :key="group.category" class="skills__group">
          <h3 class="skills__category">{{ group.category }}</h3>
          <ul class="skills__chips">
            <li v-for="item in group.items" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { resume } from '@/data/resume';
import SectionHeading from '@/components/ui/SectionHeading.vue';
</script>

<style lang="scss" scoped>
.skills {
  border-bottom: 1px solid $color-border;
}

.skills__inner {
  padding: 44px 48px;
}

@media (min-width: 1024px) {
  .skills__inner {
    padding: 56px 64px;
  }
}

@media (max-width: 599px) {
  .skills__inner {
    padding: 36px 24px;
  }
}

// The core stack reads as one confident statement (plain bold tokens with
// dot separators, echoing Hero's fact row) rather than another row of chips
// — that treatment is reserved for the capability map below.
.skills__core {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 10px;
  column-gap: 18px;
  list-style: none;
  margin: 0 0 48px;
  padding: 0;

  li {
    font-family: $font-sans;
    font-size: 1.0625rem;
    font-weight: 700;
    color: $color-ink;
    letter-spacing: -0.005em;

    &:not(:first-child) {
      position: relative;
      padding-left: 18px;

      &::before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: $color-accent;
      }
    }
  }
}

.skills__map {
  display: grid;
  grid-template-columns: 1fr;
  gap: 28px 40px;
}

@media (min-width: 700px) {
  .skills__map {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .skills__map {
    grid-template-columns: repeat(3, 1fr);
  }
}

.skills__category {
  margin: 0 0 12px;
  font-family: $font-sans;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 0.09em;
  text-transform: uppercase;
  color: $color-muted;
}

.skills__chips {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

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
</style>
