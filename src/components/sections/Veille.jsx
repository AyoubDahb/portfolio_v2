import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaHeart, FaRegSquare, FaSpinner } from "react-icons/fa";
import { Navbar } from "../Navbar";

const Veille = () => {
  const navigate = useNavigate();
  const [articles, setArticles] = useState([]);
  const [favoris, setFavoris] = useState(() => {
    const savedFavorites = localStorage.getItem("favoris");
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });
  const [afficherFavoris, setAfficherFavoris] = useState(false);
  const [chargement, setChargement] = useState(true);

  useEffect(() => {
    const fetchArticles = async () => {
      setChargement(true);
      const rssUrl = "https://rss.app/feeds/tYBU1aC9Yv7AwXLq.xml";
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
        setChargement(false);
      }
    };

    fetchArticles();
  }, []);

  useEffect(() => {
    localStorage.setItem("favoris", JSON.stringify(favoris));
  }, [favoris]);

  const toggleFavori = (article) => {
    setFavoris((prevFavoris) => {
      const dejaFavori = prevFavoris.some((fav) => fav.link === article.link);
      if (dejaFavori) {
        return prevFavoris.filter((fav) => fav.link !== article.link);
      } else {
        return [...prevFavoris, article];
      }
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-20 flex flex-col justify-between"
      style={{
        backgroundImage: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120,119,198,0.3), rgba(255,255,255,0))",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        overflowX: "hidden",
      }}
    >
      <Navbar />

      {chargement ? (
        <div className="flex flex-col items-center justify-center flex-grow">
          <FaSpinner className="text-violet-500 text-6xl animate-spin-slow" />
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center p-8 flex-grow space-y-8">

          <div className="max-w-4xl text-left text-gray-200 space-y-6 leading-relaxed">

            <h2 className="text-3xl font-bold text-violet-400">Pourquoi la reconnaissance faciale ?</h2>
            <p>La reconnaissance faciale n'est plus un simple sujet de science-fiction. Aujourd'hui, elle est bien présente dans notre quotidien, parfois sans même que l'on s'en rende compte.</p>
            
            <h3 className="text-2xl font-semibold text-violet-300">Un outil puissant mais controversé</h3>
            <p>Elle permet d’identifier les visages via des caméras et des algorithmes d’IA. On la retrouve dans les aéroports, dans nos téléphones, et peut-être bientôt dans nos rues.</p>

            <h3 className="text-2xl font-semibold text-violet-300">Les avantages ?</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Fluidifier les contrôles d’identité.</li>
              <li>Renforcer la sécurité.</li>
              <li>Offrir des expériences utilisateurs simplifiées.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-violet-300">Mais attention...</h3>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Problèmes de vie privée.</li>
              <li>Dérapages possibles dans les espaces publics.</li>
              <li>Risque de biais et d'erreurs dans les algorithmes.</li>
            </ul>

            <h3 className="text-2xl font-semibold text-violet-300">En France et ailleurs</h3>
            <p>En France, son usage est très encadré par la CNIL. Par exemple, les projets visant à surveiller les passants via caméra sont pour l’instant interdits sans consentement. À l’inverse, certains pays l'interdisent totalement comme San Francisco.</p>
            <p>En 2022, Clearview AI a été sanctionnée de 20 millions d’euros pour collecte illégale de données en France.</p>

            <h3 className="text-2xl font-semibold text-violet-300">Les métiers liés</h3>
            <p>Les métiers touchant de près à cette technologie sont très demandés :</p>
            <ul className="list-disc list-inside pl-4 space-y-1">
              <li>Ingénieur en Intelligence Artificielle.</li>
              <li>Expert en vision par ordinateur.</li>
              
            </ul>

            <h3 className="text-2xl font-semibold text-violet-300">Conclusion personnelle</h3>
            <p>
              J’ai choisi ce sujet car je suis passionné d’IA, mais aussi parce que je me rends compte que son développement va impacter notre société de façon durable, pour le meilleur... comme pour le pire.
            </p>
          </div>

          {/* Boutons & Articles */}
          <div className="mb-6 flex space-x-4">
            <button
              className="bg-violet-500 px-4 py-2 rounded text-white hover:bg-violet-700 transition"
              onClick={() => setAfficherFavoris((prev) => !prev)}
            >
              {afficherFavoris ? "Voir tous les articles" : "Voir les favoris"}
            </button>
          </div>

          <ul className="space-y-4 max-w-3xl">
            {afficherFavoris && favoris.length === 0 && (
              <p className="text-gray-400 text-center">Aucun favori pour le moment.</p>
            )}
            {(afficherFavoris ? favoris : articles).map((article, index) => (
              <li key={index} className="p-4 border border-gray-700 rounded-lg hover:bg-gray-800 transition flex items-center space-x-4">
                <div className="flex-grow">
                  <a href={article.link} target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:underline text-lg font-semibold">
                    {article.title}
                  </a>
                  <p className="text-gray-400 text-sm mt-2">{article.pubDate}</p>
                </div>
                <button onClick={() => toggleFavori(article)} className="text-violet-500 hover:text-violet-700 text-2xl">
                  {favoris.some((fav) => fav.link === article.link) ? <FaHeart /> : <FaRegSquare />}
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
