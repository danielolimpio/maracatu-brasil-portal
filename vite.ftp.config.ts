// Config usada apenas pelo deploy via FTP (Hostinger), que é hospedagem estática.
// Pré-renderiza todas as rotas em HTML dentro de dist/client.
// O build da Lovable continua usando vite.config.ts (SSR).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Sem nitro: queremos apenas os arquivos estáticos pré-renderizados.
  nitro: false,
  tanstackStart: {
    prerender: {
      enabled: true,
      crawlLinks: true,
      retryCount: 1,
    },
    pages: [
      { path: "/", prerender: { enabled: true } },
      { path: "/sitemap.xml", prerender: { enabled: true } },
    ],
  },
});
