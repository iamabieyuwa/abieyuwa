import "./globals.css";
import "@fontsource/sora/400.css";
import "@fontsource/sora/600.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/600.css";

import Navbar from "./components/Navbar";
import Head from "next/head";

// --- Enhanced Next.js Metadata for SEO ---
const seoTitle = "Abieyuwa Imina | Frontend Engineer, React & Next.js Portfolio";
const seoDescription =
  "Abieyuwa Imina: Frontend Engineer portfolio showcasing expertise in React, Next.js, and modern UI/UX design. View projects, skills, and connect for collaboration.";
const siteUrl = "https://abieyuwa.vercel.app";
const ogImageUrl = "/og-image.jpg"; // Relative path is fine here, full URL in <Head>

export const metadata = {
  title: seoTitle,
  description: seoDescription,
  metadataBase: new URL(siteUrl),

  // Standard Keywords for Crawlers
  keywords: [
    "Abieyuwa Imina",
    "Frontend Engineer",
    "React Developer",
    "Next.js Portfolio",
    "Web Developer",
    "UI/UX",
    "JavaScript",
    "Personal Website",
  ],

  // Open Graph (Facebook, LinkedIn, etc.)
  openGraph: {
    title: seoTitle,
    description: seoDescription,
    url: siteUrl,
    siteName: "Abieyuwa Imina | Frontend Portfolio",
    images: [
      {
        url: ogImageUrl,
        width: 1200,
        height: 630,
        alt: seoTitle,
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: seoTitle,
    description: seoDescription,
    site: "@iamabieyuwa",
    creator: "@iamabieyuwa",
    images: [ogImageUrl],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      {/* The <Head> component is often used in Next.js 13/14 Root Layouts 
        for things that the new `metadata` API doesn't fully cover or for 
        backwards compatibility (like the Schema script). 
      */}
      <Head>
        {/* Title is already in metadata, but adding it here for redundancy/older pages */}
        <title>{seoTitle}</title>

        {/* Canonical */}
        <link rel="canonical" href={siteUrl} />
        <link rel="icon" href="/favicon.ico" />

        {/* Description Meta Tag (Crucial for all browsers/crawlers) */}
        <meta name="description" content={seoDescription} />

        {/* Keywords Meta Tag (Less critical now, but good for older/niche crawlers) */}
        <meta
          name="keywords"
          content="Abieyuwa Imina, Frontend Engineer, React Developer, Next.js Portfolio, Web Developer, UI/UX, JavaScript, Personal Website"
        />

        {/* Open Graph Meta Tags (Full URL required for external services) */}
        <meta property="og:title" content={seoTitle} />
        <meta property="og:description" content={seoDescription} />
        <meta property="og:image" content={`${siteUrl}${ogImageUrl}`} />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoTitle} />
        <meta name="twitter:description" content={seoDescription} />
        <meta name="twitter:image" content={`${siteUrl}${ogImageUrl}`} />
        <meta name="twitter:site" content="@iamabieyuwa" />
        <meta name="twitter:creator" content="@iamabieyuwa" />

        {/* Schema.org Person - ADDED GITHUB TO SAMEAS ARRAY */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abieyuwa Imina",
              url: siteUrl,
              sameAs: [
                "https://www.linkedin.com/in/abieyuwa-imina",
                "https://twitter.com/iamabieyuwa",
                "https://github.com/iamabieyuwa", // <-- ADDED GITHUB HERE
              ],
              jobTitle: "Frontend Engineer & Student",
              worksFor: {
                "@type": "CollegeOrUniversity",
                name: "University of Benin",
              },
              image: `${siteUrl}${ogImageUrl}`,
              description:
                "Frontend engineer and student at University of Benin, passionate about React, Next.js, and modern UI/UX.", // Enhanced description
              email: "mailto:heisyuwa@gmail.com",
            }),
          }}
        />
      </Head>

      <body className="font-sora">
        <Navbar />
        {children}
      </body>
    </html>
  );
}