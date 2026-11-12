import { Helmet } from "react-helmet-async";
import { social } from "@/content/media";
import { shareImage, siteUrl } from "@/content/seo";

type SeoProps = {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
  structuredData?: object[];
};

export const homeStructuredData = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Elyxer",
    legalName: "ProApex Innovations Private Limited",
    url: siteUrl,
    logo: `${siteUrl}/icon-512.png`,
    sameAs: [social.instagram],
    email: "support@elyxer.co",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bengaluru",
      addressRegion: "Karnataka",
      addressCountry: "IN",
    },
  },
  { "@context": "https://schema.org", "@type": "WebSite", name: "Elyxer", url: siteUrl },
  {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Elyxer",
    applicationCategory: "LifestyleApplication",
    operatingSystem: "Android, iOS",
    offers: { "@type": "Offer", price: 0, priceCurrency: "INR" },
  },
];

export default function Seo({ title, description, path, noindex = false, structuredData = [] }: SeoProps) {
  const url = `${siteUrl}${path}`;
  const schemas = path === "/" ? [...homeStructuredData, ...structuredData] : structuredData;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex" />}
      <link rel="canonical" href={url} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={shareImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Elyxer gold wordmark with the tagline Chosen for who you are." />
      <meta property="og:site_name" content="Elyxer" />
      <meta property="og:locale" content="en_IN" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={shareImage} />
      {schemas.map((schema, index) => (
        <script key={index} type="application/ld+json">{JSON.stringify(schema).replace(/</g, "\\u003c")}</script>
      ))}
    </Helmet>
  );
}