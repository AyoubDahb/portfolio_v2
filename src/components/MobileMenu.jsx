import { Link } from "react-router-dom";

export const MobileMenu = ({ menuOpen, setMenuOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full bg-[rgba(10,10,10,0.8)] z-40 flex flex-col items-center justify-center
                     transition-all duration-300 ease-in-out
                     ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
                   `}
    >
      <button
        onClick={() => setMenuOpen(false)}
        className="absolute top-6 right-6 text-white text-3xl focus:outline-none cursor-pointer"
        aria-label="Fermer le menu"
      >
        &times;
      </button>

      <Link to="/" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white my-4">
        Accueil
      </Link>
      <Link to="/about" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white my-4">
        À propos
      </Link>
      <Link to="/projects" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white my-4">
        Projets
      </Link>
      <Link to="/contact" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white my-4">
        Contact
      </Link>
      <Link to="/veille" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white my-4">
        Veille informationnelle
      </Link>
      <Link to="/internship" onClick={() => setMenuOpen(false)} className="text-2xl font-semibold text-white my-4">
        Stages
      </Link>
    </div>
  );
};
