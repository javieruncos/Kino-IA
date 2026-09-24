import { motion, useReducedMotion } from "motion/react";

const LINKS = [
  { id: "direction", label: "DIRECCIÓN", href: "#direction" },
  { id: "canvas", label: "CANVAS", href: "#canvas" },
  { id: "process", label: "PROCESO", href: "#process" },
];

export default function Footer() {
  const reduce = useReducedMotion();
  const calm = Boolean(reduce);

  return (
    <footer className="relative border-t border-line bg-ink text-cream">
      <div className="mx-auto w-full max-w-[1440px] px-6 py-20 md:px-10 md:py-28 lg:px-14">
        <motion.div
          initial={{ opacity: 0, y: calm ? 0 : 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: calm ? 0 : 0.6, ease: "easeOut" }}
          className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between"
        >
          <div>
            <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
              KINO / ESCENA FINAL
            </p>
            <p className="mt-6 font-display text-[clamp(2.5rem,6vw,4.5rem)] font-medium uppercase leading-[0.95] tracking-[-0.02em]">
              Convierte una idea
              <span className="block text-cream">
                en una escena
                <span aria-hidden="true" className="text-acid">
                  .
                </span>
              </span>
            </p>
          </div>
          <a
            href="#canvas"
            className="inline-flex w-full items-center justify-center rounded-full bg-acid px-7 py-3.5 font-display text-sm font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:bg-acid-hover sm:w-auto sm:self-start lg:self-end"
          >
            Empieza a dirigir
          </a>
        </motion.div>

        <nav
          aria-label="Navegación del footer"
          className="mt-16 border-t border-line pt-8"
        >
          <ul className="flex flex-col gap-4 sm:flex-row sm:gap-10">
            {LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  className="font-mono text-[11px] tracking-[0.22em] text-muted transition-colors hover:text-cream"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mt-8 flex flex-col gap-4 border-t border-line pt-6 md:flex-row md:items-center md:justify-between">
          <p className="font-mono text-[10px] tracking-[0.18em] text-white/35">
            KINO / PLATAFORMA CINEMATOGRÁFICA IA
          </p>
          <div className="flex items-center justify-between gap-8 md:justify-end">
            <p className="font-mono text-[10px] tracking-[0.18em] text-white/35">
              © 2026 KINO
            </p>
            <a
              href="#hero"
              className="font-mono text-[10px] tracking-[0.18em] text-muted transition-colors hover:text-cream"
            >
              ↑ PRINCIPIO
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
