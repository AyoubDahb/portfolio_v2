import { Link } from "react-router-dom";
import { Navbar } from "../Navbar"; // ✅ Utilise un import nommé

const Internship = () => {
  return (
    <div
      className="min-h-screen bg-[#0a0a0a] text-violet pt-16 flex flex-col items-center justify-center"
      style={{
        backgroundImage: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        overflowX: "hidden",
      }}
    >
      <Navbar /> {/* Ajout de la Navbar */}
      <h2 className="text-4xl font-bold mb-8">Choose Your Internship</h2>
      <div className="space-x-4">
        <Link to="/internship/1" className="bg-violet-500 px-6 py-3 rounded text-violet-50 hover:bg-violet-700 transition">
          Internship 1
        </Link>
        <Link to="/internship/2" className="bg-violet-500 px-6 py-3 rounded text-violet-50 hover:bg-violet-700 transition">
          Internship 2
        </Link>
      </div>
    </div>
  );
};

export { Internship };
