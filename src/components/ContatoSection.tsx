"use client";

import { useState } from "react";
import { motion } from "framer-motion";

type FormState = { nome: string; email: string; mensagem: string };
type Status = "idle" | "sending" | "sent";

const inputStyle: React.CSSProperties = {
  background: "var(--bg-tertiary)",
  border: "1px solid var(--border)",
  color: "var(--text-primary)",
  borderRadius: "8px",
  padding: "10px 14px",
  fontSize: "0.875rem",
  width: "100%",
  outline: "none",
  transition: "border-color 0.2s",
};

export default function ContatoSection() {
  const [form, setForm] = useState<FormState>({ nome: "", email: "", mensagem: "" });
  const [status, setStatus] = useState<Status>("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    setForm({ nome: "", email: "", mensagem: "" });
  };

  return (
    <section id="contato" className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <p className="font-mono text-xs tracking-widest uppercase mb-2" style={{ color: "var(--accent-light)" }}>05. Contato</p>
          <h2 className="text-3xl md:text-4xl font-bold" style={{ color: "var(--text-primary)" }}>Vamos conversar?</h2>
          <p className="mt-3 text-sm max-w-md" style={{ color: "var(--text-secondary)" }}>
            Estou aberta a oportunidades como desenvolvedora júnior. Me envie uma mensagem!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Esquerda — info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {[
              {
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
                label: "E-mail",
                valor: "ingridgomespereira98@gmail.com",
                href: "mailto:ingridgomespereira98@gmail.com",
              },
              {
                icon: <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
                label: "Telefone",
                valor: "(63) 99113-0560",
                href: "tel:+5563991130560",
              },
            ].map((c) => (
              <a key={c.label} href={c.href}
                className="flex items-center gap-4 p-4 rounded-xl transition-all duration-200 hover:scale-[1.01]"
                style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              >
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "var(--accent-soft)", color: "var(--accent-light)" }}>
                  {c.icon}
                </div>
                <div>
                  <p className="text-xs" style={{ color: "var(--text-secondary)" }}>{c.label}</p>
                  <p className="text-sm font-medium" style={{ color: "var(--text-primary)" }}>{c.valor}</p>
                </div>
              </a>
            ))}

            <div>
              <p className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: "var(--text-secondary)" }}>Redes sociais</p>
              <div className="flex gap-3">
                {[
                  {
                    label: "GitHub",
                    href: "https://github.com/Ingridgph",
                    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" /></svg>,
                  },
                  {
                    label: "LinkedIn",
                    href: "https://linkedin.com/in/ingridgph",
                    icon: <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
                  },
                ].map((rede) => (
                  <a key={rede.label} href={rede.href} target="_blank" rel="noopener noreferrer" aria-label={rede.label}
                    className="w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-200 hover:scale-110"
                    style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                    onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--accent-light)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--accent)"; }}
                    onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"; }}
                  >
                    {rede.icon}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Direita — formulário */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {status === "sent" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="h-full flex flex-col items-center justify-center gap-4 p-8 rounded-xl text-center"
                style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}
              >
                <div className="w-14 h-14 rounded-full flex items-center justify-center" style={{ background: "var(--accent-soft)" }}>
                  <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "var(--accent-light)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold" style={{ color: "var(--text-primary)" }}>Mensagem enviada!</h3>
                <p className="text-sm" style={{ color: "var(--text-secondary)" }}>Obrigada pelo contato. Responderei em breve.</p>
                <button onClick={() => setStatus("idle")} className="text-xs underline mt-2" style={{ color: "var(--text-secondary)" }}>
                  Enviar outra mensagem
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-6 rounded-xl"
                style={{ background: "var(--bg-secondary)", border: "1px solid var(--border)" }}>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>Nome</label>
                  <input name="nome" value={form.nome} onChange={handleChange} required placeholder="Seu nome" style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--accent)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--border)")} />
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>E-mail</label>
                  <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="seu@email.com" style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--accent)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--border)")} />
                </div>
                <div>
                  <label className="block text-xs mb-1.5" style={{ color: "var(--text-secondary)" }}>Mensagem</label>
                  <textarea name="mensagem" value={form.mensagem} onChange={handleChange} required rows={5}
                    placeholder="Olá Ingrid, gostaria de..." style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "var(--accent)")}
                    onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "var(--border)")} />
                </div>
                <button type="submit" disabled={status === "sending"}
                  className="w-full py-3 rounded-lg text-sm font-semibold transition-all duration-200 hover:scale-[1.02] disabled:opacity-60"
                  style={{ background: "var(--accent)", color: "var(--text-primary)", boxShadow: "0 4px 20px var(--accent-glow)" }}>
                  {status === "sending" ? "Enviando..." : "Enviar mensagem"}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20 pt-8 text-center"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <p className="text-xs" style={{ color: "var(--text-secondary)" }}>
            Feito com <span style={{ color: "var(--accent-light)" }}>♥</span> por Ingrid Gomes · {new Date().getFullYear()}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
