// Config usada apenas pelo deploy via FTP (Hostinger), que é hospedagem estática.
// Gera HTML pré-renderizado de todas as rotas em dist/client.
// O build da Lovable continua usando vite.config.ts (Cloudflare/SSR).
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: { preset: "static" },
  tanstackStart: {
    server: { entry: "server" },
    prerender: {
      enabled: true,
      crawlLinks: true,
      retryCount: 1,
    },
    pages: [{ path: "/", prerender: { enabled: true } }],
  },
});
