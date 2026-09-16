# Portfólio — João Paulo Antunes

Site pessoal em português e inglês: **https://joaopauloantunes.github.io/** (a raiz redireciona para `/portfolio/`, onde este repositório é publicado).

Feito com React, Vite, TypeScript e Tailwind CSS. É publicado pelo GitHub Pages a cada push na `main` (`.github/workflows/deploy.yml`).

## Como editar

Todos os textos ficam em [`src/data.ts`](src/data.ts), nos dois idiomas. A foto fica em `public/images/profile.jpg`, e o CV em `public/cv/`.

```bash
npm install
npm run dev      # http://localhost:5173/portfolio/
npm run build    # gera dist/
```
