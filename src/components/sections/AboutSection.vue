<template>
  <section id="about" class="about" aria-labelledby="about-heading">
    <div class="about__inner">
      <div class="about__profile">
        <div class="about__portrait">
          <img
            class="about__photo"
            src="/images/profile-photo.png"
            width="388"
            height="449"
            alt="Shakeel Ahamed, Senior Software Engineer"
            loading="lazy"
            decoding="async"
          />
          <span class="about__portrait-tag" aria-hidden="true"></span>
        </div>

        <ul class="about__meta">
          <li class="about__meta-row">
            <q-icon name="place" size="14px" />
            <span class="about__meta-label">Location:</span>
            <span class="about__meta-value">{{ identity.location }}</span>
          </li>
          <li class="about__meta-row">
            <q-icon name="flight_takeoff" size="14px" />
            <span class="about__meta-label">Relocation:</span>
            <span class="about__meta-value">{{ identity.relocation }}</span>
          </li>
          <li class="about__meta-row">
            <q-icon name="verified" size="14px" />
            <span class="about__meta-label">Availability:</span>
            <span class="about__meta-value">{{ identity.availability }}</span>
          </li>
        </ul>
      </div>

      <div class="about__content">
        <SectionHeading title="About" heading-id="about-heading" />

        <p class="about__paragraph about__paragraph--lead">{{ resume.summary[0] }}</p>

        <div class="about__more" :class="{ 'is-open': readMoreOpen }">
          <div id="about-more-content" class="about__more-inner">
            <p class="about__paragraph">{{ resume.summary[1] }}</p>
            <p class="about__paragraph">{{ resume.summary[2] }}</p>
            <p class="about__paragraph about__paragraph--closing">{{ resume.summary[3] }}</p>
          </div>
        </div>

        <button
          type="button"
          class="about__toggle"
          :aria-expanded="readMoreOpen"
          aria-controls="about-more-content"
          @click="readMoreOpen = !readMoreOpen"
        >
          {{ readMoreOpen ? 'Read less' : 'Read more' }}
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { resume } from '@/data/resume';
import SectionHeading from '@/components/ui/SectionHeading.vue';

const identity = resume.identity;

// Mobile-only "Read more" collapse — see .about__more's min-width:700px
// override, which forces the content fully open (and hides the toggle)
// regardless of this state, so desktop always shows the full paragraphs.
const readMoreOpen = ref(false);
</script>

<style lang="scss" scoped>
.about {
  border-bottom: 1px solid $color-border;
}

// Horizontal padding uses the shared $section-inner-x token (same one
// .section-inner uses) so About's left/right content edges line up exactly
// with Technology Stack, Highlights, Featured Experience, Work Experience,
// and Education below it. Vertical padding stays About's own — it isn't
// part of the compact-section rhythm those sections share via .section-inner.
.about__inner {
  padding: 44px $section-inner-x;
  display: grid;
  gap: 40px;
  align-items: start;
}

@media (min-width: 1024px) {
  .about__inner {
    padding: 64px $section-inner-x;
  }
}

@media (max-width: 599px) {
  .about__inner {
    padding: 36px $section-inner-x-mobile;
  }
}

// The photo and metadata share one continuous accent spine, so they read as
// a single "identity rail" instead of a photo card sitting above a separate
// info card.
.about__profile {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-left: 16px;
  border-left: 3px solid $color-accent;
}

@media (min-width: 700px) {
  .about__profile {
    gap: 26px;
    padding-left: 24px;
  }
}

// Below the two-column breakpoint, the rail reads as pushing the stacked
// photo/meta block toward the right instead of centering it — drop it (and
// its connecting tag) so the block sits flush and balanced. Untouched at
// 700px+, where the rail is the intentional "identity spine" treatment.
@media (max-width: 699px) {
  .about__profile {
    padding-left: 0;
    border-left: none;
  }

  .about__portrait-tag {
    display: none;
  }
}

.about__portrait {
  position: relative;
}

.about__photo {
  display: block;
  width: 100%;
  height: auto;
  border-radius: $radius-md;
  border: 1px solid $color-border;
  box-shadow: $shadow-sm;
  object-fit: cover;
}

// A small offset tag that bridges the portrait back to the spine, instead of
// a bar floating independently beneath the frame.
.about__portrait-tag {
  position: absolute;
  bottom: 20px;
  left: -16px;
  width: 22px;
  height: 6px;
  border-radius: 3px;
  background: $color-accent;
}

@media (min-width: 700px) {
  .about__portrait-tag {
    left: -24px;
    width: 26px;
  }
}

.about__meta {
  list-style: none;
  margin: 0;
  padding: 14px 16px;
  background: $color-surface-tint;
  border: 1px solid $color-border;
  border-radius: $radius-md;
  box-shadow: $shadow-sm;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.about__meta-row {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8125rem;
  white-space: nowrap;

  .q-icon {
    flex: 0 0 14px;
    color: $color-accent;
  }
}

// Below ~375px the label+value pair can outgrow the available width; let it
// wrap onto a second line there instead of clipping against .profile-card's
// overflow: hidden.
@media (max-width: 374px) {
  .about__meta-row {
    flex-wrap: wrap;
    white-space: normal;
  }
}

.about__meta-label {
  flex-shrink: 0;
  font-weight: 700;
  color: $color-ink;
}

.about__meta-value {
  color: $color-ink-secondary;
  font-weight: 500;
}

.about__content {
  :deep(.section-heading__title) {
    font-size: clamp(2.25rem, 3.6vw, 2.75rem);
  }

  :deep(.section-heading) {
    margin-bottom: 32px;
  }
}

.about__paragraph {
  color: $color-ink-secondary;
  line-height: 1.75;
  font-size: 1.125rem;
  margin: 0 0 22px;
  text-align: justify;
  text-align-last: left;
  hyphens: auto;
}

.about__paragraph--lead {
  font-size: 1.25rem;
  line-height: 1.65;
}

.about__paragraph--closing {
  margin: 6px 0 0;
  padding-top: 20px;
  border-top: 1px solid $color-border;
  font-size: 0.9375rem;
  font-weight: 600;
  line-height: 1.6;
  color: $color-ink-secondary;
  text-align: left;
  hyphens: none;
}

// Mobile-only progressive disclosure: collapsed by default (grid-rows 0fr),
// expanding via the .is-open class the "Read more" button toggles. Reuses
// the same grid-template-rows collapse technique as the mobile nav panel
// and timeline accordion panels elsewhere in the site.
.about__more {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.25s ease;

  &.is-open {
    grid-template-rows: 1fr;
  }
}

.about__more-inner {
  overflow: hidden;
}

.about__toggle {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  margin-top: 4px;
  padding: 4px 0;
  background: none;
  border: none;
  font-family: $font-sans;
  font-size: 0.9375rem;
  font-weight: 700;
  color: $color-accent-text;
  cursor: pointer;

  &:hover {
    color: $color-accent-hover;
  }
}

// Desktop (and About's own two-column breakpoint) always shows the full
// content: collapsing the wrapper's own box via display: contents makes the
// grid-rows collapse a no-op regardless of .is-open, and the toggle is
// hidden — so there's no "Read more" control and nothing to expand.
@media (min-width: 700px) {
  .about__more {
    display: contents;
  }

  .about__toggle {
    display: none;
  }
}

// Tighter line-height for the stacked mobile layout so the section feels
// less vertically stretched. Desktop line-heights (set above) are untouched.
@media (max-width: 699px) {
  .about__paragraph,
  .about__paragraph--lead,
  .about__paragraph--closing {
    line-height: 1.5;
  }
}

@media (min-width: 700px) {
  .about__inner {
    grid-template-columns: 280px 1fr;
    gap: 48px;
  }
}

@media (min-width: 1024px) {
  .about__inner {
    grid-template-columns: $about-photo-col 1fr;
    gap: $about-photo-gap;
  }
}
</style>
