import { useEffect, useRef, useState } from "react";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaJava,
  FaPython,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaChartLine,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiBootstrap,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGithub,
  SiPostman,
  SiJsonwebtokens,
  SiSocketdotio,
  SiLeaflet,
  SiAxios,
} from "react-icons/si";

import { DiDatabase } from "react-icons/di";

const skillGroups = [
  {
    title: "Languages",
    number: "01",
    description: "Core programming & markup",
    color: "#C9A27E",
    skills: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3Alt /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Java", icon: <FaJava /> },
      { name: "SQL", icon: <DiDatabase /> },
    ],
  },

  {
    title: "Frontend",
    number: "02",
    description: "Interfaces & user experiences",
    color: "#A78BFA",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
      { name: "Bootstrap", icon: <SiBootstrap /> },
    ],
  },

  {
    title: "Backend",
    number: "03",
    description: "Server-side development",
    color: "#5EEAD4",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "REST API", icon: "API" },
      { name: "JWT", icon: <SiJsonwebtokens /> },
      { name: "Socket.IO", icon: <SiSocketdotio /> },
    ],
  },

  {
    title: "Database",
    number: "04",
    description: "Data storage & management",
    color: "#60A5FA",
    skills: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },

  {
    title: "Tools",
    number: "05",
    description: "Development workflow",
    color: "#FB7185",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <SiGithub /> },
      { name: "Axios", icon: <SiAxios /> },
    ],
  },

  {
    title: "Libraries & Other",
    number: "06",
    description: "Supporting technologies",
    color: "#FBBF24",
    skills: [
      { name: "Leaflet", icon: <SiLeaflet /> },
      { name: "Recharts", icon: <FaChartLine /> },
    ],
  },
];


const Skills = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.12 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#12100F]
        text-[#F3EDE4]
        py-28
        px-6
        sm:px-8
      "
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          -top-40
          -right-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#A78BFA]/5
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-200px]
          left-[-150px]
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#C9A27E]/5
          blur-[140px]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Header */}
        <div
          className={`
            mb-16
            transition-all
            duration-1000
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }
          `}
        >
          <div className="flex items-center gap-4 mb-6">
            <span className="w-10 h-[1px] bg-[#C9A27E]" />

            <span className="
              text-[10px]
              uppercase
              tracking-[0.45em]
              text-[#C9A27E]
            ">
              My Toolkit
            </span>
          </div>

          <div className="
            flex
            flex-col
            md:flex-row
            md:items-end
            md:justify-between
            gap-6
          ">
            <h2 className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              font-light
              tracking-[-0.06em]
            ">
              Skills<span className="text-[#C9A27E]">.</span>
            </h2>

            <p className="
              max-w-md
              text-sm
              leading-6
              text-white/40
            ">
              Technologies and tools I use to design,
              develop and bring digital products to life.
            </p>
          </div>
        </div>

        {/* Skill Groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

          {skillGroups.map((group, index) => (
            <div
              key={group.title}
              className={`
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/[0.08]
                bg-white/[0.025]
                p-6
                sm:p-7
                min-h-[230px]
                transition-all
                duration-700
                hover:-translate-y-2
                hover:border-white/[0.15]
                hover:bg-white/[0.04]
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }
              `}
              style={{
                transitionDelay: visible
                  ? `${index * 120}ms`
                  : "0ms",
              }}
            >

              {/* Glow */}
              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-44
                  h-44
                  rounded-full
                  blur-[75px]
                  opacity-0
                  group-hover:opacity-20
                  transition-opacity
                  duration-700
                "
                style={{
                  backgroundColor: group.color,
                }}
              />

              {/* Top */}
              <div className="
                relative
                z-10
                flex
                items-center
                justify-between
              ">
                <span className="
                  text-[10px]
                  tracking-[0.3em]
                  text-white/20
                ">
                  {group.number}
                </span>

                <span
                  className="
                    text-lg
                    opacity-40
                    group-hover:opacity-100
                    group-hover:rotate-90
                    transition-all
                    duration-500
                  "
                  style={{ color: group.color }}
                >
                  ✦
                </span>
              </div>

              {/* Title */}
              <div className="relative z-10 mt-7">
                <h3 className="
                  text-2xl
                  sm:text-3xl
                  font-light
                  text-white/85
                  group-hover:text-white
                  transition-colors
                ">
                  {group.title}
                </h3>

                <p className="
                  mt-2
                  text-[11px]
                  text-white/25
                ">
                  {group.description}
                </p>
              </div>

              {/* Skills */}
              <div className="
                relative
                z-10
                mt-7
                flex
                flex-wrap
                gap-2
              ">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="
                      group/skill
                      flex
                      items-center
                      gap-2.5
                      px-3
                      py-2
                      rounded-lg
                      border
                      border-white/[0.07]
                      bg-black/10
                      hover:-translate-y-1
                      hover:bg-white/[0.06]
                      hover:border-white/[0.15]
                      transition-all
                      duration-300
                    "
                  >
                    <span
                      className="
                        text-base
                        group-hover/skill:scale-110
                        transition-transform
                      "
                      style={{ color: group.color }}
                    >
                      {skill.icon}
                    </span>

                    <span className="
                      text-[11px]
                      sm:text-xs
                      text-white/50
                      group-hover/skill:text-white/90
                      transition-colors
                    ">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>

              {/* Hover Line */}
              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  h-[1px]
                  w-0
                  group-hover:w-full
                  transition-all
                  duration-700
                "
                style={{
                  backgroundColor: group.color,
                }}
              />

            </div>
          ))}

        </div>

        {/* Bottom */}
        <div
          className={`
            mt-14
            pt-6
            border-t
            border-white/[0.08]
            flex
            flex-col
            sm:flex-row
            sm:items-center
            sm:justify-between
            gap-4
            transition-all
            duration-1000
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }
          `}
        >
          <span className="
            text-[10px]
            uppercase
            tracking-[0.3em]
            text-white/15
          ">
            Learn · Build · Ship
          </span>

          <span className="
            text-sm
            text-[#C9A27E]/50
          ">
            Always learning something new.
          </span>
        </div>

      </div>
    </section>
  );
};

export default Skills;