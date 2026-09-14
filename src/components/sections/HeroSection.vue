<template>
  <section id="top" class="hero" aria-label="Introduction">
    <div class="hero__inner">
      <span class="hero__mark" aria-hidden="true"></span>

      <p class="hero__eyebrow">Senior Software Engineer</p>

      <h1 class="hero__name">{{ identity.name }}</h1>

      <p class="hero__title">{{ identity.title }}</p>

      <p class="hero__summary">{{ resume.summary[0] }}</p>

      <ul class="hero__facts">
        <li>10+ Years Experience</li>
        <li>Full-Stack Engineer</li>
        <li>Open to Relocation</li>
      </ul>

      <div class="hero__bottom">
        <div class="hero__actions">
          <a class="btn btn--primary" :href="siteConfig.resumePdfPath" download>Download Resume</a>
          <a class="btn btn--outline-dark" href="#contact">Contact Me</a>
        </div>

        <div class="hero__social" aria-label="Social and contact links">
          <IconLink
            :href="`mailto:${identity.email}`"
            label="Email Shakeel Ahamed"
            :external="false"
            variant="dark"
          >
            <q-icon name="mail" size="19px" />
          </IconLink>
          <IconLink :href="identity.github" label="Shakeel Ahamed on GitHub" variant="dark">
            <IconGitHub />
          </IconLink>
          <IconLink :href="identity.linkedin" label="Shakeel Ahamed on LinkedIn" variant="dark">
            <IconLinkedIn />
          </IconLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { resume } from '@/data/resume';
import { siteConfig } from '@/config/site.config';
import IconLink from '@/components/ui/IconLink.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';

const identity = resume.identity;
</script>

<style lang="scss" scoped>
.hero {
  background: $color-hero-bg;
}

.hero__inner {
  padding: 52px 48px 44px;
}

@media (min-width: 1024px) {
  .hero__inner {
    padding: 72px 64px 56px;
  }
}

.hero__mark {
  display: block;
  width: 44px;
  height: 4px;
  border-radius: 2px;
  background: $color-hero-accent;
  margin-bottom: 22px;
}

.hero__eyebrow {
  font-family: $font-sans;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: $color-hero-accent;
  margin: 0 0 10px;
}

.hero__name {
  font-family: $font-serif;
  font-weight: 700;
  font-size: clamp(2.75rem, 6vw, 4.75rem);
  line-height: 1.02;
  letter-spacing: -0.01em;
  color: $color-hero-ink;
  margin: 0 0 14px;
  max-width: 16ch;
}

.hero__title {
  font-family: $font-sans;
  font-size: clamp(1.0625rem, 1.8vw, 1.25rem);
  font-weight: 600;
  line-height: 1.4;
  color: $color-hero-ink;
  margin: 0 0 16px;
}

.hero__summary {
  font-size: 1rem;
  font-style: italic;
  line-height: 1.65;
  color: $color-hero-ink-secondary;
  max-width: $prose-max-width;
  margin: 0 0 24px;
  text-align: justify;
  text-align-last: left;
  hyphens: auto;
}

@media (min-width: 1024px) {
  .hero__title {
    white-space: nowrap;
  }

  // Right-aligns approximately with About's text column, which starts after
  // the photo column + gap (see $about-photo-col/$about-photo-gap).
  .hero__summary {
    max-width: calc(#{$about-photo-col} + #{$about-photo-gap} + #{$prose-max-width});
  }
}

.hero__facts {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  row-gap: 8px;
  column-gap: 16px;
  list-style: none;
  padding: 0;
  margin: 0 0 30px;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.03em;
  text-transform: uppercase;
  color: $color-hero-ink-secondary;

  li {
    display: flex;
    align-items: center;
    gap: 16px;

    &:not(:first-child)::before {
      content: '';
      width: 3px;
      height: 3px;
      border-radius: 50%;
      background: $color-hero-accent;
      flex-shrink: 0;
    }
  }
}

.hero__bottom {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 20px;
}

.hero__actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
}

.hero__social {
  display: flex;
  gap: 10px;
  padding-inline-start: 20px;
  border-inline-start: 1px solid $color-hero-border;
}

@media (max-width: 599px) {
  .hero__inner {
    padding: 40px 24px 32px;
  }

  .hero__social {
    padding-inline-start: 0;
    border-inline-start: none;
    width: 100%;
  }
}
</style>
