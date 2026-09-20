<template>
  <section id="contact" class="contact" aria-labelledby="contact-heading">
    <motion.div
      class="contact__inner"
      initial="hidden"
      while-in-view="visible"
      :in-view-options="IN_VIEW_ONCE"
      :variants="fadeUpVariants"
    >
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        lede="Open to Senior Software Engineer opportunities, including relocation to Dubai, UAE."
        heading-id="contact-heading"
        center
      />

      <div class="contact__primary">
        <motion.a
          class="btn btn--primary"
          :href="`mailto:${identity.email}`"
          :while-hover="{ y: -2 }"
          :while-press="{ y: 0, scale: 0.98 }"
          >Email {{ identity.email }}</motion.a
        >
        <motion.button
          type="button"
          class="btn btn--outline"
          :while-hover="{ y: -2 }"
          :while-press="{ y: 0, scale: 0.98 }"
          @click="copyEmail"
        >
          {{ copied ? 'Copied!' : 'Copy email' }}
        </motion.button>
      </div>

      <ul class="contact__links">
        <li>
          <a :href="identity.github" target="_blank" rel="noopener noreferrer">
            <IconGitHub /> GitHub
          </a>
        </li>
        <li>
          <a :href="identity.linkedin" target="_blank" rel="noopener noreferrer">
            <IconLinkedIn /> LinkedIn
          </a>
        </li>
        <li>
          <a :href="siteConfig.resumePdfPath" download
            ><q-icon name="description" size="18px" /> Resume (PDF)</a
          >
        </li>
      </ul>

      <p class="contact__meta">
        {{ identity.location }} &middot; {{ identity.relocation }} &middot;
        {{ identity.availability }}
      </p>
    </motion.div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { motion } from 'motion-v';
import { resume } from '@/data/resume';
import { siteConfig } from '@/config/site.config';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';
import { fadeUpVariants, IN_VIEW_ONCE } from '@/composables/useMotionPresets';

const identity = resume.identity;
const copied = ref(false);

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(identity.email);
    copied.value = true;
    setTimeout(() => (copied.value = false), 2000);
  } catch {
    // Clipboard API unavailable (e.g. insecure context) — the mailto link above still works.
  }
}
</script>

<style lang="scss" scoped>
.contact__inner {
  padding: 48px;
  text-align: center;
}

@media (min-width: 1024px) {
  .contact__inner {
    padding: 64px;
  }
}

.contact__primary {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 14px;
  margin-bottom: 28px;
}

.contact__links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 28px;
  list-style: none;
  padding: 0;
  margin: 0 0 24px;

  a {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    color: $color-ink;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9375rem;
    transition: color var(--duration-fast) var(--ease-premium);

    svg,
    .q-icon {
      transition: transform var(--duration-fast) var(--ease-premium);
    }

    &:hover {
      color: $color-accent-text;

      svg,
      .q-icon {
        transform: translateY(-2px);
      }
    }
  }
}

.contact__meta {
  color: $color-muted;
  font-size: 0.875rem;
  margin: 0;
}

@media (max-width: 599px) {
  .contact__inner {
    padding: 36px 24px;
  }
}
</style>
