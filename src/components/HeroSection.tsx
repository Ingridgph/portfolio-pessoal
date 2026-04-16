"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { DotPattern } from "@/components/magicui/dot-pattern";

const skills = ["PHP", "Laravel", "MySQL", "REST APIs", "Pest", "React", "Git"];

const frases = [
  "vamos trabalhar juntos?",
  "vamos desenvolver algo incrível?",
  "vamos transformar ideias em código?",
  "vamos construir o próximo projeto?",
];

function Typewriter() {
  const [fraseIdx, setFraseIdx] = useState(0);
  const [texto, setTexto] = useState("");
  const [deletando, setDeletando] = useState(false);

  useEffect(() => {
    const frase = frases[fraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deletando && texto.length < frase.length) {
      timeout = setTimeout(() => setTexto(frase.slice(0, texto.length + 1)), 55);
    } else if (!deletando && texto.length === frase.length) {
      timeout = setTimeout(() => setDeletando(true), 2200);
    } else if (deletando && texto.length > 0) {
      timeout = setTimeout(() => setTexto(frase.slice(0, texto.length - 1)), 30);
    } else if (deletando && texto.length === 0) {
      setDeletando(false);
      setFraseIdx((i) => (i + 1) % frases.length);
    }

    return () => clearTimeout(timeout);
  }, [texto, deletando, fraseIdx]);

  return (
    <span className="font-mono text-sm md:text-base" style={{ color: "var(--accent-light)" }}>
      {texto}
      <span
        className="inline-block w-0.5 h-4 ml-0.5 align-middle"
        style={{
          background: "var(--accent)",
          animation: "blink 1s step-end infinite",
        }}
      />
    </span>
  );
}

const makeAnim = (delay: number) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] as const } },
});

export default function HeroSection() {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="min-h-screen flex items-center relative overflow-hidden pt-16">
      {/* Dot Pattern interativo */}
      <DotPattern />

      {/* Background glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
        style={{ background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)", filter: "blur(60px)" }}
      />

      <div className="max-w-5xl mx-auto px-6 w-full py-20">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-16">

          {/* Foto */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="flex-shrink-0"
          >
            <div
              className="relative w-44 h-44 md:w-52 md:h-52 rounded-full animate-pulse-glow"
              style={{ background: "var(--bg-secondary)", border: "3px solid var(--accent)" }}
            >
              {/* Substitua pelo componente Image com sua foto:
              <Image src="/foto.jpg" alt="Ingrid Gomes" fill className="rounded-full object-cover" /> */}
              <div className="w-full h-full rounded-full flex items-center justify-center">
                <svg viewBox="0 0 100 100" className="w-24 h-24 opacity-30" fill="none">
                  <circle cx="50" cy="38" r="18" fill="var(--text-secondary)" />
                  <ellipse cx="50" cy="80" rx="28" ry="18" fill="var(--text-secondary)" />
                </svg>
              </div>

              <div
                className="absolute -bottom-1 -right-1 flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                style={{ background: "var(--bg-secondary)", border: "1px solid var(--border-light)", color: "#4ade80" }}
              >
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                Disponível
              </div>
            </div>
          </motion.div>

          {/* Conteúdo */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-4 flex-1">
            <motion.p {...makeAnim(0)}
              className="font-mono text-sm tracking-widest uppercase"
              style={{ color: "var(--accent-light)" }}>
              Olá, eu sou
            </motion.p>

            <motion.h1 {...makeAnim(0.12)}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight"
              style={{ color: "var(--text-primary)" }}>
              Ingrid <span className="gradient-text">Gomes</span>
            </motion.h1>

            <motion.h2 {...makeAnim(0.24)}
              className="text-lg md:text-xl font-semibold"
              style={{ color: "var(--accent-light)" }}>
              Desenvolvedora Backend
            </motion.h2>

            <motion.p {...makeAnim(0.36)}
              className="text-sm md:text-base leading-relaxed max-w-lg"
              style={{ color: "var(--text-secondary)" }}>
              Desenvolvedora Back-end com foco em{" "}
              <span style={{ color: "var(--accent-light)", fontWeight: 500 }}>PHP e Laravel</span>
              , dedicada a construir{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>soluções eficientes, escaláveis e orientadas a resultados</span>
              . Transformo regras de negócio complexas em{" "}
              <span style={{ color: "var(--accent-light)", fontWeight: 500 }}>código limpo, organizado e de fácil manutenção</span>
              .{" "}
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              Atuo diretamente na implementação de funcionalidades, interpretação de requisitos e estruturação de sistemas, sempre com atenção à{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>qualidade e performance</span>
              . Tenho visão completa do desenvolvimento, com conhecimento em front-end que fortalece a entrega de aplicações consistentes.{" "}
              <br className="hidden md:block" />
              <br className="hidden md:block" />
              <span style={{ color: "var(--accent-light)", fontWeight: 500 }}>Movida por desafios, aprendizado contínuo e evolução constante</span>
              , busco criar soluções que não apenas funcionam, mas fazem a diferença.
            </motion.p>

            {/* Typewriter */}
            <motion.div {...makeAnim(0.44)} className="flex items-center gap-2 min-h-[28px]">
              <Typewriter />
            </motion.div>

            {/* Botões */}
            <motion.div {...makeAnim(0.52)}
              className="flex flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="/curriculo_ingrid.pdf"
                download
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{ background: "var(--accent)", color: "var(--text-primary)", boxShadow: "0 4px 20px var(--accent-glow)" }}
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Baixar CV
              </a>

              <button
                onClick={() => scrollTo("projetos")}
                className="flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-105"
                style={{ background: "var(--bg-secondary)", color: "var(--text-primary)", border: "1px solid var(--border-light)" }}
              >
                Ver projetos
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </motion.div>

            {/* Tags de skill */}
            <motion.div {...makeAnim(0.64)}
              className="flex flex-wrap gap-2 justify-center md:justify-start">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-mono font-medium"
                  style={{ background: "var(--accent-soft)", color: "var(--text-secondary)", border: "1px solid var(--border)" }}
                >
                  {skill}
                </span>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="flex justify-center mt-16"
        >
          <button
            onClick={() => scrollTo("projetos")}
            className="flex flex-col items-center gap-2 opacity-40 hover:opacity-70 transition-opacity"
          >
            <span className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>scroll</span>
            <motion.div animate={{ y: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "var(--text-secondary)" }}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </motion.div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
