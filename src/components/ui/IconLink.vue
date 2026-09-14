<template>
  <a
    :href="href"
    class="icon-link"
    :class="`icon-link--${variant}`"
    :target="external ? '_blank' : undefined"
    :rel="external ? 'noopener noreferrer' : undefined"
  >
    <span class="icon-link__glyph" aria-hidden="true">
      <slot />
    </span>
    <span class="visually-hidden">{{ label }}</span>
  </a>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    href: string;
    label: string;
    external?: boolean;
    variant?: 'light' | 'dark';
  }>(),
  { external: true, variant: 'light' },
);
</script>

<style lang="scss" scoped>
.icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border-radius: $radius-sm;
  border: 1px solid $color-border-strong;
  color: $color-ink;
  transition:
    color 0.15s ease,
    border-color 0.15s ease,
    background-color 0.15s ease;

  &:hover {
    color: $color-accent;
    border-color: $color-accent;
    background: $color-accent-soft;
  }
}

.icon-link--dark {
  border-color: $color-hero-border;
  color: $color-hero-ink-secondary;

  &:hover {
    color: $color-hero-accent;
    border-color: $color-hero-accent;
    background: rgba(255, 92, 51, 0.12);
  }
}

.icon-link__glyph {
  display: inline-flex;
}
</style>
