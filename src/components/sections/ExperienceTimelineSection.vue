<template>
  <section id="experience" class="experience" aria-labelledby="experience-heading">
    <div class="section-inner">
      <SectionHeading
        eyebrow="Experience"
        title="Work experience"
        lede="Ten years across e-commerce, healthcare, network automation, and government platforms."
        heading-id="experience-heading"
        compact
      />

      <ol class="experience__list">
        <TimelineItem
          v-for="(entry, index) in resume.experience"
          :key="entry.employer"
          :entry="entry"
          :index="index"
          :current="entry.current === true"
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

// Section-level padding lives in the shared .section-inner utility
// (app.scss) — the inner div uses that class directly instead of a local
// experience__inner copy of the same values.

.experience__list {
  list-style: none;
  margin: 0;
  padding: 0 0 30px;
}
</style>
