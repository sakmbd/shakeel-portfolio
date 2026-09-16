<template>
  <div
    class="section-heading"
    :class="{ 'section-heading--center': center, 'section-heading--compact': compact }"
  >
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
    // Opt-in smaller title scale for the main content sections (Engineering
    // Highlights, Featured Experience, Work Experience) — About, Education
    // and Contact keep the default scale untouched.
    compact?: boolean;
  }>(),
  { center: false, compact: false },
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
  color: $color-accent-text;
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

// ~15% smaller than the default scale so these headings read as premium
// editorial section titles rather than hero-sized text (final -1px micro
// pass on top of that).
.section-heading--compact .section-heading__title {
  font-size: clamp(1.6875rem, 2.5vw, 2.0625rem);
}

.section-heading__lede {
  margin: 10px 0 0;
  color: $color-ink-secondary;
  line-height: 1.6;
  font-size: 1rem;
}

// The base clamp's min bound doesn't yield to the preferred vw value at
// phone widths, so two-word titles ("Engineering Highlights", "Work
// experience") sat flat at a size wide enough to force an avoidable wrap.
// Scale down further here (plus a touch more letter-spacing) so they have
// a real chance to stay on one line; unaffected above 599px, so desktop
// heading sizes are untouched.
@media (max-width: 599px) {
  .section-heading__title {
    font-size: clamp(1.5rem, 6.7vw, 2rem);
    letter-spacing: -0.02em;
  }

  .section-heading--compact .section-heading__title {
    font-size: clamp(1.25rem, 5.5vw, 1.6875rem);
  }
}
</style>
