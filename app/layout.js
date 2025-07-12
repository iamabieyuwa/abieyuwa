import "./globals.css";
import "@fontsource/sora/400.css";
import "@fontsource/sora/600.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/600.css";
import "@fontsource/outfit/400.css";
import "@fontsource/outfit/600.css";
// Optional: Add other fonts here as needed

import Navbar from "./components/Navbar";

// Remove Head from here – Next.js handles it via metadata
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
      <body className="font-sora">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
