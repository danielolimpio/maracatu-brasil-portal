import { useEffect, useState } from "react";
import { Clock, User } from "lucide-react";
import type { Article } from "@/data/articles";

type Props = { articles: Article[]; intervalMs?: number };

export function HeroCarousel({ articles, intervalMs = 3000 }: Props) {
  const [index, setIndex] = useState(0);
  const total = articles.length;

  useEffect(() => {
    if (total <= 1) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % total), intervalMs);
    return () => clearInterval(id);
  }, [total, intervalMs]);

  if (total === 0) return null;
  const a = articles[index % total];

  return (
    <div className="overflow-hidden rounded-lg border border-border bg-card">
      <a
        href={`/${a.categorySlug}/${a.slug}`}
        className="group block"
        aria-label={a.title}
      >
        <div className="relative aspect-[3/2] overflow-hidden bg-muted">
          {articles.map((item, i) => (
            <img
              key={item.slug + i}
              src={item.image}
              alt={item.title}
              className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${
                i === index ? "opacity-100" : "opacity-0"
              }`}
            />
          ))}
          <span className="absolute left-4 top-4 rounded-sm bg-[color:var(--color-brand-green)] px-3 py-1 text-[11px] font-black uppercase tracking-wider text-white">
            {a.category}
          </span>
        </div>
        <div className="p-5">
          <h2 className="text-xl md:text-3xl font-black leading-tight text-foreground group-hover:text-[color:var(--color-brand-blue)] transition-colors">
            {a.title}
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground line-clamp-2">{a.excerpt}</p>
          <div className="mt-3 flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><User size={12} />{a.author}</span>
            <span>·</span>
            <span>{a.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={12} />{a.readTime}</span>
          </div>
        </div>
      </a>
      <div className="flex items-center justify-center gap-2 pb-4">
        {articles.map((item, i) => (
          <button
            key={item.slug + i}
            type="button"
            onClick={() => setIndex(i)}
            aria-label={`Ver destaque ${i + 1}`}
            aria-current={i === index}
            className={`h-2 rounded-full transition-all ${
              i === index
                ? "w-6 bg-[color:var(--color-brand-green)]"
                : "w-2 bg-border hover:bg-muted-foreground"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
