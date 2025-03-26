import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaRegSquare, FaSpinner } from "react-icons/fa"; // ✅ Ajout du logo de chargement
import { Navbar } from "../Navbar"; // ✅ Utilise un import nommé

const Veille = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [favorites, setFavorites] = useState(() => {
    // ✅ Charger les favoris depuis localStorage au premier rendu
    const savedFavorites = localStorage.getItem("favorites");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [showFavorites, setShowFavorites] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // ✅ Ajout du state de chargement

  useEffect(() => {
    const fetchArticles = async () => {
      setIsLoading(true);
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
        }));

        setArticles(items);
      } catch (error) {
        console.error("Erreur lors du chargement du flux RSS", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchArticles();
  }, []);

  // ✅ Mise à jour des favoris dans localStorage dès qu'ils changent
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // ✅ Fonction pour ajouter/retirer un article des favoris
  const toggleFavorite = (article) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorited = prevFavorites.some((fav) => fav.link === article.link);
      if (isAlreadyFavorited) {
        return prevFavorites.filter((fav) => fav.link !== article.link);
      } else {
        return [...prevFavorites, article];
      }
    });
  };

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white pt-20 flex flex-col justify-between"
      style={{
        backgroundImage: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {/* ✅ AFFICHAGE DU LOGO DE CHARGEMENT PENDANT LE CHARGEMENT */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center flex-grow">
          <FaSpinner className="text-violet-500 text-6xl animate-spin" />
        </div>
      ) : (
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
            {showFavorites && favorites.length === 0 && (
              <p className="text-gray-400 text-center">Aucun favori pour le moment.</p>
            )}
            {(showFavorites ? favorites : articles).map((article, index) => (
              <li key={index} className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition flex items-center space-x-4">
                <div className="flex-grow">
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline text-lg font-semibold">
                    {article.title}
                  </a>
                  <p className="text-gray-400 text-sm mt-2">{article.pubDate}</p>
                </div>
                <button onClick={() => toggleFavorite(article)} className="text-violet-500 hover:text-violet-700 text-2xl">
                  {favorites.some((fav) => fav.link === article.link) ? <FaHeart /> : <FaRegSquare />}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

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
