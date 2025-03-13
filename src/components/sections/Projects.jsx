import { RevealOnScroll } from "../RevealOnScroll";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Application Permission Request System",
    description: "Developed a permission request system with automated email notifications.",
    technologies: ["React", "Node.js", "AWS", "Docker"],
    image: "/images/project1.jpg",
    github: "https://github.com/example",
    live: "https://example.com",
  },
  {
    title: "Stock Management Application",
    description: "Developed a stock management app with a CRUD dashboard.",
    technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
    image: "/images/project2.jpg",
    github: "https://github.com/example",
    live: "https://example.com",
  },
  {
    title: "Website for Hair Salon",
    description: "Developed a website for a hair salon to enhance its online presence.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/images/project3.jpg",
    github: "https://github.com/example",
    live: "https://example.com",
  },
  {
    title: "Strappy E-commerce",
    description: "An e-commerce application for selling rubber straps for Brazilian Jiu-Jitsu.",
    technologies: ["Socket.IO", "Express", "React", "Redis"],
    image: "/images/project4.jpg",
    github: "https://github.com/example",
    live: "https://example.com",
  },
];

// 🔹 **Composant ProjectCard amélioré et épuré**
const ProjectCard = ({ project, index }) => {
  const isEven = index % 2 === 0;

  return (
    <div className={`relative flex flex-col md:flex-row items-center md:items-start ${isEven ? "md:flex-row-reverse" : ""} group transition-transform duration-300 hover:scale-[1.01]`}>
      
      {/* Image du projet (sans zoom, juste plus grande) */}
      <div className="w-full md:w-3/5 rounded-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-[350px] md:h-[450px] object-cover"
        />
      </div>

      {/* Contenu du projet : plus large et lisible */}
      <div className="w-full md:w-2/5 flex flex-col justify-center p-8 md:p-10 transition-opacity duration-500 group-hover:opacity-100">
       
        <h3 className="text-3xl font-bold text-white mt-2 transition-all duration-500 group-hover:text-white">
          {project.title}
        </h3>

        {/* Description avec fond subtile */}
        <p className="text-gray-300 text-sm mt-4 bg-gray-800/60 p-4 rounded-lg shadow-lg transition-all duration-500 group-hover:bg-gray-900/70">
          {project.description}
        </p>

        {/* Technologies utilisées avec un effet smooth */}
        <div className="flex flex-wrap gap-3 mt-5">
          {project.technologies.map((tech, index) => (
            <span key={index} className="bg-blue-500/30 text-blue-200 py-1 px-4 rounded-full text-xs font-semibold transition-all duration-300 group-hover:bg-blue-500/50">
              {tech}
            </span>
          ))}
        </div>

        {/* Icônes GitHub et Lien Live améliorés */}
        <div className="flex gap-4 mt-5">
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
              <FaGithub size={22} />
            </a>
          )}
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-transform duration-300 hover:scale-110">
              <FaExternalLinkAlt size={22} />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

// 🔹 **Composant principal Projects**
const Projects = () => {
  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
      style={{
        backgroundColor: "#0a0a0a",
        backgroundImage:
          "radial-gradient(ellipse 80% 80% at 50% -20%, rgba(120, 119, 198, 0.3), rgba(255, 255, 255, 0))",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        overflowX: "hidden",
      }}
    >
      <RevealOnScroll>
        <div className="max-w-6xl mx-auto px-6 space-y-16">
          <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          {/* Liste des projets avec modernisation */}
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </RevealOnScroll>
    </section>
  );
};

export default Projects;
