<template>
  <div class="profile-card">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <EngineeringHighlightsSection />
    <FeaturedExperienceSection />
    <ExperienceTimelineSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import { useMeta } from 'quasar';
import { siteConfig } from '@/config/site.config';
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import EngineeringHighlightsSection from '@/components/sections/EngineeringHighlightsSection.vue';
import FeaturedExperienceSection from '@/components/sections/FeaturedExperienceSection.vue';
import ExperienceTimelineSection from '@/components/sections/ExperienceTimelineSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';

// Full title template, OG/Twitter, and JSON-LD land in the SEO phase.
useMeta(() => ({
  title: siteConfig.defaultTitle,
  meta: {
    description: { name: 'description', content: siteConfig.defaultDescription },
  },
}));
</script>
