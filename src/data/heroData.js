import heroVideo from "../assets/Rain_falling_on_asphalt_20260921153553.mp4";
import heroPoster from "../assets/hero.png";

export const heroMeta = {
  eyebrow: "KINO — PLATAFORMA CINEMATOGRÁFICA IA",
  scene: "ESCENA 01",
  status: "DIRIGIENDO",
  frame: "FRAME 024",
  timecode: "00:00:12:08",
  fps: "24 FPS",
  duration: "00:48",
  elapsed: "00:12",
  progress: 0.78,
};

export const heroMedia = {
  video: heroVideo,
  poster: heroPoster,
};
export const heroPrompt = {
  label: "IDEA",
  text: "Persecución nocturna bajo la lluvia: luz de sodio, lente larga, avance lento de cámara.",
};

export const heroLenses = [
  { id: "35", label: "35mm", active: false },
  { id: "50", label: "50mm", active: true },
  { id: "85", label: "85mm", active: false },
];

export const heroCamera = [
  { id: "aperture", label: "f/1.8" },
  { id: "light", label: "3200K" },
  { id: "take", label: "TOMA 02" },
];

export const heroScenes = [
  { id: "01", active: true },
  { id: "02", active: false },
  { id: "03", active: false },
];
