<template>
  <a class="skip-link" href="#main-content" @click="onSkipLinkClick">Skip to content</a>

  <SiteHeader />

  <main id="main-content" tabindex="-1">
    <router-view />
  </main>

  <footer class="site-footer">
    <div class="site-footer__inner">
      <p class="site-footer__meta">
        &copy; {{ year }} {{ identity.name }}. {{ identity.relocation }}.
      </p>
      <div class="site-footer__links">
        <a :href="identity.github" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a :href="identity.linkedin" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a :href="`mailto:${identity.email}`">{{ identity.email }}</a>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { resume } from '@/data/resume';
import SiteHeader from '@/components/nav/SiteHeader.vue';

const identity = resume.identity;
const year = new Date().getFullYear();

// Kept as a real #main-content href for semantics/fallback, but the click is
// intercepted so the URL stays clean — the native anchor jump would
// otherwise land "#main-content" in the address bar (history-mode routing
// + SSG requires clean URLs). Focus is moved manually since preventDefault
// skips the browser's default focus-the-target behavior.
function onSkipLinkClick(e: MouseEvent) {
  e.preventDefault();
  const target = document.getElementById('main-content');
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  target?.focus();
}
</script>

<style lang="scss" scoped>
main {
  outline: none;
}

.site-footer {
  background: $color-page-bg;
}

.site-footer__inner {
  max-width: $card-max-width;
  width: calc(100% - 40px);
  margin: 0 auto;
  padding: 24px 24px 40px;
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
  justify-content: space-between;
  align-items: center;
}

.site-footer__meta {
  margin: 0;
  font-size: 13px;
  color: $color-muted;
}

.site-footer__links {
  display: flex;
  flex-wrap: wrap;
  gap: 12px 20px;

  a {
    font-size: 13px;
    color: $color-muted;
    text-decoration: none;

    &:hover {
      color: $color-accent-text;
    }
  }
}

@media (max-width: 599px) {
  .site-footer__inner {
    padding: 20px 24px 32px;
  }
}
</style>
