<template>
  <section id="featured-experience" class="featured" aria-labelledby="featured-heading">
    <div class="section-inner">
      <SectionHeading
        title="Featured Engineering Experience"
        lede="A closer look at four of the more technically interesting problems from the timeline below."
        heading-id="featured-heading"
        compact
      />

      <AccordionSection
        :label="accordionLabel"
        :subtitle="accordionSubtitle"
        panel-id="featured-experience-panel"
      >
        <div class="featured__layout">
          <article
            v-for="entry in resume.featuredExperience"
            :id="entry.slug"
            :key="entry.slug"
            class="featured__card"
            :class="{ 'featured__card--lead': entry.featured }"
          >
            <div class="featured__card-head">
              <h3 class="featured__title">{{ entry.title }}</h3>
              <span v-if="entry.featured" class="featured__badge">Featured</span>
            </div>
            <p class="featured__context">
              {{ entry.domain }} &middot; {{ entry.employer }} &middot; {{ entry.duration }}
            </p>

            <div class="featured__body">
              <ul class="featured__bullets">
                <li v-for="(point, i) in entry.highlights" :key="i">{{ point }}</li>
              </ul>

              <ul class="featured__tech" aria-label="Technologies used">
                <li v-for="tech in entry.technologies" :key="tech">{{ tech }}</li>
              </ul>
            </div>
          </article>
        </div>
      </AccordionSection>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { resume } from '@/data/resume';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import AccordionSection from '@/components/ui/AccordionSection.vue';

const accordionLabel = computed(
  () =>
    `${String(resume.featuredExperience.length).padStart(2, '0')} Engineering Case Studies`,
);
const accordionSubtitle = computed(() =>
  resume.featuredExperience.map((entry) => entry.title).join(' • '),
);
</script>

<style lang="scss" scoped>
.featured {
  border-bottom: 1px solid $color-border;
}

// Section-level padding lives in the shared .section-inner utility
// (app.scss) — the inner div uses that class directly instead of a local
// featured__inner copy of the same values.

.featured__layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 700px) {
  .featured__layout {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  // The lead card spans the full row above the supporting cards — a real
  // size/weight asymmetry, not four equal boxes with one accent color.
  .featured__card--lead {
    grid-column: 1 / -1;
  }
}

@media (min-width: 1024px) {
  .featured__layout {
    grid-template-columns: repeat(3, 1fr);
  }
}

.featured__card {
  padding: 26px 28px;
  background: $color-surface;
  border: 1px solid $color-border;
  border-radius: $radius-md;
  box-shadow: $shadow-sm;
}

.featured__card-head {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
}

.featured__title {
  margin: 0;
  font-family: $font-serif;
  font-weight: 500;
  color: $color-ink;
  font-size: 1.375rem;
}

.featured__badge {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: $color-accent-text;
  background: $color-accent-soft;
  border-radius: 999px;
  padding: 3px 10px;
}

.featured__context {
  margin: 6px 0 18px;
  font-family: $font-mono;
  font-size: 0.75rem;
  letter-spacing: 0.02em;
  color: $color-muted;
}

.featured__bullets {
  margin: 0;
  padding: 0 0 0 18px;
  color: $color-ink-secondary;
  font-size: 0.9375rem;
  line-height: 1.65;

  li {
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
}

.featured__tech {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 16px 0 0;
  padding: 0;

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

// The lead card gets a distinct internal composition (larger scale, accent
// spine, and — at desktop width — a two-column split with tags stacked
// beside the bullets) rather than just a bigger copy of the supporting-card
// layout.
.featured__card--lead {
  padding: 32px 36px;
  border-left: 3px solid $color-accent;

  .featured__title {
    font-size: 1.75rem;
  }
}

@media (min-width: 1024px) {
  .featured__card--lead .featured__body {
    display: grid;
    grid-template-columns: 1fr 200px;
    gap: 32px;
    align-items: start;
  }

  .featured__card--lead .featured__tech {
    flex-direction: column;
    margin-top: 0;
  }
}

@media (max-width: 599px) {
  .featured__card {
    padding: 20px;
  }

  .featured__card--lead {
    padding: 22px 20px;
  }

  .featured__bullets li {
    text-align: justify;
    text-align-last: left;
    hyphens: auto;
  }
}
</style>
