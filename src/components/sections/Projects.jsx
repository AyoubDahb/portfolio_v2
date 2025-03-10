import { Carousel, Typography, Button, IconButton } from "@material-tailwind/react";
import { RevealOnScroll } from "../RevealOnScroll";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

export const Projects = () => {
  const projects = [
    {
      title: "Application permission request system",
      description: "Developed a permission request system with automated email notifications.",
      technologies: ["React", "Node.js", "AWS", "Docker"],
      image: "/images/project1.jpg",
    },
    {
      title: "Stock management application",
      description: "Developed a stock management app with a CRUD dashboard.",
      technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
      image: "/images/project2.jpg",
    },
    {
      title: "Website hair salon",
      description: "Developed a website for a hair salon to enhance its online presence.",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
      image: "/images/project3.jpg",
    },
    {
      title: "Strappy e-commerce",
      description: "An e-commerce application for selling rubber straps for Brazilian Jiu-Jitsu.",
      technologies: ["Socket.IO", "Express", "React", "Redis"],
      image: "/images/project4.jpg",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20 bg-gray-900"
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
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold mb-12 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          {/* Carousel avec flèches */}
          <div className="relative">
            <Carousel
              className="rounded-xl"
              prevArrow={({ handlePrev }) => (
                <IconButton
                  variant="text"
                  color="blue"
                  size="lg"
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-blue-500/80 transition rounded-full p-3"
                >
                  <ChevronLeftIcon className="h-6 w-6 text-blue-400" />
                </IconButton>
              )}
              nextArrow={({ handleNext }) => (
                <IconButton
                  variant="text"
                  color="blue"
                  size="lg"
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-black/30 hover:bg-blue-500/80 transition rounded-full p-3"
                >
                  <ChevronRightIcon className="h-6 w-6 text-blue-400" />
                </IconButton>
              )}
            >
              {projects.map((project, index) => (
                <div key={index} className="relative h-full w-full">
                  {/* Image du projet */}
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-[500px] w-full object-cover blur-xs"
                  />

                  {/* Overlay sombre */}
                  <div className="absolute inset-0 bg-black/60"></div>

                  {/* Contenu (texte réduit en bas à gauche) */}
                  <div className="absolute inset-0 flex items-end pl-6 pb-6 md:pl-12 md:pb-12 lg:pl-16 lg:pb-16">
                    <div className="w-1/2 p-4 rounded-lg shadow-lg">
                      <Typography
                        variant="h2"
                        color="white"
                        className="mb-2 text-xl md:text-2xl lg:text-3xl"
                      >
                        {project.title}
                      </Typography>
                      <Typography variant="h2" color="white" className="mb-3 text-sm opacity-80">
                        {project.description}
                      </Typography>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="bg-blue-500/20 text-blue-300 py-1 px-3 rounded-full text-xs transition hover:bg-blue-500/40"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Boutons */}
                      <div className="flex gap-2">
                        <Button size="sm" color="blue">
                          View Project
                        </Button>
                        <Button size="sm" color="blue" variant="text">
                          More Info
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
