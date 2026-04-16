"use client";

import { motion } from "framer-motion";

const experiencias = [
  {
    cargo: "Estagiária de Desenvolvimento Backend",
    empresa: "CRP Tecnologia",
    periodo: "2025 – Atual",
    descricao: [
      "Desenvolvimento de funcionalidades em sistema backend com Laravel",
      "Integração com banco de dados e manipulação via Eloquent ORM",
      "Escrita de testes automatizados com Pest (unit e feature tests)",
      "Correção de bugs e manutenção de sistema em produção",
      "Colaboração em fluxo Git com code review e pull requests",
    ],
  },
  {
    cargo: "Técnica de Informática",
    empresa: "Escola Estadual – Governo do Tocantins",
    periodo: "2024",
    descricao: [
      "Suporte técnico a usuários e manutenção de equipamentos",
      "Administração de laboratório de informática",
      "Auxílio no uso de sistemas e ferramentas educacionais",
    ],
  },
];

const formacao = [
  { curso: "Tecnólogo em Análise e Desenvolvimento de Sistemas", instituicao: "Uniasselvi", periodo: "Em andamento" },
  { curso: "Técnico em Informática Integrado ao Ensino Médio", instituicao: "IFTO – Campus Colinas", periodo: "2021 – 2023" },
];

const habilidades = [
  { nome: "PHP", categoria: "Backend" },
  { nome: "Laravel", categoria: "Backend" },
  { nome: "MySQL", categoria: "Banco de Dados" },
  { nome: "REST APIs", categoria: "Backend" },
  { nome: "Pest", categoria: "Testes" },
  { nome: "Git / GitHub", categoria: "Ferramentas" },
  { nome: "React", categoria: "Frontend" },
  { nome: "JavaScript", categoria: "Frontend" },
  { nome: "HTML & CSS", categoria: "Frontend" },
];

export default function CurriculoSection() {
  return (
    <section id="curriculo" className="py-24" style={{ background: "var(--bg-secondary)" }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "var(--accent-light)" }}>03. Currículo</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>Experiência & Habilidades</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Coluna esquerda — Timeline */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-base font-semibold mb-6 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "var(--accent)" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Experiência
            </motion.h3>

            <div className="relative pl-6">
              <div className="absolute left-[5px] top-2 bottom-2 w-px" style={{ background: "var(--border)" }} />
              {experiencias.map((exp, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative mb-8 last:mb-0"
                >
                  <div className="timeline-dot absolute -left-6 top-1.5" />
                  <div className="p-4 rounded-lg" style={{ background: "var(--bg-primary)", border: "1px solid var(--border)" }}>
                    <div className="flex flex-wrap items-start justify-between gap-1 mb-1">
                      <h4 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{exp.cargo}</h4>
                      <span className="text-xs font-mono flex-shrink-0" style={{ color: "var(--accent-light)" }}>{exp.periodo}</span>
                    </div>
                    <p className="text-xs mb-3" style={{ color: "var(--text-secondary)" }}>{exp.empresa}</p>
                    <ul className="flex flex-col gap-1">
                      {exp.descricao.map((item, j) => (
                        <li key={j} className="text-xs flex items-start gap-1.5" style={{ color: "var(--text-secondary)" }}>
                          <span className="mt-1.5 w-1 h-1 rounded-full flex-shrink-0" style={{ background: "var(--accent)" }} />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.h3
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-base font-semibold mt-10 mb-6 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "var(--accent)" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
              </svg>
              Formação
            </motion.h3>

            <div className="relative pl-6">
              <div className="absolute left-[5px] top-2 bottom-2 w-px" style={{ background: "var(--border)" }} />
              {formacao.map((f, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative mb-6 last:mb-0"
                >
                  <div className="timeline-dot absolute -left-6 top-1.5" />
                  <div className="p-4 rounded-lg" style={{ background: "var(--bg-primary)", border: "1px solid var(--border)" }}>
                    <div className="flex flex-wrap items-start justify-between gap-1">
                      <h4 className="font-semibold text-sm" style={{ color: "var(--text-primary)" }}>{f.curso}</h4>
                      <span className="text-xs font-mono flex-shrink-0" style={{ color: "var(--accent-light)" }}>{f.periodo}</span>
                    </div>
                    <p className="text-xs mt-1" style={{ color: "var(--text-secondary)" }}>{f.instituicao}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Coluna direita — Skills */}
          <div>
            <motion.h3
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="text-base font-semibold mb-6 flex items-center gap-2"
              style={{ color: "var(--text-primary)" }}
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "var(--accent)" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
              Habilidades
            </motion.h3>

            <div className="flex flex-wrap gap-3 justify-center">
              {habilidades.map((skill, i) => (
                <motion.div
                  key={skill.nome}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg"
                  style={{ background: "var(--bg-primary)", border: "1px solid var(--border)" }}
                >
                  <span className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{skill.nome}</span>
                  <span className="text-xs px-1.5 py-0.5 rounded" style={{ background: "var(--accent-soft)", color: "var(--text-secondary)", fontSize: "0.65rem" }}>
                    {skill.categoria}
                  </span>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-10"
            >
              <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--text-secondary)" }}>Soft Skills</h3>
              <div className="flex flex-wrap gap-2">
                {["Trabalho em Equipe", "Resolução de Problemas", "Aprendizado Contínuo", "Proatividade", "Comunicação", "Atenção aos Detalhes", "Pensamento Crítico", "Autonomia"].map((s) => (
                  <span key={s} className="px-3 py-1.5 rounded-lg text-xs font-medium"
                    style={{ background: "var(--bg-primary)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}>
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8"
            >
              <h3 className="text-sm font-semibold mb-4" style={{ color: "var(--text-secondary)" }}>Idiomas</h3>
              <div className="flex gap-4">
                {[{ idioma: "Português", nivel: "Nativo" }, { idioma: "Inglês", nivel: "Intermediário" }].map((lang) => (
                  <div key={lang.idioma} className="flex-1 p-3 rounded-lg text-center"
                    style={{ background: "var(--bg-primary)", border: "1px solid var(--border)" }}>
                    <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{lang.idioma}</p>
                    <p className="text-xs mt-0.5" style={{ color: "var(--accent-light)" }}>{lang.nivel}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
