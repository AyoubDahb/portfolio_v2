import { Navbar } from "../Navbar";
import { Link } from "react-router-dom";

const E5 = () => {
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

      <div className="flex flex-col items-center justify-center flex-grow space-y-8">
        <h2 className="text-4xl font-bold mb-8">Épreuve E5 - Dossier PDF</h2>
        <div className="flex space-x-4">

          <a
            href="/pdfs/DAHBI_Ayoub_E5.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-violet-500 px-6 py-3 rounded text-white hover:bg-violet-700 transition"
          >
            Visualiser le PDF
          </a>

          <a
            href="/pdfs/e5.pdf"
            download
            className="border border-violet-500/50 text-violet-500 px-6 py-3 rounded hover:bg-violet-500/10 transition"
          >
            Télécharger le PDF
          </a>

        </div>
      </div>

      <div className="text-center pb-8">
        <Link to="/" className="text-violet-400 hover:underline text-lg font-semibold">
          ← Retour à l'accueil
        </Link>
      </div>
    </div>
  );
};

export default E5;
