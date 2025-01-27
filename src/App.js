import Contact from "./components/Contact";
import { Eduction } from "./components/Eduction";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import WorkExp from "./components/WorkExp";

function App() {
  return (
    <main className="mx-auto max-w-7xl overflow-x-hidden antialiased">
    <div className="bg-image fixed bg-cover inset-0 bg-fixed bg-center"></div>
    <div className="relative z-10">
      <Navbar/>
      <Hero/>
      <Projects/>
      <Skills/>
      <WorkExp/>
      <Eduction/>
      <Testimonials/>
      <Contact/>
    </div>
    </main>
  );
}

export default App;
