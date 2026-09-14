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
        <p class="about__paragraph">{{ resume.summary[1] }}</p>
        <p class="about__paragraph">{{ resume.summary[2] }}</p>
        <p class="about__paragraph about__paragraph--closing">{{ resume.summary[3] }}</p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { resume } from '@/data/resume';
import SectionHeading from '@/components/ui/SectionHeading.vue';

const identity = resume.identity;
</script>

<style lang="scss" scoped>
.about {
  border-bottom: 1px solid $color-border;
}

.about__inner {
  padding: 44px 48px;
  display: grid;
  gap: 40px;
  align-items: start;
}

@media (min-width: 1024px) {
  .about__inner {
    padding: 64px;
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
  max-width: $prose-max-width;
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
