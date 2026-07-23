import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";
import { categories } from "@/data/articles";

export function SiteFooter() {
  return (
    <footer className="mt-16 bg-[color:var(--color-brand-ink)] text-white/80">
      <div className="container-mb py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[color:var(--color-brand-green)] text-white font-black text-xl">
              M
            </div>
            <div className="text-xl font-black text-white">Maracatu Brasil</div>
          </div>
          <p className="text-sm leading-relaxed">
            Portal de notícias e serviços sobre benefícios, direitos, economia e cidadania para o
            brasileiro. Informação clara, gratuita e confiável.
          </p>
          <div className="mt-5 flex gap-3">
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/10 p-2 hover:bg-[color:var(--color-brand-green)] transition-colors">
              <Facebook size={16} />
            </a>
            <a href="#" aria-label="Twitter" className="rounded-full bg-white/10 p-2 hover:bg-[color:var(--color-brand-green)] transition-colors">
              <Twitter size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/10 p-2 hover:bg-[color:var(--color-brand-green)] transition-colors">
              <Instagram size={16} />
            </a>
            <a href="#" aria-label="Youtube" className="rounded-full bg-white/10 p-2 hover:bg-[color:var(--color-brand-green)] transition-colors">
              <Youtube size={16} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-white">
            Categorias
          </h4>
          <ul className="space-y-2 text-sm">
            {categories.slice(0, 6).map((c) => (
              <li key={c.slug}>
                <a href={`/categoria/${c.slug}`} className="hover:text-white transition-colors">
                  {c.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-white">
            Institucional
          </h4>
          <ul className="space-y-2 text-sm">
            <li><a href="/sobre" className="hover:text-white">Sobre nós</a></li>
            <li><a href="/contato" className="hover:text-white">Contato</a></li>
            <li><a href="/politica-de-privacidade" className="hover:text-white">Política de Privacidade</a></li>
            <li><a href="/termos-de-uso" className="hover:text-white">Termos de Uso</a></li>
            <li><a href="/politica-de-cookies" className="hover:text-white">Política de Cookies</a></li>
          </ul>
        </div>

        <div>
          <h4 className="mb-4 text-sm font-black uppercase tracking-wider text-white">
            Newsletter
          </h4>
          <p className="text-sm mb-3">Receba os melhores conteúdos direto no seu e-mail.</p>
          <form className="flex flex-col gap-2">
            <div className="flex items-center rounded-md bg-white/10 px-3 py-2">
              <Mail size={16} className="text-white/60" />
              <input
                type="email"
                required
                placeholder="Seu melhor e-mail"
                className="ml-2 w-full bg-transparent text-sm text-white outline-none placeholder:text-white/50"
              />
            </div>
            <button
              type="submit"
              className="rounded-md bg-[color:var(--color-brand-green)] px-4 py-2 text-sm font-bold uppercase tracking-wide text-white hover:bg-[color:var(--color-brand-green-dark)] transition-colors"
            >
              Inscrever-se
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-mb flex flex-col md:flex-row items-center justify-between gap-2 py-5 text-xs text-white/60">
          <div>
            © {new Date().getFullYear()} Maracatu Brasil. Todos os direitos reservados.
          </div>
          <div>Feito com dedicação para o povo brasileiro.</div>
        </div>
      </div>
    </footer>
  );
}
