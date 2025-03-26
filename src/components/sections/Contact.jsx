import { useState } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub } from "react-icons/fa"; // ✅ Ajout des icônes

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
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => alert("Oops! Something went wrong. Please try again."));
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="px-4 w-150 text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-violet-200 bg-clip-text text-transparent">
            Get In Touch
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
                placeholder="Name..."
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
                placeholder="example@gmail.com"
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
                placeholder="Your Message..."
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
              />
            </div>

            <button
              type="submit"
              className="w-full bg-violet-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
            >
              Send Message
            </button>
          </form>

          {/* ✅ Icônes GitHub et LinkedIn sous le formulaire */}
          <div className="flex justify-center space-x-6 mt-6">
            <a
              href="https://www.linkedin.com/in/ayoub-dahbi" // Remplace par ton LinkedIn
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-600 transition text-3xl"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://github.com/AyoubDahb" // Remplace par ton GitHub
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-400 hover:text-violet-600 transition text-3xl"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
