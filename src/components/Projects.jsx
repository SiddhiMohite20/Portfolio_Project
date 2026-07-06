const projects = [
  {
    title: "Placement Portal App",
    description:
      "A web application that connects students, recruiters, and administrators.",
    tech: "React, Node.js, Express.js, MongoDB",
    github: "https://github.com/SiddhiMohite20/Placement_portal-",
  },
  {
    title: "Women's Safety App",
    description:
      "A safety-focused application that provides emergency SOS alerts and live location sharing.",
    tech: "React, Node.js, MongoDB",
    github: "https://github.com/SiddhiMohite20/AI-Powered-Women-Safety-Platform",
  },
  {
    title:"Excel-Analyzer",
    description:
    "Built a MERN-based web application for uploading and analyzing Excel files with authentication, interactive dashboards, dynamic charts, search, pagination, file history, and responsive UI.",
    tech :"React.js,Node.js,Express.js,MongoDB,Tailwind CSS,Axios,Recharts,Multer,XLSX,JWT,bcrypt",
    github:"https://github.com/SiddhiMohite20/Excel-Analyzer"
  }
];

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#161B22] text-white py-20 px-4 sm:px-6 md:px-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400 mb-12">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="
              bg-[#0D1117]
              p-5 md:p-6
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
            <h3 className="text-xl md:text-2xl font-bold text-blue-400 mb-4">
              {project.title}
            </h3>

            <p className="text-gray-400 text-sm md:text-base mb-4">
              {project.description}
            </p>

            <p className="text-sm text-blue-300 mb-6 break-words">
              {project.tech}
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                  border border-blue-500
                  px-4 py-2
                  rounded-lg
                  hover:bg-blue-500
                  transition
                "
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