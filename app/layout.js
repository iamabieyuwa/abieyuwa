import Navbar from "./components/Navbar";
import "./globals.css";

export const metadata = {
  title: "Abieyuwa | Portfolio",
  description: "Abieyuwa's portfolio - Explore projects, skills, and connect with me for collaborations and opportunities.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="canonical" href="https://abieyuwa.vercel.app/" />
        {/* Open Graph */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abieyuwa.vercel.app" />
        <meta property="og:image" content="https://abieyuwa.vercel.app/og-image.jpg" />
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="https://abieyuwa.vercel.app/og-image.jpg" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}