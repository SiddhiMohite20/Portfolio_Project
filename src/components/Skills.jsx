import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiJavascript,
} from "react-icons/si";

const skills = [
  { name: "HTML", icon: <FaHtml5 size={40} /> },
  { name: "CSS", icon: <FaCss3Alt size={40} /> },
  { name: "JavaScript", icon: <SiJavascript size={40} /> },
  { name: "React", icon: <FaReact size={40} /> },
  { name: "Node.js", icon: <FaNodeJs size={40} /> },
  { name: "Express.js", icon: <SiExpress size={40} /> },
  { name: "MongoDB", icon: <SiMongodb size={40} /> },
  { name: "Git", icon: <FaGitAlt size={40} /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-[#0D1117] text-white py-24 px-8"
    >
      <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
        Skills
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="
              bg-[#161B22]
              p-6
              rounded-xl
              text-center
              hover:border
              hover:border-blue-500
              hover:shadow-lg
              hover:shadow-blue-500/20
              hover:-translate-y-2
              transition-all
              duration-300
            "
          >
            <div className="flex flex-col items-center gap-3">
              {skill.icon}
              <p className="font-medium">{skill.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;