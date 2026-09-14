<template>
  <div class="section-heading" :class="{ 'section-heading--center': center }">
    <p v-if="eyebrow" class="section-heading__eyebrow">{{ eyebrow }}</p>
    <h2 :id="headingId" class="section-heading__title">{{ title }}</h2>
    <p v-if="lede" class="section-heading__lede">{{ lede }}</p>
  </div>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    eyebrow?: string;
    title: string;
    lede?: string;
    headingId?: string;
    center?: boolean;
  }>(),
  { center: false },
);
</script>

<style lang="scss" scoped>
.section-heading {
  margin-bottom: 28px;
  max-width: $prose-max-width;
}

.section-heading--center {
  max-width: 640px;
  margin-inline: auto;
  text-align: center;
}

.section-heading__eyebrow {
  font-family: $font-sans;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $color-accent;
  margin: 0 0 8px;
}

.section-heading__title {
  font-family: $font-serif;
  font-size: clamp(2rem, 3vw, 2.5rem);
  font-weight: 500;
  line-height: 1.18;
  letter-spacing: -0.01em;
  color: $color-ink;
  margin: 0;
}

.section-heading__lede {
  margin: 10px 0 0;
  color: $color-ink-secondary;
  line-height: 1.6;
  font-size: 1rem;
}
</style>
