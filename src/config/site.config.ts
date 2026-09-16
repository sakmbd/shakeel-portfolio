/**
 * Central site/SEO configuration. Components and the SEO composable
 * (src/composables/useSeoMeta.ts) read from here instead of hardcoding
 * titles, descriptions, or the canonical domain.
 */

export const siteConfig = {
  /**
   * Real production domain. Used for canonical URLs, Open Graph/Twitter
   * "url" fields, and JSON-LD.
   *
   * public/robots.txt and public/sitemap.xml are plain static files (not
   * templated at build time) and hard-code this same domain in their
   * Sitemap:/<loc> entries — update BOTH of those alongside this value if
   * the domain ever changes, so all three stay in sync.
   */
  siteUrl: 'https://shakeeldev.com',

  siteName: 'Shakeel Ahamed — Senior Software Engineer',

  defaultTitle: 'Shakeel Ahamed | Senior Software Engineer & Full Stack Dev',
  defaultDescription:
    'Shakeel Ahamed — Senior Software Engineer & Full Stack Developer with 10+ years building scalable web apps using Node.js, React.js, Vue.js, and TypeScript.',

  locale: 'en',

  /** Dedicated Open Graph/Twitter social preview image (landscape). */
  ogImagePath: '/images/og-image.png',
  /** Pixel dimensions and MIME type of the asset at ogImagePath, above. */
  ogImageWidth: 1200,
  ogImageHeight: 630,
  ogImageType: 'image/png',
  /** Alt text for the social preview image, shared by og:image:alt and twitter:image:alt. */
  ogImageAlt: 'Shakeel Ahamed — Senior Software Engineer & Full Stack Developer',

  /** Canonical downloadable resume — pre-existing static asset, never generated. */
  resumePdfPath: '/resume.pdf',
} as const;
