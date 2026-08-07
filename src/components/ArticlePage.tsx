import { useMemo } from "react";
import { Clock, User, Calendar, Info, Lightbulb, AlertTriangle, ExternalLink, ChevronRight, Home, Tag } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { AdSlot } from "@/components/AdSlot";
import { ArticleCard } from "@/components/ArticleCard";
import type { Block, Post } from "@/data/posts";
import { slugify } from "@/data/posts";
import { articles } from "@/data/articles";
import { glossaryTerms, glossaryUrl } from "@/data/glossary";

const toneMap = {
  info: { Icon: Info, cls: "border-[color:var(--color-brand-blue)] bg-card" },
  tip: { Icon: Lightbulb, cls: "border-[color:var(--color-brand-green)] bg-card" },
  warn: { Icon: AlertTriangle, cls: "border-amber-600 bg-card" },
} as const;

function BlockView({ b }: { b: Block }) {
  if (b.t === "h2")
    return (
      <h2 id={slugify(b.text)} className="mt-10 scroll-mt-28 border-l-4 border-[color:var(--color-brand-green)] pl-3 text-2xl md:text-3xl font-black leading-tight text-foreground">
        {b.text}
      </h2>
    );
  if (b.t === "h3")
    return (
      <h3 id={slugify(b.text)} className="mt-8 scroll-mt-28 text-xl font-bold text-foreground">
        {b.text}
      </h3>
    );
  if (b.t === "h4") return <h4 className="mt-6 text-lg font-bold text-foreground">{b.text}</h4>;
  if (b.t === "p")
    return <p className="mt-4 text-[1.0625rem] leading-8 text-foreground/90 [&_a]:font-semibold [&_a]:text-[color:var(--color-brand-blue)] [&_a]:underline" dangerouslySetInnerHTML={{ __html: b.html }} />;
  if (b.t === "ul")
    return (
      <ul className="mt-4 space-y-2 pl-5">
        {b.items.map((i, k) => (
          <li key={k} className="list-disc text-[1.0625rem] leading-8 text-foreground/90 [&_a]:font-semibold [&_a]:text-[color:var(--color-brand-blue)] [&_a]:underline" dangerouslySetInnerHTML={{ __html: i }} />
        ))}
      </ul>
    );
  if (b.t === "ol")
    return (
      <ol className="mt-4 space-y-2 pl-5">
        {b.items.map((i, k) => (
          <li key={k} className="list-decimal text-[1.0625rem] leading-8 text-foreground/90 [&_a]:font-semibold [&_a]:text-[color:var(--color-brand-blue)] [&_a]:underline" dangerouslySetInnerHTML={{ __html: i }} />
        ))}
      </ol>
    );
  if (b.t === "table")
    return (
      <figure className="mt-6 overflow-hidden rounded-lg border border-border">
        <div className="overflow-x-auto">
          <table className="w-full border-collapse text-sm">
            <thead>
              <tr className="bg-[color:var(--color-brand-blue)] text-white">
                {b.head.map((h) => (
                  <th key={h} className="px-3 py-3 text-left font-bold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {b.rows.map((r, k) => (
                <tr key={k} className={k % 2 ? "bg-muted" : "bg-card"}>
                  {r.map((c, j) => (
                    <td key={j} className="border-t border-border px-3 py-3 text-foreground/90" dangerouslySetInnerHTML={{ __html: c }} />
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {b.caption && (
          <figcaption className="border-t border-border bg-card px-3 py-2 text-xs text-muted-foreground">{b.caption}</figcaption>
        )}
      </figure>
    );
  if (b.t === "callout") {
    const { Icon, cls } = toneMap[b.tone];
    return (
      <aside className={`mt-6 rounded-lg border-l-4 ${cls} p-4 shadow-sm`}>
        <div className="flex items-center gap-2 text-sm font-black uppercase tracking-wide text-foreground">
          <Icon size={16} /> {b.title}
        </div>
        <p className="mt-2 text-[1rem] leading-7 text-foreground/90 [&_a]:font-semibold [&_a]:text-[color:var(--color-brand-blue)] [&_a]:underline" dangerouslySetInnerHTML={{ __html: b.html }} />
      </aside>
    );
  }
  if (b.t === "quote")
    return (
      <blockquote className="mt-6 rounded-lg bg-muted p-5">
        <p className="text-lg font-semibold italic leading-8 text-foreground" dangerouslySetInnerHTML={{ __html: b.html }} />
        {b.cite && <cite className="mt-2 block text-sm not-italic text-muted-foreground">— {b.cite}</cite>}
      </blockquote>
    );
  if (b.t !== "image") return null;
  return (
    <figure className="mt-8">
      <img src={b.src} alt={b.alt} loading="lazy" width={1280} height={853} className="w-full rounded-lg" />
      <figcaption className="mt-2 text-xs text-muted-foreground">{b.caption}</figcaption>
    </figure>
  );
}

export function ArticlePage({ post }: { post: Post }) {
  const toc = useMemo(
    () =>
      post.blocks.flatMap((b) => (b.t === "h2" ? [b.text] : [])),
    [post],
  );
  const related = articles.filter((a) => post.relatedArticles.includes(a.slug)).slice(0, 4);
  const terms = glossaryTerms.filter((g) => post.relatedGlossary.includes(g.slug));

  return (
    <>
      <SiteHeader />
      <main>
        <nav aria-label="Você está aqui" className="border-b border-border bg-muted">
          <div className="container-mb flex flex-wrap items-center gap-1 py-3 text-xs text-foreground/80">
            <a href="/" className="flex items-center gap-1 hover:underline"><Home size={12} /> Início</a>
            <ChevronRight size={12} />
            <a href={`/${post.categorySlug}/${post.slug}`} className="font-bold hover:underline">{post.category}</a>
            <ChevronRight size={12} />
            <span className="truncate text-muted-foreground">{post.title}</span>
          </div>
        </nav>

        <div className="container-mb grid gap-8 py-8 lg:grid-cols-[minmax(0,1fr)_320px]">
          <article>
            <span className="inline-block rounded-sm bg-[color:var(--color-brand-green)] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
              {post.category}
            </span>
            <h1 className="mt-3 text-3xl md:text-[2.6rem] font-black leading-[1.15] text-foreground">{post.title}</h1>
            <p className="mt-4 text-lg leading-8 text-muted-foreground">{post.excerpt}</p>
            <div className="mt-4 flex flex-wrap items-center gap-3 border-y border-border py-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><User size={12} />{post.author.name}</span>
              <span className="flex items-center gap-1"><Calendar size={12} />{post.publishedLabel}</span>
              <span className="flex items-center gap-1"><Clock size={12} />{post.readTime} de leitura</span>
            </div>

            <figure className="mt-6">
              <img src={post.cover.src} alt={post.cover.alt} width={1280} height={853} className="w-full rounded-lg" />
              <figcaption className="mt-2 text-xs text-muted-foreground">{post.cover.caption}</figcaption>
            </figure>

            <nav aria-label="Índice do artigo" className="mt-8 rounded-lg border border-border bg-card p-5">
              <h2 className="text-sm font-black uppercase tracking-widest text-foreground">Índice do artigo</h2>
              <ol className="mt-3 space-y-2">
                {toc.map((h, i) => (
                  <li key={h} className="text-sm">
                    <a href={`#${slugify(h)}`} className="text-[color:var(--color-brand-blue)] hover:underline">
                      {i + 1}. {h}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>

            <div className="mt-6"><AdSlot label="Publicidade" height={120} /></div>

            {post.blocks.map((b, i) => (
              <BlockView key={i} b={b} />
            ))}

            <section className="mt-12">
              <h2 id="perguntas-frequentes" className="scroll-mt-28 border-l-4 border-[color:var(--color-brand-green)] pl-3 text-2xl md:text-3xl font-black text-foreground">
                Perguntas frequentes
              </h2>
              <div className="mt-4 divide-y divide-border rounded-lg border border-border bg-card">
                {post.faqs.map((f) => (
                  <details key={f.q} className="group p-4">
                    <summary className="cursor-pointer list-none text-base font-bold text-foreground">{f.q}</summary>
                    <p className="mt-2 text-[1rem] leading-7 text-foreground/90">{f.a}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-10">
              <h2 className="text-sm font-black uppercase tracking-widest text-foreground">Fontes oficiais</h2>
              <ul className="mt-3 space-y-2">
                {post.references.map((r) => (
                  <li key={r.href}>
                    <a href={r.href} target="_blank" rel="noopener nofollow" className="inline-flex items-center gap-1 text-sm font-semibold text-[color:var(--color-brand-blue)] hover:underline">
                      <ExternalLink size={13} /> {r.title}
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <section className="mt-10 flex flex-wrap gap-2">
              {post.tags.map((tg) => (
                <span key={tg} className="inline-flex items-center gap-1 rounded-full border border-border bg-card px-3 py-1 text-xs font-semibold text-foreground">
                  <Tag size={11} /> {tg}
                </span>
              ))}
            </section>

            <section className="mt-10 rounded-lg border border-border bg-muted p-5">
              <h2 className="text-sm font-black uppercase tracking-widest text-foreground">Sobre o autor</h2>
              <div className="mt-3">
                <p className="text-lg font-black text-foreground">{post.author.name}</p>
                <p className="text-sm font-semibold text-[color:var(--color-brand-green)]">{post.author.role}</p>
                <p className="mt-2 text-sm leading-7 text-foreground/90">{post.author.bio}</p>
              </div>
            </section>

            {terms.length > 0 && (
              <section className="mt-10">
                <h2 className="text-sm font-black uppercase tracking-widest text-foreground">Entenda os termos</h2>
                <div className="mt-3 grid gap-2 sm:grid-cols-2">
                  {terms.map((g) => (
                    <a key={g.slug} href={glossaryUrl(g.slug)} className="rounded-lg border border-border bg-card p-3 text-sm font-semibold text-foreground hover:border-[color:var(--color-brand-green)]">
                      O que é {g.term}?
                    </a>
                  ))}
                </div>
              </section>
            )}

            {related.length > 0 && (
              <section className="mt-12">
                <h2 className="border-l-4 border-[color:var(--color-brand-blue)] pl-3 text-2xl font-black text-foreground">Artigos relacionados</h2>
                <div className="mt-4 grid gap-4 sm:grid-cols-2">
                  {related.map((a) => (
                    <ArticleCard key={a.slug} article={a} variant="compact" />
                  ))}
                </div>
              </section>
            )}
          </article>

          <aside className="space-y-6">
            <AdSlot label="Publicidade" height={250} />
            <div className="rounded-lg border border-border bg-card p-5">
              <h2 className="text-sm font-black uppercase tracking-widest text-foreground">Mais lidas</h2>
              <div className="mt-4 space-y-4">
                {articles.slice(0, 5).map((a) => (
                  <ArticleCard key={a.slug} article={a} variant="horizontal" />
                ))}
              </div>
            </div>
            <AdSlot label="Publicidade" height={250} />
          </aside>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}

export function articleSchema(post: Post, url: string) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: post.title,
      description: post.metaDescription,
      image: [`${url.split("/").slice(0, 3).join("/")}${post.cover.src}`],
      inLanguage: "pt-BR",
      datePublished: post.publishedAt,
      dateModified: post.updatedAt,
      articleSection: post.category,
      keywords: post.keywords.join(", "),
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      author: { "@type": "Person", name: post.author.name, jobTitle: post.author.role, description: post.author.bio },
      publisher: { "@type": "Organization", name: "Maracatu Brasil" },
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      inLanguage: "pt-BR",
      mainEntity: post.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Início", item: url.split("/").slice(0, 3).join("/") },
        { "@type": "ListItem", position: 2, name: post.category },
        { "@type": "ListItem", position: 3, name: post.title, item: url },
      ],
    },
  ];
}
