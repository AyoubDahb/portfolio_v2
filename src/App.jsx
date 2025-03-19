import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import Projects from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import Veille from "./components/sections/Veille";

function MainPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Home />
      <About />
      <Projects />
      <Contact />
    </>
  );
}

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Router>
      {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}
      <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100" : "opacity-0"} text-gray-100`}>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/veille" element={<Veille />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
