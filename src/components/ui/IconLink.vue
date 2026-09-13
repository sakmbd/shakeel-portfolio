<template>
  <a :href="href" class="icon-link" :target="external ? '_blank' : undefined" :rel="external ? 'noopener noreferrer' : undefined">
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
  }>(),
  { external: true },
);
</script>

<style lang="scss" scoped>
.icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
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

.icon-link__glyph {
  display: inline-flex;
}
</style>
