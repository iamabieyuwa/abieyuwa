import Head from "next/head";
import Navbar from "./components/Navbar";
import "./globals.css";

// Advanced metadata for SEO and social
export const metadata = {
  title: "Abieyuwa Imina | Portfolio",
  description:
    "Abieyuwa Imina's portfolio – Explore projects, skills, and connect with me for collaborations and opportunities.",
  metadataBase: new URL("https://abieyuwa.vercel.app"),
  alternates: {
    canonical: "https://abieyuwa.vercel.app",
  },
  openGraph: {
    title: "Abieyuwa Imina | Portfolio",
    description:
      "Abieyuwa Imina's portfolio – Explore projects, skills, and connect with me.",
    url: "https://abieyuwa.vercel.app",
    siteName: "Abieyuwa Imina Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Ensure this image exists in /public
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
    <html lang="en" >
      <Head className='scroll-smooth'>
        {/* Canonical */}
        <link href="https://api.fontshare.com/v2/css?f[]=satoshi@400,500,700&display=swap" rel="stylesheet" />
        <link rel="canonical" href="https://abieyuwa.vercel.app/" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        {/* Schema.org Person Structured Data */}
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
              description: "Frontend engineer and student at University of Benin, passionate about crafting delightful web experiences using React, Next.js, and modern web technologies.",
              email: "mailto:heisyuwa@gmail.com"
            }),
          }}
        />
      </Head>
      <body className="font-poppins">
        <Navbar />
        {children}
      </body>
    </html>
  );
}