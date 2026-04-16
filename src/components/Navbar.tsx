"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { label: "Início", href: "#hero" },
  { label: "Projetos", href: "#projetos" },
  { label: "Currículo", href: "#curriculo" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = ["hero", "projetos", "curriculo", "contato"];
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (href: string) => {
    setMenuOpen(false);
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(13, 8, 5, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid var(--border)" : "none",
      }}
    >
      <nav className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollTo("#hero")}
          className="font-mono text-sm font-bold tracking-widest uppercase"
          style={{ color: "var(--accent-light)" }}
        >
          {"<IG />"}
        </button>

        <ul className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.href}>
                <button
                  onClick={() => scrollTo(link.href)}
                  className="relative text-sm font-medium transition-colors duration-200 pb-1"
                  style={{ color: isActive ? "var(--text-primary)" : "var(--text-secondary)" }}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-0 right-0 h-0.5"
                      style={{ background: "var(--accent)" }}
                    />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        <button
          className="md:hidden flex flex-col gap-1.5 p-1"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label="Abrir menu"
        >
          <motion.span animate={menuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 rounded" style={{ background: "var(--text-primary)" }} />
          <motion.span animate={menuOpen ? { opacity: 0 } : { opacity: 1 }} className="block h-0.5 w-6 rounded" style={{ background: "var(--text-primary)" }} />
          <motion.span animate={menuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} className="block h-0.5 w-6 rounded" style={{ background: "var(--text-primary)" }} />
        </button>
      </nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden overflow-hidden"
            style={{ background: "rgba(13, 8, 5, 0.97)", borderBottom: "1px solid var(--border)" }}
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {links.map((link) => (
                <li key={link.href}>
                  <button onClick={() => scrollTo(link.href)} className="text-base font-medium w-full text-left py-1" style={{ color: "var(--text-secondary)" }}>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
