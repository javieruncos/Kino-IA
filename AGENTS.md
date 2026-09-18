# AGENTS.md

## 1. Proyecto

**Nombre:** KINO
**Concepto:** AI Cinematic Production Platform
**Tagline:** `Turn an idea into a scene.`

KINO es una landing page de portfolio para una plataforma ficticia de producción audiovisual asistida por IA.

El proyecto es **exclusivamente frontend**. No se debe construir backend, base de datos, autenticación, API ni persistencia.

El objetivo principal es demostrar:

* Dirección de arte.
* Diseño de interfaces premium.
* Motion design.
* Scroll storytelling.
* UI de producto.
* Responsive design.
* Arquitectura React limpia.
* Uso avanzado pero controlado de Tailwind CSS y Motion.

---

# 2. Referencia visual principal

La referencia principal del proyecto es:

https://dribbble.com/shots/26592174-Landing-Page-Animation-for-AI-Video-Production-Platform

La implementación debe acercarse **mucho al lenguaje visual, nivel de detalle, composición y sensación de movimiento de la referencia**, pero **NO copiarla literalmente**.

No copiar:

* textos
* branding
* logotipo
* imágenes
* ilustraciones
* componentes exactos
* composiciones exactas
* layouts idénticos

Sí tomar como referencia:

* dirección artística
* contraste
* escala tipográfica
* estética cinematográfica
* uso del negro
* acento neón
* composición editorial
* profundidad
* UI flotante
* storytelling
* animaciones
* ritmo de scroll
* tratamiento de producto

La meta es crear una identidad propia que tenga un nivel de acabado comparable.

---

# 3. Reglas obligatorias del agente

Estas reglas tienen prioridad sobre cualquier decisión de implementación.

## Dependencias

### PROHIBIDO instalar dependencias sin autorización explícita.

No ejecutar:

```bash
pnpm add
pnpm install
npm install
yarn add
npm i
```

ni ningún comando equivalente para instalar paquetes sin autorización.

Si una dependencia parece necesaria:

1. Detenerse.
2. Informar qué dependencia se necesita.
3. Explicar para qué se utilizaría.
4. Indicar si existe una alternativa con las herramientas actuales.
5. Esperar autorización.

No asumir autorización.

---

## Fuera del proyecto

### PROHIBIDO modificar cualquier cosa fuera del proyecto.

El agente debe trabajar exclusivamente dentro del directorio raíz del proyecto.

No:

* instalar herramientas globales
* modificar configuraciones globales
* crear archivos fuera del proyecto
* modificar otros proyectos
* modificar configuraciones del sistema
* modificar configuraciones globales de Node
* modificar configuraciones globales de Git
* modificar archivos del usuario fuera del proyecto

No ejecutar comandos cuyo efecto principal ocurra fuera del proyecto.

---

## Navegador

### PROHIBIDO abrir pestañas o ventanas del navegador sin autorización.

No:

* abrir Chrome
* abrir Edge
* abrir Firefox
* abrir nuevas pestañas
* abrir URLs automáticamente
* utilizar herramientas de browser
* iniciar previews visuales en navegador

sin autorización explícita.

Si es necesario realizar una comprobación visual:

1. Explicar por qué es necesaria.
2. Solicitar autorización.
3. Esperar confirmación.

---

# 4. Backend

### Este proyecto NO tiene backend.

PROHIBIDO crear:

* API
* API routes
* endpoints
* servidores
* Express
* Node server
* bases de datos
* MongoDB
* PostgreSQL
* Prisma
* Mongoose
* autenticación
* autorización
* sesiones
* persistencia
* CRUD backend
* servicios backend

Todo el contenido puede ser ficticio y estático.

Si una interacción necesita datos, utilizar datos locales.

---

# 5. Stack

Mantener el stack existente del proyecto.

Stack objetivo:

* Vite
* React
* Tailwind CSS
* Motion
* Lucide React
* pnpm

No cambiar el stack sin autorización.

No añadir librerías adicionales simplemente por comodidad.

Antes de proponer una dependencia nueva, comprobar si el problema puede resolverse utilizando:

1. Tailwind
2. CSS
3. React
4. Motion
5. Lucide

---

# 6. Filosofía del proyecto

KINO NO debe parecer:

* una plantilla SaaS
* un dashboard
* una landing genérica de IA
* una página creada con un starter de React
* un conjunto de cards
* un sitio corporativo
* un dashboard administrativo
* una página llena de gradientes
* una página llena de glassmorphism

KINO debe sentirse como:

> **A cinematic product experience disguised as a landing page.**

La página debe parecer una experiencia digital de una compañía audiovisual/tecnológica de alto nivel.

---

# 7. Dirección visual

## Keywords

La dirección artística debe mantenerse alrededor de:

* cinematic
* dark
* editorial
* futuristic
* premium
* immersive
* minimal
* technical
* sophisticated
* high contrast
* visual
* precise
* experimental
* motion-driven

---

# 8. Paleta

## Background principal

```text
#020506
```

Negro cinematográfico.

---

## Surface

```text
#071011
```

Para superficies secundarias.

---

## Surface elevated

```text
#0C1718
```

Para paneles internos y UI.

---

## Primary text

```text
#FAFBFB
```

---

## Secondary text

```text
#9FA9A9
```

---

## Border

```text
rgba(255, 255, 255, 0.08)
```

---

## Accent

```text
#B7FF3C
```

Verde ácido/neón.

---

## Accent hover

```text
#C8FF69
```

---

## Deep accent

```text
#17321D
```

---

# 9. Uso del color

El verde ácido es un **acento**, no el color dominante.

La composición debe sentirse aproximadamente:

```text
90% neutral
10% accent
```

Utilizar el verde para:

* CTA principal
* estados activos
* indicadores
* pequeños highlights
* líneas de timeline
* metadata importante
* detalles de UI
* pequeños elementos de motion

Evitar:

* gradientes multicolor
* fondos completamente verdes
* texto verde en grandes cantidades
* exceso de glow
* múltiples colores de acento

El contraste debe provenir principalmente de:

```text
negro
+
blanco
+
verde ácido
+
imagen
+
profundidad
+
motion
```

---

# 10. Tipografía

La tipografía debe tener una presencia editorial fuerte.

Preferencia:

### Display

```text
Space Grotesk
```

o una alternativa ya instalada como:

```text
Geist
```

Debe utilizarse para:

* headlines
* títulos de sección
* grandes statements

---

### Body

```text
Inter
```

o:

```text
Geist
```

---

### Technical

```text
Geist Mono
```

o:

```text
JetBrains Mono
```

Utilizar para:

* números
* metadata
* timestamps
* labels técnicos
* estados
* scene IDs
* información de producción

No abusar de la tipografía mono.

---

# 11. Tailwind CSS

### Tailwind es el sistema de estilos principal.

Utilizar las utilidades de Tailwind para:

* layout
* spacing
* typography
* colors
* borders
* responsive
* sizing
* positioning
* states
* transitions

Ejemplo:

```jsx
<section className="bg-[#020506] text-[#FAFBFB]">
```

Preferir clases de Tailwind antes que CSS personalizado.

---

# 12. NO usar estilos inline

### PROHIBIDO utilizar estilos inline.

No hacer:

```jsx
<div style={{ color: "#B7FF3C" }}>
```

No hacer:

```jsx
<div style={{ marginTop: "20px" }}>
```

No hacer:

```jsx
<div style={{ transform: "translateY(...)" }}>
```

Cuando una animación sea dinámica, utilizar Motion.

Ejemplo:

```jsx
<motion.div
  animate={{ opacity: 1, y: 0 }}
/>
```

No utilizar `style` para sustituir Tailwind.

---

# 13. CSS global

El CSS global debe ser mínimo.

Está permitido utilizar CSS global exclusivamente para:

* variables de color
* reset
* tipografía base
* `body`
* selección de texto
* scrollbar
* comportamiento global
* accesibilidad
* variables necesarias para Tailwind

Ejemplo:

```css
:root {
  --color-bg: #020506;
  --color-surface: #071011;
  --color-surface-elevated: #0C1718;
  --color-text: #FAFBFB;
  --color-muted: #9FA9A9;
  --color-accent: #B7FF3C;
  --color-accent-hover: #C8FF69;
}
```

No utilizar CSS global para construir componentes completos.

No crear archivos CSS individuales por componente salvo que exista una razón técnica real.

---

# 14. Estructura de carpetas

Mantener una estructura clara:

```text
src/
├── assets/
│   ├── images/
│   │   ├── hero/
│   │   ├── scenes/
│   │   ├── showcase/
│   │   └── textures/
│   └── fonts/
│
├── components/
│   ├── layout/
│   │   ├── Header
│   │   ├── Footer
│   │   └── Container
│   │
│   ├── ui/
│   │   ├── Button
│   │   ├── Label
│   │   ├── Badge
│   │   ├── SceneBadge
│   │   └── ...
│   │
│   └── sections/
│       ├── Hero
│       ├── Intro
│       ├── Canvas
│       ├── Features
│       ├── Camera
│       ├── Generation
│       ├── Showcase
│       ├── Knowledge
│       └── CTA
│
├── data/
│   └── siteData.js
│
├── hooks/
│   └── ...
│
├── lib/
│   └── ...
│
├── styles/
│   └── globals.css
│
├── App.jsx
└── main.jsx
```

Adaptar esta estructura a la estructura real existente.

No crear carpetas innecesarias.

No fragmentar excesivamente.

---

# 15. Arquitectura de la landing

La narrativa debe seguir una evolución:

```text
IDEA
↓
DIRECTION
↓
GENERATION
↓
REFINEMENT
↓
RESULT
```

Estructura conceptual:

```text
Header
↓
Hero
↓
Intro / Product Statement
↓
AI Canvas
↓
Feature Storytelling
↓
Camera / Direction
↓
Generation Workflow
↓
Showcase
↓
Knowledge / Insights
↓
Final CTA
↓
Footer
```

La estructura puede evolucionar durante el proyecto, pero siempre debe conservar una narrativa clara.

---

# 16. Hero

El Hero es la sección más importante.

Debe transmitir inmediatamente:

> Esto es una plataforma cinematográfica de producción audiovisual con IA.

No construir un hero convencional:

```text
headline
paragraph
button
image
```

La UI del producto debe formar parte de la composición.

Debe incluir potencialmente:

* eyebrow
* headline
* supporting copy
* CTA
* product canvas
* scene preview
* prompt
* timeline
* metadata
* indicadores

---

# 17. Hero visual

El hero debe tener:

* fondo oscuro
* gran headline
* composición asimétrica
* UI flotante
* profundidad
* capas
* glow muy controlado
* detalles técnicos
* motion

La composición debe sentirse más cercana a:

```text
film interface
+
editorial art direction
+
product visualization
```

que a:

```text
SaaS hero
+
gradient
+
three cards
```

---

# 18. UI ficticia

La interfaz visual de KINO es una pieza fundamental.

Puede representar:

```text
Scene
Prompt
Camera
Lens
Lighting
Timeline
Preview
Generation
Settings
```

Ejemplo conceptual:

```text
┌─────────────────────────────────────────────┐
│ KINO                         PROJECT 01      │
├────────────┬─────────────────────┬──────────┤
│ SCENES     │                     │ SETTINGS │
│            │       PREVIEW       │          │
│ SCENE 01   │                     │ CAMERA   │
│ SCENE 02   │                     │ LENS     │
│ SCENE 03   │                     │ LIGHT    │
├────────────┴─────────────────────┴──────────┤
│ ▶ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
└─────────────────────────────────────────────┘
```

Esta UI puede ser completamente visual.

No necesita backend.

---

# 19. Motion

Motion es una parte fundamental del diseño.

No agregar animaciones únicamente porque son llamativas.

Cada animación debe tener un propósito:

* introducir
* revelar
* transformar
* conectar
* enfatizar
* explicar
* generar profundidad

---

## Preferencias

Utilizar:

* opacity
* translate
* scale
* subtle rotation
* blur controlado
* parallax
* sticky sections
* scroll progress
* spring controlado
* ease-out

Evitar:

* bounce excesivo
* elasticidad exagerada
* rotaciones grandes
* elementos que saltan
* motion constante sin propósito
* efectos que dificulten la lectura

---

# 20. Scroll storytelling

El scroll debe sentirse como parte del producto.

Ejemplo:

```text
scroll
↓
prompt appears
↓
camera changes
↓
scene generates
↓
preview transforms
↓
timeline advances
↓
final scene
```

No utilizar scroll animation simplemente para mover elementos.

Debe comunicar una transformación.

---

# 21. Secciones de producto

Las funcionalidades no deben presentarse como:

```text
┌──────┐ ┌──────┐ ┌──────┐
│ AI   │ │ Fast │ │ Easy │
└──────┘ └──────┘ └──────┘
```

Evitar una colección de cards genéricas.

En su lugar:

### Dirección

Mostrar visualmente cómo se controla una escena.

### Cámara

Mostrar:

```text
35mm
50mm
85mm
```

y utilizar motion para representar el cambio.

### Lighting

Mostrar cambios visuales en la escena.

### Generation

Mostrar:

```text
ANALYZE
COMPOSE
GENERATE
REFINE
```

### Showcase

Mostrar el resultado final.

---

# 22. Layout

Usar un sistema editorial.

Preferencia:

```text
12-column grid
max-width consistente
large whitespace
strong alignment
asymmetry controlada
```

No convertir cada sección en un rectángulo.

Alternar:

* composición tipográfica
* UI
* imágenes
* espacios abiertos
* layouts asimétricos
* escenas
* bloques técnicos

---

# 23. Responsive

Diseñar específicamente para:

* mobile
* tablet
* desktop
* pantallas grandes

No limitarse a:

```text
desktop → stack
```

En mobile:

* reducir la escala
* simplificar composiciones
* mantener el foco
* evitar overflow
* conservar la narrativa

Las animaciones deben respetar:

```text
prefers-reduced-motion
```

---

# 24. Accesibilidad

Mantener:

* HTML semántico
* botones reales
* enlaces reales
* alt text
* focus visible
* contraste suficiente
* keyboard navigation
* reduced motion
* labels accesibles

La estética no debe romper accesibilidad.

---

# 25. Imágenes

Todas las imágenes deben parecer parte del mismo universo.

Mantener consistencia en:

* iluminación
* color grading
* contraste
* textura
* composición
* relación de aspecto

No mezclar imágenes con estilos visuales incompatibles.

Las imágenes deben reforzar la sensación:

```text
cinematic
editorial
high-end production
```

---

# 26. Componentización

Componentizar por responsabilidad.

Buenos ejemplos:

```text
Hero
ScenePreview
PromptPanel
Timeline
FeatureStory
CameraControl
GenerationProcess
ShowcaseGrid
```

Evitar:

```text
HugeLandingPage.jsx
```

con toda la aplicación.

Pero tampoco convertir cada pequeño `div` en un componente.

Regla:

> **Componentes por responsabilidad visual o funcional, no por cantidad de líneas.**

---

# 27. Data

Cuando exista contenido repetitivo, mantenerlo en archivos de datos.

Ejemplo:

```js
export const features = [
  {
    id: "camera",
    eyebrow: "DIRECT",
    title: "Control every frame.",
    description: "...",
  },
];
```

Evitar repetir grandes cantidades de contenido directamente en JSX.

---

# 28. Performance

Prioridades:

1. imágenes optimizadas
2. lazy loading cuando corresponda
3. evitar JavaScript innecesario
4. animaciones eficientes
5. evitar efectos costosos
6. evitar dependencias innecesarias
7. buen rendimiento mobile

No utilizar una librería adicional para resolver algo que Tailwind, CSS, React o Motion pueden resolver.

---

# 29. Proceso antes de modificar código

Cuando el usuario solicite una nueva sección o modificación importante:

### Paso 1

Leer el código existente relacionado.

### Paso 2

Identificar:

* componentes
* estilos
* tokens
* patrones
* dependencias existentes

### Paso 3

Analizar cómo encaja el cambio en la dirección visual de KINO.

### Paso 4

Si el cambio es significativo, presentar un plan breve antes de implementar.

### Paso 5

Implementar únicamente el alcance solicitado.

### Paso 6

No instalar dependencias.

### Paso 7

No abrir navegador.

### Paso 8

No construir backend.

### Paso 9

No tocar archivos fuera del proyecto.

### Paso 10

Verificar imports, sintaxis y consistencia.

### Paso 11

Informar exactamente qué archivos fueron modificados.

---

# 30. No hacer cambios de diseño arbitrarios

El agente no debe introducir por iniciativa propia:

* nuevas secciones
* nuevos colores
* nuevas librerías
* nuevas animaciones importantes
* nuevos patrones de UI
* nuevos sistemas de navegación
* funcionalidades
* backend
* APIs

Si considera que algo debería cambiar, debe explicarlo y esperar autorización cuando sea un cambio de alcance.

---

# 31. Criterio de calidad

Una sección no está terminada simplemente porque:

* compila
* funciona
* es responsive

También debe revisarse:

### Visual

* jerarquía
* spacing
* composición
* contraste
* tipografía
* proporciones
* alineación

### Motion

* timing
* easing
* continuidad
* intención
* reduced motion

### Responsive

* mobile
* tablet
* desktop
* overflow
* legibilidad

### Código

* componentes
* imports
* duplicación
* Tailwind
* ausencia de inline styles
* mantenibilidad

---

# 32. Regla de oro

La prioridad de diseño es:

```text
ART DIRECTION
↓
COMPOSITION
↓
TYPOGRAPHY
↓
STORYTELLING
↓
MOTION
↓
IMPLEMENTATION
```

No sacrificar la dirección visual por implementar rápidamente.

KINO debe sentirse como una experiencia digital de producción cinematográfica.

**No como una landing SaaS genérica.**

---

# 33. Restricciones finales

Antes de terminar cualquier tarea, comprobar:

```text
[ ] No se instalaron dependencias sin autorización.
[ ] No se instaló nada fuera del proyecto.
[ ] No se abrió ningún navegador/pestaña sin autorización.
[ ] No se creó backend.
[ ] No se creó API.
[ ] No se creó base de datos.
[ ] No se utilizaron estilos inline.
[ ] Los estilos principales utilizan Tailwind.
[ ] CSS global se mantiene limitado.
[ ] La paleta KINO se respeta.
[ ] La estética sigue la referencia visual.
[ ] Motion tiene intención.
[ ] Responsive está considerado.
[ ] Accessibility está considerada.
[ ] No se agregaron funcionalidades fuera del alcance.
```
