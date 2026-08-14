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
  {
    name: "HTML",
    icon: <FaHtml5 />,
    color: "#FF6B4A",
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
    color: "#8B9CFF",
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "#F5C451",
  },
  {
    name: "React",
    icon: <FaReact />,
    color: "#61DAFB",
  },
  {
    name: "Node.js",
    icon: <FaNodeJs />,
    color: "#7CCB70",
  },
  {
    name: "Express.js",
    icon: <SiExpress />,
    color: "#E8DDD2",
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#6FCF97",
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F47C5C",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#17121B]
        text-[#F5EEE6]
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
          bg-[#FF6B4A]/8
          blur-[150px]
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
          bg-[#8B9CFF]/8
          blur-[150px]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* ================= HEADER ================= */}

        <div className="mb-16">

          <div className="flex items-center gap-4 mb-7">

            <span className="text-[#FF6B4A] text-xl">
              ✦
            </span>

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-white/40
              "
            >
              My Toolkit
            </span>

          </div>

          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              md:justify-between
              gap-8
            "
          >

            <h2
              className="
                text-6xl
                sm:text-7xl
                md:text-8xl
                font-semibold
                tracking-[-0.07em]
                leading-[0.8]
              "
            >
              Skills
              <span className="text-[#FF6B4A]">
                .
              </span>
            </h2>

            <p
              className="
                max-w-sm
                text-sm
                leading-6
                text-white/40
              "
            >
              A collection of technologies I use to
              design, build and bring digital ideas to life.
            </p>

          </div>

        </div>


        {/* ================= SKILL GRID ================= */}

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            gap-3
            sm:gap-4
          "
        >

          {skills.map((skill) => (

            <div
              key={skill.name}
              className="
                group
                relative
                h-[190px]
                sm:h-[210px]
                overflow-hidden
                rounded-[22px]
                bg-[#211A26]
                border
                border-white/[0.07]
                p-5
                sm:p-6
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-white/15
              "
            >

              {/* Hover Glow */}

              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  w-32
                  h-32
                  rounded-full
                  blur-3xl
                  opacity-0
                  group-hover:opacity-30
                  transition-opacity
                  duration-500
                "
                style={{
                  backgroundColor: skill.color,
                }}
              />


              {/* Icon */}

              <div
                className="
                  relative
                  z-10
                  text-4xl
                  sm:text-5xl
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:-translate-y-1
                "
                style={{
                  color: skill.color,
                }}
              >
                {skill.icon}
              </div>


              {/* Skill Name */}

              <div
                className="
                  absolute
                  bottom-5
                  left-5
                  sm:left-6
                "
              >

                <p
                  className="
                    text-sm
                    sm:text-base
                    font-medium
                    text-white/80
                    group-hover:text-white
                    transition-colors
                    duration-300
                  "
                >
                  {skill.name}
                </p>

              </div>

            </div>

          ))}

        </div>


        {/* ================= BOTTOM MARQUEE ================= */}

        <div
          className="
            mt-16
            overflow-hidden
            border-y
            border-white/[0.07]
            py-5
          "
        >

          <div
            className="
              flex
              w-max
              gap-10
              animate-[marquee_18s_linear_infinite]
            "
          >

            <span className="text-xs uppercase tracking-[0.3em] text-white/25">
              React
            </span>

            <span className="text-[#FF6B4A]">
              ✦
            </span>

            <span className="text-xs uppercase tracking-[0.3em] text-white/25">
              Node.js
            </span>

            <span className="text-[#8B9CFF]">
              ✦
            </span>

            <span className="text-xs uppercase tracking-[0.3em] text-white/25">
              MongoDB
            </span>

            <span className="text-[#F5C451]">
              ✦
            </span>

            <span className="text-xs uppercase tracking-[0.3em] text-white/25">
              JavaScript
            </span>

            <span className="text-[#FF6B4A]">
              ✦
            </span>

            <span className="text-xs uppercase tracking-[0.3em] text-white/25">
              Express
            </span>

            <span className="text-[#8B9CFF]">
              ✦
            </span>

            <span className="text-xs uppercase tracking-[0.3em] text-white/25">
              Git
            </span>

            <span className="text-[#F5C451]">
              ✦
            </span>

            <span className="text-xs uppercase tracking-[0.3em] text-white/25">
              React
            </span>

            <span className="text-[#FF6B4A]">
              ✦
            </span>

            <span className="text-xs uppercase tracking-[0.3em] text-white/25">
              Node.js
            </span>

          </div>

        </div>

      </div>


      {/* ================= ANIMATION ================= */}

      <style>{`

        @keyframes marquee {

          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-35%);
          }

        }

      `}</style>

    </section>
  );
};

export default Skills;