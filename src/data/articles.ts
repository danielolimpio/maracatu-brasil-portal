import { posts, type Post } from "./posts";

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  categorySlug: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
  views?: string;
};

function toArticle(p: Post): Article {
  return {
    slug: p.slug,
    title: p.title,
    excerpt: p.excerpt,
    category: p.category,
    categorySlug: p.categorySlug,
    author: p.author.name,
    date: p.publishedLabel,
    readTime: p.readTime,
    image: p.cover.src,
  };
}

/** Todos os artigos do portal, derivados dos posts reais publicados. */
export const articles: Article[] = posts.map(toArticle);

/** Repete a lista de forma cíclica para preencher as vitrines da home. */
function ring(start: number, count: number): Article[] {
  if (articles.length === 0) return [];
  return Array.from(
    { length: Math.min(count, articles.length) },
    (_, i) => articles[(start + i) % articles.length],
  );
}

export const featuredNews = ring(0, 3);
export const heroMain = articles[0];
export const heroSecondary = ring(1, 3);
export const heroList = ring(1, 5);
export const featuredStories = ring(2, 6);
export const whatsNew = ring(0, 4);
export const popularPosts = ring(3, 6);
export const latestUpdates = ring(0, 4);
export const latestVideos = ring(4, 3);
export const allArticles = articles;

export type Category = {
  name: string;
  slug: string;
  color: "green" | "blue";
  description: string;
};

/** Categorias editoriais do portal — todas possuem página em /categoria/{slug}. */
export const categories: Category[] = [
  {
    name: "Benefícios",
    slug: "beneficios",
    color: "green",
    description:
      "Bolsa Família, BPC/LOAS, CadÚnico, Tarifa Social e demais programas sociais: calendários, valores, regras e como solicitar.",
  },
  {
    name: "Previdência",
    slug: "previdencia",
    color: "blue",
    description:
      "Aposentadoria pelo INSS, regras de transição, prova de vida, auxílio-doença e planejamento previdenciário explicados passo a passo.",
  },
  {
    name: "Trabalho",
    slug: "trabalho",
    color: "green",
    description:
      "FGTS, abono salarial PIS/Pasep, Carteira de Trabalho Digital, eSocial e direitos de quem trabalha com carteira assinada.",
  },
  {
    name: "Impostos",
    slug: "impostos",
    color: "blue",
    description:
      "Imposto de Renda, tabelas atualizadas, prazos da Receita Federal, restituição, MEI e obrigações do contribuinte brasileiro.",
  },
  {
    name: "Empregos",
    slug: "empregos",
    color: "green",
    description:
      "Seguro-desemprego, vagas, primeiro emprego, currículo e orientações para quem está buscando recolocação no mercado.",
  },
  {
    name: "Finanças",
    slug: "financas",
    color: "blue",
    description:
      "Financiamento habitacional, crédito, educação financeira, investimentos populares e economia doméstica na prática.",
  },
];

export function getCategory(slug: string) {
  return categories.find((c) => c.slug === slug);
}

export function articlesByCategory(slug: string) {
  return articles.filter((a) => a.categorySlug === slug);
}

export function categoryCount(slug: string) {
  return articlesByCategory(slug).length;
}
