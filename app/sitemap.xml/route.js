export async function GET() {
  const baseUrl = "https://abieyuwa.vercel.app";
  // Get the current date in YYYY-MM-DD format for lastmod
  const today = new Date().toISOString().split("T")[0];

  // Define the pages, along with their suggested change frequency and priority
  const pageData = [
    // Home page is the most important and changes somewhat frequently (when you update it)
    { slug: "", changefreq: "weekly", priority: "1.0" },
    
    // About, Projects, and Contact pages are also high priority but change less often
    { slug: "/about", changefreq: "monthly", priority: "0.8" },
    { slug: "/projects", changefreq: "weekly", priority: "0.9" }, // Projects might change more often than about/contact
    { slug: "/contact", changefreq: "monthly", priority: "0.7" },
    // Add more like { slug: "/blog/my-post", changefreq: "yearly", priority: "0.5" }
  ];

  // Map the page data to the full XML <url> structure
  const urls = pageData.map(
    (page) =>
      `<url>
<loc>${baseUrl}${page.slug}</loc>
<lastmod>${today}</lastmod>
<changefreq>${page.changefreq}</changefreq>
<priority>${page.priority}</priority>
</url>`
  );

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join("\n")}
</urlset>`;

  return new Response(body, {
    headers: { "Content-Type": "application/xml" },
  });
}