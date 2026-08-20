import { useEffect, useRef, useState } from "react";
import {
  FaMapMarkerAlt,
  FaShieldAlt,
  FaGlobe,
  FaLanguage,
  FaChartBar,
  FaFileExcel,
  FaArrowRight,
  FaGithub,
} from "react-icons/fa";

const projects = [
  {
    number: "01",
    title: "SheSecure",
    category: "Safety Platform",
    description:
      "A women-safety platform designed with emergency SOS alerts, trusted contacts and live location sharing to provide quick assistance during risky situations.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "Leaflet"],
    github: "https://github.com/SiddhiMohite20/SheSecure",
    accent: "#D8A7B1",
    type: "safety",
  },

  {
    number: "02",
    title: "Translation App",
    category: "Web Application",
    description:
      "A modern translation application that converts text into multiple languages with language selection, loading states, error handling and one-click copy functionality.",
    tech: ["React", "Vite", "Tailwind CSS", "RapidAPI"],
    github: "https://github.com/SiddhiMohite20/Transaltion-app",
    accent: "#B8A1FF",
    type: "translation",
  },

  {
    number: "03",
    title: "Excel Analyzer",
    category: "Data Analytics",
    description:
      "A MERN-based application for uploading and analyzing Excel files with authentication, dashboards, dynamic charts, search, pagination and file history.",
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Tailwind CSS",
      "Recharts",
    ],
    github: "https://github.com/SiddhiMohite20/Excel-Analyzer",
    accent: "#8FC7B5",
    type: "excel",
  },
];

const ProjectVisual = ({ project }) => {
  /* ---------------- SHESECURE ---------------- */

  if (project.type === "safety") {
    return (
      <div className="relative w-full h-full p-6 sm:p-8 overflow-hidden">

        {/* Map Background */}

        <div className="absolute inset-0 opacity-[0.16]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(
                  35deg,
                  transparent 42%,
                  ${project.accent} 43%,
                  transparent 44%
                ),
                linear-gradient(
                  120deg,
                  transparent 48%,
                  ${project.accent} 49%,
                  transparent 50%
                ),
                linear-gradient(
                  70deg,
                  transparent 48%,
                  ${project.accent} 49%,
                  transparent 50%
                )
              `,
              backgroundSize: "90px 90px",
            }}
          />
        </div>

        {/* Map Lines */}

        <div className="absolute left-[18%] top-0 bottom-0 w-[1px] bg-white/10 rotate-[18deg]" />
        <div className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-white/10 rotate-[-25deg]" />
        <div className="absolute right-[20%] top-0 bottom-0 w-[1px] bg-white/10 rotate-[12deg]" />

        {/* Location Pins */}

        <div
          className="
            absolute
            top-[28%]
            left-[28%]
            flex
            items-center
            justify-center
            w-10
            h-10
            rounded-full
            animate-pulse
          "
          style={{
            backgroundColor: `${project.accent}20`,
          }}
        >
          <FaMapMarkerAlt
            className="text-lg"
            style={{ color: project.accent }}
          />
        </div>

        <div
          className="
            absolute
            bottom-[24%]
            right-[28%]
            flex
            items-center
            justify-center
            w-8
            h-8
            rounded-full
          "
          style={{
            backgroundColor: `${project.accent}15`,
          }}
        >
          <FaMapMarkerAlt
            className="text-sm"
            style={{ color: `${project.accent}90` }}
          />
        </div>

        {/* Center Safety Card */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-[62%]
            sm:w-[55%]
            rounded-2xl
            border
            border-white/10
            bg-[#121014]/95
            backdrop-blur-xl
            p-4
            shadow-2xl
            transition-all
            duration-700
            group-hover:scale-105
            group-hover:-translate-y-[55%]
          "
        >

          <div className="flex items-center justify-between">

            <div className="flex items-center gap-2">

              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  backgroundColor: `${project.accent}15`,
                }}
              >
                <FaShieldAlt
                  style={{ color: project.accent }}
                />
              </div>

              <div>
                <p className="text-[9px] text-white/30 uppercase tracking-wider">
                  Safety
                </p>

                <p className="text-xs text-white/80">
                  SheSecure
                </p>
              </div>

            </div>

            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: project.accent,
                boxShadow: `0 0 12px ${project.accent}`,
              }}
            />

          </div>

          <div
            className="
              mt-4
              h-9
              rounded-lg
              flex
              items-center
              justify-center
              text-[10px]
              font-medium
              uppercase
              tracking-wider
            "
            style={{
              backgroundColor: `${project.accent}18`,
              color: project.accent,
            }}
          >
            SOS • Location Active
          </div>

        </div>

        {/* Live Label */}

        <div
          className="
            absolute
            bottom-5
            left-6
            flex
            items-center
            gap-2
            text-[9px]
            uppercase
            tracking-[0.25em]
          "
          style={{ color: `${project.accent}90` }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ backgroundColor: project.accent }}
          />
          Live Location
        </div>

      </div>
    );
  }


  /* ---------------- TRANSLATION APP ---------------- */

  if (project.type === "translation") {
    return (
      <div className="relative w-full h-full flex items-center justify-center p-6 sm:p-8">

        {/* Background Orbs */}

        <div
          className="
            absolute
            w-48
            h-48
            rounded-full
            blur-3xl
            opacity-20
            -top-10
            -left-10
          "
          style={{ backgroundColor: project.accent }}
        />

        <div
          className="
            absolute
            w-40
            h-40
            rounded-full
            blur-3xl
            opacity-10
            bottom-0
            right-0
          "
          style={{ backgroundColor: project.accent }}
        />

        {/* Translation Interface */}

        <div className="relative w-full max-w-[440px]">

          {/* Top Languages */}

          <div className="flex items-center justify-center gap-3 sm:gap-5">

            <div
              className="
                px-4
                py-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                text-[10px]
                uppercase
                tracking-wider
                text-white/60
              "
            >
              English
            </div>

            <FaArrowRight
              className="text-xs"
              style={{ color: `${project.accent}90` }}
            />

            <div
              className="
                px-4
                py-2
                rounded-full
                border
                bg-white/[0.04]
                text-[10px]
                uppercase
                tracking-wider
              "
              style={{
                borderColor: `${project.accent}35`,
                color: project.accent,
              }}
            >
              Marathi
            </div>

          </div>


          {/* Main Translation Card */}

          <div
            className="
              mt-5
              rounded-2xl
              border
              border-white/10
              bg-[#121014]/95
              backdrop-blur-xl
              p-5
              shadow-2xl
              transition-all
              duration-700
              group-hover:scale-[1.03]
            "
          >

            {/* Input */}

            <div className="mb-4">

              <div className="flex items-center gap-2 mb-2">
                <FaLanguage
                  className="text-xs"
                  style={{ color: project.accent }}
                />

                <span className="text-[9px] uppercase tracking-wider text-white/30">
                  Original Text
                </span>
              </div>

              <p className="text-sm text-white/75">
                Welcome to my portfolio
              </p>

            </div>


            {/* Divider */}

            <div className="h-[1px] bg-white/[0.07]" />


            {/* Output */}

            <div className="mt-4">

              <div className="flex items-center gap-2 mb-2">

                <span
                  className="text-[9px] uppercase tracking-wider"
                  style={{ color: `${project.accent}90` }}
                >
                  Translation
                </span>

              </div>

              <p
                className="text-sm font-medium"
                style={{ color: project.accent }}
              >
                माझ्या पोर्टफोलिओमध्ये स्वागत आहे
              </p>

            </div>

          </div>


          {/* Language Pills */}

          <div className="flex justify-center gap-2 mt-4 flex-wrap">

            {["Hindi", "Marathi", "French", "Spanish", "German"].map(
              (language, index) => (
                <span
                  key={language}
                  className="
                    px-2.5
                    py-1
                    rounded-full
                    bg-white/[0.035]
                    border
                    border-white/[0.07]
                    text-[8px]
                    text-white/35
                  "
                >
                  {language}
                </span>
              )
            )}

          </div>

        </div>

      </div>
    );
  }


  /* ---------------- EXCEL ANALYZER ---------------- */

  return (
    <div className="relative w-full h-full p-6 sm:p-8">

      {/* Dashboard */}

      <div
        className="
          relative
          h-full
          rounded-2xl
          border
          border-white/10
          bg-[#111416]
          p-5
          overflow-hidden
          transition-all
          duration-700
          group-hover:scale-[1.02]
        "
      >

        {/* Header */}

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-3">

            <div
              className="w-9 h-9 rounded-xl flex items-center justify-center"
              style={{
                backgroundColor: `${project.accent}15`,
              }}
            >
              <FaFileExcel
                style={{ color: project.accent }}
              />
            </div>

            <div>

              <p className="text-[9px] uppercase tracking-wider text-white/25">
                Analytics
              </p>

              <p className="text-xs text-white/75">
                Excel Dashboard
              </p>

            </div>

          </div>

          <span
            className="text-[9px]"
            style={{ color: `${project.accent}90` }}
          >
            2026
          </span>

        </div>


        {/* Stats */}

        <div className="grid grid-cols-3 gap-2 mt-5">

          {[
            ["Rows", "1,248"],
            ["Sheets", "06"],
            ["Files", "24"],
          ].map(([label, value]) => (

            <div
              key={label}
              className="
                rounded-xl
                border
                border-white/[0.06]
                bg-white/[0.025]
                p-3
              "
            >

              <p className="text-[8px] uppercase tracking-wider text-white/25">
                {label}
              </p>

              <p
                className="mt-1 text-sm font-medium"
                style={{ color: project.accent }}
              >
                {value}
              </p>

            </div>

          ))}

        </div>


        {/* Chart */}

        <div className="mt-5">

          <div className="flex items-center justify-between mb-3">

            <div className="flex items-center gap-2">

              <FaChartBar
                className="text-[10px]"
                style={{ color: project.accent }}
              />

              <span className="text-[9px] text-white/35">
                Data Overview
              </span>

            </div>

            <span className="text-[8px] text-white/20">
              Monthly
            </span>

          </div>


          <div className="h-[105px] flex items-end gap-2 px-2">

            {[38, 62, 48, 78, 55, 88, 70, 96].map(
              (height, index) => (

                <div
                  key={index}
                  className="flex-1 h-full flex items-end"
                >

                  <div
                    className="
                      w-full
                      rounded-t-md
                      transition-all
                      duration-700
                      group-hover:opacity-100
                    "
                    style={{
                      height: `${height}%`,
                      backgroundColor: `${project.accent}${
                        index === 7 ? "cc" : "45"
                      }`,
                    }}
                  />

                </div>

              )
            )}

          </div>

        </div>


        {/* Bottom Search */}

        <div className="mt-4 flex gap-2">

          <div className="flex-1 h-7 rounded-lg bg-white/[0.035] border border-white/[0.06] flex items-center px-3">
            <span className="text-[8px] text-white/20">
              Search data...
            </span>
          </div>

          <div
            className="w-8 h-7 rounded-lg flex items-center justify-center"
            style={{
              backgroundColor: `${project.accent}18`,
            }}
          >
            <span
              className="text-[9px]"
              style={{ color: project.accent }}
            >
              ↗
            </span>
          </div>

        </div>

      </div>

    </div>
  );
};


const Projects = () => {
  const [visible, setVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {

    const observer = new IntersectionObserver(
      ([entry]) => {

        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }

      },
      {
        threshold: 0.12,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();

  }, []);


  return (
    <section
      ref={sectionRef}
      id="projects"
      className="
        relative
        overflow-hidden
        bg-[#0A090B]
        text-[#F5F1E8]
        py-28
        px-5
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
          bg-[#B8A1FF]/5
          blur-[150px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          -left-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#D8A7B1]/5
          blur-[150px]
          pointer-events-none
        "
      />


      <div className="relative z-10 max-w-6xl mx-auto">


        {/* HEADER */}

        <div
          className={`
            mb-14
            transition-all
            duration-1000
            ease-[cubic-bezier(0.77,0,0.175,1)]
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }
          `}
        >

          <div className="flex items-center gap-4 mb-5">

            <span
              className={`
                h-[1px]
                bg-[#B8A1FF]
                transition-all
                duration-1000
                ${
                  visible
                    ? "w-12"
                    : "w-0"
                }
              `}
            />

            <p className="text-[11px] uppercase tracking-[0.4em] text-[#B8A1FF]">
              Selected Work
            </p>

          </div>


          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-light tracking-[-0.05em] leading-none">

              Things I've
              <br />

              <span className="text-white/30">
                built.
              </span>

            </h2>


            <p className="max-w-md text-sm sm:text-base leading-7 text-white/45">

              A collection of projects where I turn ideas into
              functional, responsive and meaningful digital experiences.

            </p>

          </div>

        </div>


        {/* PROJECT GRID */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">

          {projects.map((project, index) => (

            <article
              key={project.number}
              className={`
                group
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/[0.07]
                bg-white/[0.025]
                transition-all
                duration-1000
                ease-[cubic-bezier(0.77,0,0.175,1)]
                hover:-translate-y-2
                hover:border-white/[0.14]

                ${
                  visible
                    ? "opacity-100 translate-x-0"
                    : "opacity-0 -translate-x-24"
                }
              `}
              style={{
                transitionDelay: `${index * 180 + 200}ms`,
              }}
            >

              {/* Glow */}

              <div
                className="
                  absolute
                  -top-32
                  -right-32
                  w-72
                  h-72
                  rounded-full
                  blur-[100px]
                  opacity-0
                  group-hover:opacity-20
                  transition-opacity
                  duration-700
                  pointer-events-none
                "
                style={{
                  backgroundColor: project.accent,
                }}
              />


              {/* VISUAL FRAME */}

              <div
                className="
                  relative
                  h-[330px]
                  sm:h-[360px]
                  overflow-hidden
                  border-b
                  border-white/[0.07]
                "
              >

                {/* Background */}

                <div
                  className="
                    absolute
                    inset-0
                    transition-transform
                    duration-1000
                    group-hover:scale-105
                  "
                  style={{
                    background: `
                      radial-gradient(
                        circle at 30% 30%,
                        ${project.accent}18,
                        transparent 45%
                      ),
                      radial-gradient(
                        circle at 80% 70%,
                        ${project.accent}0c,
                        transparent 40%
                      ),
                      #111014
                    `,
                  }}
                />


                {/* Browser Frame */}

                <div
                  className="
                    absolute
                    inset-6
                    rounded-2xl
                    border
                    border-white/[0.09]
                    bg-[#0D0C0F]/95
                    backdrop-blur-xl
                    overflow-hidden
                    shadow-2xl
                    transition-all
                    duration-700
                    group-hover:-translate-y-2
                  "
                >

                  {/* Browser Top */}

                  <div className="h-9 border-b border-white/[0.07] flex items-center px-4 gap-2">

                    <span className="w-2 h-2 rounded-full bg-white/15" />
                    <span className="w-2 h-2 rounded-full bg-white/15" />
                    <span className="w-2 h-2 rounded-full bg-white/15" />

                    <div className="ml-4 h-4 flex-1 rounded-full bg-white/[0.035]" />

                  </div>


                  {/* Creative Preview */}

                  <div className="relative h-[calc(100%-36px)]">

                    <ProjectVisual project={project} />

                  </div>

                </div>


                {/* Number */}

                <span className="absolute top-7 right-8 text-[10px] tracking-[0.25em] text-white/25">
                  {project.number}
                </span>

              </div>


              {/* CONTENT */}

              <div className="p-6 sm:p-7">

                {/* Category */}

                <div className="flex items-center gap-3 mb-4">

                  <span
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: project.accent,
                      boxShadow: `0 0 15px ${project.accent}80`,
                    }}
                  />

                  <span
                    className="text-[10px] uppercase tracking-[0.3em]"
                    style={{
                      color: project.accent,
                    }}
                  >
                    {project.category}
                  </span>

                </div>


                {/* Title */}

                <div className="flex items-start justify-between gap-4">

                  <h3 className="text-2xl sm:text-3xl font-light tracking-tight">
                    {project.title}
                  </h3>


                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`${project.title} GitHub`}
                    className="
                      flex
                      items-center
                      justify-center
                      w-9
                      h-9
                      rounded-full
                      border
                      border-white/10
                      text-white/45
                      hover:text-[#0A090B]
                      hover:bg-[#F5F1E8]
                      hover:border-[#F5F1E8]
                      transition-all
                      duration-300
                      flex-shrink-0
                    "
                  >
                    <FaGithub className="text-sm" />
                  </a>

                </div>


                {/* Description */}

                <p className="mt-4 text-sm leading-6 text-white/45">
                  {project.description}
                </p>


                {/* Tech */}

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="
                        px-3
                        py-1.5
                        rounded-full
                        border
                        border-white/[0.08]
                        bg-white/[0.025]
                        text-[10px]
                        text-white/45
                        transition-all
                        duration-300
                        hover:bg-white/[0.06]
                        hover:text-white/80
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>


                {/* Bottom */}

                <div className="mt-7 pt-5 border-t border-white/[0.07] flex items-center justify-between">

                  <span className="text-[9px] uppercase tracking-[0.25em] text-white/20">
                    Project {project.number}
                  </span>


                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      text-xs
                      text-white/45
                      hover:text-white
                      transition-colors
                    "
                  >
                    View Project

                    <FaArrowRight
                      className="
                        text-[9px]
                        transition-transform
                        duration-300
                        group-hover:translate-x-1
                      "
                    />

                  </a>

                </div>

              </div>

            </article>

          ))}

        </div>

      </div>


      {/* Animations */}

      <style>{`

        @keyframes projectFloat {

          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-10px);
          }

        }

      `}</style>

    </section>
  );
};

export default Projects;