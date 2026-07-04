# 🌊 SOS Alagamento — Landing Page

Landing page do app **SOS Alagamento**: mapa interativo com sirenes, áreas de risco, pontos de apoio e ocorrências registradas pela comunidade durante eventos extremos.

## Rodando o projeto

```bash
npm install
npm run dev      # servidor de desenvolvimento (http://localhost:5173)
npm run build    # build de produção (pasta dist/)
npm run preview  # pré-visualizar o build
```

## Stack

- ⚡ **Vite** + **React 18**
- 🎬 **Framer Motion** — animações (stagger no hero, reveal ao rolar, contadores, chips flutuantes, FAQ acordeão)
- 🎨 CSS puro com variáveis — tema **branco + azul** seguindo o visual do app

## Seções

1. **Hero** — mockup animado do celular com o mapa (sirenes pulsando, área de risco, pontos de apoio, rio animado), chuva no fundo e ondas na base
2. **Marquee** — faixa azul com os destaques do app
3. **Funcionalidades** — grid de 6 cards
4. **Comunidade** — card de ocorrência com foto, confirmações e comentários
5. **Como funciona** — 4 passos
6. **FAQ** — acordeão animado
7. **Download** — painel com botões "Em breve" da Google Play e App Store
8. **Footer**

## Dados estáticos do app (public/data)

O site também serve os dados da Defesa Civil que o app mobile consome para se manter atualizado
sem release nas lojas: `https://sosalagamento.netlify.app/data/versao.json` (+ `sirenes.json`,
`pontos_apoio.json`, `areas_risco.json`, `rotas_fuga.json`).

Para atualizar esses dados:

1. Rode a API geradora local (`SOS_Petropolis__API`, controller `DefCivilPetropolisControler`)
   e dispare os POSTs `v1/dados/defCivil/*` no Swagger — os arquivos saem em `SosPetropolis.Api/out/`
2. Copie os JSONs gerados para `public/data/` deste repo e para `src/assets/dados/` do app
3. Commit + push aqui: o Netlify publica e o app baixa sozinho ao detectar `versao.json` novo

## Quando o app for publicado

Edite [src/constants.js](src/constants.js) com os links das lojas e troque os botões desabilitados em
[src/components/DownloadCTA.jsx](src/components/DownloadCTA.jsx) por links (`<a href={...}>`).
