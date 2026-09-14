<template>
  <section id="about" class="about" aria-labelledby="about-heading">
    <div class="about__inner">
      <div class="about__identity">
        <div class="about__photo-panel">
          <img
            class="about__photo"
            src="/images/profile-photo.png"
            width="388"
            height="449"
            alt="Shakeel Ahamed, Senior Software Engineer"
            loading="lazy"
            decoding="async"
          />
        </div>

        <ul class="about__meta">
          <li>
            <q-icon name="place" size="16px" />
            <span>{{ identity.location }}</span>
          </li>
          <li>
            <q-icon name="flight_takeoff" size="16px" />
            <span>{{ identity.relocation }}</span>
          </li>
          <li>
            <q-icon name="verified" size="16px" />
            <span>{{ identity.availability }}</span>
          </li>
        </ul>
      </div>

      <div class="about__content">
        <SectionHeading title="About" heading-id="about-heading" />

        <p v-for="(line, i) in resume.summary" :key="i" class="about__paragraph">{{ line }}</p>
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
  gap: 36px;
  align-items: start;
}

@media (min-width: 1024px) {
  .about__inner {
    padding: 56px 64px;
  }
}

.about__identity {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.about__photo-panel {
  position: relative;
  padding: 14px;
  background: $color-surface;
  border: 1px solid $color-border;
  border-radius: $radius-lg;
  box-shadow: $shadow-md;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 24px;
    width: 40px;
    height: 4px;
    border-radius: 2px;
    background: $color-accent;
  }
}

.about__photo {
  display: block;
  width: 100%;
  height: auto;
  border-radius: $radius-md;
  object-fit: cover;
}

.about__meta {
  list-style: none;
  margin: 8px 0 0;
  padding: 14px 16px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: $color-surface-tint;
  border: 1px solid $color-border;
  border-radius: $radius-md;

  li {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 0.8125rem;
    font-weight: 600;
    color: $color-ink;

    .q-icon {
      color: $color-accent;
      flex-shrink: 0;
    }
  }
}

.about__paragraph {
  color: $color-ink-secondary;
  line-height: 1.7;
  font-size: 1.0625rem;
  max-width: $prose-max-width;
  margin: 0 0 16px;
  text-align: justify;
  text-align-last: left;
  hyphens: auto;

  &:last-child {
    margin-bottom: 0;
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

  // Narrower than the shared $about-photo-col track so the photo + info
  // panel's combined height lines up with the About copy's bottom edge
  // (the column itself stays full-width for HeroSection's alignment calc).
  .about__photo-panel,
  .about__meta {
    width: 220px;
  }
}
</style>
