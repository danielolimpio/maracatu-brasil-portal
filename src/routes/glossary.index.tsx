import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search, TrendingUp, Sparkles, Clock, BookOpen, ChevronRight, Home } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import {
  glossaryTerms,
  glossaryCategories,
  alphabet,
  glossaryLetters,
  getPopularTerms,
  getTrendingTerms,
  getRecentTerms,
  glossaryUrl,
} from "@/data/glossary";

const SITE = "https://maracatu-brasil-portal.lovable.app";

export const Route = createFileRoute("/glossary/")({
  head: () => ({
    meta: [
      { title: "Glossary — Maracatu Brasil: Benefits, Taxes, Labor & Finance Terms Explained" },
      {
        name: "description",
        content:
          "The Maracatu Brasil Glossary explains Brazilian benefits, taxes, labor, banking and finance terms in clear English. Search 40+ definitions covering Bolsa Família, INSS, FGTS, Pix, IR and more.",
      },
      { name: "keywords", content: "Brazilian glossary, INSS, FGTS, Bolsa Família, Pix, Imposto de Renda, benefits, definitions" },
      { property: "og:type", content: "website" },
      { property: "og:title", content: "Glossary — Maracatu Brasil" },
      { property: "og:description", content: "Comprehensive English glossary of Brazilian benefits, labor, banking, taxes and finance terms." },
      { property: "og:url", content: `${SITE}/glossary` },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Glossary — Maracatu Brasil" },
      { name: "twitter:description", content: "Search 40+ definitions of Brazilian benefits, taxes and finance terms." },
    ],
    links: [{ rel: "canonical", href: `${SITE}/glossary` }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "WebSite",
              name: "Maracatu Brasil",
              url: SITE,
              potentialAction: {
                "@type": "SearchAction",
                target: `${SITE}/glossary?q={search_term_string}`,
                "query-input": "required name=search_term_string",
              },
            },
            {
              "@type": "WebPage",
              name: "Glossary — Maracatu Brasil",
              url: `${SITE}/glossary`,
              inLanguage: "en",
              isPartOf: { "@type": "WebSite", name: "Maracatu Brasil", url: SITE },
              speakable: { "@type": "SpeakableSpecification", cssSelector: [".glossary-hero-lead"] },
            },
            {
              "@type": "BreadcrumbList",
              itemListElement: [
                { "@type": "ListItem", position: 1, name: "Home", item: SITE },
                { "@type": "ListItem", position: 2, name: "Glossary", item: `${SITE}/glossary` },
              ],
            },
            {
              "@type": "DefinedTermSet",
              name: "Maracatu Brasil Glossary",
              url: `${SITE}/glossary`,
              hasDefinedTerm: glossaryTerms.map((g) => ({
                "@type": "DefinedTerm",
                name: g.term,
                url: `${SITE}${glossaryUrl(g.slug)}`,
                inDefinedTermSet: `${SITE}/glossary`,
              })),
            },
          ],
        }),
      },
    ],
  }),
  component: GlossaryHub,
});

function GlossaryHub() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("all");
  const [letter, setLetter] = useState<string>("all");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    return glossaryTerms.filter((g) => {
      if (cat !== "all" && g.categorySlug !== cat) return false;
      if (letter !== "all" && g.term.charAt(0).toUpperCase() !== letter) return false;
      if (!query) return true;
      const hay = [g.term, g.shortAnswer, ...(g.synonyms ?? []), g.category].join(" ").toLowerCase();
      return hay.includes(query);
    });
  }, [q, cat, letter]);

  const grouped = useMemo(() => {
    const map = new Map<string, typeof glossaryTerms>();
    for (const t of filtered) {
      const L = t.term.charAt(0).toUpperCase();
      if (!map.has(L)) map.set(L, [] as any);
      map.get(L)!.push(t);
    }
    return Array.from(map.entries()).sort(([a], [b]) => a.localeCompare(b));
  }, [filtered]);

  const popular = getPopularTerms(8);
  const trending = getTrendingTerms(6);
  const recent = getRecentTerms(6);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[color:var(--color-brand-green)] via-[color:var(--color-brand-green-dark)] to-[color:var(--color-brand-blue-dark)] text-white">
        <div className="absolute inset-0 opacity-10 [background-image:radial-gradient(circle_at_20%_10%,white_1px,transparent_1px),radial-gradient(circle_at_80%_80%,white_1px,transparent_1px)] [background-size:36px_36px]" aria-hidden />
        <div className="container-mb relative py-14 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-4 text-sm text-white/80">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="inline-flex items-center gap-1 hover:text-white"><Home size={14} /> Home</Link></li>
              <li aria-hidden><ChevronRight size={14} /></li>
              <li aria-current="page" className="text-white font-semibold">Glossary</li>
            </ol>
          </nav>
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-wider backdrop-blur">
              <BookOpen size={14} /> Premium Knowledge Hub
            </span>
            <h1 className="mt-4 text-4xl md:text-6xl font-black leading-tight tracking-tight">
              The Maracatu Brasil <span className="text-[color:var(--color-brand-gray)]">Glossary</span>
            </h1>
            <p className="glossary-hero-lead mt-4 text-lg md:text-xl text-white/90 max-w-2xl">
              Clear, authoritative English definitions of Brazilian benefits, labor, taxes, banking and finance terms — built to help you understand your rights and make better decisions.
            </p>

            <div className="mt-8 flex items-center rounded-xl bg-white shadow-2xl ring-1 ring-black/5 focus-within:ring-2 focus-within:ring-white/70">
              <Search size={20} className="ml-4 text-muted-foreground" />
              <input
                type="search"
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search a term — try “Bolsa Família”, “Pix”, “FGTS”..."
                aria-label="Search glossary"
                className="w-full bg-transparent px-3 py-4 text-base text-foreground outline-none placeholder:text-muted-foreground"
              />
              <div className="hidden md:block pr-4 text-xs text-muted-foreground">
                {glossaryTerms.length} entries
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-sm">
              <span className="text-white/70 mr-1">Popular:</span>
              {popular.slice(0, 6).map((p) => (
                <Link
                  key={p.slug}
                  to={glossaryUrl(p.slug) as any}
                  className="rounded-full bg-white/10 px-3 py-1 hover:bg-white/20 transition-colors"
                >
                  {p.term}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container-mb py-10 md:py-14">
        <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr_280px] gap-8">
          {/* Sidebar A–Z */}
          <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="Alphabetical index">
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-sm font-black uppercase tracking-wider text-[color:var(--color-brand-green)]">
                Index A–Z
              </h2>
              <p className="mt-1 text-xs text-muted-foreground">Filter by first letter</p>
              <div className="mt-4 grid grid-cols-6 lg:grid-cols-5 gap-1.5">
                <button
                  onClick={() => setLetter("all")}
                  className={`col-span-6 lg:col-span-5 rounded-md px-2 py-1.5 text-xs font-bold ${
                    letter === "all"
                      ? "bg-[color:var(--color-brand-green)] text-white"
                      : "bg-muted hover:bg-muted/70"
                  }`}
                >
                  All letters
                </button>
                {alphabet.map((L) => {
                  const has = glossaryLetters.includes(L);
                  const active = letter === L;
                  return (
                    <button
                      key={L}
                      onClick={() => has && setLetter(L)}
                      disabled={!has}
                      aria-label={`Filter by letter ${L}`}
                      className={`aspect-square flex items-center justify-center rounded-md text-xs font-bold transition-colors ${
                        active
                          ? "bg-[color:var(--color-brand-blue)] text-white"
                          : has
                          ? "bg-muted hover:bg-[color:var(--color-brand-green)]/10 text-foreground"
                          : "bg-muted/40 text-muted-foreground/40 cursor-not-allowed"
                      }`}
                    >
                      {L}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-card p-5">
              <h2 className="text-sm font-black uppercase tracking-wider text-[color:var(--color-brand-green)]">
                Categories
              </h2>
              <ul className="mt-3 space-y-1.5">
                <li>
                  <button
                    onClick={() => setCat("all")}
                    className={`w-full text-left rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                      cat === "all" ? "bg-[color:var(--color-brand-green)] text-white" : "hover:bg-muted"
                    }`}
                  >
                    All categories
                  </button>
                </li>
                {glossaryCategories.map((c) => (
                  <li key={c.slug}>
                    <button
                      onClick={() => setCat(c.slug)}
                      className={`w-full text-left rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                        cat === c.slug ? "bg-[color:var(--color-brand-green)] text-white" : "hover:bg-muted"
                      }`}
                    >
                      {c.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </aside>

          {/* Main list */}
          <main>
            {/* Trending / Recent strips */}
            <div className="grid md:grid-cols-2 gap-4 mb-8">
              <div className="rounded-xl border border-border bg-gradient-to-br from-[color:var(--color-brand-green)]/5 to-transparent p-5">
                <div className="flex items-center gap-2 text-[color:var(--color-brand-green)] font-black uppercase text-xs tracking-wider">
                  <TrendingUp size={16} /> Trending now
                </div>
                <ul className="mt-3 space-y-2">
                  {trending.map((t) => (
                    <li key={t.slug}>
                      <Link to={glossaryUrl(t.slug) as any} className="group flex items-center justify-between gap-3">
                        <span className="font-semibold group-hover:text-[color:var(--color-brand-green)]">{t.term}</span>
                        <span className="text-xs text-muted-foreground">{t.category}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-xl border border-border bg-gradient-to-br from-[color:var(--color-brand-blue)]/5 to-transparent p-5">
                <div className="flex items-center gap-2 text-[color:var(--color-brand-blue)] font-black uppercase text-xs tracking-wider">
                  <Clock size={16} /> Recently updated
                </div>
                <ul className="mt-3 space-y-2">
                  {recent.map((t) => (
                    <li key={t.slug}>
                      <Link to={glossaryUrl(t.slug) as any} className="group flex items-center justify-between gap-3">
                        <span className="font-semibold group-hover:text-[color:var(--color-brand-blue)]">{t.term}</span>
                        <span className="text-xs text-muted-foreground">{t.lastUpdated}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex items-baseline justify-between mb-4">
              <h2 className="section-title !mb-0 !pb-0 !border-0">
                All terms
                <span className="ml-2 text-xs font-bold text-muted-foreground">
                  {filtered.length} of {glossaryTerms.length}
                </span>
              </h2>
            </div>

            {grouped.length === 0 && (
              <div className="rounded-xl border border-dashed border-border p-10 text-center text-muted-foreground">
                No terms match your filters.
              </div>
            )}

            <div className="space-y-10">
              {grouped.map(([L, items]) => (
                <section key={L} id={`letter-${L}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--color-brand-green)] text-white text-lg font-black">
                      {L}
                    </div>
                    <div className="flex-1 h-px bg-border" />
                  </div>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {items.map((g) => (
                      <li key={g.slug}>
                        <Link
                          to={glossaryUrl(g.slug) as any}
                          className="group block rounded-xl border border-border bg-card p-4 hover:border-[color:var(--color-brand-green)] hover:shadow-md transition-all"
                        >
                          <div className="flex items-center justify-between gap-3">
                            <h3 className="font-black text-lg group-hover:text-[color:var(--color-brand-green)]">
                              {g.term}
                            </h3>
                            {g.trending && (
                              <span className="inline-flex items-center gap-1 rounded-full bg-[color:var(--color-brand-green)]/10 text-[color:var(--color-brand-green)] px-2 py-0.5 text-[10px] font-bold uppercase">
                                <Sparkles size={10} /> Hot
                              </span>
                            )}
                          </div>
                          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-[color:var(--color-brand-blue)]">
                            {g.category}
                          </p>
                          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                            {g.shortAnswer}
                          </p>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </main>

          {/* Right rail: Popular */}
          <aside className="lg:sticky lg:top-4 lg:self-start" aria-label="Popular terms">
            <div className="rounded-xl border border-border bg-card p-5">
              <h2 className="text-sm font-black uppercase tracking-wider text-[color:var(--color-brand-green)]">
                Most popular
              </h2>
              <ol className="mt-3 space-y-3">
                {popular.map((p, i) => (
                  <li key={p.slug} className="flex gap-3">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[color:var(--color-brand-green)]/10 text-[color:var(--color-brand-green)] text-xs font-black">
                      {i + 1}
                    </div>
                    <Link to={glossaryUrl(p.slug) as any} className="group">
                      <div className="font-semibold group-hover:text-[color:var(--color-brand-green)] leading-tight">
                        {p.term}
                      </div>
                      <div className="text-xs text-muted-foreground">{p.category} · {p.readingTime}</div>
                    </Link>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-6 rounded-xl border border-border bg-gradient-to-br from-[color:var(--color-brand-blue)] to-[color:var(--color-brand-blue-dark)] p-6 text-white">
              <h3 className="text-lg font-black">Continue learning</h3>
              <p className="mt-2 text-sm text-white/85">
                Explore in-depth guides on Brazilian benefits, taxes and rights.
              </p>
              <Link
                to="/"
                className="mt-4 inline-flex items-center gap-2 rounded-md bg-white text-[color:var(--color-brand-blue-dark)] px-4 py-2 text-sm font-bold hover:bg-white/90"
              >
                Read latest articles <ChevronRight size={14} />
              </Link>
            </div>
          </aside>
        </div>
      </div>

      <SiteFooter />
    </div>
  );
}
