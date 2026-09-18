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

function SceneVariant({ id, alive }) {
  return (
    <>
      <SceneBase />
      {id === "camera" ? <OverlayCamera /> : null}
      {id === "light" ? <OverlayLight /> : null}
      {id === "motion" ? <OverlayMotion alive={alive} /> : null}
      {id === "composition" ? <OverlayComposition /> : null}
    </>
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
          <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
            {chapter.index} / {chapter.name}
            <span className="ml-3 text-white/30">{chapter.question}</span>
          </p>
          <div className="relative mt-6 aspect-video overflow-hidden rounded-lg border border-line bg-black">
            <SceneVariant id={chapter.id} alive={animated} />
          </div>
          <h3
            id={`chapter-title-${chapter.id}`}
            className="mt-6 font-display text-3xl font-medium uppercase leading-[1.05] tracking-[-0.01em] text-cream md:text-4xl"
          >
            {chapter.title}
          </h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
            {chapter.copy}
          </p>
          <p className="mt-5 border-t border-line pt-4 font-mono text-[11px] tracking-[0.18em] text-white/40">
            {chapter.meta.join("  ·  ")}
          </p>
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
      <div className="grid lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-5">
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
            <nav aria-label="Capítulos de dirección" className="mt-3 flex gap-6">
              {CHAPTERS.map((chapter, i) => (
                <button
                  key={chapter.id}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-current={active === i ? "true" : undefined}
                  className={
                    active === i
                      ? "font-mono text-[11px] tracking-[0.2em] text-acid"
                      : "font-mono text-[11px] tracking-[0.2em] text-white/35 transition-colors hover:text-cream"
                  }
                >
                  {chapter.index}
                </button>
              ))}
            </nav>
          </div>

          <ol>
            {CHAPTERS.map((chapter, i) => (
              <motion.li
                key={chapter.id}
                ref={(node) => {
                  chapterRefs.current[i] = node;
                }}
                animate={{ opacity: active === i ? 1 : 0.35 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                aria-labelledby={`chapter-title-${chapter.id}`}
                className="flex min-h-[85vh] flex-col justify-center border-b border-line py-10"
              >
                <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
                  {chapter.index} /{" "}
                  <span
                    className={active === i ? "text-acid" : "text-cream/70"}
                  >
                    {chapter.name}
                  </span>
                </p>
                <h3
                  id={`chapter-title-${chapter.id}`}
                  className="mt-5 font-display text-[clamp(2rem,3.5vw,3.25rem)] font-medium uppercase leading-[1.02] tracking-[-0.015em] text-cream"
                >
                  {chapter.title}
                </h3>
                <p className="mt-2 font-mono text-[11px] tracking-[0.18em] text-white/35">
                  {chapter.question}
                </p>
                <p className="mt-5 max-w-sm text-base leading-relaxed text-muted">
                  {chapter.copy}
                </p>
                <p className="mt-6 font-mono text-[11px] tracking-[0.18em] text-white/40">
                  {chapter.meta.join("  ·  ")}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>

        <div className="lg:col-span-7">
          <div className="sticky top-[10vh] flex h-[76vh] flex-col">
            <div className="relative flex-1 overflow-hidden rounded-xl border border-line bg-black shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
              {CHAPTERS.map((chapter, i) => (
                <motion.div
                  key={chapter.id}
                  aria-hidden={active !== i}
                  animate={
                    active === i
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 1.05 }
                  }
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="absolute inset-0"
                >
                  <SceneVariant id={chapter.id} alive={active === i} />
                </motion.div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-line pt-4">
              <motion.p
                key={active}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="font-mono text-[11px] tracking-[0.2em] text-muted"
              >
                {CHAPTERS[active].frame.join("   ")}
              </motion.p>
              <p className="font-mono text-[11px] tracking-[0.2em] text-acid">
                {CHAPTERS[active].index} / 04
              </p>
            </div>
          </div>
        </div>
      </div>
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
              KINO / DIRECTION — 03
            </p>
            <h2
              id="direction-title"
              className="mt-6 font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium uppercase leading-[1.02] tracking-[-0.015em]"
            >
              Every frame
              <span className="block text-muted">is a decision.</span>
            </h2>
          </div>
          <p className="max-w-sm self-end text-base leading-relaxed text-muted lg:col-span-4 lg:col-start-9">
            Four dimensions a director controls — one continuous scene.
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
