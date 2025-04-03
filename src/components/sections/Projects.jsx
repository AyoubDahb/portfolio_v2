import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import ProjectModal from "./ProjectModal";

// === Liste des projets ===
const projects = [


  {
    title: "Site web restaurant dynamique",
    description: "Dans le cadre de mon apprentissage du modèle MVC (Model - View - Controller), j'ai développé une application web de gestion de restaurants. Ce projet avait pour objectif de mettre en pratique les principes de séparation des responsabilités offerts par ce patron de conception. L'application permet aux utilisateurs de s'inscrire, de parcourir une liste de restaurants, d'attribuer des j'aime à leurs établissements favoris, et de consulter ou poster des commentaires relatifs aux restaurants.",
    category: "AP",
    year: "2024",
    technologies: ["HTML", "CSS", "PHP", "SQL"],
    image: "images/resto/resto.jpg",
    extraImages: ["images/resto/recherche.jpg"],
    github: "https://github.com/ayoubdahb",

  },

  {
    title: "Orange",
    description: "Correction de bugs d'un site orange existant. Implémentation d’un système de gestion des rôles (administrateur, utilisateur) et renforcement de la sécurité avec la vérification de la complexité des mots de passe. Projet réalisé en PHP orienté objet modèle MVC.",
    category: "AP",
    year: "2024",
    technologies: ["HTML", "CSS", "PHP", "SQL"],
    image: "images/orange/home.jpg",
    extraImages: ["images/orange/connexion.jpg", "images/orange/ins.jpg"],
    github: "https://github.com/ayoubdahb",

  },

  {
    title: "Jeux olympique 2024",
    description: "Correction de bugs et ajout de fonctionnalités : gestion des rôles, vérification de la sécurité des mots de passe, possibilité de supprimer un professionnel avec l’ensemble de ses annonces, et affichage d’une liste complète des professionnels. Projet en PHP orienté objet modèle MVC.",
    category: "AP",
    year: "2025",
    technologies: ["HTML", "CSS", "PHP", "SQL"],
    image: "images/jO/home.jpg",
    extraImages: ["images/jO/connexion.jpg", "images/jO/inscription.jpg", "images/jO/evenement.jpg"],
    github: "https://github.com/ayoubdahb",

  },

  {
    title: "Site pour un salon de coiffure",
    description: "Création d’un site vitrine pour améliorer la visibilité en ligne du salon à l’aide d’un CMS, HTML et CSS. Mise en place d’une interface simple et responsive.",
    category: "Stage",
    year: "2024",
    technologies: ["HTML", "CSS", "PHP", "CMS"],
    image: "images/coiffeur/coiffeur.jpg",
    extraImages: ["images/coiffeur/story.jpg", "images/coiffeur/service.jpg", "images/coiffeur/contact.jpg", "images/coiffeur/adresse.jpg",],
    github: "https://github.com/ayoubdahb",

  },


  {
    title: "Système d'automatisation des demandes de sorties",
    description: "Réalisation d’une application web facilitant la gestion des demandes de sorties scolaires. Les formulaires complétés par les enseignants sont automatiquement transformés en documents PDF grâce à la bibliothèque mPDF puis envoyés par mail via PHPMailer aux responsables concernés (chef d’établissement, vie scolaire, etc.). Ce projet a permis d’automatiser et de fluidifier l’ensemble du processus administratif, réduisant considérablement les erreurs et les délais de traitement.",
    category: "Stage",
    year: "2025",
    technologies: ["HTML", "CSS", "PHP"],
    image: "images/formulaire/formulaire.jpg",
    extraImages: [],
    github: "https://github.com/ayoubdahb",

  },
  {
    title: "Application de gestion de stock",
    description: "Conception d'une application web permettant de gérer efficacement le stock d'une organisation. Le système intègre les fonctionnalités essentielles du CRUD (Créer, Lire, Mettre à jour, Supprimer) pour assurer la gestion complète des produits : ajout de nouveaux articles, modification des informations, visualisation en temps réel du stock et suppression des articles obsolètes. Cette application garantit une meilleure organisation, une mise à jour rapide des inventaires et une réduction des erreurs humaines dans la gestion du stock.",
    category: "Stage",
    year: "2025",
    technologies: ["HTML", "CSS", "PHP", "SQL"],
    image: "images/inventaire/dashboard.jpg",
    extraImages: ["images/inventaire/connexion.jpg", "images/inventaire/entré.jpg", "images/inventaire/gestion.jpg", "images/inventaire/journal.jpg", "images/inventaire/saisie.jpg", "images/inventaire/sortie.jpg", "images/inventaire/sql.jpg", "images/inventaire/structure.jpg"],

    github: "https://github.com/ayoubdahb",
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
