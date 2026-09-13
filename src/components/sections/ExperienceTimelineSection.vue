<template>
  <section id="experience" class="experience" aria-labelledby="experience-heading">
    <div class="experience__inner">
      <SectionHeading
        eyebrow="Experience"
        title="Work experience"
        lede="Ten years across e-commerce, healthcare, network automation, and government platforms."
        heading-id="experience-heading"
      />

      <ol class="experience__list">
        <TimelineItem
          v-for="(entry, index) in resume.experience"
          :key="entry.employer"
          :entry="entry"
          :index="index"
          :current="index === 0"
          :default-open="index === 0"
        />
      </ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { resume } from '@/data/resume';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import TimelineItem from '@/components/sections/TimelineItem.vue';
</script>

<style lang="scss" scoped>
.experience {
  border-bottom: 1px solid $color-border;
}

.experience__inner {
  padding: 44px 48px;
}

.experience__list {
  list-style: none;
  margin: 0;
  padding: 0;
}

@media (min-width: 1024px) {
  .experience__inner {
    padding: 56px 64px;
  }
}

@media (max-width: 599px) {
  .experience__inner {
    padding: 36px 24px;
  }
}
</style>
