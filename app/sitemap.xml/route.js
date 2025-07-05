export async function GET() {
  const baseUrl = "https://abieyuwa.vercel.app";
  // Add any additional slugs for your site here
  const pages = [
    "",           // Home
    "/about",     // About page
    "/projects",  // Projects page
    "/contact"    // Contact page
    // Add more like "/blog/my-post", etc.
  ];
  const urls = pages.map(
    (page) => `<url><loc>${baseUrl}${page}</loc></url>`
  );
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}