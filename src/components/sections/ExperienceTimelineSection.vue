<template>
  <section id="experience" class="experience" aria-labelledby="experience-heading">
    <div class="section-inner">
      <motion.div
        initial="hidden"
        while-in-view="visible"
        :in-view-options="IN_VIEW_ONCE"
        :variants="fadeUpVariants"
      >
        <SectionHeading
          eyebrow="Experience"
          title="Work experience"
          lede="Ten years across e-commerce, healthcare, network automation, and government platforms."
          heading-id="experience-heading"
          compact
        />
      </motion.div>

      <motion.ol
        class="experience__list"
        initial="hidden"
        while-in-view="visible"
        :in-view-options="IN_VIEW_ONCE"
        :variants="staggerContainerVariants(0.09)"
      >
        <TimelineItem
          v-for="(entry, index) in resume.experience"
          :key="entry.employer"
          :entry="entry"
          :index="index"
          :current="entry.current === true"
        />
      </motion.ol>
    </div>
  </section>
</template>

<script setup lang="ts">
import { motion } from 'motion-v';
import { resume } from '@/data/resume';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import TimelineItem from '@/components/sections/TimelineItem.vue';
import {
  fadeUpVariants,
  staggerContainerVariants,
  IN_VIEW_ONCE,
} from '@/composables/useMotionPresets';
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
