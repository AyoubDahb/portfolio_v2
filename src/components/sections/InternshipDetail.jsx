import { Link, useParams } from "react-router-dom";
import { Navbar } from "../Navbar"; // ✅ Bon import

const InternshipDetail = () => {
  const { id } = useParams();

  const documentUrls = {
    "1": "https://drive.google.com/file/d/TON_ID_INTERNSHIP_1/preview",
    "2": "https://docs.google.com/document/d/1FuNZXCwYQE13qHw2oj5HyGqxoMRHtEUp/preview",
  };

  const docUrl = documentUrls[id] || documentUrls["1"];

  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-white pt-16 flex flex-col items-center justify-center"
      style={{
        backgroundImage: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        overflowX: "hidden",
      }}
    >
      <Navbar /> {/* Ajout de la Navbar */}
      <h2 className="text-4xl font-bold mb-6">Internship {id}</h2>
      <iframe
        src={docUrl}
        width="80%"
        height="600px"
        className="border rounded-lg"
        allow="autoplay"
      ></iframe>
     
    </div>
  );
};

export { InternshipDetail }; // ✅ Export propre
