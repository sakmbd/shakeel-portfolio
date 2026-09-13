<template>
  <header ref="headerEl" class="site-header">
    <div class="site-header__inner">
      <a class="site-header__brand" href="#top">{{ identity.name }}</a>

      <nav class="site-nav site-nav--desktop" aria-label="Primary">
        <a v-for="item in navItems" :key="item.href" :href="item.href">{{ item.label }}</a>
      </nav>

      <div class="site-header__actions">
        <a class="btn btn--primary site-header__resume" :href="siteConfig.resumePdfPath" download
          >Resume</a
        >

        <button
          type="button"
          class="site-header__toggle"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav-panel"
          aria-label="Toggle navigation menu"
          @click="mobileOpen = !mobileOpen"
        >
          <q-icon :name="mobileOpen ? 'close' : 'menu'" size="22px" />
        </button>
      </div>
    </div>

    <div
      id="mobile-nav-panel"
      class="site-nav--mobile"
      :class="{ 'is-open': mobileOpen }"
      :aria-hidden="!mobileOpen"
      :inert="!mobileOpen"
    >
      <nav aria-label="Primary">
        <a v-for="item in navItems" :key="item.href" :href="item.href" @click="mobileOpen = false">
          {{ item.label }}
        </a>
        <a :href="siteConfig.resumePdfPath" download @click="mobileOpen = false">Resume</a>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { resume } from '@/data/resume';
import { siteConfig } from '@/config/site.config';

const identity = resume.identity;
const mobileOpen = ref(false);
const headerEl = ref<HTMLElement | null>(null);

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' },
];

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && mobileOpen.value) mobileOpen.value = false;
}

function handleOutsideClick(e: MouseEvent) {
  if (mobileOpen.value && headerEl.value && !headerEl.value.contains(e.target as Node)) {
    mobileOpen.value = false;
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleKeydown);
  document.addEventListener('click', handleOutsideClick);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown);
  document.removeEventListener('click', handleOutsideClick);
});
</script>

<style lang="scss" scoped>
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba($color-page-bg, 0.85);
  backdrop-filter: saturate(140%) blur(8px);
  border-bottom: 1px solid $color-border;
}

.site-header__inner {
  max-width: $card-max-width;
  width: calc(100% - 40px);
  margin: 0 auto;
  padding: 14px 24px;
  display: flex;
  align-items: center;
  gap: 24px;
}

.site-header__brand {
  font-family: $font-serif;
  font-weight: 500;
  font-size: 19px;
  color: $color-ink;
  text-decoration: none;
  white-space: nowrap;
  margin-inline-end: auto;
}

.site-nav--desktop {
  display: none;
  gap: 28px;

  a {
    color: $color-ink;
    text-decoration: none;
    font-size: 14px;
    font-weight: 600;

    &:hover {
      color: $color-accent;
    }
  }
}

.site-header__actions {
  display: flex;
  align-items: center;
  gap: 10px;
}

.site-header__resume {
  display: none;
  padding: 9px 18px;
  font-size: 14px;
}

.site-header__toggle {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: $radius-sm;
  border: 1px solid $color-border-strong;
  background: transparent;
  color: $color-ink;
  cursor: pointer;
}

.site-nav--mobile {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 0.2s ease;
  border-top: 1px solid transparent;

  nav {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    padding: 0 24px;
  }

  a {
    padding: 14px 0;
    color: $color-ink;
    text-decoration: none;
    font-weight: 500;
    font-size: 15px;
    border-bottom: 1px solid $color-border;

    &:last-child {
      border-bottom: none;
    }
  }

  &.is-open {
    grid-template-rows: 1fr;
    border-top-color: $color-border;

    nav {
      padding-block: 8px;
    }
  }
}

@media (min-width: 768px) {
  .site-nav--desktop {
    display: flex;
  }

  .site-header__resume {
    display: inline-flex;
  }

  .site-header__toggle {
    display: none;
  }

  .site-nav--mobile {
    display: none;
  }
}
</style>
