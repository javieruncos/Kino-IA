import { motion, useReducedMotion } from "motion/react";
import { Aperture, ArrowUpRight, Play } from "lucide-react";
import {
  heroCamera,
  heroLenses,
  heroMedia,
  heroMeta,
  heroPrompt,
  heroScenes,
} from "../../data/heroData";

const rise = {
  hidden: { opacity: 0, y: 16 },
  shown: { opacity: 1, y: 0 },
};

export default function Hero() {
  const reduce = useReducedMotion();
  const calm = Boolean(reduce);

  const blinkAnim = calm ? { opacity: 1 } : { opacity: [1, 0.25, 1] };

  return (
    <section
      id="hero"
      aria-labelledby="hero-title"
      className="relative flex min-h-svh scroll-mt-20 flex-col overflow-hidden bg-ink text-cream lg:h-svh"
    >
      {/* Capa 1 — Environment */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:72px_72px] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_30%,black_30%,transparent_75%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_65%_20%,rgba(183,255,60,0.07),transparent_65%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_80%_at_50%_110%,rgba(0,0,0,0.9),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
      </div>

      <div className="relative mx-auto grid w-full max-w-[1440px] flex-1 grid-cols-1 content-center gap-8 px-6 pb-6 pt-20 md:px-10 lg:grid-cols-12 lg:gap-8 lg:px-14 lg:pt-20">
        {/* Capa 2 — Typography */}
        <motion.div
          initial="hidden"
          animate="shown"
          transition={{ staggerChildren: 0.09, delayChildren: 0.1 }}
          className="flex flex-col justify-center lg:col-span-6"
        >
          <motion.p
            variants={rise}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex items-center gap-3 font-mono text-[11px] tracking-[0.22em] text-muted"
          >
            <motion.span
              animate={blinkAnim}
              transition={
                calm
                  ? { duration: 0 }
                  : { duration: 2, repeat: Infinity, ease: "easeInOut" }
              }
              className="inline-block h-1.5 w-1.5 rounded-full bg-acid"
            />
            {heroMeta.eyebrow}
            <span className="hidden text-white/30 sm:inline">/</span>
            <span className="hidden text-cream/80 sm:inline">
              {heroMeta.scene}
            </span>
          </motion.p>

          <motion.h1
            id="hero-title"
            variants={rise}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="mt-5 font-display text-[clamp(2.75rem,5.5vw,4.25rem)] font-medium uppercase leading-[0.95] tracking-[-0.02em]"
          >
            Convierte una idea
            <span className="block text-cream">en una escena.</span>
          </motion.h1>

          <motion.p
            variants={rise}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-5 max-w-md text-base leading-relaxed text-muted md:text-lg"
          >
            KINO es un entorno de dirección cinematográfica: controla
            cámara, luz y movimiento, y luego genera el plano.
          </motion.p>

          <motion.div
            variants={rise}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center"
          >
            <a
              href="#canvas"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-acid px-7 py-3.5 font-display text-sm font-medium uppercase tracking-[0.08em] text-ink transition-colors hover:bg-acid-hover"
            >
              Empieza a dirigir
              <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
            </a>
            <a
              href="#process"
              className="inline-flex items-center justify-center gap-2 px-2 py-3.5 font-mono text-xs tracking-[0.18em] text-muted transition-colors hover:text-cream"
            >
              MIRA CÓMO DIRIGE
              <span aria-hidden="true" className="text-acid">
                →
              </span>
            </a>
          </motion.div>

          <motion.dl
            variants={rise}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-5 font-mono text-[11px] tracking-[0.18em] text-muted"
          >
            <div className="flex gap-2">
              <dt className="text-white/30">ESTADO</dt>
              <dd className="text-acid">{heroMeta.status}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/30">PLANO</dt>
              <dd className="text-cream/80">{heroMeta.frame}</dd>
            </div>
            <div className="flex gap-2">
              <dt className="text-white/30">RITMO</dt>
              <dd className="text-cream/80">{heroMeta.fps}</dd>
            </div>
          </motion.dl>
        </motion.div>

        {/* Capa 3 — Product visualization */}
        <div className="relative flex flex-col justify-center lg:col-span-6 lg:col-start-7">
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
            className="relative w-full lg:mx-auto lg:max-w-[560px]"
          >
            <div className="relative overflow-hidden rounded-xl border border-line bg-surface shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
              {/* Console header */}
              <div className="flex items-center justify-between border-b border-line px-5 py-3">
                <p className="font-mono text-[11px] tracking-[0.2em] text-muted">
                  KINO <span className="text-white/25">/</span> PROYECTO 01
                </p>
                <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-cream/80">
                  <motion.span
                    animate={blinkAnim}
                    transition={
                      calm
                        ? { duration: 0 }
                        : {
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                    }
                    className="inline-block h-1.5 w-1.5 rounded-full bg-acid"
                  />
                  {heroMeta.status}
                </p>
              </div>

              {/* Preview protagonista */}
              <div className="relative aspect-video overflow-hidden bg-black">
                {calm ? (
                  <img
                    src={heroMedia.poster}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  />
                ) : (
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster={heroMedia.poster}
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full object-cover object-center"
                  >
                    <source src={heroMedia.video} type="video/mp4" />
                  </video>
                )}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-8 bg-black"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-8 bg-black"
                />
                <div
                  aria-hidden="true"
                  className="absolute left-4 top-1/2 h-10 w-px -translate-y-1/2 bg-white/20"
                />
                <div
                  aria-hidden="true"
                  className="absolute right-4 top-1/2 h-10 w-px -translate-y-1/2 bg-white/20"
                />

                <p className="absolute left-4 top-2 font-mono text-[10px] tracking-[0.18em] text-cream/70">
                  {heroMeta.timecode}
                </p>
                <p className="absolute right-4 top-2 font-mono text-[10px] tracking-[0.18em] text-cream/70">
                  {heroMeta.frame}
                </p>

                <button
                  type="button"
                  aria-label="Play scene preview"
                  className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-cream backdrop-blur-sm transition-colors hover:border-acid hover:text-acid"
                >
                  <Play aria-hidden="true" className="h-4 w-4 fill-current" />
                </button>

                <div className="absolute inset-x-4 bottom-1.5">
                  <div className="flex items-center justify-between font-mono text-[10px] tracking-[0.18em]">
                    <span className="text-acid">GENERANDO</span>
                    <span className="text-cream/70">78%</span>
                  </div>
                  <div className="mt-1.5 h-px w-full bg-white/15">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: heroMeta.progress }}
                      transition={{
                        duration: calm ? 0 : 2.2,
                        ease: "easeOut",
                        delay: 0.8,
                      }}
                      className="h-px w-full origin-left bg-acid"
                    />
                  </div>
                </div>
              </div>

              {/* Prompt secundario */}
              <div className="border-t border-line px-5 py-4">
                <p className="font-mono text-[11px] tracking-[0.18em] text-white/30">
                  {heroPrompt.label} <span className="text-acid">—</span>{" "}
                  <span className="tracking-normal text-cream/90">
                    {heroPrompt.text}
                  </span>
                  <motion.span
                    animate={blinkAnim}
                    transition={
                      calm
                        ? { duration: 0 }
                        : {
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }
                    }
                    aria-hidden="true"
                    className="ml-1 inline-block h-3 w-[7px] translate-y-[2px] bg-acid"
                  />
                </p>
              </div>

              {/* Camera / lens — una sola fila técnica */}
              <div className="hidden items-center justify-between border-t border-line px-5 py-3 sm:flex">
                <div className="flex items-center gap-2">
                  <Aperture
                    aria-hidden="true"
                    className="h-3.5 w-3.5 text-muted"
                  />
                  <div className="flex gap-1.5">
                    {heroLenses.map((lens) => (
                      <span
                        key={lens.id}
                        className={
                          lens.active
                            ? "rounded-full bg-acid px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-ink"
                            : "rounded-full border border-line px-2.5 py-1 font-mono text-[10px] tracking-[0.12em] text-muted"
                        }
                      >
                        {lens.label}
                      </span>
                    ))}
                  </div>
                </div>
                <p className="font-mono text-[10px] tracking-[0.18em] text-muted">
                  {heroCamera.map((c) => c.label).join("  ·  ")}
                </p>
              </div>

              {/* Timeline */}
              <div className="flex items-center gap-3 border-t border-line bg-elevated px-5 py-3">
                <Play
                  aria-hidden="true"
                  className="h-3.5 w-3.5 fill-current text-cream"
                />
                <div className="h-px flex-1 bg-white/15">
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 0.25 }}
                    transition={{
                      duration: calm ? 0 : 1.8,
                      ease: "easeOut",
                      delay: 1,
                    }}
                    className="h-px w-full origin-left bg-cream/80"
                  />
                </div>
                <p className="font-mono text-[10px] tracking-[0.14em] text-muted">
                  {heroMeta.elapsed} / {heroMeta.duration}
                </p>
                <div className="hidden gap-1.5 md:flex">
                  {heroScenes.map((scene) => (
                    <span
                      key={scene.id}
                      className={
                        scene.active
                          ? "h-1 w-6 rounded-full bg-acid"
                          : "h-1 w-6 rounded-full bg-white/15"
                      }
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Metadata flotante mínima */}
            <div
              aria-hidden="true"
              className="absolute -left-3 top-16 hidden rounded-md border border-line bg-ink/90 px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-cream/80 backdrop-blur md:block lg:-left-8"
            >
              ESCENA 01 <span className="text-acid">●</span>
            </div>
            <div
              aria-hidden="true"
              className="absolute -right-2 bottom-28 hidden rounded-md border border-line bg-ink/90 px-3 py-2 font-mono text-[10px] tracking-[0.18em] text-cream/80 backdrop-blur md:block lg:-right-6"
            >
              f/1.8 — 50MM
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
