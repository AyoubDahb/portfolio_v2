import { useEffect } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import { animateScroll } from "react-scroll";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const handleNavigation = (section) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        animateScroll.scrollTo(document.getElementById(section).offsetTop - 0, {
          duration: 500,
          smooth: true,
        });
      }, 300);
    } else {
      animateScroll.scrollTo(document.getElementById(section).offsetTop - 0, {
        duration: 500,
        smooth: true,
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <RouterLink to="/" className="font-mono text-xl font-bold text-violet">
            Ay<span className="text-violet-500">.Da</span>
          </RouterLink>

          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavigation("home")} className="text-violet-50 hover:text-white transition-colors cursor-pointer">
              Accueil
            </button>
            <button onClick={() => handleNavigation("about")} className="text-violet-50 hover:text-white transition-colors cursor-pointer">
              À propos
            </button>
            <button onClick={() => handleNavigation("projects")} className="text-violet-50 hover:text-white transition-colors cursor-pointer">
              Projets
            </button>

            {/* <RouterLink to="/E5" className="text-gray-300 hover:text-white transition-colors">
  E5
</RouterLink> */}

          

            {/* <RouterLink to="/internship" className="text-violet-50 hover:text-white transition-colors">
              Stages
            </RouterLink>

            <RouterLink to="/veille" className="text-violet-50 hover:text-white transition-colors">
              Veille informationelle
            </RouterLink> */}

              <button onClick={() => handleNavigation("contact")} className="text-violet-50 hover:text-white transition-colors cursor-pointer">
              Contact
            </button>

          </div>
        </div>
      </div>
    </nav>
  );
};
