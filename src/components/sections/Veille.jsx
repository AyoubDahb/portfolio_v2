import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaRegSquare } from "react-icons/fa";
import { animateScroll } from "react-scroll";

const VeilleNavbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    navigate("/");
    setTimeout(() => {
      animateScroll.scrollTo(document.getElementById(section).offsetTop - 50, {
        duration: 500,
        smooth: true,
      });
    }, 300);
  };

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-mono text-xl font-bold text-gray">
            Ay<span className="text-violet-500">.Da</span>
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => handleNavigation("home")} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              Home
            </button>
            <button onClick={() => handleNavigation("about")} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              About
            </button>
            <button onClick={() => handleNavigation("projects")} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              Projects
            </button>
            <button onClick={() => handleNavigation("contact")} className="text-gray-300 hover:text-white transition-colors cursor-pointer">
              Contact
            </button>
            <Link to="/veille" className="text-gray-300 hover:text-white transition-colors">
              Veille informatique
            </Link>
            <Link to="/internship" className="text-gray-300 hover:text-white transition-colors">
              Internship
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Veille = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [showFavorites, setShowFavorites] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

useEffect(() => {
  const fetchArticles = async () => {
    const rssUrl = "https://rss.app/feeds/twI6k23quN6Jp484.xml";
    const proxyUrl = `https://corsproxy.io/?${encodeURIComponent(rssUrl)}`;

    try {
      const response = await fetch(proxyUrl);
      if (!response.ok) throw new Error("Erreur de récupération du flux RSS");

      const xmlText = await response.text();
      const parser = new DOMParser();
      const xml = parser.parseFromString(xmlText, "text/xml");

      const items = Array.from(xml.querySelectorAll("item")).map((item) => ({
            title: item.querySelector("title")?.textContent || "Titre inconnu",
            link: item.querySelector("link")?.textContent || "#",
            pubDate: item.querySelector("pubDate")?.textContent || "Date inconnue",
            thumbnail: item.querySelector("enclosure")?.getAttribute("url") || "https://placehold.co/100",
            }));


      setArticles(items);
    } catch (error) {
      console.error("Erreur lors du chargement du flux RSS", error);
    }
  };

  fetchArticles();
}, []);


  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const toggleFavorite = (article) => {
    setFavorites((prev) => {
      if (prev.find((fav) => fav.link === article.link)) {
        return prev.filter((fav) => fav.link !== article.link);
      } else {
        return [...prev, article];
      }
    });
  };
 
  const displayedArticles = showFavorites ? favorites : articles;
  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = displayedArticles.slice(indexOfFirstArticle, indexOfLastArticle);
  const totalPages = Math.ceil(displayedArticles.length / articlesPerPage);

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white pt-20 flex flex-col justify-between"
      style={{
        backgroundImage: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        overflowX: "hidden",
      }}
    >
      <VeilleNavbar />
      <div className="flex flex-col items-center justify-center p-8 flex-grow">
        <h2 className="text-4xl font-bold mb-8">Veille Informatique - Reconnaissance Faciale</h2>
        <div className="mb-6 flex space-x-4">
          <button
            className="bg-violet-500 px-4 py-2 rounded text-white hover:bg-violet-700 transition"
            onClick={() => setShowFavorites((prev) => !prev)}
          >
            {showFavorites ? "Voir tous les articles" : "Voir les favoris"}
          </button>
        </div>
        <ul className="space-y-4 max-w-3xl">
          {currentArticles.map((article, index) => (
            <li key={index} className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition flex items-center space-x-4">
              <img src={article.thumbnail} alt={article.title} className="w-24 h-24 object-cover rounded" />
              <div className="flex-grow">
                <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline text-lg font-semibold">
                  {article.title}
                </a>
                <p className="text-gray-400 text-sm mt-2">{article.pubDate}</p>
              </div>
              <button onClick={() => toggleFavorite(article)} className="text-violet-500 hover:text-violet-700 text-2xl">
                {favorites.find((fav) => fav.link === article.link) ? <FaHeart /> : <FaRegSquare />}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="text-center pb-8">
        <button
          onClick={() => navigate("/")}
          className="text-violet-400 hover:underline text-lg font-semibold"
        >
          ← Retour à l'accueil
        </button>
      </div>
    </div>
  );
};

export default Veille;
