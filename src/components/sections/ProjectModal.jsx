import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaTimes } from "react-icons/fa";

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const [mainImage, setMainImage] = useState(project.image);

  const handleOverlayClick = (e) => {
    if (e.target.id === "modal-overlay") {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      onClick={handleOverlayClick}
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center"
    >
      <div className="relative bg-[#0a0a0a]/90 rounded-2xl max-w-6xl w-[95%] max-h-[90vh] p-10 shadow-xl animate-fade-in space-y-6 overflow-y-auto scrollbar-hide">

        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white transition"
        >
          <FaTimes size={24} />
        </button>

        {/* Image principale avec titre et techs */}
        <div className="relative rounded-xl overflow-hidden group">
          <img
            src={mainImage}
            alt={project.title}
            className="w-full h-[500px] md:h-[600px] object-cover rounded-xl brightness-75 group-hover:brightness-100 transition duration-500"
          />
          <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/60 via-black/30 to-transparent">
            <h2 className="text-2xl font-bold text-white mb-2">{project.title}</h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-violet-500/20 text-violet-200 text-xs px-3 py-1 rounded-full backdrop-blur-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Images supplémentaires */}
        {project.extraImages?.length > 0 && (
          <div className="flex gap-3 overflow-x-auto py-2 scrollbar-hide">
            {[project.image, ...project.extraImages].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={`extra-${i}`}
                onClick={() => setMainImage(img)}
                className="h-24 rounded-lg object-cover cursor-pointer hover:scale-105 transition"
              />
            ))}
          </div>
        )}

        {/* Texte */}
        <div className="space-y-3">
          <p className="text-gray-300 leading-relaxed text-sm md:text-base">{project.description}</p>

          <div className="flex space-x-4 mt-4">
            {project.github && (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center gap-2">
                <FaGithub /> GitHub
              </a>
            )}
            {project.live && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white flex items-center gap-2">
                <FaExternalLinkAlt /> Voir en ligne
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
