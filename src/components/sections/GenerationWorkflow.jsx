import { useRef, useState, useSyncExternalStore } from "react";
import {
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
} from "motion/react";
import { SEED_PHRASE, STAGES } from "../../data/generationWorkflowData";

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

/* Base nocturna compartida con el resto de KINO. */
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

function StateSeed() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 opacity-25">
        <SceneBase />
      </div>
      <div aria-hidden="true" className="absolute inset-0">
        <div className="absolute left-[10%] top-[14%] h-4 w-4 border-l border-t border-white/10" />
        <div className="absolute right-[10%] top-[14%] h-4 w-4 border-r border-t border-white/10" />
        <div className="absolute bottom-[14%] left-[10%] h-4 w-4 border-b border-l border-white/10" />
        <div className="absolute bottom-[14%] right-[10%] h-4 w-4 border-b border-r border-white/10" />
      </div>
      <p className="absolute inset-x-8 top-1/2 -translate-y-1/2 text-center font-mono text-[12px] leading-relaxed tracking-[0.14em] text-cream/85">
        “{SEED_PHRASE}”
      </p>
    </div>
  );
}

function Annotation({ className, label, accent }) {
  return (
    <p
      className={`absolute flex items-center gap-2 font-mono text-[10px] tracking-[0.18em] text-cream/75 ${className}`}
    >
      <span
        aria-hidden="true"
        className={
          accent
            ? "inline-block h-1.5 w-1.5 rounded-full bg-acid"
            : "inline-block h-px w-4 bg-white/30"
        }
      />
      {label}
    </p>
  );
}

function StateDirected() {
  return (
    <div className="absolute inset-0">
      <SceneBase />
      <Annotation className="left-5 top-12" label="LENS 35MM" accent />
      <Annotation className="right-5 top-12" label="LIGHT NIGHT" />
      <Annotation className="bottom-12 left-5" label="MOVE TRACKING" />
      <Annotation className="bottom-12 right-5" label="GRID OFF" />
    </div>
  );
}

function StateGenerated({ live }) {
  const body = (
    <div className="absolute inset-0">
      <SceneBase />
      <p className="absolute bottom-12 left-1/2 -translate-x-1/2 rounded-sm border border-acid/50 bg-black/60 px-3 py-1.5 font-mono text-[10px] tracking-[0.22em] text-acid">
        GENERATED
      </p>
    </div>
  );
  if (!live) return body;
  return (
    <motion.div
      initial={{ clipPath: "inset(12% 8% 12% 8%)" }}
      animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="absolute inset-0"
    >
      {body}
    </motion.div>
  );
}

function StateRefined({ live }) {
  const guides = (
    <div aria-hidden="true" className="absolute inset-0">
      <div className="absolute inset-y-0 left-1/3 w-px bg-white/15" />
      <div className="absolute inset-y-0 left-2/3 w-px bg-white/15" />
      <div className="absolute inset-x-0 top-1/3 h-px bg-white/15" />
      <div className="absolute inset-x-0 top-2/3 h-px bg-white/15" />
      <div className="absolute left-2/3 top-1/3 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border border-acid" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_60%_at_60%_45%,rgba(255,190,110,0.1),transparent_65%)]" />
    </div>
  );
  if (!live) {
    return (
      <div className="absolute inset-0">
        <SceneBase />
        {guides}
      </div>
    );
  }
  return (
    <motion.div
      animate={{ scale: 1.02 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      className="absolute inset-0"
    >
      <SceneBase />
      {guides}
    </motion.div>
  );
}

function StateFinal() {
  return (
    <div className="absolute inset-0">
      <SceneBase />
      <p className="absolute bottom-12 left-1/2 -translate-x-1/2 font-mono text-[10px] tracking-[0.24em] text-cream/85">
        FINAL FRAME
      </p>
      <p className="absolute right-5 top-2.5 font-mono text-[10px] tracking-[0.18em] text-cream/60">
        16:9
      </p>
    </div>
  );
}

function StateContent({ state, live }) {
  if (state === "seed") return <StateSeed />;
  if (state === "directed") return <StateDirected />;
  if (state === "generated") return <StateGenerated live={live} />;
  if (state === "refined") return <StateRefined live={live} />;
  return <StateFinal />;
}

/* Transición editorial entre estados (sticky desktop). */
function SceneLayer({ visible, state, live }) {
  return (
    <motion.div
      animate={
        visible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.04 }
      }
      transition={{ duration: 0.55, ease: "easeOut" }}
      aria-hidden={!visible}
      className="absolute inset-0"
    >
      <StateContent state={state} live={live} />
    </motion.div>
  );
}

function StageText({ stage, index, active }) {
  const isActive = active === index;
  return (
    <motion.li
      animate={{ opacity: isActive ? 1 : 0.35 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      aria-current={isActive ? "step" : undefined}
      aria-labelledby={`stage-title-${stage.id}`}
      className="flex min-h-[50vh] flex-col justify-center border-b border-line py-10"
    >
      <p
        className={
          isActive
            ? "font-mono text-[11px] tracking-[0.22em] text-acid"
            : "font-mono text-[11px] tracking-[0.22em] text-white/35"
        }
      >
        {stage.number} / {stage.verb}
        <span className="sr-only">
          {isActive ? " (current stage)" : ""}
        </span>
      </p>
      <h3
        id={`stage-title-${stage.id}`}
        className="mt-4 font-display text-2xl font-medium uppercase leading-[1.05] tracking-[-0.01em] text-cream md:text-3xl"
      >
        {stage.title}
      </h3>
      <p className="mt-3 max-w-sm text-[15px] leading-relaxed text-muted">
        {stage.description}
      </p>
      <p className="mt-4 font-mono text-[10px] tracking-[0.18em] text-white/40">
        {stage.meta.join("  ·  ")}
      </p>
    </motion.li>
  );
}

function StickyFlow() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);
  const { scrollYProgress } = useScroll({
    target: trackRef,
    offset: ["start start", "end end"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 28 });

  useMotionValueEvent(smooth, "change", (value) => {
    const clamped = Math.min(1, Math.max(0, value));
    const index = Math.min(STAGES.length - 1, Math.floor(clamped * STAGES.length));
    setActive((prev) => (prev === index ? prev : index));
  });

  return (
    <div ref={trackRef} className="relative">
      <div className="grid lg:grid-cols-12 lg:gap-10">
        <div className="lg:sticky lg:top-[36px] lg:col-span-7 lg:self-start">
          <div className="flex h-[84vh] flex-col">
            <div className="relative flex-1 overflow-hidden rounded-xl border border-line bg-black shadow-[0_40px_120px_-30px_rgba(0,0,0,0.9)]">
              {STAGES.map((stage, i) => (
                <SceneLayer
                  key={stage.id}
                  visible={active === i}
                  state={stage.state}
                  live={active === i}
                />
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
                {STAGES[active].frameNote}
              </motion.p>
              <p className="font-mono text-[11px] tracking-[0.2em] text-acid">
                {STAGES[active].number} / 05
              </p>
            </div>
          </div>
        </div>

        <div className="relative lg:col-span-5">
          <div aria-hidden="true" className="absolute bottom-0 left-0 top-0 w-px bg-white/10">
            <motion.div
              animate={{ scaleY: smooth }}
              className="h-full w-px origin-top bg-acid/70"
            />
          </div>
          <ol className="pl-8">
            {STAGES.map((stage, i) => (
              <StageText key={stage.id} stage={stage} index={i} active={active} />
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
}

/* Secuencia vertical: tablet, mobile y fallback reduced-motion. */
function StaticFlow({ animated }) {
  const calm = !animated;
  return (
    <ol className="mx-auto max-w-3xl">
      {STAGES.map((stage, i) => (
        <motion.li
          key={stage.id}
          initial={{ opacity: 0, y: calm ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: calm ? 0 : 0.6, ease: "easeOut" }}
          aria-labelledby={`stage-title-${stage.id}`}
          className="border-t border-line py-12 first:border-t-0 first:pt-2"
        >
          <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
            {stage.number} / {stage.verb}
          </p>
          <div className="relative mt-6 aspect-video overflow-hidden rounded-lg border border-line bg-black">
            <StateContent state={stage.state} live={false} />
          </div>
          <h3
            id={`stage-title-${stage.id}`}
            className="mt-6 font-display text-2xl font-medium uppercase leading-[1.05] tracking-[-0.01em] text-cream md:text-3xl"
          >
            {stage.title}
          </h3>
          <p className="mt-3 max-w-md text-base leading-relaxed text-muted">
            {stage.description}
          </p>
          <p className="mt-4 font-mono text-[10px] tracking-[0.18em] text-white/40">
            {stage.meta.join("  ·  ")}
          </p>
          <span className="sr-only">Etapa {i + 1} de 5</span>
        </motion.li>
      ))}
    </ol>
  );
}

export default function GenerationWorkflow() {
  const reduce = useReducedMotion();
  const calm = Boolean(reduce);
  const isDesktop = useIsDesktop();

  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="relative overflow-clip border-t border-line bg-ink text-cream"
    >
      <div className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32 lg:px-14 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: calm ? 0 : 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="font-mono text-[11px] tracking-[0.22em] text-muted">
            KINO / WORKFLOW — 04
          </p>
          <h2
            id="process-title"
            className="mt-6 font-display text-[clamp(2.25rem,5.5vw,4.5rem)] font-medium uppercase leading-[1.02] tracking-[-0.015em]"
          >
            From prompt to final frame
            <span aria-hidden="true" className="text-acid">
              .
            </span>
          </h2>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg">
            Five decisions stand between an idea and a frame.
          </p>
        </motion.div>

        <div className="mt-14 md:mt-20">
          {calm || !isDesktop ? (
            <StaticFlow animated={!calm && !isDesktop} />
          ) : (
            <StickyFlow />
          )}
        </div>
      </div>
    </section>
  );
}
