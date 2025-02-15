import { RevealOnScroll } from "../RevealOnScroll";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "../../index.css";

const projects = [
  {
    title: "Cloud Platform",
    description:
      "Scalable cloud infrastructure management with real-time monitoring and automated scaling.",
    technologies: ["React", "Node.js", "AWS", "Docker"],
    image: "/images/projet1.",
  },
  {
    title: "AI Analytics Dashboard",
    description:
      "ML-powered data visualization platform with predictive analytics and interactive reports.",
    technologies: ["Python", "TensorFlow", "D3.js", "Flask"],
    image: "/images/ai-dashboard.png",
  },
  {
    title: "E-Commerce Web App",
    description:
      "Full-stack e-commerce with modern UI, secure payment integration, and customizable product inventory.",
    technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL"],
    image: "/images/ecommerce-app.png",
  },
  {
    title: "Real-Time Chat App",
    description:
      "Scalable chat platform supporting real-time messaging, presence, and group chat features.",
    technologies: ["Socket.IO", "Express", "React", "Redis"],
    image: "/images/chat-app.png",
  },
];

export const Projects = () => {
  return (
    <section id="projects" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, el: ".swiper-pagination" }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full"
          >
            {projects.map((project, index) => (
              <SwiperSlide key={index} className="p-6">
                <div className="p-6 rounded-xl border border-white/10 bg-gray-900/50 shadow-lg transition-all">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover rounded-lg mb-4" />
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, key) => (
                      <span
                        key={key}
                        className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm transition hover:bg-blue-500/20 hover:shadow-lg"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href="#" className="text-blue-400 hover:text-blue-300 transition-colors my-4">
                    View Project →
                  </a>
                </div>
              </SwiperSlide>
            ))}
            <div className="swiper-pagination"></div>
          </Swiper>
        </div>
      </RevealOnScroll>
    </section>
  );
};