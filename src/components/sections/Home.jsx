import { RevealOnScroll } from "../RevealOnScroll";

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
     
      <RevealOnScroll>
        <div className="text-center z-10 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-violet-200 to-violet-400 bg-clip-text text-transparent leading-right">
            Hi, I am Ayoub Dahbi
          </h1>
          <p className="text-violet-50 text-lg mb-9 max-w-lg mx-auto">
            I’m a passionate web developer currently in my second year of a BTS SIO. I’m looking for an apprenticeship next year to enhance my skills and contribute to impactful projects. My goal is to write clean, efficient code and build user-friendly applications.
          </p>
          <div className="flex justify-center space-x-4">
            <a
              href="#projects"
              className="bg-violet-500 text-gray py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.4)] text-violet-50"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-violet-500/50 text-violet-500 py-3 px-6 rounded font-medium transition-all duration-200 
             hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59, 130, 246, 0.2)] hover:bg-blue-500/10"
            >
              Contact Me
            </a>
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
