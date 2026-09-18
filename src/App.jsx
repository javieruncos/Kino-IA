import Hero from "./components/sections/Hero.jsx";
import ProductStatement from "./components/sections/ProductStatement.jsx";
import AICanvas from "./components/sections/AICanvas.jsx";
import FeatureStorytelling from "./components/sections/FeatureStorytelling.jsx";
import GenerationWorkflow from "./components/sections/GenerationWorkflow.jsx";

function App() {
  return (
    <main className="min-h-screen bg-ink font-sans text-cream antialiased">
      <Hero />
      <ProductStatement />
      <AICanvas />
      <FeatureStorytelling />
      <GenerationWorkflow />
    </main>
  );
}

export default App;
