import "./globals.css";
import "@fontsource/sora/400.css";
import "@fontsource/sora/600.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/600.css";

import Navbar from "./components/Navbar";
import Head from "next/head";

export const metadata = {
  title: "Abieyuwa Imina | Portfolio",
  description:
    "Abieyuwa Imina's portfolio – Explore projects, skills, and connect with me for collaborations and opportunities.",
  metadataBase: new URL("https://abieyuwa.vercel.app"),
  openGraph: {
    title: "Abieyuwa Imina | Portfolio",
    description:
      "Abieyuwa Imina's portfolio – Explore projects, skills, and connect with me.",
    url: "https://abieyuwa.vercel.app",
    siteName: "Abieyuwa Imina Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Abieyuwa Imina Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abieyuwa Imina | Portfolio",
    description:
      "Abieyuwa Imina's portfolio – Explore projects, skills, and connect with me.",
    site: "@iamabieyuwa",
    creator: "@iamabieyuwa",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <Head>
        {/* Canonical */}
        <link rel="canonical" href="https://abieyuwa.vercel.app" />
        <link rel="icon" href="/favicon.ico" />

        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Abieyuwa Imina | Portfolio" />
        <meta property="og:description" content="Explore Abieyuwa's work, projects, and skills." />
        <meta property="og:image" content="https://abieyuwa.vercel.app/og-image.jpg" />
        <meta property="og:url" content="https://abieyuwa.vercel.app" />
        <meta property="og:type" content="website" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Abieyuwa Imina | Portfolio" />
        <meta name="twitter:description" content="Frontend engineer – Projects, skills, and more." />
        <meta name="twitter:image" content="https://abieyuwa.vercel.app/og-image.jpg" />
        <meta name="twitter:site" content="@iamabieyuwa" />
        <meta name="twitter:creator" content="@iamabieyuwa" />

        {/* Schema.org Person (Optional) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Abieyuwa Imina",
              url: "https://abieyuwa.vercel.app",
              sameAs: [
                "https://www.linkedin.com/in/abieyuwa-imina",
                "https://twitter.com/iamabieyuwa"
              ],
              jobTitle: "Frontend Engineer & Student",
              worksFor: {
                "@type": "CollegeOrUniversity",
                name: "University of Benin"
              },
              image: "https://abieyuwa.vercel.app/og-image.jpg",
              description: "Frontend engineer and student at University of Benin, passionate about React and modern UI/UX.",
              email: "mailto:heisyuwa@gmail.com"
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
