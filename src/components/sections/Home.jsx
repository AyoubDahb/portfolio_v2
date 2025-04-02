import { useEffect, useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaLinkedin, FaGithub, } from "react-icons/fa"; // <-- icône CV ajoutée
import { HiOutlineDocumentText } from "react-icons/hi"; // ✅

const phrases = [
  " Ayoub Dahbi",
  " développeur junior",
  " étudiant en BTS SIO",
];

export const Home = () => {
  const [texte, setTexte] = useState("");
  const [indexPhrase, setIndexPhrase] = useState(0);
  const [indexLettre, setIndexLettre] = useState(0);
  const [estEnTrainDeSupprimer, setEstEnTrainDeSupprimer] = useState(false);
  const [vitesse, setVitesse] = useState(150);

  useEffect(() => {
    const currentPhrase = phrases[indexPhrase];

    if (!estEnTrainDeSupprimer && indexLettre === currentPhrase.length) {
      setTimeout(() => setEstEnTrainDeSupprimer(true), 1500);
      return;
    }

    if (estEnTrainDeSupprimer && indexLettre === 0) {
      setEstEnTrainDeSupprimer(false);
      setIndexPhrase((prev) => (prev + 1) % phrases.length);
      return;
    }

    const timer = setTimeout(() => {
      setIndexLettre((prev) => prev + (estEnTrainDeSupprimer ? -1 : 1));
    }, estEnTrainDeSupprimer ? 120 : vitesse);

    return () => clearTimeout(timer);
  }, [indexLettre, estEnTrainDeSupprimer, indexPhrase, vitesse]);

  useEffect(() => {
    setTexte(phrases[indexPhrase].substring(0, indexLettre));
  }, [indexLettre, indexPhrase]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-200 to-violet-400 bg-clip-text text-transparent leading-right min-h-[80px]">
            Je suis <span>{texte}</span>
            <span className="border-r-2 border-violet-400 animate-pulse ml-1"></span>
          </h1>

          <p className="text-violet-50 text-lg mb-9 max-w-xl mx-auto">
            Je suis un développeur web passionné, actuellement en deuxième année de BTS SIO. Je recherche une alternance pour l'année prochaine afin de perfectionner mes compétences et contribuer à des projets concrets. Mon objectif est d'écrire un code propre, efficace et de concevoir des applications intuitives.
          </p>

          <div className="flex justify-center items-center space-x-6">
            <a href="#projects" className="bg-violet-500 text-gray py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] text-violet-50">
              Voir mes projets
            </a>

            <a href="#contact" className="border border-violet-500/50 text-violet-500 py-3 px-6 rounded font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10">
              Me contacter
            </a>

            <div className="flex items-center space-x-4 ml-4">
              <a href="https://www.linkedin.com/in/ayoub-dahbi-52b3411b1" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-600 transition text-3xl">
                <FaLinkedin />
              </a>

              <a href="https://github.com/AyoubDahb" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-600 transition text-3xl">
                <FaGithub />
              </a>

              {/* Icône CV */}
            

            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
