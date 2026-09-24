import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "motion/react";

const LINKS = [
  { id: "direction", label: "DIRECCIÓN", href: "#direction" },
  { id: "canvas", label: "CANVAS", href: "#canvas" },
  { id: "process", label: "PROCESO", href: "#process" },
];

const CTA_LABEL = "EMPIEZA A DIRIGIR";
const CTA_HREF = "#canvas";
const META_LABEL = "AI VIDEO / 01";

function useScrolled(threshold = 24) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return scrolled;
}

export default function Navbar() {
  const reduce = useReducedMotion();
  const calm = Boolean(reduce);
  const scrolled = useScrolled();
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ opacity: 0, y: calm ? 0 : -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: calm ? 0 : 0.6, ease: "easeOut" }}
      className={
        scrolled || open
          ? "fixed inset-x-0 top-0 z-50 border-b border-line bg-surface transition-colors duration-300"
          : "fixed inset-x-0 top-0 z-50 border-b border-transparent bg-transparent transition-colors duration-300"
      }
    >
      <div className="mx-auto flex h-[68px] w-full max-w-[1440px] items-center justify-between px-6 md:px-10 lg:px-14">
        <span className="font-display text-lg font-semibold uppercase tracking-[-0.02em] text-cream">
          KINO
        </span>

        <nav aria-label="Navegación principal" className="hidden lg:block">
          <ul className="flex items-center gap-10">
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

        <div className="hidden items-center gap-6 sm:flex">
          <span
            aria-hidden="true"
            className="hidden font-mono text-[10px] tracking-[0.18em] text-white/35 lg:block"
          >
            {META_LABEL}
          </span>
          <a
            href={CTA_HREF}
            className="inline-flex items-center justify-center rounded-full bg-acid px-5 py-2.5 font-display text-[13px] font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:bg-acid-hover"
          >
            {CTA_LABEL}
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="kino-menu"
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          className="font-mono text-[11px] tracking-[0.22em] text-cream transition-colors hover:text-acid lg:hidden"
        >
          {open ? "CERRAR" : "MENÚ"}
        </button>
      </div>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: calm ? 0 : -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: calm ? 0 : 0.25, ease: "easeOut" }}
          id="kino-menu"
          className="border-t border-line bg-surface lg:hidden"
        >
          <nav
            aria-label="Navegación principal móvil"
            className="mx-auto w-full max-w-[1440px] px-6 py-8 md:px-10"
          >
            <ul className="flex flex-col gap-6">
              {LINKS.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-3xl font-medium uppercase leading-none tracking-[-0.01em] text-cream transition-colors hover:text-acid"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <p
              aria-hidden="true"
              className="mt-8 font-mono text-[10px] tracking-[0.18em] text-white/35"
            >
              {META_LABEL}
            </p>
            <a
              href={CTA_HREF}
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-acid px-5 py-3.5 font-display text-sm font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:bg-acid-hover"
            >
              {CTA_LABEL}
            </a>
          </nav>
        </motion.div>
      ) : null}
    </motion.header>
  );
}
