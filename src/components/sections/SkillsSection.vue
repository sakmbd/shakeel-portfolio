<template>
  <section id="skills" class="skills" aria-labelledby="skills-heading">
    <div class="section-inner">
      <!-- ---------- HEADER ---------- -->
      <header class="skills__header">
        <div class="skills__eyebrow-row">
          <span class="skills__eyebrow">Skills</span>
          <span class="skills__eyebrow-rule" aria-hidden="true"></span>
        </div>

        <h2 id="skills-heading" class="skills__title">
          Technology <span class="skills__title-accent">Stack</span>
        </h2>

        <p class="skills__lede">
          The technologies behind 10+ years of full-stack delivery, from core languages to cloud,
          testing, and API tooling.
        </p>
      </header>

      <!-- ---------- CORE STACK STRIP ---------- -->
      <div class="skills__core-strip" aria-label="Core technology stack">
        <template v-for="(tech, i) in resume.coreStack" :key="tech">
          <span class="skills__core-item">{{ tech }}</span>
          <span
            v-if="i < resume.coreStack.length - 1"
            class="skills__core-dot"
            aria-hidden="true"
          ></span>
        </template>
      </div>

      <!-- ---------- DETAILED STACK (collapsible) ---------- -->
      <AccordionSection
        label="Detailed Technology Stack"
        :subtitle="`${resume.skills.length} categories — languages, backend, cloud, testing & more`"
        panel-id="skills-detailed-panel"
        class="skills__accordion"
      >
        <div class="skills__grid">
          <article v-for="(group, i) in resume.skills" :key="group.category" class="skills__card">
            <header class="skills__card-header">
              <span class="skills__card-icon">
                <q-icon :name="iconFor(group.category)" size="18px" />
              </span>
              <h3 class="skills__card-title">{{ group.category }}</h3>
              <span class="skills__card-num">{{ pad(i + 1) }}</span>
            </header>

            <ul class="skills__card-chips">
              <li v-for="item in group.items" :key="item">{{ item }}</li>
            </ul>
          </article>

          <!-- Quote card — closes the grid rhythmically -->
          <div class="skills__quote">
            <span class="skills__quote-rule" aria-hidden="true"></span>
            <p class="skills__quote-text">
              Always learning.<br />
              Always building what&rsquo;s next.
            </p>
            <span class="skills__quote-dots" aria-hidden="true"></span>
          </div>
        </div>
      </AccordionSection>
    </div>
  </section>
</template>

<script setup lang="ts">
import { resume } from '@/data/resume';
import AccordionSection from '@/components/ui/AccordionSection.vue';

function pad(n: number): string {
  return String(n).padStart(2, '0');
}

/** Maps each category name to a Quasar/Material icon. */
function iconFor(category: string): string {
  const key = category.toLowerCase();
  if (key.includes('programming')) return 'code';
  if (key.includes('backend')) return 'dns';
  if (key.includes('frontend')) return 'desktop_windows';
  if (key.includes('state')) return 'settings';
  if (key.includes('database')) return 'storage';
  if (key.includes('cloud')) return 'cloud';
  if (key.includes('architecture')) return 'view_in_ar';
  if (key.includes('testing')) return 'science';
  if (key.includes('ui') || key.includes('css')) return 'palette';
  if (key.includes('version')) return 'account_tree';
  if (key.includes('ai') || key.includes('emerging')) return 'auto_awesome';
  return 'code';
}
</script>

<style lang="scss" scoped>
/* ============================================================
   LOCAL DESIGN TOKENS — matched to the reference screenshot.
   These are scoped so they don't affect the rest of the site.
   ============================================================ */
$sk-bg: #faf7f3;
$sk-surface: #ffffff;
$sk-border: #ede8e1;
$sk-border-strong: #ddd6cc;
$sk-accent: #e05a2b;
$sk-accent-soft: #fcece2;
$sk-ink: #191817;
$sk-ink-muted: #6b7280;
$sk-chip-bg: #eef1f4;
$sk-chip-border: #e3e7ec;
$sk-chip-ink: #2b2f36;
$sk-num: #c7c2bb;

/* ---------- SECTION ---------- */
// Every other major section (About, Highlights, Featured, Experience,
// Education) carries this same divider — Skills was the one section
// missing it, which is why the Technology Stack -> Engineering Highlights
// boundary read as an undifferentiated gap instead of a bounded section.
// Section-level padding itself now lives entirely in the shared
// .section-inner utility (app.scss) — the inner div uses that class
// directly rather than a local skills__inner copy of the same values.
.skills {
  border-bottom: 1px solid $color-border;
}

/* ---------- HEADER ---------- */
.skills__header {
  margin-bottom: 20px;
}

.skills__eyebrow-row {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 18px;
}

.skills__eyebrow {
  font-family: $font-sans;
  font-size: 12px;
  font-weight: 800;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: $sk-accent;
}

.skills__eyebrow-rule {
  display: block;
  width: 42px;
  height: 2px;
  background: $sk-accent;
  border-radius: 2px;
}

// ~15% smaller than the previous scale — matches the reduced size applied
// to the other main content section headings (Engineering Highlights,
// Featured Experience, Work Experience) via SectionHeading's `compact` mode.
.skills__title {
  font-family: $font-serif;
  font-weight: 500;
  font-size: clamp(1.6875rem, 2.5vw, 2.0625rem);
  line-height: 1;
  letter-spacing: -0.035em;
  color: $sk-ink;
  margin: 0 0 22px;
}

.skills__title-accent {
  color: $sk-accent;
}

.skills__lede {
  font-family: $font-sans;
  font-size: 1.0625rem;
  color: $sk-ink-muted;
  margin: 0;
}

/* ---------- CORE STACK STRIP ---------- */
.skills__core-strip {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  column-gap: 19px;
  row-gap: 12px;
  // padding: 18px 28px;
  // background: #faf7f3;
  // border: 1px solid $sk-border;
  border-radius: 5px;
  margin-bottom: 40px;
}

.skills__core-item {
  font-family: $font-sans;
  font-size: 1rem;
  font-weight: 600;
  color: $sk-ink;
  letter-spacing: -0.005em;
}

.skills__core-dot {
  display: block;
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: $sk-accent;
  flex-shrink: 0;
}

/* ---------- DETAILED STACK ACCORDION ---------- */
// Reuses the shared AccordionSection behavior/markup but repaints it in the
// Skills section's own local palette (see tokens above) instead of the
// site-wide $color-* tokens the component defaults to.
.skills__accordion {
  :deep(.qc-accordion) {
    margin-top: 0;
  }

  :deep(.qc-accordion__trigger) {
    padding: 20px 22px;
    border: 1px solid $sk-border;
    border-radius: 14px;
    background: $sk-surface;

    // Barely perceptible hover — a whisper-light wash (2% of $sk-ink), not
    // a solid off-white fill.
    &:hover {
      background: rgba(25, 24, 23, 0.02);
      border-color: $sk-border-strong;
    }

    &:focus-visible {
      outline-color: $sk-accent;
    }
  }

  :deep(.qc-accordion__label) {
    font-family: $font-sans;
    font-size: 0.8125rem;
    font-weight: 800;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: $sk-ink;
  }

  :deep(.qc-accordion__subtitle) {
    font-family: $font-sans;
    color: $sk-ink-muted;
  }

  :deep(.qc-accordion__icon) {
    border-color: $sk-border;
    color: $sk-accent;
  }

  // Open state reads as "this is on" — neutral off-white, not an
  // accent-highlighted card.
  :deep(.qc-accordion.is-open .qc-accordion__trigger) {
    border-color: $sk-border-strong;
    background: $sk-bg;
  }

  :deep(.qc-accordion.is-open .qc-accordion__icon) {
    border-color: $sk-border-strong;
    background: $sk-surface;
    color: $sk-ink-muted;
  }
}

/* ---------- GRID ---------- */
.skills__grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

@media (min-width: 700px) {
  .skills__grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .skills__grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

/* ---------- CARD ---------- */
.skills__card {
  // background: $sk-bg;
  border: 1px solid $sk-border;
  border-radius: 16px;
  padding: 22px 22px 24px;
  box-shadow: 0 1px 2px rgba(20, 18, 16, 0.03);
  display: flex;
  flex-direction: column;
  gap: 18px;
  transition:
    box-shadow 0.25s ease,
    border-color 0.25s ease,
    transform 0.25s ease;
}

.skills__card:hover {
  border-color: rgba(224, 90, 43, 0.28);
  box-shadow: 0 10px 28px rgba(20, 18, 16, 0.06);
  transform: translateY(-2px);
}

.skills__card-header {
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  gap: 12px;
}

.skills__card-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 10px;
  background: $sk-accent-soft;
  color: $sk-accent;
  flex-shrink: 0;
}

.skills__card-title {
  font-family: $font-sans;
  font-size: 11.5px;
  font-weight: 800;
  letter-spacing: 0.11em;
  text-transform: uppercase;
  color: $sk-ink;
  margin: 0;
  line-height: 1.3;
}

.skills__card-num {
  font-family: $font-mono;
  font-size: 12px;
  font-weight: 500;
  color: $sk-num;
  letter-spacing: 0.06em;
}

.skills__card-chips {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  li {
    font-family: $font-sans;
    font-size: 0.8125rem;
    font-weight: 500;
    color: $sk-chip-ink;
    background: $sk-chip-bg;
    border: 1px solid $sk-chip-border;
    border-radius: 8px;
    padding: 6px 12px;
    line-height: 1.2;
    transition:
      background-color 0.2s ease,
      border-color 0.2s ease;

    &:hover {
      background: #e7ebef;
      border-color: #d6dbe1;
    }
  }
}

/* ---------- QUOTE CARD ---------- */
.skills__quote {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 14px;
  padding: 24px 22px;
  overflow: hidden;
}

.skills__quote-rule {
  display: block;
  width: 40px;
  height: 2px;
  background: $sk-accent;
  border-radius: 2px;
}

.skills__quote-text {
  font-family: $font-serif;
  font-style: italic;
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.5;
  color: $sk-ink;
  margin: 0;
  position: relative;
  z-index: 1;
}

.skills__quote-dots {
  position: absolute;
  right: 20px;
  bottom: 22px;
  width: 64px;
  height: 64px;
  background-image: radial-gradient(circle, rgba(224, 90, 43, 0.4) 1.2px, transparent 1.2px);
  background-size: 10px 10px;
  pointer-events: none;
  opacity: 0.8;
  z-index: 0;
}

/* ---------- MOBILE TWEAKS ---------- */
@media (max-width: 599px) {
  // The base clamp's min bound doesn't yield to the preferred vw value at
  // phone widths, so "Technology Stack" sat flat at a size wide enough to
  // wrap. Scale it down further here; unaffected above 599px.
  .skills__title {
    font-size: clamp(1.25rem, 5.5vw, 1.6875rem);
    margin-bottom: 18px;
  }

  .skills__lede {
    text-align: justify;
    text-align-last: left;
    hyphens: auto;
  }

  // Free-flowing dot-separated text reads unevenly once it wraps across
  // several lines at phone width — a fixed 2-column grid of chips gives
  // every item a predictable cell instead of an uncontrolled line break.
  // Desktop keeps the plain dot-separated strip untouched.
  .skills__core-strip {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: stretch;
    gap: 10px;
    border-radius: 20px;
    padding: 18px 20px;
  }

  .skills__core-item {
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px 12px;
    background: $sk-chip-bg;
    border: 1px solid $sk-chip-border;
    border-radius: 12px;
  }

  .skills__core-dot {
    display: none;
  }

  .skills__card {
    padding: 20px;
  }

  // Decorative-only; desktop keeps it as the grid's closing tile.
  .skills__quote {
    display: none;
  }
}
</style>
