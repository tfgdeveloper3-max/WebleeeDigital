import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import path from "path";

const routes = [
    "/",
    "/about",
    "/services",
    "/portfolio",
    "/pricing",
    "/contact",
    "/services/web-development",
    "/services/ecommerce-solution",
    "/services/web-app-solution",
    "/services/mobile-apps",
    "/services/video-animation",
    "/services/branding-and-design",
    "/services/logo-design",
    "/services/seo",
    "/services/content-writing",
    "/services/social-media-management",
    "/services/digital-marketing",
];

async function generateSitemap() {
    const sitemapPath = path.resolve("./public/sitemap.xml");
    const writeStream = createWriteStream(sitemapPath);

    const sitemapStream = new SitemapStream({ hostname: "https://webleedigital.com/" });

    // Pipe sitemap stream to file write stream
    sitemapStream.pipe(writeStream);

    // Write URLs to sitemap stream
    routes.forEach((url) => {
        sitemapStream.write({ url, changefreq: "monthly", priority: 0.8 });
    });

    // Signal that no more URLs will be written
    sitemapStream.end();

    // Await the sitemap stream to finish and get XML buffer (optional)
    await streamToPromise(sitemapStream);

    console.log("Sitemap generated successfully at:", sitemapPath);
}

generateSitemap().catch(console.error);