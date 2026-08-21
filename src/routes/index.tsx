import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ArticleCard } from "@/components/ArticleCard";
import { HeroCarousel } from "@/components/HeroCarousel";
import { ChevronRight, TrendingUp, Play, ArrowUp, Mail } from "lucide-react";
import {
  articles,
  featuredNews,
  heroMain,
  heroSecondary,
  heroList,
  featuredStories,
  whatsNew,
  popularPosts,
  latestUpdates,
  latestVideos,
  categories,
} from "@/data/articles";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Maracatu Brasil — Benefícios, Direitos, Economia e Serviços" },
      {
        name: "description",
        content:
          "Portal Maracatu Brasil: notícias e guias sobre Bolsa Família, INSS, FGTS, Imposto de Renda, Pix, concursos e direitos do brasileiro. Informação clara e confiável.",
      },
      { property: "og:title", content: "Maracatu Brasil — Benefícios, Direitos, Economia e Serviços" },
      {
        property: "og:description",
        content:
          "Portal Maracatu Brasil: notícias e guias sobre Bolsa Família, INSS, FGTS, Imposto de Renda, Pix, concursos e direitos do brasileiro. Informação clara e confiável.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: "Maracatu Brasil",
          url: "/",
          description:
            "Portal de notícias sobre benefícios, direitos, economia e serviços para o brasileiro.",
          inLanguage: "pt-BR",
          potentialAction: {
            "@type": "SearchAction",
            target: "/busca?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        }),
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        {/* Breaking / Featured News strip */}
        <section className="border-b border-border bg-card">
          <div className="container-mb flex flex-col md:flex-row items-stretch gap-4 py-4">
            <div className="flex items-center gap-2 rounded-md bg-[color:var(--color-brand-green)] px-4 py-2 text-white">
              <TrendingUp size={16} />
              <span className="text-xs font-black uppercase tracking-widest whitespace-nowrap">
                Em alta agora
              </span>
            </div>
            <div className="grid flex-1 gap-3 md:grid-cols-3">
              {featuredNews.map((a) => (
                <a
                  key={a.slug}
                  href={`/${a.categorySlug}/${a.slug}`}
                  className="flex items-center gap-3 group"
                >
                  <img
                    src={a.image}
                    alt={a.title}
                    loading="lazy"
                    className="h-12 w-16 flex-shrink-0 rounded object-cover"
                  />
                  <div className="text-sm font-semibold leading-snug line-clamp-2 group-hover:text-[color:var(--color-brand-blue)] transition-colors">
                    {a.title}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Hero grid */}
        <section className="container-mb py-8">
          <div className="mb-6">
            <h1 className="text-2xl md:text-3xl font-black leading-tight text-foreground">
              Maracatu Brasil — Notícias e Guias sobre Benefícios e Direitos
            </h1>
            <p className="mt-2 text-sm text-muted-foreground max-w-2xl">
              Portal de notícias e guias sobre benefícios, direitos, economia e serviços para o brasileiro.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-12">
            {/* Carrossel de destaque */}
            <div className="lg:col-span-9">
              <HeroCarousel articles={[heroMain, ...heroSecondary]} />
            </div>


            {/* Right list */}
            <div className="lg:col-span-3 space-y-4 rounded-lg border border-border bg-card p-4">
              <h3 className="text-sm font-black uppercase tracking-wider text-[color:var(--color-brand-green)] border-b border-border pb-2">
                Mais lidas
              </h3>
              {heroList.map((a, i) => (
                <div key={a.slug} className="flex gap-3 items-start pb-3 border-b border-border last:border-b-0 last:pb-0">
                  <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded bg-[color:var(--color-brand-green)] text-white text-xs font-black">
                    {i + 1}
                  </div>
                  <a href={`/${a.categorySlug}/${a.slug}`} className="group">
                    <h4 className="text-sm font-bold leading-snug line-clamp-2 group-hover:text-[color:var(--color-brand-blue)] transition-colors">
                      {a.title}
                    </h4>
                    <div className="mt-1 text-xs text-muted-foreground">{a.date}</div>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <div className="container-mb">
        </div>

        {/* Featured Stories categories */}
        <section className="container-mb py-8">
          <div className="section-title relative">
            Categorias em destaque
            <span className="section-title-accent" />
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <a
                key={c.slug}
                href={`/categoria/${c.slug}`}
                className={`rounded-full px-5 py-2 text-sm font-bold uppercase tracking-wide transition-colors border ${
                  c.color === "green"
                    ? "border-[color:var(--color-brand-green)] text-[color:var(--color-brand-green)] hover:bg-[color:var(--color-brand-green)] hover:text-white"
                    : "border-[color:var(--color-brand-blue)] text-[color:var(--color-brand-blue)] hover:bg-[color:var(--color-brand-blue)] hover:text-white"
                }`}
              >
                {c.name}
              </a>
            ))}
          </div>
        </section>

        {/* Explore all articles */}
        <section className="bg-muted/40 py-10">
          <div className="container-mb">
            <div className="section-title relative">
              Explore os artigos
              <span className="section-title-accent" />
            </div>
            <div className="grid gap-6 lg:grid-cols-12">
              <div className="lg:col-span-7">
                <ArticleCard article={featuredStories[0]} variant="large" />
              </div>
              <div className="lg:col-span-5 space-y-4">
                {featuredStories.slice(1, 5).map((a) => (
                  <ArticleCard key={a.slug} article={a} variant="horizontal" />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* What's New + Watch Now */}
        <section className="container-mb py-10">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <div className="section-title relative">
                Novidades
                <span className="section-title-accent" />
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                {whatsNew.map((a) => (
                  <ArticleCard key={a.slug} article={a} variant="compact" />
                ))}
              </div>
            </div>
            <aside className="lg:col-span-4">
              <div className="section-title relative">
                Em destaque
                <span className="section-title-accent" />
              </div>
              <div className="space-y-4">
                {latestVideos.map((a) => (
                  <a
                    key={a.slug}
                    href={`/${a.categorySlug}/${a.slug}`}
                    className="group flex gap-3 items-start"
                  >
                    <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-md">
                      <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--color-brand-blue)]">
                        {a.category}
                      </span>
                      <h4 className="mt-1 text-sm font-bold leading-snug line-clamp-2 group-hover:text-[color:var(--color-brand-green)] transition-colors">
                        {a.title}
                      </h4>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-lg bg-[color:var(--color-brand-blue)] p-5 text-white">
                <h4 className="text-lg font-black">Siga o Maracatu Brasil</h4>
                <p className="mt-1 text-sm text-white">
                  Acompanhe nas redes sociais para receber alertas dos benefícios.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-2 text-sm font-bold">
                  <a href="#" className="rounded bg-white/15 py-2 text-center hover:bg-white/25">Facebook</a>
                  <a href="#" className="rounded bg-white/15 py-2 text-center hover:bg-white/25">Instagram</a>
                  <a href="#" className="rounded bg-white/15 py-2 text-center hover:bg-white/25">YouTube</a>
                  <a href="#" className="rounded bg-white/15 py-2 text-center hover:bg-white/25">Twitter</a>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Popular Posts */}
        <section className="bg-muted/40 py-10">
          <div className="container-mb">
            <div className="section-title relative">
              Posts populares
              <span className="section-title-accent" />
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {popularPosts.slice(0, 2).map((a) => (
                <ArticleCard key={a.slug} article={a} variant="large" />
              ))}
            </div>
            <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {popularPosts.slice(2, 6).map((a) => (
                <ArticleCard key={a.slug} article={a} variant="compact" />
              ))}
            </div>
          </div>
        </section>

        <div className="container-mb">
        </div>

        {/* Latest Updates numbered */}
        <section className="container-mb py-10">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <div className="section-title relative">
                Últimas atualizações
                <span className="section-title-accent" />
              </div>
              <ol className="space-y-4">
                {latestUpdates.map((a, i) => (
                  <li key={a.slug} className="flex gap-4 rounded-lg border border-border bg-card p-4 card-hover hover:shadow-md">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand-green)] text-white text-lg font-black">
                      {i + 1}
                    </div>
                    <a href={`/${a.categorySlug}/${a.slug}`} className="group flex flex-1 gap-4">
                      <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-md">
                        <img
                          src={a.image}
                          alt={a.title}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--color-brand-blue)]">
                          {a.category}
                        </span>
                        <h4 className="mt-1 text-base font-bold leading-snug group-hover:text-[color:var(--color-brand-green)] transition-colors">
                          {a.title}
                        </h4>
                        <div className="mt-1 text-xs text-muted-foreground">
                          {a.author} · {a.date} · {a.readTime}
                        </div>
                      </div>
                    </a>
                  </li>
                ))}
              </ol>
            </div>
            <aside className="lg:col-span-5 space-y-4">
              <div className="section-title relative">
                Recentes
                <span className="section-title-accent" />
              </div>
              {articles.slice(0, 5).map((a) => (
                <ArticleCard key={a.slug} article={a} variant="horizontal" />
              ))}
            </aside>
          </div>
        </section>

        {/* Novidades strip */}
        <section className="bg-[color:var(--color-brand-blue)] py-10">
          <div className="container-mb">
            <div className="flex items-center justify-between mb-6 border-b border-white/20 pb-3">
              <h2 className="text-xl font-black uppercase tracking-wider text-white">
                Novidades
              </h2>
              <a href="/artigos" className="text-xs font-bold uppercase text-white hover:text-white/90">
                Ver todos <ChevronRight size={14} className="inline" />
              </a>
            </div>
            <div className="grid gap-5 md:grid-cols-3">
              {latestVideos.map((a) => (
                <a key={a.slug} href={`/${a.categorySlug}/${a.slug}`} className="group block overflow-hidden rounded-lg bg-white/10 card-hover">
                  <div className="relative aspect-[3/2] overflow-hidden">
                    <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4 text-white">
                    <h4 className="text-base font-bold leading-snug line-clamp-2">{a.title}</h4>
                    <div className="mt-2 text-xs text-white">{a.author} · {a.date}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Explore all + sidebar */}
        <section className="container-mb py-10">
          <div className="section-title relative">
            Explore todos os artigos
            <span className="section-title-accent" />
          </div>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8 space-y-5">
              {articles.slice(0, 6).map((a) => (
                <a key={a.slug} href={`/${a.categorySlug}/${a.slug}`} className="group flex gap-4 rounded-lg border border-border bg-card p-3 card-hover hover:shadow-md">
                  <div className="relative h-32 w-48 flex-shrink-0 overflow-hidden rounded-md">
                    <img src={a.image} alt={a.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="inline-block rounded-sm bg-[color:var(--color-brand-green)] px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
                      {a.category}
                    </span>
                    <h3 className="mt-2 text-lg md:text-xl font-black leading-tight group-hover:text-[color:var(--color-brand-blue)] transition-colors">
                      {a.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2">{a.excerpt}</p>
                    <div className="mt-2 text-xs text-muted-foreground">
                      {a.author} · {a.date} · {a.readTime}
                    </div>
                  </div>
                </a>
              ))}
              <div className="text-center pt-4">
                <a
                  href="/artigos"
                  className="inline-block rounded-full bg-[color:var(--color-brand-green)] px-8 py-3 text-sm font-black uppercase tracking-wider text-white hover:bg-[color:var(--color-brand-green-dark)] transition-colors"
                >
                  Ver mais artigos
                </a>
              </div>
            </div>
            <aside className="lg:col-span-4 space-y-6">
              <div className="rounded-lg border border-border bg-card p-5">
                <h4 className="text-sm font-black uppercase tracking-wider text-[color:var(--color-brand-green)] border-b border-border pb-2 mb-4">
                  Mais populares
                </h4>
                <div className="space-y-4">
                  {popularPosts.slice(0, 5).map((a) => (
                    <ArticleCard key={a.slug} article={a} variant="horizontal" />
                  ))}
                </div>
              </div>
              <div className="rounded-lg border border-border bg-card p-5">
                <h4 className="text-sm font-black uppercase tracking-wider text-[color:var(--color-brand-blue)] border-b border-border pb-2 mb-4">
                  Categorias
                </h4>
                <ul className="space-y-2">
                  {categories.map((c) => (
                    <li key={c.slug}>
                      <a href={`/categoria/${c.slug}`} className="flex justify-between text-sm py-1 hover:text-[color:var(--color-brand-green)] transition-colors">
                        <span className="font-semibold">{c.name}</span>
                        <span className="text-muted-foreground text-xs">
                          {articles.filter((a) => a.categorySlug === c.slug).length}
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="bg-[color:var(--color-brand-green)] py-14">
          <div className="container-mb text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-white/15 mb-4">
              <Mail size={26} className="text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black text-white">
              Inscreva-se na nossa newsletter
            </h2>
            <p className="mt-2 text-white max-w-xl mx-auto">
              Receba semanalmente as principais notícias sobre benefícios, direitos e economia
              direto no seu e-mail. Grátis, sem spam.
            </p>
            <form className="mt-6 mx-auto flex max-w-md flex-col sm:flex-row gap-2">
              <input
                type="email"
                required
                placeholder="Digite seu melhor e-mail"
                className="flex-1 rounded-md bg-white px-4 py-3 text-sm text-foreground outline-none"
              />
              <button
                type="submit"
                className="rounded-md bg-[color:var(--color-brand-ink)] px-6 py-3 text-sm font-black uppercase tracking-wider text-white hover:bg-black transition-colors"
              >
                Inscrever
              </button>
            </form>
          </div>
        </section>
      </main>
      <SiteFooter />

      {/* Back to top */}
      <a
        href="#top"
        aria-label="Voltar ao topo"
        className="fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full bg-[color:var(--color-brand-green)] text-white shadow-lg hover:bg-[color:var(--color-brand-green-dark)] transition-colors"
      >
        <ArrowUp size={18} />
      </a>
    </>
  );
}
