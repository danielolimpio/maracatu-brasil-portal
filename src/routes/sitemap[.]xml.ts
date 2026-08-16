import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { categories } from "@/data/articles";
import { glossaryTerms, glossaryUrl } from "@/data/glossary";
import { posts } from "@/data/posts";

const BASE_URL = "https://maracatu-brasil-portal.lovable.app";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const staticPaths = [
          { path: "/", changefreq: "daily", priority: "1.0" },
          { path: "/glossario", changefreq: "daily", priority: "0.9" },
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
        const postPaths = posts.map((p) => ({
          path: `/${p.categorySlug}/${p.slug}`,
          changefreq: "weekly" as const,
          priority: "0.9",
        }));
        const glossaryPaths = glossaryTerms.map((g) => ({
          path: glossaryUrl(g.slug),
          changefreq: "monthly" as const,
          priority: "0.75",
        }));

        const entries = [...staticPaths, ...catPaths, ...postPaths, ...glossaryPaths];

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
