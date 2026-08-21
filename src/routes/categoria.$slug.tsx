import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleCard } from "@/components/ArticleCard";
import { Home, ChevronRight } from "lucide-react";
import { articlesByCategory, categories, getCategory } from "@/data/articles";

const SITE = "https://maracatu-brasil-portal.lovable.app";

export const Route = createFileRoute("/categoria/$slug")({
  loader: ({ params }) => {
    const category = getCategory(params.slug);
    if (!category) throw notFound();
    return { category, list: articlesByCategory(params.slug) };
  },
  head: ({ loaderData }) => {
    if (!loaderData)
      return {
        meta: [
          { title: "Categoria não encontrada — Maracatu Brasil" },
          { name: "robots", content: "noindex" },
        ],
      };
    const { category } = loaderData;
    const title = `${category.name} — Notícias e Guias | Maracatu Brasil`;
    const url = `${SITE}/categoria/${category.slug}`;
    return {
      meta: [
        { title },
        { name: "description", content: category.description.slice(0, 158) },
        { property: "og:type", content: "website" },
        { property: "og:title", content: title },
        { property: "og:description", content: category.description.slice(0, 158) },
        { property: "og:url", content: url },
        { property: "og:locale", content: "pt_BR" },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: category.description.slice(0, 158) },
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: CategoryPage,
});

function CategoryPage() {
  const { category, list } = Route.useLoaderData();
  const [first, ...rest] = list;

  return (
    <>
      <SiteHeader />
      <main>
        <nav aria-label="Trilha de navegação" className="border-b border-border bg-muted">
          <div className="container-mb flex items-center gap-2 py-3 text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground">
              <Home size={13} /> Início
            </Link>
            <ChevronRight size={13} />
            <span className="font-semibold text-foreground">{category.name}</span>
          </div>
        </nav>

        <section className="container-mb py-8">
          <span
            className={`inline-block rounded-sm px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white ${
              category.color === "green"
                ? "bg-[color:var(--color-brand-green)]"
                : "bg-[color:var(--color-brand-blue)]"
            }`}
          >
            Categoria
          </span>
          <h1 className="mt-3 text-3xl md:text-4xl font-black leading-tight text-foreground">
            {category.name}
          </h1>
          <p className="mt-3 max-w-3xl text-sm md:text-base text-muted-foreground">
            {category.description}
          </p>
          <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
            {list.length} {list.length === 1 ? "artigo publicado" : "artigos publicados"}
          </p>
        </section>

        <div className="container-mb">
        </div>

        <section className="container-mb py-8">
          {list.length === 0 ? (
            <p className="rounded-lg border border-border bg-card p-6 text-sm text-muted-foreground">
              Ainda não publicamos artigos nesta categoria. Confira as demais seções do portal
              enquanto preparamos novos conteúdos.
            </p>
          ) : (
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <ArticleCard article={first} variant="large" />
              </div>
              <div className="lg:col-span-5 space-y-4">
                {rest.slice(0, 4).map((a) => (
                  <ArticleCard key={a.slug} article={a} variant="horizontal" />
                ))}
              </div>
              {rest.length > 4 && (
                <div className="lg:col-span-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
                  {rest.slice(4).map((a) => (
                    <ArticleCard key={a.slug} article={a} variant="compact" />
                  ))}
                </div>
              )}
            </div>
          )}
        </section>

        <section className="bg-muted py-10">
          <div className="container-mb">
            <div className="section-title relative">
              Outras categorias
              <span className="section-title-accent" />
            </div>
            <div className="flex flex-wrap gap-2">
              {categories
                .filter((c) => c.slug !== category.slug)
                .map((c) => (
                  <Link
                    key={c.slug}
                    to="/categoria/$slug"
                    params={{ slug: c.slug }}
                    className={`rounded-full border px-5 py-2 text-sm font-bold uppercase tracking-wide transition-colors ${
                      c.color === "green"
                        ? "border-[color:var(--color-brand-green)] text-[color:var(--color-brand-green)] hover:bg-[color:var(--color-brand-green)] hover:text-white"
                        : "border-[color:var(--color-brand-blue)] text-[color:var(--color-brand-blue)] hover:bg-[color:var(--color-brand-blue)] hover:text-white"
                    }`}
                  >
                    {c.name}
                  </Link>
                ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
