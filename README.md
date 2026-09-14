# AXON — Technology & Intelligence Hub

Landing page institucional/portfólio conceitual da AXON. Site estático (sem backend,
sem banco de dados), construído com Next.js 15 (App Router), TypeScript, Tailwind CSS
e Framer Motion.

## Rodando localmente

```bash
npm install
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev        # servidor de desenvolvimento
npm run build      # build de produção
npm run start      # servidor de produção (após build)
npm run lint       # ESLint
npx tsc --noEmit   # typecheck
```

## Estrutura

- `app/` — layout raiz e página única (`page.tsx` monta todas as seções da landing).
- `components/sections/` — um componente por seção do site (Hero, Products, About...).
- `components/ui/` — elementos reutilizáveis (cards, formulário, números animados).
- `components/visuals/` — composições visuais abstratas (nós/conexões do Hero).
- `content/site.ts` — todo o texto e dados do site (produtos, cases, stats), em inglês.

## Sobre o conteúdo

Este é um projeto conceitual: a AXON, seus 8 produtos, os case studies e as empresas
"clientes" (NOVA, VERTEX, NORTH, ORBIT, LUMEN, MOTION) são fictícios, criados para
representar a visão de longo prazo do fundador. Nenhuma empresa real é citada como
cliente ou parceira. Métricas de case studies são marcadas como "Illustrative results".

O formulário de contato (seção final) é **fake**: valida os campos e mostra uma
confirmação visual, mas não envia dados para nenhum backend ou serviço externo.

## Deploy

Projeto pensado para deploy no Vercel (sem variáveis de ambiente obrigatórias nesta
fase, já que não há integrações externas).
