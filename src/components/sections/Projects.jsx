import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

// === Liste des projets ===
const projects = [
  {
    title: "Système d'automatisation des demandes de sorties",
    description: "Développement d’un système de demandes avec notifications par e-mail automatisées. Développement d’un système de demandes avec notifications par e-mail automatisées.Développement d’un système de demandes avec notifications par e-mail automatisées.Développement d’un système de demandes avec notifications par e-mail automatisées.Développement d’un système de demandes avec notifications par e-mail automatisées.Développement d’un système de demandes avec notifications par e-mail automatisées.Développement d’un système de demandes avec notifications par e-mail automatisées.Développement d’un système de demandes avec notifications par e-mail automatisées.Développement d’un système de demandes avec notifications par e-mail automatisées.Développement d’un système de demandes avec notifications par e-mail automatisées. ",
    category: "Stage",
    year: "2024",
    technologies: ["HTML", "CSS", "PHP", "SQL"],
    image: "/images/project1.jpg",
    extraImages: ["/images/project1.jpg" , "/images/project2.jpg"],
    github: "https://github.com/example",
    live: "https://example.com",
  },
  {
    title: "Application de gestion de stock",
    description: "Développement d’une application de gestion de stock avec un tableau de bord CRUD.",
    category: "Stage",
    year: "2024",
    technologies: ["HTML", "CSS", "PHP", "SQL"],
    image: "/images/project2.jpg",
    github: "https://github.com/example",
    live: "https://example.com",
  },
  {
    title: "Site pour un salon de coiffure",
    description: "Création d’un site web pour améliorer la visibilité en ligne d’un salon de coiffure.",
    category: "Stage",
    year: "2024",
    technologies: ["CMS", "HTML", "CSS", "SQL"],
    image: "/images/project3.jpg",
    github: "https://github.com/example",
    live: "https://example.com",
  },
  {
    title: "JO 2024",
    description: "Application web de gestion des Jeux Olympiques.",
    category: "Scolaire",
    year: "2024",
    technologies: ["HTML", "CSS", "PHP", "SQL"],
    image: "/images/project4.jpg",
    extraImages: ["/images/project4b.jpg"],
    github: "https://github.com/example",
    live: "https://example.com",
  },
];

// === Composant principal ===
const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProject(null);
    setIsModalOpen(false);
  };

  // Bloquer le scroll quand le modal est ouvert
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [isModalOpen]);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage: "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        overflowX: "hidden",
      }}
    >
      <RevealOnScroll>
        <div className="max-w-[2000px] mx-auto px-14 space-y-16">

          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-violet-500 to-gray-400 bg-clip-text text-transparent mb-12">
            Projets
          </h2>

          {/* Grid des projets */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 w-full">
            {projects.map((project, index) => (
              <div key={index} className="group flex flex-col w-full">

                {/* Image avec hover zoom */}
                <div
                  onClick={() => openModal(project)}
                  className="overflow-hidden rounded-3xl aspect-[16/9] relative cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Texte */}
                <div className="mt-4 flex flex-col space-y-2">

                  <h3 className="text-2xl font-semibold text-white flex items-center gap-2">
                    ✦ {project.title}
                  </h3>

                  <p className="text-sm text-gray-400">{project.category} — {project.year}</p>

                  <div className="flex justify-between items-center mt-2">

                    <button
                      onClick={() => openModal(project)}
                      className="border border-white/20 rounded-full px-4 py-1 text-sm text-white hover:bg-violet-500/20 transition"
                    >
                      Voir plus
                    </button>

                    <div className="flex space-x-3">
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                          <FaGithub size={20} />
                        </a>
                      )}
                      {project.live && (
                        <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                          <FaExternalLinkAlt size={20} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>

        </div>
      </RevealOnScroll>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={closeModal} />
    </section>
  );
};

export default Projects;
