import { useRef, useState } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { CHAPTERS } from "../../data/featureStoryData";
import useIsDesktop from "../../hooks/useIsDesktop.js";

/* Frame cinematográfico por capítulo: fotografía real con la composición
   original intacta. */
function CinematicFrame({ chapter, aspect = "aspect-[21/9]" }) {
  return (
    <figure>
      <div
        className={`relative w-full ${aspect} overflow-hidden rounded-xl border border-line bg-black`}
      >
        <img
          src={chapter.image}
          alt={chapter.imageAlt}
          loading="lazy"
          decoding="async"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
      </div>
      <figcaption className="mt-3 font-mono text-[10px] tracking-[0.2em] text-white/35">
        REF / {chapter.name} — {chapter.meta[chapter.meta.length - 1]}
      </figcaption>
    </figure>
  );
}

/* Bloque técnico editorial: voz secundaria junto a la descripción.
   Sin fondos, sin cards, sin HUD — solo borde vertical y mono. */
function TechnicalDirection({ chapter }) {
  const tokens = chapter.meta;
  const head = tokens.slice(0, -1).join("  /  ");
  const tail = tokens[tokens.length - 1];
  return (
    <div className="border-l border-line pl-5 lg:pl-6">
      <p className="font-mono text-[10px] tracking-[0.2em] text-white/35">
        DIRECCIÓN TÉCNICA
      </p>
      {head ? (
        <p className="mt-3 font-mono text-[11px] tracking-[0.14em] text-cream/80">
          {head}
        </p>
      ) : null}
      <p className="mt-2 font-mono text-[11px] tracking-[0.14em] text-cream/80">
        {tail}
      </p>
    </div>
  );
}

/* Secuencia vertical: mobile, tablet y fallback reduced-motion. */
function StaticStory({ animated }) {
  const calm = !animated;
  return (
    <div>
      {CHAPTERS.map((chapter, i) => (
        <motion.article
          key={chapter.id}
          initial={{ opacity: 0, y: calm ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: calm ? 0 : 0.6, ease: "easeOut" }}
          aria-labelledby={`chapter-title-${chapter.id}`}
          className="border-t border-line py-12 first:border-t-0 first:pt-2 md:py-16"
        >
          <div className="lg:grid lg:grid-cols-12 lg:items-center lg:gap-10">
            <div className="lg:col-span-5">
              <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
                {chapter.index} / {chapter.name}
                <span className="ml-3 tracking-[0.08em] text-white/30">
                  {chapter.question}
                </span>
              </p>
              <h3
                id={`chapter-title-${chapter.id}`}
                className="mt-6 font-display text-3xl font-medium uppercase leading-[1.05] tracking-[-0.01em] text-cream md:text-4xl"
              >
                {chapter.title}
              </h3>
              <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-12 md:gap-6 lg:block lg:space-y-6">
                <p className="text-base leading-relaxed text-muted md:col-span-7">
                  {chapter.copy}
                </p>
            <div className="md:col-span-5">
              <TechnicalDirection chapter={chapter} />
            </div>
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="mt-8 md:mt-10 lg:mt-0">
            <CinematicFrame
              chapter={chapter}
              aspect="aspect-video"
            />
          </div>
        </div>
          </div>
          <span className="sr-only">Capítulo {i + 1} de 4</span>
        </motion.article>
      ))}
    </div>
  );
}

/* Sticky storytelling: solo lg+, solo sin reduced-motion. */
function StickyStory() {
  const trackRef = useRef(null);
  const chapterRefs = useRef([]);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const calm = Boolean(reduce);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 80, damping: 26 });

  useMotionValueEvent(smooth, "change", (value) => {
    const index = Math.min(
      CHAPTERS.length - 1,
      Math.max(0, Math.floor(value * CHAPTERS.length)),
    );
    setActive((prev) => (prev === index ? prev : index));
  });

  const goTo = (index) => {
    chapterRefs.current[index]?.scrollIntoView({
      behavior: calm ? "auto" : "smooth",
      block: "center",
    });
  };

  return (
    <div ref={trackRef} className="relative">
      <div className="sticky top-24 z-10 border-b border-line bg-ink/95 py-4 backdrop-blur-sm">
        <div
          aria-hidden="true"
          className="relative h-px w-full bg-white/10"
        >
          <motion.div
            animate={{ scaleX: smooth }}
            className="h-px w-full origin-left bg-acid/70"
          />
        </div>
        <nav aria-label="Capítulos de dirección" className="mt-3 flex gap-5">
          {CHAPTERS.map((chapter, i) => (
            <button
              key={chapter.id}
              type="button"
              onClick={() => goTo(i)}
              aria-current={active === i ? "true" : undefined}
              aria-label={`Ir al capítulo ${chapter.name}`}
              className={
                active === i
                  ? "font-mono text-[11px] tracking-[0.16em] text-acid"
                  : "font-mono text-[11px] tracking-[0.16em] text-white/35 transition-colors hover:text-cream"
              }
            >
              {chapter.index}
              <span
                className={
                  active === i ? "ml-2 text-cream" : "ml-2 text-cream/50"
                }
              >
                {chapter.name}
              </span>
            </button>
          ))}
        </nav>
      </div>

      <ol className="mt-4">
        {CHAPTERS.map((chapter, i) => (
          <motion.li
            key={chapter.id}
            ref={(node) => {
              chapterRefs.current[i] = node;
            }}
            animate={{ opacity: active === i ? 1 : 0.35 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            aria-labelledby={`chapter-title-${chapter.id}`}
            className="flex flex-col justify-start border-b border-line py-14"
          >
            <div className="flex items-baseline justify-between gap-6">
              <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
                {chapter.index} /{" "}
                <span
                  className={active === i ? "text-acid" : "text-cream/70"}
                >
                  {chapter.name}
                </span>
              </p>
              <p className="shrink-0 font-mono text-[11px] tracking-[0.08em] text-white/30">
                {chapter.question}
              </p>
            </div>
            <div className="mt-8 grid grid-cols-12 items-center gap-10">
              <div className="col-span-5">
                <h3
                  id={`chapter-title-${chapter.id}`}
                  className="font-display text-[clamp(2.25rem,3.2vw,3.5rem)] font-medium uppercase leading-[1.02] tracking-[-0.015em] text-cream"
                >
                  {chapter.title}
                </h3>
                <p className="mt-5 text-base leading-relaxed text-muted">
                  {chapter.copy}
                </p>
                <div className="mt-8">
                  <TechnicalDirection chapter={chapter} />
                </div>
              </div>
              <div className="col-span-7">
                <CinematicFrame
                  chapter={chapter}
                  aspect="aspect-video"
                />
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}

export default function FeatureStorytelling() {
  const reduce = useReducedMotion();
  const calm = Boolean(reduce);
  const isDesktop = useIsDesktop();

  return (
    <section
      id="direction"
      aria-labelledby="direction-title"
      className="relative scroll-mt-20 overflow-hidden border-t border-line bg-ink text-cream"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
              KINO / DIRECCIÓN — 03
            </p>
            <h2
              id="direction-title"
              className="mt-6 font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium uppercase leading-[1.02] tracking-[-0.015em]"
            >
              Cada plano
              <span className="block text-muted">es una decisión.</span>
            </h2>
          </div>
          <p className="max-w-sm self-end text-base leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
            Cuatro dimensiones que controla la dirección, una sola escena
            continua.
          </p>
        </div>

        <div className="mt-14 md:mt-20">
          {calm || !isDesktop ? (
            <StaticStory animated={!calm && !isDesktop} />
          ) : (
            <StickyStory />
          )}
        </div>
      </div>
    </section>
  );
}
