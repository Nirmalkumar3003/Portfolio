import { useCallback } from "react";
import Loader from "./components/Loader";
import ParticleField from "./components/ParticleField";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import { useReveal } from "./hooks/useReveal";
import { useMagnetic } from "./hooks/useMagnetic";

export default function App() {
  useReveal();
  useMagnetic();
  const onDone = useCallback(() => document.body.classList.add("ready"), []);
  return (
    <>
      <Loader onDone={onDone} />
      <Cursor />
      <ParticleField />
      <div id="grain" aria-hidden="true" />
      <Header />
      <main>
        <Hero /><About /><Skills /><Projects /><Journey /><Contact />
      </main>
      <footer>© 2026 Nirmalkumar M · Tirupur, India · Built by hand.</footer>
    </>
  );
}
