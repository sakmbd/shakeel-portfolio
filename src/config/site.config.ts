/**
 * Central site/SEO configuration. Components and the SEO composable
 * (src/composables/useSeoMeta.ts, added in the SEO phase) read from here
 * instead of hardcoding titles, descriptions, or the canonical domain.
 */

export const siteConfig = {
  /**
   * TODO: replace with the real production domain before deploying.
   * Used for canonical URLs, Open Graph/Twitter "url" fields, and JSON-LD.
   */
  siteUrl: 'https://shakeel-portfolio.example',

  siteName: 'Shakeel Ahamed — Senior Software Engineer',
  titleTemplate: (title: string) => (title ? `${title} — Shakeel Ahamed` : 'Shakeel Ahamed'),

  defaultTitle: 'Shakeel Ahamed — Senior Software Engineer | Full Stack, Node.js, React.js, Vue.js',
  defaultDescription:
    'Senior Software Engineer with 10+ years building scalable web applications and enterprise systems across e-commerce, healthcare, SEO platforms, and automation. Node.js, React.js, Vue.js, TypeScript, microservices. Open to relocation to Dubai, UAE.',

  locale: 'en',

  /**
   * TODO: add a real 1200x630 social preview image during the SEO phase.
   * Left unset until then rather than pointing OG/Twitter tags at a
   * placeholder that doesn't exist yet.
   */
  ogImagePath: '',

  /** Canonical downloadable resume — pre-existing static asset, never generated. */
  resumePdfPath: '/resume.pdf',
} as const;
