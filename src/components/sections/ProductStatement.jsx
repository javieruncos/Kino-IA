import { motion, useReducedMotion } from "motion/react";

const STEPS = [
  {
    id: "01",
    name: "IDEA",
    description: "The intention — an image described in words.",
    active: false,
  },
  {
    id: "02",
    name: "DIRECTION",
    description: "The decisions — lens, light, movement, composition.",
    active: true,
  },
  {
    id: "03",
    name: "SCENE",
    description: "The result — a frame that feels directed.",
    active: false,
  },
];

const rise = {
  hidden: { opacity: 0, y: 12 },
  shown: { opacity: 1, y: 0 },
};

export default function ProductStatement() {
  const reduce = useReducedMotion();
  const calm = Boolean(reduce);

  return (
    <section
      id="philosophy"
      aria-labelledby="statement-title"
      className="relative border-t border-line bg-ink text-cream"
    >
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-14 px-6 py-24 md:px-10 md:py-36 lg:grid-cols-12 lg:gap-8 lg:px-14 lg:py-44">
        {/* Statement */}
        <motion.div
          initial="hidden"
          whileInView="shown"
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ staggerChildren: calm ? 0 : 0.08 }}
          className="flex flex-col justify-center lg:col-span-8"
        >
          <motion.div
            variants={rise}
            transition={{ duration: calm ? 0 : 0.6, ease: "easeOut" }}
            className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] tracking-[0.22em] text-muted"
          >
            <p>KINO / PHILOSOPHY — 01</p>
            <p className="hidden sm:block">VISUAL LANGUAGE / KINO</p>
          </motion.div>

          <motion.h2
            id="statement-title"
            variants={rise}
            transition={{ duration: calm ? 0 : 0.7, ease: "easeOut" }}
            className="mt-8 font-display text-[clamp(2.25rem,5.5vw,4.75rem)] font-medium uppercase leading-[1.02] tracking-[-0.015em]"
          >
            Creative intent
            <span className="block text-muted">becomes</span>
            <span className="block">
              visual direction
              <span aria-hidden="true" className="text-acid">
                .
              </span>
            </span>
          </motion.h2>

          <motion.p
            variants={rise}
            transition={{ duration: calm ? 0 : 0.6, ease: "easeOut" }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            KINO is a directing environment for generative scenes — you shape
            camera, light, movement and atmosphere until the frame feels
            intentional.
          </motion.p>

          <motion.p
            variants={rise}
            transition={{ duration: calm ? 0 : 0.6, ease: "easeOut" }}
            className="mt-8 border-t border-line pt-5 font-mono text-[11px] tracking-[0.2em] text-white/40"
          >
            CAMERA <span className="text-acid">·</span> LIGHT{" "}
            <span className="text-acid">·</span> MOVEMENT{" "}
            <span className="text-acid">·</span> COMPOSITION{" "}
            <span className="text-acid">·</span> ATMOSPHERE
          </motion.p>
        </motion.div>

        {/* Narrativa secundaria: IDEA → DIRECTION → SCENE */}
        <div className="lg:col-span-3 lg:col-start-10">
          <motion.ol
            initial="hidden"
            whileInView="shown"
            viewport={{ once: true, margin: "-15% 0px" }}
            transition={{ staggerChildren: calm ? 0 : 0.12 }}
            className="relative flex flex-col gap-0 border-t border-line lg:border-t-0 lg:pl-8"
          >
            <motion.span
              aria-hidden="true"
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true, margin: "-15% 0px" }}
              transition={{ duration: calm ? 0 : 1.2, ease: "easeOut" }}
              className="absolute bottom-0 left-0 top-0 hidden w-px origin-top bg-gradient-to-b from-acid/60 via-white/15 to-transparent lg:block"
            />
            {STEPS.map((step) => (
              <motion.li
                key={step.id}
                variants={rise}
                transition={{ duration: calm ? 0 : 0.6, ease: "easeOut" }}
                className="border-b border-line py-5 first:pt-5 lg:py-6"
              >
                <p
                  className={
                    step.active
                      ? "font-mono text-[11px] tracking-[0.22em] text-acid"
                      : "font-mono text-[11px] tracking-[0.22em] text-white/35"
                  }
                >
                  {step.id}
                </p>
                <p
                  className={
                    step.active
                      ? "mt-2 font-display text-xl font-medium uppercase tracking-[0.04em] text-cream"
                      : "mt-2 font-display text-xl font-medium uppercase tracking-[0.04em] text-cream/60"
                  }
                >
                  {step.name}
                </p>
                <p className="mt-1.5 max-w-xs text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </motion.ol>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: calm ? 0 : 0.8, delay: calm ? 0 : 0.4 }}
            className="mt-6 flex items-center gap-2 font-mono text-[11px] tracking-[0.22em] text-muted"
          >
            <span
              aria-hidden="true"
              className="inline-block h-1.5 w-1.5 rounded-full bg-acid"
            />
            DIRECTING MODE / ACTIVE
          </motion.p>
        </div>
      </div>
    </section>
  );
}
