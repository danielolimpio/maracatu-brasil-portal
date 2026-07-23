import type { Article } from "@/data/articles";
import { Clock, User } from "lucide-react";

type Props = {
  article: Article;
  variant?: "default" | "compact" | "large" | "overlay" | "horizontal";
};

export function ArticleCard({ article, variant = "default" }: Props) {
  if (variant === "overlay") {
    return (
      <a
        href={`/${article.categorySlug}/${article.slug}`}
        className="group relative block h-full min-h-[380px] overflow-hidden rounded-lg card-hover hover:shadow-xl"
      >
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
        <div className="relative flex h-full flex-col justify-end p-5 text-white min-h-[380px]">
          <span className="mb-3 inline-block w-fit rounded-sm bg-[color:var(--color-brand-green)] px-2 py-1 text-[10px] font-bold uppercase tracking-wider">
            {article.category}
          </span>
          <h3 className="text-xl md:text-2xl font-black leading-tight text-white drop-shadow group-hover:text-[color:var(--color-brand-green)] transition-colors">
            {article.title}
          </h3>
          <div className="mt-3 flex items-center gap-3 text-xs text-white/80">
            <span className="flex items-center gap-1"><User size={12} />{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
          </div>
        </div>
      </a>
    );
  }

  if (variant === "horizontal") {
    return (
      <a
        href={`/${article.categorySlug}/${article.slug}`}
        className="group flex gap-3 items-start"
      >
        <div className="relative h-20 w-28 flex-shrink-0 overflow-hidden rounded-md">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="flex-1 min-w-0">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--color-brand-green)]">
            {article.category}
          </span>
          <h4 className="mt-1 text-sm font-bold leading-snug text-foreground line-clamp-3 group-hover:text-[color:var(--color-brand-blue)] transition-colors">
            {article.title}
          </h4>
          <div className="mt-1 text-xs text-muted-foreground">{article.date}</div>
        </div>
      </a>
    );
  }

  if (variant === "large") {
    return (
      <a
        href={`/${article.categorySlug}/${article.slug}`}
        className="group block overflow-hidden rounded-lg border border-border bg-card card-hover hover:shadow-lg"
      >
        <div className="relative aspect-[16/9] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <span className="absolute top-3 left-3 rounded-sm bg-[color:var(--color-brand-green)] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
            {article.category}
          </span>
        </div>
        <div className="p-5">
          <h3 className="text-xl font-black leading-tight text-foreground group-hover:text-[color:var(--color-brand-blue)] transition-colors">
            {article.title}
          </h3>
          <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
          <div className="mt-3 flex items-center gap-3 text-xs text-muted-foreground">
            <span className="flex items-center gap-1"><User size={12} />{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span className="flex items-center gap-1"><Clock size={12} />{article.readTime}</span>
          </div>
        </div>
      </a>
    );
  }

  if (variant === "compact") {
    return (
      <a
        href={`/${article.categorySlug}/${article.slug}`}
        className="group block overflow-hidden rounded-lg border border-border bg-card card-hover hover:shadow-md"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={article.image}
            alt={article.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <span className="text-[10px] font-bold uppercase tracking-wider text-[color:var(--color-brand-green)]">
            {article.category}
          </span>
          <h4 className="mt-1 text-base font-bold leading-snug text-foreground line-clamp-2 group-hover:text-[color:var(--color-brand-blue)] transition-colors">
            {article.title}
          </h4>
          <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
            <span>{article.author}</span>
            <span>·</span>
            <span>{article.date}</span>
          </div>
        </div>
      </a>
    );
  }

  // default
  return (
    <a
      href={`/${article.categorySlug}/${article.slug}`}
      className="group block overflow-hidden rounded-lg border border-border bg-card card-hover hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <img
          src={article.image}
          alt={article.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <span className="absolute top-3 left-3 rounded-sm bg-[color:var(--color-brand-green)] px-2 py-1 text-[10px] font-bold uppercase tracking-wider text-white">
          {article.category}
        </span>
      </div>
      <div className="p-4">
        <h4 className="text-base font-bold leading-snug text-foreground line-clamp-2 group-hover:text-[color:var(--color-brand-blue)] transition-colors">
          {article.title}
        </h4>
        <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{article.excerpt}</p>
        <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
          <span>{article.date}</span>
          <span>·</span>
          <span className="flex items-center gap-1"><Clock size={12} />{article.readTime}</span>
        </div>
      </div>
    </a>
  );
}
