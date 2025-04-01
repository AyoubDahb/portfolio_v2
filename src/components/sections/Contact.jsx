import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi"; // ✅


export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message envoyé !");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oups ! Une erreur s'est produite. Veuillez réessayer.")
      );
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-violet-200 bg-clip-text text-transparent">
            Me Contacter
          </h2>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="relative">
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-violet-500 focus:bg-violet-500/5"
                placeholder="Nom..."
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-violet-500 focus:bg-violet-500/5"
                placeholder="exemple@gmail.com"
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>

            <div className="relative">
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-violet-500 focus:bg-violet-500/5"
                placeholder="Votre message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Envoyer le message
            </button>
          </form>

          {/* Icônes GitHub et LinkedIn */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://www.linkedin.com/in/ayoub-dahbi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-600 transition text-3xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/AyoubDahb"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-600 transition text-3xl"
            >
              <FaGithub />
            </a>

             <a href="/docs/CV_DAHBI_Ayoub_Alternance.pdf" target="_blank" rel="noopener noreferrer" className="text-violet-400 hover:text-violet-600 transition text-3xl">
                            <HiOutlineDocumentText />
                          </a>

          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
