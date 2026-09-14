<template>
  <div class="profile-card">
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <EngineeringHighlightsSection />
    <FeaturedExperienceSection />
    <ExperienceTimelineSection />
    <EducationSection />
    <ContactSection />
  </div>
</template>

<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import AboutSection from '@/components/sections/AboutSection.vue';
import SkillsSection from '@/components/sections/SkillsSection.vue';
import EngineeringHighlightsSection from '@/components/sections/EngineeringHighlightsSection.vue';
import FeaturedExperienceSection from '@/components/sections/FeaturedExperienceSection.vue';
import ExperienceTimelineSection from '@/components/sections/ExperienceTimelineSection.vue';
import EducationSection from '@/components/sections/EducationSection.vue';
import ContactSection from '@/components/sections/ContactSection.vue';
import { useHomeSeoMeta } from '@/composables/useSeoMeta';

useHomeSeoMeta();
</script>
