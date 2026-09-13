<template>
  <section id="contact" class="contact" aria-labelledby="contact-heading">
    <div class="contact__inner">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        lede="Open to Senior Software Engineer opportunities, including relocation to Dubai, UAE."
        heading-id="contact-heading"
        center
      />

      <div class="contact__primary">
        <a class="btn btn--primary" :href="`mailto:${identity.email}`">Email {{ identity.email }}</a>
        <button type="button" class="btn btn--outline" @click="copyEmail">
          {{ copied ? 'Copied!' : 'Copy email' }}
        </button>
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
          <a :href="siteConfig.resumePdfPath" download><q-icon name="description" size="18px" /> Resume (PDF)</a>
        </li>
      </ul>

      <p class="contact__meta">
        {{ identity.location }} &middot; {{ identity.relocation }} &middot; {{ identity.availability }}
      </p>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { resume } from '@/data/resume';
import { siteConfig } from '@/config/site.config';
import SectionHeading from '@/components/ui/SectionHeading.vue';
import IconGitHub from '@/components/icons/IconGitHub.vue';
import IconLinkedIn from '@/components/icons/IconLinkedIn.vue';

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

    &:hover {
      color: $color-accent;
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
