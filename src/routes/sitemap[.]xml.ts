import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { articles, categories } from "@/data/articles";

// TODO: replace with your project URL once a project name or custom domain is set.
const BASE_URL = "";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          { path: "/", changefreq: "daily", priority: "1.0" },
          { path: "/sobre", changefreq: "monthly", priority: "0.5" },
          { path: "/contato", changefreq: "monthly", priority: "0.5" },
          { path: "/politica-de-privacidade", changefreq: "yearly", priority: "0.3" },
          { path: "/termos-de-uso", changefreq: "yearly", priority: "0.3" },
        ];
        const catPaths = categories.map((c) => ({
          path: `/categoria/${c.slug}`,
          changefreq: "daily" as const,
          priority: "0.8",
        }));
        const articlePaths = articles.map((a) => ({
          path: `/${a.categorySlug}/${a.slug}`,
          changefreq: "weekly" as const,
          priority: "0.7",
        }));

        const entries = [...staticPaths, ...catPaths, ...articlePaths];

        const urls = entries.map(
          (e) =>
            `  <url>\n    <loc>${BASE_URL}${e.path}</loc>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
        );

        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...urls,
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
