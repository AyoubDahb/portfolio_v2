import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = [
    "React",
    "JavaScript",
    "TailwindCSS",
    "Bootstrap",
  ];

  const backendSkills = ["Node.js", "Python", "C#", "SQL", "PHP","Symfony"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-violet-200 bg-clip-text text-transparent text-center">
            {" "}
            About Me
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-violet-50 mb-6">
              Passionate developer with a strong interest in building scalable web applications and developing innovative solutions.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-violet-50"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-violet-50"> Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {backendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 
                                    hover:shadow-[0_2px_8px_rgba(59,130,2246,0.2)] transition
                    "
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-violet-50 "> 🏫 Education </h3>
              <ul className="list-disc list-inside text-violet-100 space-y-2">
                <li>
                  <strong> BTS SIO (Software Development and Business Applications) </strong> - Lycée Voillaume
                  (2023-2025)
                </li>
                <li>
                  <strong>Professional certificate Web and Mobile Web Developer </strong> - Doranco
                  (2022)
                </li>
                 <li>
                  <strong>Baccalauréat scientifique</strong> - Lycée Jean-Jacques Rousseau
                  (2021)
                </li>
              </ul>
            </div>
            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-violet-50"> 💼 Work Experience </h3>
              <div className="space-y-4 text-violet-100">
                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Internship at Henri Sellier (January 2025 - March 2025){" "}
                  </h4>
                  <p>
                      Developed a permission request system with automated email notifications and a stock management app with a CRUD dashboard.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    {" "}
                    Internship at CoiffeurDesAmis (March 2024 - April 2024){" "}
                  </h4>
                  <p>
                    Developed a website for a hair salon to enhance its online presence.
                    
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
