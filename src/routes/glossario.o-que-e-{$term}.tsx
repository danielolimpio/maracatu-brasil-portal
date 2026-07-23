import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  Home,
  ChevronRight,
  Clock,
  Calendar,
  User,
  BookOpen,
  Lightbulb,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Sparkles,
  ArrowRight,
  ExternalLink,
  Plus,
  Minus,
} from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import type { GlossaryTerm } from "@/data/glossary";
import {
  getGlossaryTermBySlug,
  getRelatedTerms,
  glossaryUrl,
  glossaryTerms,
} from "@/data/glossary";
import { articles } from "@/data/articles";

const SITE = "https://maracatu-brasil-portal.lovable.app";

export const Route = createFileRoute("/glossario/o-que-e-{$term}")({
  loader: ({ params }) => {
    const term = getGlossaryTermBySlug(params.term);
    if (!term) throw notFound();
    return term;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData) {
      return {
        meta: [
          { title: "Termo não encontrado — Glossário Maracatu Brasil" },
          { name: "robots", content: "noindex" },
        ],
      };
    }
    const g = loaderData;
    const url = `${SITE}${glossaryUrl(params.term)}`;
    const title = `O que é ${g.term}? Definição, Exemplos e Como Funciona | Maracatu Brasil`;
    const desc = g.shortAnswer.slice(0, 158);
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { name: "keywords", content: [g.term, ...(g.synonyms ?? []), g.category, "Brasil", "o que é", "significado", "como funciona"].join(", ") },
        { name: "author", content: g.author },
        { property: "og:type", content: "article" },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        { property: "og:url", content: url },
        { property: "og:locale", content: "pt_BR" },
        { property: "article:author", content: g.author },
        { property: "article:modified_time", content: g.lastUpdated },
        { property: "article:section", content: g.category },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: title },
        { name: "twitter:description", content: desc },
      ],
      links: [{ rel: "canonical", href: url }],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "DefinedTerm",
                "@id": `${url}#definedterm`,
                name: g.term,
                alternateName: g.synonyms,
                description: g.shortAnswer,
                inDefinedTermSet: `${SITE}/glossario`,
                inLanguage: "pt-BR",
                url,
              },
              {
                "@type": "Article",
                headline: `O que é ${g.term}?`,
                description: desc,
                url,
                mainEntityOfPage: url,
                inLanguage: "pt-BR",
                dateModified: g.lastUpdated,
                author: { "@type": "Person", name: g.author },
                publisher: {
                  "@type": "Organization",
                  name: "Maracatu Brasil",
                  url: SITE,
                  logo: { "@type": "ImageObject", url: `${SITE}/favicon.ico` },
                },
                articleSection: g.category,
                speakable: { "@type": "SpeakableSpecification", cssSelector: [".direct-answer"] },
              },
              {
                "@type": "FAQPage",
                inLanguage: "pt-BR",
                mainEntity: g.faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  { "@type": "ListItem", position: 1, name: "Início", item: SITE },
                  { "@type": "ListItem", position: 2, name: "Glossário", item: `${SITE}/glossario` },
                  { "@type": "ListItem", position: 3, name: g.term, item: url },
                ],
              },
            ],
          }),
        },
      ],
    };
  },
  component: TermPage,
  errorComponent: ({ error }) => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-3xl font-black">Ocorreu um erro</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <Link to="/glossario" className="mt-4 inline-block text-[color:var(--color-brand-green)] font-bold">← Voltar ao glossário</Link>
      </div>
    </div>
  ),
  notFoundComponent: () => (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center px-4">
        <h1 className="text-3xl font-black">Termo não encontrado</h1>
        <p className="mt-2 text-muted-foreground">Este verbete do glossário não existe.</p>
        <Link to="/glossario" className="mt-4 inline-block text-[color:var(--color-brand-green)] font-bold">← Voltar ao glossário</Link>
      </div>
    </div>
  ),
});

function TermPage() {
  const g = Route.useLoaderData() as GlossaryTerm;
  const related = getRelatedTerms(g, 6);
  const relatedArticles = (g.relatedArticleSlugs ?? [])
    .map((s) => articles.find((a) => a.slug === s))
    .filter((a): a is (typeof articles)[number] => Boolean(a));

  const toc = [
    { id: "definition", label: "Definição" },
    { id: "key-facts", label: "Principais fatos" },
    { id: "quick-summary", label: "Resumo rápido" },
    { id: "example", label: "Exemplo prático" },
    { id: "why", label: "Por que importa" },
    { id: "how", label: "Como funciona" },
    { id: "advantages", label: "Vantagens" },
    ...(g.disadvantages ? [{ id: "disadvantages", label: "Desvantagens" }] : []),
    { id: "mistakes", label: "Erros comuns" },
    { id: "faq", label: "Perguntas frequentes" },
    { id: "related", label: "Termos relacionados" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Breadcrumb */}
      <nav aria-label="Trilha de navegação" className="border-b border-border bg-muted/30">
        <div className="container-mb py-3 text-xs">
          <ol className="flex items-center gap-1.5 text-muted-foreground flex-wrap">
            <li><Link to="/" className="inline-flex items-center gap-1 hover:text-foreground"><Home size={12} /> Início</Link></li>
            <li aria-hidden><ChevronRight size={12} /></li>
            <li><Link to="/glossario" className="hover:text-foreground">Glossário</Link></li>
            <li aria-hidden><ChevronRight size={12} /></li>
            <li aria-current="page" className="text-foreground font-semibold">{g.term}</li>
          </ol>
        </div>
      </nav>

      <div className="container-mb py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-10">
          <article>
            <header className="mb-8">
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider">
                <span className="rounded-full bg-[color:var(--color-brand-green)] text-white px-3 py-1">
                  {g.category}
                </span>
                {g.trending && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--color-brand-blue)]/10 text-[color:var(--color-brand-blue)] px-3 py-1">
                    <Sparkles size={12} /> Em alta
                  </span>
                )}
                <span className="text-muted-foreground">Verbete do glossário</span>
              </div>
              <h1 className="mt-4 text-4xl md:text-6xl font-black leading-[1.05] tracking-tight">
                {g.term}
              </h1>
              {g.synonyms && g.synonyms.length > 0 && (
                <p className="mt-3 text-sm text-muted-foreground">
                  Também conhecido como: <span className="font-medium text-foreground">{g.synonyms.join(", ")}</span>
                </p>
              )}
              <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
                <span className="inline-flex items-center gap-1.5"><User size={14} /> Por <strong className="text-foreground">{g.author}</strong></span>
                <span className="inline-flex items-center gap-1.5"><Calendar size={14} /> Atualizado em {g.lastUpdated}</span>
                <span className="inline-flex items-center gap-1.5"><Clock size={14} /> Leitura de {g.readingTime}</span>
              </div>
            </header>

            {/* Direct answer */}
            <section aria-labelledby="q-title" className="mb-10">
              <h2 id="q-title" className="text-2xl md:text-3xl font-black">O que é {g.term}?</h2>
              <p className="direct-answer mt-4 text-lg leading-relaxed rounded-2xl border-l-4 border-[color:var(--color-brand-green)] bg-[color:var(--color-brand-green)]/5 p-6 text-foreground">
                {g.shortAnswer}
              </p>
            </section>

            {/* Definition */}
            <section id="definition" className="mb-10 scroll-mt-24">
              <h2 className="text-2xl font-black flex items-center gap-2">
                <BookOpen size={22} className="text-[color:var(--color-brand-green)]" /> Definição
              </h2>
              <p className="mt-3 text-base leading-relaxed text-foreground/90">{g.definition}</p>
            </section>

            {/* Key Facts */}
            <section id="key-facts" className="mb-10 scroll-mt-24">
              <h2 className="text-2xl font-black">Principais fatos</h2>
              <ul className="mt-4 grid sm:grid-cols-2 gap-3">
                {g.keyFacts.map((f, i) => (
                  <li key={i} className="flex gap-3 rounded-xl border border-border bg-card p-4">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[color:var(--color-brand-green)]/10 text-[color:var(--color-brand-green)] text-xs font-black">
                      {i + 1}
                    </div>
                    <p className="text-sm leading-relaxed">{f}</p>
                  </li>
                ))}
              </ul>
            </section>

            {/* Quick Summary */}
            <section id="quick-summary" className="mb-10 scroll-mt-24">
              <div className="rounded-2xl bg-gradient-to-br from-[color:var(--color-brand-blue)] to-[color:var(--color-brand-blue-dark)] p-6 text-white">
                <div className="flex items-center gap-2 text-xs font-black uppercase tracking-wider text-white/80">
                  <Lightbulb size={14} /> Resumo rápido
                </div>
                <p className="mt-2 text-lg leading-relaxed">
                  {g.term} — {g.shortAnswer.split(". ")[0]}.
                </p>
              </div>
            </section>

            {/* Practical Example */}
            <section id="example" className="mb-10 scroll-mt-24">
              <h2 className="text-2xl font-black">Exemplo prático</h2>
              <blockquote className="mt-3 rounded-xl border border-border bg-muted/40 p-6 text-base italic leading-relaxed">
                “{g.practicalExample}”
              </blockquote>
            </section>

            {/* Why It Matters */}
            <section id="why" className="mb-10 scroll-mt-24">
              <h2 className="text-2xl font-black">Por que importa</h2>
              <p className="mt-3 text-base leading-relaxed">{g.whyItMatters}</p>
            </section>

            {/* How It Works */}
            <section id="how" className="mb-10 scroll-mt-24">
              <h2 className="text-2xl font-black">Como funciona</h2>
              <ol className="mt-4 space-y-3">
                {g.howItWorks.map((s, i) => (
                  <li key={i} className="flex gap-4">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[color:var(--color-brand-green)] text-white font-black">
                      {i + 1}
                    </div>
                    <p className="pt-1.5 text-base leading-relaxed">{s}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Advantages / Disadvantages */}
            <section id="advantages" className="mb-10 scroll-mt-24">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="rounded-xl border border-[color:var(--color-brand-green)]/30 bg-[color:var(--color-brand-green)]/5 p-5">
                  <h2 className="flex items-center gap-2 text-lg font-black text-[color:var(--color-brand-green-dark)]">
                    <CheckCircle2 size={18} /> Vantagens
                  </h2>
                  <ul className="mt-3 space-y-2 text-sm">
                    {g.advantages.map((a, i) => (
                      <li key={i} className="flex gap-2"><CheckCircle2 size={14} className="mt-1 shrink-0 text-[color:var(--color-brand-green)]" /> {a}</li>
                    ))}
                  </ul>
                </div>
                {g.disadvantages && (
                  <div id="disadvantages" className="rounded-xl border border-destructive/30 bg-destructive/5 p-5">
                    <h2 className="flex items-center gap-2 text-lg font-black text-destructive">
                      <XCircle size={18} /> Desvantagens
                    </h2>
                    <ul className="mt-3 space-y-2 text-sm">
                      {g.disadvantages.map((a, i) => (
                        <li key={i} className="flex gap-2"><XCircle size={14} className="mt-1 shrink-0 text-destructive" /> {a}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </section>

            {/* Common Mistakes */}
            <section id="mistakes" className="mb-10 scroll-mt-24">
              <h2 className="text-2xl font-black flex items-center gap-2">
                <AlertTriangle size={22} className="text-amber-500" /> Erros comuns
              </h2>
              <ul className="mt-4 space-y-2">
                {g.commonMistakes.map((m, i) => (
                  <li key={i} className="rounded-lg border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-500/10 p-4 text-sm">
                    {m}
                  </li>
                ))}
              </ul>
            </section>

            {/* FAQ */}
            <section id="faq" className="mb-10 scroll-mt-24">
              <h2 className="text-2xl font-black">Perguntas frequentes</h2>
              <div className="mt-4 divide-y divide-border rounded-xl border border-border">
                {g.faqs.map((f, i) => (
                  <FaqItem key={i} q={f.q} a={f.a} defaultOpen={i === 0} />
                ))}
              </div>
            </section>

            {/* Related terms */}
            <section id="related" className="mb-10 scroll-mt-24">
              <h2 className="text-2xl font-black">Termos relacionados</h2>
              <div className="mt-4 grid sm:grid-cols-2 gap-3">
                {related.map((r) => (
                  <Link
                    key={r.slug}
                    to={glossaryUrl(r.slug) as any}
                    className="group flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-4 hover:border-[color:var(--color-brand-green)] hover:shadow-md transition-all"
                  >
                    <div>
                      <div className="font-black group-hover:text-[color:var(--color-brand-green)]">{r.term}</div>
                      <div className="text-xs text-muted-foreground">{r.category}</div>
                    </div>
                    <ArrowRight size={16} className="text-muted-foreground group-hover:text-[color:var(--color-brand-green)]" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Recommended articles */}
            {relatedArticles.length > 0 && (
              <section className="mb-10">
                <div className="rounded-2xl border border-border bg-gradient-to-br from-[color:var(--color-brand-blue)]/5 to-transparent p-6">
                  <div className="flex items-center gap-2 text-[color:var(--color-brand-blue)] font-black uppercase text-xs tracking-wider">
                    <BookOpen size={14} /> Aprofunde-se · Matérias recomendadas
                  </div>
                  <h2 className="mt-2 text-2xl font-black">Continue aprendendo sobre {g.term}</h2>
                  <ul className="mt-4 grid sm:grid-cols-2 gap-4">
                    {relatedArticles.map((a) => (
                      <li key={a.slug}>
                        <a
                          href={`/${a.categorySlug}/${a.slug}`}
                          className="group block rounded-xl overflow-hidden border border-border bg-card hover:shadow-lg transition-all"
                        >
                          <img
                            src={a.image}
                            alt={a.title}
                            loading="lazy"
                            className="h-32 w-full object-cover"
                          />
                          <div className="p-4">
                            <div className="text-xs font-bold uppercase tracking-wider text-[color:var(--color-brand-green)]">{a.category}</div>
                            <h3 className="mt-1 font-black leading-snug group-hover:text-[color:var(--color-brand-blue)]">
                              {a.title}
                            </h3>
                          </div>
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Further Reading & References */}
            {(g.furtherReading?.length || g.references?.length) && (
              <section className="mb-10 grid md:grid-cols-2 gap-4">
                {g.furtherReading && g.furtherReading.length > 0 && (
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h2 className="text-lg font-black">Leituras complementares</h2>
                    <ul className="mt-3 space-y-2 text-sm">
                      {g.furtherReading.map((r, i) => (
                        <li key={i}>
                          <a href={r.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-[color:var(--color-brand-blue)] hover:underline">
                            {r.title} <ExternalLink size={12} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {g.references && g.references.length > 0 && (
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h2 className="text-lg font-black">Referências oficiais</h2>
                    <ul className="mt-3 space-y-2 text-sm">
                      {g.references.map((r, i) => (
                        <li key={i}>
                          <a href={r.href} target="_blank" rel="noopener" className="inline-flex items-center gap-1 text-[color:var(--color-brand-blue)] hover:underline">
                            {r.title} <ExternalLink size={12} />
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </section>
            )}

            {/* Footer meta */}
            <footer className="mt-12 rounded-xl bg-muted/40 p-5 text-sm text-muted-foreground">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>Atualizado em <strong className="text-foreground">{g.lastUpdated}</strong> por <strong className="text-foreground">{g.author}</strong>.</div>
                <Link to="/glossario" className="font-bold text-[color:var(--color-brand-green)]">
                  ← Voltar ao glossário
                </Link>
              </div>
            </footer>
          </article>

          {/* Right rail */}
          <aside className="lg:sticky lg:top-4 lg:self-start space-y-6">
            <nav aria-label="Nesta página" className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-xs font-black uppercase tracking-wider text-[color:var(--color-brand-green)]">
                Nesta página
              </h2>
              <ul className="mt-3 space-y-1.5 text-sm">
                {toc.map((t) => (
                  <li key={t.id}>
                    <a href={`#${t.id}`} className="block rounded-md px-2 py-1 hover:bg-muted transition-colors">
                      {t.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-xs font-black uppercase tracking-wider text-[color:var(--color-brand-blue)]">
                Mais do glossário
              </h2>
              <ul className="mt-3 space-y-2 text-sm">
                {glossaryTerms
                  .filter((t) => t.slug !== g.slug)
                  .slice(0, 8)
                  .map((t) => (
                    <li key={t.slug}>
                      <Link to={glossaryUrl(t.slug) as any} className="block hover:text-[color:var(--color-brand-blue)]">
                        {t.term}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </aside>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}

function FaqItem({ q, a, defaultOpen = false }: { q: string; a: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-3 p-4 text-left"
      >
        <span className="font-bold">{q}</span>
        {open ? <Minus size={18} className="shrink-0 text-[color:var(--color-brand-green)]" /> : <Plus size={18} className="shrink-0 text-[color:var(--color-brand-green)]" />}
      </button>
      {open && <div className="px-4 pb-4 text-sm text-foreground/80 leading-relaxed">{a}</div>}
    </div>
  );
}
