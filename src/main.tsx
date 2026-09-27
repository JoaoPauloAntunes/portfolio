import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);

// PWA: service worker (offline + atualização automática, igual ao MyFilms). Só no build,
// para o `npm run dev` nunca servir arquivo velho do cache.
if (import.meta.env.PROD && "serviceWorker" in navigator) {
  let hadController = !!navigator.serviceWorker.controller;
  let refreshing = false;
  navigator.serviceWorker.addEventListener("controllerchange", () => {
    if (!hadController) { hadController = true; return; } // 1ª instalação: não recarrega
    if (refreshing) return;
    refreshing = true;
    location.reload(); // versão nova ativou → recarrega sozinho
  });
  window.addEventListener("load", () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js`).then((reg) => {
      // Checa versão nova sempre que o app volta para a tela
      document.addEventListener("visibilitychange", () => { if (!document.hidden) reg.update(); });
      if (reg.waiting) reg.waiting.postMessage("SKIP_WAITING");
    }).catch(() => {});
  });
}
