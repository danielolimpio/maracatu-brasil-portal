import { Link } from "@tanstack/react-router";
import { Search, Menu, Facebook, Twitter, Instagram, Youtube } from "lucide-react";
import { useState } from "react";
import { categories } from "@/data/articles";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full">
      {/* Top bar */}
      <div className="bg-[color:var(--color-brand-ink)] text-white text-xs">
        <div className="container-mb flex items-center justify-between py-2">
          <div className="hidden sm:block">
            {new Date().toLocaleDateString("pt-BR", {
              weekday: "long",
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:inline text-white">Siga-nos:</span>
            <a href="#" aria-label="Maracatu Brasil no Facebook" className="hover:text-white">
              <Facebook size={14} />
            </a>
            <a href="#" aria-label="Maracatu Brasil no Twitter" className="hover:text-white">
              <Twitter size={14} />
            </a>
            <a href="#" aria-label="Maracatu Brasil no Instagram" className="hover:text-white">
              <Instagram size={14} />
            </a>
            <a href="#" aria-label="Maracatu Brasil no YouTube" className="hover:text-white">
              <Youtube size={14} />
            </a>
          </div>
        </div>
      </div>

      {/* Brand row */}
      <div className="border-b border-border bg-background">
        <div className="container-mb flex items-center justify-between gap-6 py-5">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoAsset.url}
              alt="Logo Maracatu Brasil"
              width={48}
              height={48}
              className="h-12 w-12 rounded-full shadow-sm"
            />
            <div>
              <div className="text-2xl font-black leading-none tracking-tight">
                <span className="text-[color:var(--color-brand-green)]">Maracatu</span>{" "}
                <span className="text-[color:var(--color-brand-blue)]">Brasil</span>
              </div>
              <div className="mt-1 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                Benefícios · Direitos · Economia · Serviços
              </div>
            </div>
          </Link>

          <div className="hidden md:flex flex-1 max-w-md">
            <div className="flex w-full items-center rounded-full border border-border bg-muted px-4 py-2 focus-within:ring-2 focus-within:ring-[color:var(--color-brand-green)]/40">
              <Search size={16} className="text-muted-foreground" />
              <input
                type="search"
                placeholder="Buscar artigos, benefícios, concursos..."
                aria-label="Buscar artigos, benefícios, concursos e serviços"
                className="ml-2 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />
            </div>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden rounded-md border border-border p-2"
            aria-label="Abrir menu"
          >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Nav */}
      <nav className="bg-[color:var(--color-brand-green)] text-white">
        <div className="container-mb">
          <ul
            className={`${
              open ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row lg:items-center gap-0 lg:gap-1 py-2 lg:py-0`}
          >
            <li>
              <Link
                to="/"
                className="block px-4 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white/10 transition-colors"
              >
                Início
              </Link>
            </li>
            {categories.map((cat) => (
              <li key={cat.slug}>
                <a
                  href={`/categoria/${cat.slug}`}
                  className="block px-4 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white/10 transition-colors"
                >
                  {cat.name}
                </a>
              </li>
            ))}
            <li className="lg:ml-auto">
              <a
                href="/sobre"
                className="block px-4 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white/10 transition-colors"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="/contato"
                className="block px-4 py-3 text-sm font-bold uppercase tracking-wide hover:bg-white/10 transition-colors"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
