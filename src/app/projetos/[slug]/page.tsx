import { notFound } from "next/navigation";
import Link from "next/link";
import { projetos } from "@/data/projetos";

const techColors: Record<string, string> = {
  Laravel: "#FF2D20",
  PHP: "#777BB4",
  MySQL: "#4479A1",
  "Eloquent ORM": "#FF2D20",
  Pest: "#16A34A",
  Blade: "#FF2D20",
  "Next.js": "#f5ece8",
  TypeScript: "#3178C6",
  "Tailwind CSS": "#06B6D4",
  "Framer Motion": "#8B5CF6",
  React: "#61DAFB",
  "REST APIs": "#F59E0B",
  Git: "#F05032",
  TDD: "#16A34A",
};

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projetos.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const projeto = projetos.find((p) => p.slug === slug);
  if (!projeto) return {};
  return {
    title: `${projeto.titulo} | Ingrid Gomes`,
    description: projeto.descricaoCurta,
  };
}

export default async function ProjetoPage({ params }: Props) {
  const { slug } = await params;
  const projeto = projetos.find((p) => p.slug === slug);
  if (!projeto) notFound();

  return (
    <main style={{ background: "var(--bg-primary)", minHeight: "100vh" }}>
      {/* Header */}
      <div style={{ background: "var(--bg-secondary)", borderBottom: "1px solid var(--border)" }}>
        <div className="max-w-4xl mx-auto px-6 py-5 flex items-center justify-between">
          <Link
            href="/#projetos"
            className="flex items-center gap-2 text-sm transition-colors duration-200 hover:opacity-70"
            style={{ color: "var(--text-secondary)" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Voltar
          </Link>
          <span className="font-mono text-sm font-bold" style={{ color: "var(--accent-light)" }}>{"<IG />"}</span>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Capa */}
        <div
          className="w-full h-56 md:h-72 rounded-2xl flex items-center justify-center mb-10"
          style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
        >
          <div className="flex flex-col items-center gap-3 opacity-20">
            <svg className="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "var(--accent)" }}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
            <span className="font-mono text-sm" style={{ color: "var(--text-secondary)" }}>{projeto.titulo}</span>
          </div>
        </div>

        {/* Título + tags */}
        <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
          <div>
            <span className="text-xs font-mono" style={{ color: "var(--accent-light)" }}>{projeto.categoria}</span>
            <h1 className="text-3xl md:text-4xl font-bold mt-1" style={{ color: "var(--text-primary)" }}>
              {projeto.titulo}
            </h1>
          </div>

          <div className="flex gap-3">
            <a
              href={projeto.linkGithub}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
              style={{ background: "var(--bg-secondary)", color: "var(--text-primary)", border: "1px solid var(--border)" }}
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
              </svg>
              Ver código
            </a>

            {projeto.linkLive && (
              <a
                href={projeto.linkLive}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
                style={{ background: "var(--accent)", color: "var(--text-primary)", boxShadow: "0 4px 16px var(--accent-glow)" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Ver live
              </a>
            )}
          </div>
        </div>

        {/* Tecnologias */}
        <div className="flex flex-wrap gap-2 mb-10">
          {projeto.tecnologias.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 rounded text-xs font-mono"
              style={{ background: "var(--bg-secondary)", color: techColors[tech] ?? "var(--text-secondary)", border: "1px solid var(--border)" }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Descrição */}
        <div
          className="p-6 rounded-xl"
          style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
        >
          <h2 className="text-base font-semibold mb-4" style={{ color: "var(--text-primary)" }}>Sobre o projeto</h2>
          <div className="text-sm leading-relaxed whitespace-pre-line" style={{ color: "var(--text-secondary)" }}>
            {projeto.descricaoLonga}
          </div>
        </div>

        {/* Voltar */}
        <div className="mt-12 text-center">
          <Link
            href="/#projetos"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105"
            style={{ background: "var(--bg-secondary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            Ver todos os projetos
          </Link>
        </div>
      </div>
    </main>
  );
}
