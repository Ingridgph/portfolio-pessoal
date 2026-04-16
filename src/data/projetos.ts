export type Projeto = {
  slug: string;
  titulo: string;
  descricaoCurta: string;
  descricaoLonga: string;
  tecnologias: string[];
  categoria: string;
  linkGithub: string;
  linkLive?: string;
};

export const projetos: Projeto[] = [
  {
    slug: "gerenciador-chamados",
    titulo: "Gerenciador de Chamados",
    descricaoCurta: "Sistema completo para gerenciamento de chamados técnicos com autenticação e controle de status.",
    descricaoLonga: `Sistema web para gerenciamento de chamados técnicos desenvolvido com Laravel e MySQL.

Permite o registro, acompanhamento e resolução de chamados de suporte, com controle de status, atribuição de responsáveis e histórico completo de cada ocorrência.

Funcionalidades:
- Autenticação e autorização de usuários
- CRUD completo de chamados técnicos
- Controle de status (aberto, em andamento, resolvido)
- Integração com banco de dados via Eloquent ORM
- Testes automatizados com Pest (unit e feature tests)`,
    tecnologias: ["Laravel", "PHP", "MySQL", "Eloquent ORM", "Pest", "Blade"],
    categoria: "Backend",
    linkGithub: "https://github.com/Ingridgph/gerenciadorchamados",
  },
  {
    slug: "portfolio",
    titulo: "Portfólio Pessoal",
    descricaoCurta: "Este portfólio, construído com Next.js, TypeScript e Framer Motion com animações de scroll.",
    descricaoLonga: `Portfólio pessoal desenvolvido com as tecnologias mais modernas do ecossistema JavaScript.

Construído com Next.js e React, com animações fluidas de scroll utilizando Framer Motion. Design totalmente responsivo com sistema de cores via CSS Variables.

Características:
- Animações de entrada por scroll com Framer Motion
- Layout responsivo (mobile-first)
- Design system com CSS Variables
- Seções: Hero, Projetos, Currículo e Contato`,
    tecnologias: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React"],
    categoria: "Frontend",
    linkGithub: "https://github.com/Ingridgph/portifolio-noleto-iphones",
  },
  {
    slug: "noleto-iphones",
    titulo: "Noleto iPhones",
    descricaoCurta: "Landing page de e-commerce com modelo 3D interativo, carrinho de compras e integração WhatsApp.",
    descricaoLonga: `Template premium de loja virtual desenvolvido com Next.js 16, React 19 e TypeScript.

Projeto com experiência de compra interativa: modelo 3D do produto renderizado com Three.js, animações de scroll com GSAP e Framer Motion, e carrinho de compras com integração direta ao WhatsApp.

Funcionalidades:
- Modelo 3D interativo com Three.js e React Three Fiber
- Animações de scroll e transições com GSAP
- Carrinho de compras com estado global via Zustand
- Integração com WhatsApp para finalizar pedidos
- Tema dark/light com CSS Variables
- Layout responsivo (mobile-first)
- Painel administrativo com CRUD de produtos`,
    tecnologias: ["Next.js", "TypeScript", "Three.js", "GSAP", "Framer Motion", "Zustand", "Tailwind CSS"],
    categoria: "Frontend",
    linkGithub: "https://github.com/Ingridgph/portifolio-noleto-iphones",
  },
];

export const categorias = ["Todos", ...Array.from(new Set(projetos.map((p) => p.categoria)))];
