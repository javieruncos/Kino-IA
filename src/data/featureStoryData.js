import imageCamera from "../assets/images/Gemini_Generated_Image_an9notan9notan9n.jfif";
import imageLight from "../assets/images/Gemini_Generated_Image_9oevx49oevx49oev.jfif";
import imageMotion from "../assets/images/Gemini_Generated_Image_re08x0re08x0re08.jfif";
import imageComposition from "../assets/images/Gemini_Generated_Image_avx5c0avx5c0avx5.jfif";

export const CHAPTERS = [
  {
    id: "camera",
    index: "01",
    name: "CÁMARA",
    question: "¿Qué vemos?",
    title: "Elige dónde empieza la historia.",
    copy: "El encuadre decide qué importa antes de generar un solo plano.",
    meta: ["35MM", "50MM", "85MM", "ABIERTO / MEDIO / RETRATO"],
    image: imageCamera,
    imageAlt:
      "Vehículo deportivo en una calle nocturna lluviosa, visto desde una cámara muy baja con perspectiva amplia.",
  },
  {
    id: "light",
    index: "02",
    name: "LUZ",
    question: "¿Cómo se siente?",
    title: "Define la emoción del plano.",
    copy: "Dirección, suavidad y temperatura convierten la locación en atmósfera.",
    meta: ["NOCHE", "SUAVE", "DURA", "CONTRALUZ"],
    image: imageLight,
    imageAlt:
      "Vehículo en sombra parcial bajo un haz de luz cálida direccional en una calle nocturna lluviosa.",
  },
  {
    id: "motion",
    index: "03",
    name: "MOVIMIENTO",
    question: "¿Cómo se mueve?",
    title: "Dale pulso a la escena.",
    copy: "Un travelling lento mantiene vivo el plano, sin ruido.",
    meta: ["FIJO", "TRAVELLING", "DOLLY", "HANDHELD"],
    image: imageMotion,
    imageAlt:
      "Vehículo en movimiento con desenfoque horizontal del entorno en una calle urbana de noche.",
  },
  {
    id: "composition",
    index: "04",
    name: "COMPOSICIÓN",
    question: "¿Por qué funciona el plano?",
    title: "Haz intencional cada plano.",
    copy: "Guías, peso y espacio negativo cierran el ciclo de decisiones.",
    meta: ["16:9", "FRAME 048", "PUNTO FOCAL / SUJETO"],
    image: imageComposition,
    imageAlt:
      "Vista aérea nocturna de un cruce urbano lluvioso con un auto pequeño entre geometría y espacio negativo.",
  },
];
