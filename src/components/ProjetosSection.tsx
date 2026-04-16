"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { projetos, categorias } from "@/data/projetos";

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
  "Three.js": "#ffffff",
  GSAP: "#88CE02",
  Zustand: "#764ABC",
};

export default function ProjetosSection() {
  const [categoriaAtiva, setCategoriaAtiva] = useState("Todos");

  const filtrados =
    categoriaAtiva === "Todos"
      ? projetos
      : projetos.filter((p) => p.categoria === categoriaAtiva);

  return (
    <section id="projetos" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "var(--accent-light)" }}>
            02. Portfólio
          </p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>
            Projetos
          </h2>
          <p className="mt-3 text-sm" style={{ color: "var(--text-secondary)" }}>O que tenho construído.</p>
        </motion.div>

        {/* Filtros */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-10"
        >
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategoriaAtiva(cat)}
              className="px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200"
              style={
                categoriaAtiva === cat
                  ? { background: "var(--accent)", color: "var(--text-primary)" }
                  : { background: "var(--bg-secondary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }
              }
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div
          key={categoriaAtiva}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filtrados.map((projeto) => (
            <motion.div
              key={projeto.slug}
              variants={{ hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } } }}
            >
              <Link href={`/projetos/${projeto.slug}`} className="block group">
                <article
                  className="h-full rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 group-hover:-translate-y-1"
                  style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 40px var(--accent-glow)";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.boxShadow = "";
                    (e.currentTarget as HTMLElement).style.borderColor = "var(--border)";
                  }}
                >
                  {/* Thumbnail */}
                  <div className="w-full h-36 rounded-lg flex items-center justify-center" style={{ background: "var(--bg-tertiary)" }}>
                    <div className="flex items-center gap-3 opacity-25">
                      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{ color: "var(--accent)" }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                      </svg>
                      <span className="font-mono text-sm" style={{ color: "var(--text-secondary)" }}>{projeto.titulo}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 flex-1">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-semibold text-base leading-snug" style={{ color: "var(--text-primary)" }}>
                        {projeto.titulo}
                      </h3>
                      <span className="text-xs px-2 py-0.5 rounded-full flex-shrink-0" style={{ background: "var(--accent-soft)", color: "var(--accent-light)" }}>
                        {projeto.categoria}
                      </span>
                    </div>

                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                      {projeto.descricaoCurta}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
                      {projeto.tecnologias.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 rounded text-xs font-mono"
                          style={{ background: "var(--bg-primary)", color: techColors[tech] ?? "var(--text-secondary)", border: "1px solid var(--border)" }}
                        >
                          {tech}
                        </span>
                      ))}
                      {projeto.tecnologias.length > 4 && (
                        <span className="px-2 py-0.5 rounded text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                          +{projeto.tecnologias.length - 4}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                    <span className="flex items-center gap-1.5 text-xs font-medium" style={{ color: "var(--text-secondary)" }}>
                      <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                      </svg>
                      Código
                    </span>
                    <span className="ml-auto text-xs flex items-center gap-1 transition-transform duration-200 group-hover:translate-x-1" style={{ color: "var(--accent-light)" }}>
                      Ver mais
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
