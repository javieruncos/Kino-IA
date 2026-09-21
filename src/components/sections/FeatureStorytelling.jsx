import { useRef, useState, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { CHAPTERS } from "../../data/featureStoryData";

function subscribeDesktop(callback) {
  const query = window.matchMedia("(min-width: 1024px)");
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}

function getDesktopSnapshot() {
  return window.matchMedia("(min-width: 1024px)").matches;
}

function useIsDesktop() {
  return useSyncExternalStore(
    subscribeDesktop,
    getDesktopSnapshot,
    () => false,
  );
}

/* Mundo compartido: misma calle nocturna en los cuatro capítulos. */
function SceneBase() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#0b1418_0%,#060d10_48%,#020405_100%)]" />
      <div className="absolute left-0 right-0 top-[58%] h-px bg-[rgba(255,176,66,0.5)] blur-[0.5px]" />
      <div className="absolute left-[10%] right-[10%] top-[60%] h-10 bg-[radial-gradient(ellipse_50%_100%_at_50%_0%,rgba(255,176,66,0.14),transparent_70%)]" />
      <div className="absolute bottom-[22%] left-1/2 h-7 w-40 -translate-x-1/2 rounded-[50%] bg-black blur-[3px]" />
      <div className="absolute bottom-[24%] left-1/2 h-5 w-32 -translate-x-1/2 rounded-t-full bg-[#0d1a1f]" />
      <div className="absolute inset-0 bg-[repeating-linear-gradient(105deg,transparent_0px,transparent_9px,rgba(255,255,255,0.025)_10px)]" />
      <div className="absolute inset-x-0 top-0 h-9 bg-black" />
      <div className="absolute inset-x-0 bottom-0 h-9 bg-black" />
    </div>
  );
}

function OverlayCamera() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute inset-x-[18%] inset-y-[16%] rounded-[2px] border border-white/20" />
      <div className="absolute inset-x-[30%] inset-y-[26%] rounded-[2px] border border-white/10" />
      <div className="absolute left-[8%] top-[12%] h-4 w-4 border-l border-t border-acid" />
      <div className="absolute right-[8%] top-[12%] h-4 w-4 border-r border-t border-acid" />
      <div className="absolute bottom-[12%] left-[8%] h-4 w-4 border-b border-l border-acid" />
      <div className="absolute bottom-[12%] right-[8%] h-4 w-4 border-b border-r border-acid" />
    </div>
  );
}

function OverlayLight() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_45%_70%_at_82%_40%,rgba(255,190,110,0.22),transparent_65%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(100deg,rgba(2,4,5,0.55)_30%,transparent_70%)]" />
    </div>
  );
}

function OverlayMotion({ alive }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <motion.div
        animate={alive ? { x: [0, 30, 0] } : { x: 0 }}
        transition={
          alive
            ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0 }
        }
        className="absolute bottom-[26%] left-[30%] h-px w-24 bg-gradient-to-r from-transparent via-cream/50 to-transparent"
      />
      <motion.div
        animate={alive ? { x: [0, -14, 0] } : { x: 0 }}
        transition={
          alive
            ? { duration: 6, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0 }
        }
        className="absolute bottom-[24%] left-1/2 h-5 w-32 -translate-x-1/2 rounded-t-full bg-[#12242a]"
      />
    </div>
  );
}

function OverlayComposition() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute inset-y-0 left-1/3 w-px bg-white/15" />
      <div className="absolute inset-y-0 left-2/3 w-px bg-white/15" />
      <div className="absolute inset-x-0 top-1/3 h-px bg-white/15" />
      <div className="absolute inset-x-0 top-2/3 h-px bg-white/15" />
      <div className="absolute left-2/3 top-1/3 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-acid" />
      <div className="absolute inset-x-[12%] top-[58%] h-px bg-acid/40" />
    </div>
  );
}

/* Capas concepto por capítulo: enriquecen SceneBase sin romper su universo.
   Solo geometría mate + mono tenue. Sin glow, sin HUD. */
function FrameCamera() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute inset-y-0 left-0 w-[22%] border-r border-white/5 bg-[linear-gradient(180deg,#0a1216_0%,#04080a_100%)]" />
      <div className="absolute inset-y-0 right-0 w-[18%] border-l border-white/5 bg-[linear-gradient(180deg,#0a1216_0%,#04080a_100%)]" />
      <div className="absolute left-1/2 top-[58%] h-[60%] w-px origin-top -rotate-[28deg] bg-white/[0.07]" />
      <div className="absolute left-1/2 top-[58%] h-[60%] w-px origin-top rotate-[28deg] bg-white/[0.07]" />
      <div className="absolute bottom-[30%] left-1/2 h-16 w-5 -translate-x-1/2 rounded-t-full border border-white/10 bg-black/80" />
      <div className="absolute bottom-[10%] left-1/2 flex -translate-x-1/2 gap-3 font-mono text-[9px] tracking-[0.2em]">
        <span className="text-acid/80">35</span>
        <span className="text-white/30">50</span>
        <span className="text-white/30">85</span>
      </div>
      <OverlayCamera />
    </div>
  );
}

function FrameLight() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute inset-y-0 left-0 w-[62%] bg-[linear-gradient(100deg,rgba(2,5,6,0.85)_0%,transparent_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_60%_at_86%_45%,rgba(255,190,120,0.2),transparent_65%)]" />
      <div className="absolute right-[14%] top-[18%] h-[46%] w-1 bg-[rgba(255,190,120,0.5)] blur-[2px]" />
      <div className="absolute bottom-[28%] left-[58%] h-20 w-6 rounded-t-full bg-[#0a0f12]" />
      <div className="absolute bottom-[28%] left-[58%] ml-6 h-20 w-px bg-[rgba(255,200,140,0.6)]" />
      <div className="absolute bottom-[24%] right-[8%] h-px w-24 bg-[linear-gradient(90deg,transparent,rgba(255,190,120,0.35))]" />
      <OverlayLight />
    </div>
  );
}

function FrameMotion({ alive }) {
  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute bottom-[38%] left-[12%] h-px w-40 bg-gradient-to-r from-transparent via-cream/25 to-transparent" />
      <motion.div
        animate={alive ? { x: [0, 48, 0] } : { x: 0 }}
        transition={
          alive
            ? { duration: 7, repeat: Infinity, ease: "easeInOut" }
            : { duration: 0 }
        }
        className="absolute bottom-[32%] left-[24%] h-px w-56 bg-gradient-to-r from-transparent via-cream/50 to-transparent"
      />
      <div className="absolute bottom-[27%] left-[38%] h-px w-28 bg-gradient-to-r from-transparent via-cream/20 to-transparent" />
      <div className="absolute bottom-[24%] left-1/2 h-5 w-32 -translate-x-1/2 rounded-t-full bg-[#0d1a1f] opacity-40" />
      <div className="absolute bottom-[24%] left-1/2 h-5 w-32 -translate-x-[calc(50%-2rem)] rounded-t-full bg-[#12242a]" />
      <OverlayMotion alive={alive} />
    </div>
  );
}

function FrameComposition() {
  return (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute inset-y-0 left-0 w-[55%] bg-[linear-gradient(90deg,rgba(2,5,6,0.6),transparent)]" />
      <div className="absolute left-2/3 top-1/3 h-14 w-9 -translate-x-1/2 -translate-y-1/2 rounded-[2px] border border-white/15 bg-black/60" />
      <div className="absolute left-[8%] top-[12%] h-4 w-4 border-l border-t border-white/20" />
      <div className="absolute right-[8%] top-[12%] h-4 w-4 border-r border-t border-white/20" />
      <div className="absolute bottom-[12%] left-[8%] h-4 w-4 border-b border-l border-white/20" />
      <div className="absolute bottom-[12%] right-[8%] h-4 w-4 border-b border-r border-white/20" />
      <OverlayComposition />
    </div>
  );
}

/* Frame cinematográfico por capítulo: placeholder CSS preparado para
   recibir una imagen real sin cambiar el layout.
   FUTURO: reemplazar las capas CSS por
   <img src={chapter.image} alt={chapter.imageAlt}
     className="absolute inset-0 h-full w-full object-cover"
     loading="lazy" decoding="async" /> */
function CinematicFrame({ chapter, alive, aspect = "aspect-[21/9]" }) {
  return (
    <figure>
      <div
        className={`relative w-full ${aspect} overflow-hidden rounded-xl border border-line bg-black`}
      >
        <SceneBase />
        {chapter.id === "camera" ? <FrameCamera /> : null}
        {chapter.id === "light" ? <FrameLight /> : null}
        {chapter.id === "motion" ? <FrameMotion alive={alive} /> : null}
        {chapter.id === "composition" ? <FrameComposition /> : null}
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
              alive={animated}
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
      behavior: "smooth",
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
                  alive={active === i}
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
      className="relative overflow-hidden border-t border-line bg-ink text-cream"
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
