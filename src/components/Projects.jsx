const projects = [
  {
    title: "Placement Portal App",
    description:
      "A web application that connects students, recruiters, and administrators. Features include job postings, application tracking, student profiles, and placement management.",
    tech: "React, Node.js, Express.js, MongoDB",
    github: "https://github.com/SiddhiMohite20/Placement_portal-",
    
  },
  {
    title: "Women's Safety App",
    description:
      "A safety-focused application that provides emergency SOS alerts, live location sharing, emergency contacts, and quick access to nearby help resources.",
    tech: "React, Node.js, MongoDB",
    github: "https://github.com/SiddhiMohite20/AI-Powered-Women-Safety-Platform",
   
  },
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#161B22] text-white py-24 px-8"
    >
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-[#0D1117]
              p-6
              rounded-xl
              hover:border
              hover:border-blue-500
              hover:shadow-lg
              hover:shadow-blue-500/20
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">
              {project.description}
            </p>

            <p className="text-sm text-blue-300 mb-6">
              {project.tech}
            </p>

            <div className="flex gap-4">
              <a
                href={project.github}
                className="border border-blue-500 px-4 py-2 rounded-lg"
              >
                GitHub
              </a>

              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;