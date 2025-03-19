import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHeart, FaRegSquare } from "react-icons/fa";

const VeilleNavbar = () => {
  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="font-mono text-xl font-bold text-gray">
            Ay<span className="text-violet-500">.Da</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Home</Link>
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">About</Link>
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Projects</Link>
            <Link to="/" className="text-gray-300 hover:text-white transition-colors">Contact</Link>
            <Link to="/veille" className="text-gray-300 hover:text-white transition-colors">Veille</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const Veille = () => {
  const [articles, setArticles] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const articlesPerPage = 10;

  useEffect(() => {
    fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/tag/reactjs")
      .then((response) => response.json())
      .then((data) => {
        const updatedArticles = data.items.map((article) => {
          const imgRegex = /<img[^>]+src=\"([^\"]+)\"/;
          const imgMatch = article.content.match(imgRegex);
          return {
            ...article,
            thumbnail: imgMatch ? imgMatch[1] : "https://via.placeholder.com/100"
          };
        });
        setArticles(updatedArticles);
      })
      .catch((error) => console.error("Erreur lors du chargement du flux RSS", error));
  }, []);

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
      className="min-h-screen bg-[#0a0a0a] text-white pt-16 flex flex-col justify-between"
      style={{
        backgroundImage: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        overflowX: "hidden",
      }}
    >
      <VeilleNavbar />
      <div className="flex flex-col items-center justify-center p-8 flex-grow">
        <h2 className="text-4xl font-bold mb-8">Veille Informatique - React</h2>
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
        <div className="mt-6 flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={`px-4 py-2 rounded ${currentPage === i + 1 ? "bg-violet-500 text-white" : "bg-gray-700 text-gray-300"}`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
      <div className="text-center pb-8">
        <Link to="/" className="text-violet-400 hover:underline text-lg font-semibold">← Retour à l'accueil</Link>
      </div>
    </div>
  );
};

export default Veille;
