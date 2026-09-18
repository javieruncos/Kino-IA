import { motion, useReducedMotion } from "motion/react";
import { Play } from "lucide-react";

const LENSES = [
  { id: "35", label: "35mm", active: true },
  { id: "50", label: "50mm", active: false },
  { id: "85", label: "85mm", active: false },
];

const SCENES = [
  { id: "01", active: false },
  { id: "02", active: false },
  { id: "03", active: false },
  { id: "04", active: true },
];

const rise = {
  hidden: { opacity: 0, y: 14 },
  shown: { opacity: 1, y: 0 },
};

export default function AICanvas() {
  const reduce = useReducedMotion();
  const calm = Boolean(reduce);

  return (
    <section
      id="canvas"
      aria-labelledby="canvas-title"
      className="relative overflow-hidden border-t border-line bg-ink text-cream"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        {/* Header editorial */}
        <motion.div
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ staggerChildren: calm ? 0 : 0.09 }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <motion.p
              variants={rise}
              transition={{ duration: calm ? 0 : 0.6, ease: "easeOut" }}
              className="font-mono text-[11px] tracking-[0.22em] text-muted"
            >
              KINO / CANVAS — 02
            </motion.p>
            <motion.h2
              id="canvas-title"
              variants={rise}
              transition={{ duration: calm ? 0 : 0.7, ease: "easeOut" }}
              className="mt-6 font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium uppercase leading-[1.02] tracking-[-0.015em]"
            >
              Direct the frame.
              <span className="block text-muted">Shape the scene.</span>
            </motion.h2>
          </div>
          <motion.p
            variants={rise}
            transition={{ duration: calm ? 0 : 0.6, ease: "easeOut" }}
            className="max-w-sm self-end text-base leading-relaxed text-muted lg:col-span-4 lg:col-start-9"
          >
            Now we enter the directing environment — every decision lands
            directly on the frame.
          </motion.p>
        </motion.div>

        {/* Workspace */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: calm ? 0 : 0.8, ease: "easeOut" }}
          className="mt-14 overflow-hidden rounded-xl border border-line bg-surface shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)] md:mt-16"
        >
          {/* Top bar */}
          <div className="flex items-center justify-between gap-4 border-b border-line px-5 py-3">
            <p className="font-mono text-[11px] tracking-[0.2em] text-muted">
              KINO <span className="text-white/25">/</span> PROJECT 01{" "}
              <span className="text-white/25">/</span>{" "}
              <span className="text-cream/85">SCENE 04</span>
            </p>
            <p className="flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] text-cream/80">
              <motion.span
                animate={calm ? { opacity: 1 } : { opacity: [1, 0.25, 1] }}
                transition={
                  calm
                    ? { duration: 0 }
                    : { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }
                aria-hidden="true"
                className="inline-block h-1.5 w-1.5 rounded-full bg-acid"
              />
              DIRECTING
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Preview protagonista */}
            <motion.div
              initial={calm ? { opacity: 0 } : { opacity: 0, scale: 0.985 }}
              whileInView={calm ? { opacity: 1 } : { opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: calm ? 0 : 0.9, ease: "easeOut" }}
              className="relative order-1 lg:order-2 lg:col-span-6"
            >
              <div className="relative aspect-video overflow-hidden bg-black">
                {/* Escena ficticia: coche solitario, ciudad lluviosa */}
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[linear-gradient(180deg,#0b1418_0%,#060d10_48%,#020405_100%)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute left-0 right-0 top-[58%] h-px bg-[rgba(255,176,66,0.5)] blur-[0.5px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute left-[10%] right-[10%] top-[60%] h-10 bg-[radial-gradient(ellipse_50%_100%_at_50%_0%,rgba(255,176,66,0.14),transparent_70%)]"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-[22%] left-1/2 h-7 w-40 -translate-x-1/2 rounded-[50%] bg-black blur-[3px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-[24%] left-1/2 h-5 w-32 -translate-x-1/2 rounded-t-full bg-[#0d1a1f]"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-[26%] left-[38%] h-1 w-2 rounded-full bg-[rgba(255,120,60,0.8)] blur-[1px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute bottom-[26%] right-[38%] h-1 w-2 rounded-full bg-[rgba(255,220,160,0.9)] blur-[1px]"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 bg-[repeating-linear-gradient(105deg,transparent_0px,transparent_9px,rgba(255,255,255,0.025)_10px)]"
                />
                {/* Letterbox + guías */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-9 bg-black"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-9 bg-black"
                />
                <div
                  aria-hidden="true"
                  className="absolute left-5 top-1/2 h-12 w-px -translate-y-1/2 bg-white/20"
                />
                <div
                  aria-hidden="true"
                  className="absolute right-5 top-1/2 h-12 w-px -translate-y-1/2 bg-white/20"
                />
                {/* Scanline atmosférica — detalle mínimo */}
                <motion.div
                  aria-hidden="true"
                  initial={{ top: "12%" }}
                  animate={calm ? { top: "12%" } : { top: ["12%", "86%"] }}
                  transition={
                    calm
                      ? { duration: 0 }
                      : { duration: 11, repeat: Infinity, ease: "linear" }
                  }
                  className="absolute inset-x-8 h-px bg-white/[0.05]"
                />
                {/* Metadata integrada en el frame */}
                <p className="absolute left-5 top-2.5 font-mono text-[10px] tracking-[0.18em] text-cream/70">
                  FRAME 048
                </p>
                <p className="absolute right-5 top-2.5 font-mono text-[10px] tracking-[0.18em] text-cream/70">
                  16:9
                </p>
                <p className="absolute bottom-2.5 left-5 font-mono text-[10px] tracking-[0.18em] text-cream/70">
                  35MM <span className="text-white/30">·</span> F/1.8
                </p>
                <p className="absolute bottom-2.5 right-5 font-mono text-[10px] tracking-[0.18em] text-cream/70">
                  00:00:31:12
                </p>

                <button
                  type="button"
                  aria-label="Play scene preview"
                  className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/50 text-cream backdrop-blur-sm transition-colors hover:border-acid hover:text-acid"
                >
                  <Play aria-hidden="true" className="h-4 w-4 fill-current" />
                </button>
              </div>
            </motion.div>

            {/* Prompt */}
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: calm ? 0 : 0.6, ease: "easeOut" }}
              className="order-2 border-t border-line p-5 md:p-6 lg:order-1 lg:col-span-3 lg:border-r lg:border-t-0"
            >
              <p className="font-mono text-[11px] tracking-[0.22em] text-white/35">
                SCENE DESCRIPTION
              </p>
              <p className="mt-4 text-[15px] leading-relaxed text-cream/90">
                A lone car moving through a rain-soaked city at night.
              </p>
              <div className="mt-6 space-y-4 border-t border-line pt-5">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                    ATMOSPHERE
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] tracking-[0.14em] text-cream/80">
                    COLD / SUSPENSEFUL
                  </p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                    MOVEMENT
                  </p>
                  <p className="mt-1.5 font-mono text-[11px] tracking-[0.14em] text-cream/80">
                    SLOW TRACKING SHOT
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Directing — controles visuales, no funcionales */}
            <motion.div
              variants={rise}
              initial="hidden"
              whileInView="shown"
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: calm ? 0 : 0.6, ease: "easeOut" }}
              className="order-3 border-t border-line p-5 md:p-6 lg:col-span-3 lg:border-l lg:border-t-0"
            >
              <p className="font-mono text-[11px] tracking-[0.22em] text-white/35">
                DIRECTING
              </p>
              <div className="mt-4">
                <p className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                  CAMERA
                </p>
                <div className="mt-2 flex gap-1.5">
                  {LENSES.map((lens) => (
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
              <dl className="mt-5 space-y-3.5">
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                    LENS
                  </dt>
                  <dd className="font-mono text-[11px] tracking-[0.14em] text-cream/80">
                    F/1.8
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                    LIGHT
                  </dt>
                  <dd className="font-mono text-[11px] tracking-[0.14em] text-cream/80">
                    NIGHT / SOFT
                  </dd>
                </div>
                <div className="flex items-baseline justify-between gap-3">
                  <dt className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                    MOTION
                  </dt>
                  <dd className="font-mono text-[11px] tracking-[0.14em] text-cream/80">
                    TRACKING
                  </dd>
                </div>
                <div>
                  <div className="flex items-baseline justify-between gap-3">
                    <dt className="font-mono text-[10px] tracking-[0.2em] text-white/35">
                      INTENSITY
                    </dt>
                    <dd className="font-mono text-[11px] tracking-[0.14em] text-acid">
                      72%
                    </dd>
                  </div>
                  <div className="mt-2 h-px w-full bg-white/15">
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 0.72 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: calm ? 0 : 1.6,
                        ease: "easeOut",
                        delay: 0.3,
                      }}
                      className="h-px w-full origin-left bg-cream/70"
                    />
                  </div>
                </div>
              </dl>
            </motion.div>
          </div>

          {/* Timeline */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: calm ? 0 : 0.7, ease: "easeOut" }}
            className="order-4 border-t border-line bg-elevated px-5 py-4"
          >
            <div className="flex items-center gap-3">
              <Play
                aria-hidden="true"
                className="h-3.5 w-3.5 shrink-0 fill-current text-cream"
              />
              <div className="relative h-px flex-1 bg-white/15">
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 0.43 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: calm ? 0 : 1.8,
                    ease: "easeOut",
                    delay: 0.4,
                  }}
                  className="h-px w-full origin-left bg-cream/60"
                />
                <motion.span
                  aria-hidden="true"
                  animate={calm ? { x: 0 } : { x: [0, 6, 0] }}
                  transition={
                    calm
                      ? { duration: 0 }
                      : { duration: 7, repeat: Infinity, ease: "easeInOut" }
                  }
                  className="absolute left-[43%] top-1/2 block h-2 w-2 -translate-y-1/2 rounded-full bg-acid"
                />
              </div>
              <p className="shrink-0 font-mono text-[10px] tracking-[0.14em] text-muted">
                00:31 / 01:12
              </p>
            </div>
            <ol className="mt-3 flex gap-5">
              {SCENES.map((scene) => (
                <li
                  key={scene.id}
                  className={
                    scene.active
                      ? "font-mono text-[10px] tracking-[0.18em] text-acid"
                      : "font-mono text-[10px] tracking-[0.18em] text-white/30"
                  }
                >
                  {scene.id}
                </li>
              ))}
            </ol>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
