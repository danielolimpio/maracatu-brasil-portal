import { createFileRoute, notFound } from "@tanstack/react-router";
import { ArticlePage, articleSchema } from "@/components/ArticlePage";
import { getPostBySlug } from "@/data/posts";

const SITE = "https://maracatu-brasil-portal.lovable.app";
const SLUG = "minha-casa-minha-vida-2026-faixas-subsidio-financiamento";
const URL = `${SITE}/financas/${SLUG}`;

export const Route = createFileRoute("/financas/minha-casa-minha-vida-2026-faixas-subsidio-financiamento")({
  loader: () => {
    const post = getPostBySlug(SLUG);
    if (!post) throw notFound();
    return post;
  },
  head: ({ loaderData }) => {
    if (!loaderData) return { meta: [{ title: "Artigo não encontrado — Maracatu Brasil" }] };
    const p = loaderData;
    const image = `${SITE}${p.cover.src}`;
    return {
      meta: [
        { title: p.seoTitle },
        { name: "description", content: p.metaDescription },
        { name: "keywords", content: p.keywords.join(", ") },
        { name: "author", content: p.author.name },
        { property: "og:type", content: "article" },
        { property: "og:title", content: p.seoTitle },
        { property: "og:description", content: p.metaDescription },
        { property: "og:url", content: URL },
        { property: "og:image", content: image },
        { property: "og:locale", content: "pt_BR" },
        { property: "article:published_time", content: p.publishedAt },
        { property: "article:section", content: p.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: p.seoTitle },
        { name: "twitter:description", content: p.metaDescription },
        { name: "twitter:image", content: image },
      ],
      links: [{ rel: "canonical", href: URL }],
      scripts: articleSchema(p, URL).map((s) => ({
        type: "application/ld+json",
        children: JSON.stringify(s),
      })),
    };
  },
  component: () => <ArticlePage post={Route.useLoaderData()} />,
});
