import { RevealOnScroll } from "../RevealOnScroll";

export const About = () => {
  const frontendSkills = ["React", "JavaScript", "TailwindCSS", "Bootstrap"];
  const backendSkills = ["Node.js", "Python", "C#", "SQL", "PHP", "Symfony"];

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-violet-500 to-violet-200 bg-clip-text text-transparent text-center">
            À propos
          </h2>

          <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
            <p className="text-violet-50 mb-6">
              Développeur passionné, avec un fort intérêt pour la création d'applications web évolutives et le développement de solutions innovantes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                <h3 className="text-xl font-bold mb-4 text-violet-50"> Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {frontendSkills.map((tech, key) => (
                    <span
                      key={key}
                      className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
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
                      className="bg-violet-500/10 text-violet-500 py-1 px-3 rounded-full text-sm hover:bg-violet-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition"
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
              <h3 className="text-xl font-bold mb-4 text-violet-50"> 🏫 Formation </h3>
              <ul className="list-disc list-inside text-violet-100 space-y-2">
                <li>
                  <strong> BTS SIO (Services Informatiques aux Organisations) </strong> - Lycée Voillaume (2023-2025)
                </li>
                <li>
                  <strong> Titre professionnel Développeur Web et Web Mobile </strong> - Doranco (2022)
                </li>
                <li>
                  <strong> Baccalauréat Scientifique </strong> - Lycée Jean-Jacques Rousseau (2021)
                </li>
              </ul>
            </div>

            <div className="p-6 rounded-xl border-white/10 border hover:-translate-y-1 transition-all">
              <h3 className="text-xl font-bold mb-4 text-violet-50"> 💼 Expérience Professionnelle </h3>
              <div className="space-y-4 text-violet-100">
                <div>
                  <h4 className="font-semibold">
                    Stage au Lycée Henri Sellier (Janvier 2025 - Mars 2025)
                  </h4>
                  <p>
                    Développement d'un système de demande de sortie avec notifications par e-mail automatisées et d'une application de gestion de stock avec tableau de bord CRUD.
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold">
                    Stage CoiffeurDesAmis (Mars 2024 - Avril 2024)
                  </h4>
                  <p>
                    Développement d'un site web pour un salon de coiffure afin d'améliorer sa présence en ligne.
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
