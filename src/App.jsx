import { useState } from "react";
import { About } from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import { Navbar } from "./components/Navbar.jsx";
import Projects from "./components/Projects.jsx";
import { Skills } from "./components/Skills.jsx";
import { Loading } from "./components/Loading.jsx";
import { MobileMenu } from "./components/MobileMenu.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./components/Home.jsx";
import "./App.css";

function App() {
  const [hasLoaded, setHasLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {!hasLoaded && <Loading onFinish={() => setHasLoaded(true)} />}

      <main
        className={`min-h-screen bg-black text-gray-100 transition-opacity duration-700 ${
          hasLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <Home />
        <About />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
