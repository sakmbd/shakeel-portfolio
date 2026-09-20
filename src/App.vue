<template>
  <!-- reducedMotion="user" makes every motion-v component site-wide
       automatically respect prefers-reduced-motion, without each
       component needing its own matchMedia check. -->
  <MotionConfig :reduced-motion="'user'">
    <router-view />
  </MotionConfig>
</template>

<script setup lang="ts">
import { MotionConfig } from 'motion-v';
</script>
