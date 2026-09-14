<template>
  <section id="highlights" class="highlights" aria-labelledby="highlights-heading">
    <div class="highlights__inner">
      <SectionHeading
        title="Engineering Highlights"
        lede="Selected outcomes from real production systems across e-commerce, healthcare, and network automation."
        heading-id="highlights-heading"
      />

      <ul class="highlights__grid">
        <li v-for="item in resume.highlights" :key="item.stat" class="highlights__tile">
          <q-icon :name="item.icon" size="22px" />
          <p class="highlights__stat">{{ item.stat }}</p>
          <p class="highlights__description">{{ item.description }}</p>
          <p class="highlights__employer">{{ item.employer }}</p>
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
.highlights {
  border-bottom: 1px solid $color-border;
}

.highlights__inner {
  padding: 44px 48px;
}

@media (min-width: 1024px) {
  .highlights__inner {
    padding: 56px 64px;
  }
}

@media (max-width: 599px) {
  .highlights__inner {
    padding: 36px 24px;
  }
}

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

  .q-icon {
    display: block;
    color: $color-accent;
    margin-bottom: 14px;
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
</style>
