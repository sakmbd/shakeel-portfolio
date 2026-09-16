/**
 * Homepage SEO metadata: title, description, robots, canonical, Open Graph,
 * Twitter Card, and a Person/WebSite/ProfilePage JSON-LD graph. Everything
 * here is derived from siteConfig and resume.ts (the existing sources of
 * truth) — nothing is invented. This is intentionally homepage-specific
 * (the site has exactly two routes, and the 404 page already sets its own
 * minimal noindex title via useMeta() directly) rather than a generic
 * multi-page abstraction.
 */
import { useMeta } from 'quasar';
import { siteConfig } from '@/config/site.config';
import { resume } from '@/data/resume';

export function useHomeSeoMeta() {
  const canonicalUrl = `${siteConfig.siteUrl}/`;
  // Social-share image (Open Graph/Twitter Card) — deliberately distinct
  // from the Person schema's image below: this is a dedicated share asset,
  // not the person's actual photo.
  const shareImageUrl = siteConfig.ogImagePath
    ? `${siteConfig.siteUrl}${siteConfig.ogImagePath}`
    : undefined;
  // Person.image stays the real profile photo (same asset AboutSection.vue
  // renders), independent of whatever siteConfig.ogImagePath points to.
  const profileImageUrl = `${siteConfig.siteUrl}/images/profile-photo.png`;
  const personId = `${canonicalUrl}#person`;
  const websiteId = `${canonicalUrl}#website`;
  const profilePageId = `${canonicalUrl}#profilepage`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Person',
        '@id': personId,
        name: resume.identity.name,
        jobTitle: resume.experience[0]?.role ?? 'Senior Software Engineer',
        description: resume.summary[0],
        url: canonicalUrl,
        image: profileImageUrl,
        sameAs: [resume.identity.github, resume.identity.linkedin],
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        name: siteConfig.siteName,
        url: canonicalUrl,
        about: { '@id': personId },
      },
      {
        '@type': 'ProfilePage',
        '@id': profilePageId,
        url: canonicalUrl,
        mainEntity: { '@id': personId },
        isPartOf: { '@id': websiteId },
      },
    ],
  };

  useMeta(() => ({
    title: siteConfig.defaultTitle,
    meta: {
      description: { name: 'description', content: siteConfig.defaultDescription },
      robots: { name: 'robots', content: 'index, follow' },

      ogType: { property: 'og:type', content: 'website' },
      ogTitle: { property: 'og:title', content: siteConfig.defaultTitle },
      ogDescription: { property: 'og:description', content: siteConfig.defaultDescription },
      ogUrl: { property: 'og:url', content: canonicalUrl },
      ogSiteName: { property: 'og:site_name', content: siteConfig.siteName },
      ...(shareImageUrl
        ? {
            ogImage: { property: 'og:image', content: shareImageUrl },
            ogImageSecureUrl: { property: 'og:image:secure_url', content: shareImageUrl },
            ogImageType: { property: 'og:image:type', content: siteConfig.ogImageType },
            ogImageWidth: {
              property: 'og:image:width',
              content: String(siteConfig.ogImageWidth),
            },
            ogImageHeight: {
              property: 'og:image:height',
              content: String(siteConfig.ogImageHeight),
            },
            ogImageAlt: { property: 'og:image:alt', content: siteConfig.ogImageAlt },
          }
        : {}),

      // No known @handle to attribute (twitter:site/twitter:creator), so
      // those are intentionally omitted rather than invented.
      // 'summary_large_image' matches the dedicated 1200x630-ish landscape
      // share asset at siteConfig.ogImagePath.
      twitterCard: { name: 'twitter:card', content: 'summary_large_image' },
      twitterTitle: { name: 'twitter:title', content: siteConfig.defaultTitle },
      twitterDescription: { name: 'twitter:description', content: siteConfig.defaultDescription },
      ...(shareImageUrl
        ? {
            twitterImage: { name: 'twitter:image', content: shareImageUrl },
            twitterImageAlt: { name: 'twitter:image:alt', content: siteConfig.ogImageAlt },
          }
        : {}),
    },
    link: {
      canonical: { rel: 'canonical', href: canonicalUrl },
    },
    script: {
      ldJson: { type: 'application/ld+json', innerHTML: JSON.stringify(jsonLd) },
    },
  }));
}
