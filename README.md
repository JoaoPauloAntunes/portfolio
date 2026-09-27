# Portfólio — João Paulo Antunes

Site pessoal em português e inglês: **https://joaopauloantunes.github.io/** (a raiz é uma página de links, estilo Linktree, que fica na branch `gh-pages` do repositório `JoaoPauloAntunes.github.io`; este repositório é publicado em `/portfolio/`).

Feito com React, Vite, TypeScript e Tailwind CSS. É publicado pelo GitHub Pages a cada push na `main` (`.github/workflows/deploy.yml`).

## Como editar

Todos os textos ficam em [`src/data.ts`](src/data.ts), nos dois idiomas. A foto fica em `public/images/profile.jpg`, e o CV em `public/cv/`.

É um PWA (dá para instalar no celular e abre offline): `public/manifest.webmanifest` e `public/sw.js`, registrado em `src/main.tsx` só no build. Ao mudar o `sw.js`, troque a `VERSION` dele.

```bash
npm install
npm run dev      # http://localhost:5173/portfolio/
npm run build    # gera dist/
```
