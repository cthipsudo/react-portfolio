import NavBar from "./components/partials/NavBar";
import AnimatedCursor from "react-animated-cursor";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/partials/Footer";
import MobileNavBar from "./components/partials/MobileNavBar";

import "./App.css";
import "./components/utilis/SplitText";

import { KnightModeProvider } from "./components/context/KnightModeContext";

function App() {
  return (
    <KnightModeProvider>
      <div className="desktopOnly">
        <AnimatedCursor
          innerSize={8}
          outerSize={35}
          innerScale={1}
          outerScale={2}
          outerAlpha={0}
          hasBlendMode={true}
          innerStyle={{
            backgroundColor: "var(--cursor-color)",
          }}
          outerStyle={{
            border: "3px solid var(--cursor-color)",
          }}
        />
      </div>
      <MobileNavBar />
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </KnightModeProvider>
  );
}

export default App;
