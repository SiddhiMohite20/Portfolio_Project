import { useEffect, useRef, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Placement Portal App",
    description:
      "A web application that connects students, recruiters, and administrators.",
    tech: ["React", "Node.js", "Express.js", "MongoDB"],
    github: "https://github.com/SiddhiMohite20/Placement_portal-",
    type: "placement",
    accent: "#7DD3FC",
  },
  {
    number: "02",
    title: "Women's Safety App",
    description:
      "A safety-focused application that provides emergency SOS alerts and live location sharing.",
    tech: ["React", "Node.js", "MongoDB"],
    github:
      "https://github.com/SiddhiMohite20/AI-Powered-Women-Safety-Platform",
    type: "safety",
    accent: "#FB7185",
  },
  {
    number: "03",
    title: "Excel Analyzer",
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
    type: "excel",
    accent: "#5EEAD4",
  },
];

/* =========================================================
   PROJECT PREVIEW
========================================================= */

const ProjectPreview = ({ project }) => {
  /* ================= PLACEMENT PORTAL ================= */

  if (project.type === "placement") {
    return (
      <div
        className="
          absolute
          inset-0
          bg-[#111827]
          p-7
          sm:p-9
          transition-transform
          duration-700
          group-hover:scale-[1.02]
        "
      >
        {/* Header */}

        <div className="flex items-center justify-between mb-7">
          <div>
            <p className="text-[8px] uppercase tracking-[0.3em] text-[#7DD3FC]/60">
              Student Dashboard
            </p>

            <p className="text-base sm:text-lg text-white/75 mt-1">
              Placement Overview
            </p>
          </div>

          <div
            className="
              w-9
              h-9
              rounded-full
              bg-[#7DD3FC]/10
              border
              border-[#7DD3FC]/20
              flex
              items-center
              justify-center
            "
          >
            <div className="w-3 h-3 rounded-full bg-[#7DD3FC]/70" />
          </div>
        </div>

        {/* Stats */}

        <div className="grid grid-cols-3 gap-3 mb-5">
          <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
            <p className="text-[8px] text-white/30">Applied</p>
            <p className="text-xl text-white/80 mt-2">24</p>
          </div>

          <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
            <p className="text-[8px] text-white/30">Interviews</p>
            <p className="text-xl text-[#7DD3FC] mt-2">08</p>
          </div>

          <div className="rounded-xl bg-white/[0.04] border border-white/[0.06] p-4">
            <p className="text-[8px] text-white/30">Offers</p>
            <p className="text-xl text-[#6FCF97] mt-2">03</p>
          </div>
        </div>

        {/* Jobs */}

        <div className="space-y-3">
          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.035] border border-white/[0.06]">
            <div className="w-9 h-9 rounded-lg bg-[#7DD3FC]/10 flex items-center justify-center text-[#7DD3FC] text-xs">
              J
            </div>

            <div className="flex-1">
              <p className="text-[10px] sm:text-xs text-white/70">
                Full Stack Developer
              </p>

              <p className="text-[8px] text-white/25 mt-1">
                Software Company
              </p>
            </div>

            <span className="text-[8px] text-[#6FCF97]">
              Applied
            </span>
          </div>

          <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.035] border border-white/[0.06]">
            <div className="w-9 h-9 rounded-lg bg-[#7DD3FC]/10 flex items-center justify-center text-[#7DD3FC] text-xs">
              R
            </div>

            <div className="flex-1">
              <p className="text-[10px] sm:text-xs text-white/70">
                React Developer
              </p>

              <p className="text-[8px] text-white/25 mt-1">
                Technology Company
              </p>
            </div>

            <span className="text-[8px] text-[#7DD3FC]">
              Interview
            </span>
          </div>
        </div>

        {/* Progress */}

        <div className="mt-5">
          <div className="flex justify-between mb-2">
            <span className="text-[8px] text-white/30">
              Placement Progress
            </span>

            <span className="text-[8px] text-[#7DD3FC]">
              72%
            </span>
          </div>

          <div className="h-1 rounded-full bg-white/[0.06] overflow-hidden">
            <div
              className="
                h-full
                w-[72%]
                rounded-full
                bg-[#7DD3FC]/60
                transition-all
                duration-700
                group-hover:w-[82%]
              "
            />
          </div>
        </div>
      </div>
    );
  }

  /* ================= WOMEN'S SAFETY ================= */

  if (project.type === "safety") {
    return (
      <div
        className="
          absolute
          inset-0
          bg-[#1A1115]
          overflow-hidden
          transition-transform
          duration-700
          group-hover:scale-[1.02]
        "
      >
        {/* Map Grid */}

        <div className="absolute inset-0 opacity-20">
          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(30deg,transparent_48%,#FB7185_49%,transparent_50%)]
              bg-[length:80px_80px]
            "
          />

          <div
            className="
              absolute
              inset-0
              bg-[linear-gradient(-30deg,transparent_48%,#FB7185_49%,transparent_50%)]
              bg-[length:80px_80px]
            "
          />
        </div>

        {/* Roads */}

        <div
          className="
            absolute
            w-[120%]
            h-[1px]
            bg-[#FB7185]/20
            rotate-[25deg]
            top-[35%]
            left-[-10%]
          "
        />

        <div
          className="
            absolute
            w-[120%]
            h-[1px]
            bg-[#FB7185]/15
            rotate-[-20deg]
            top-[60%]
            left-[-10%]
          "
        />

        {/* Location Points */}

        <div
          className="
            absolute
            top-[27%]
            left-[28%]
            w-4
            h-4
            rounded-full
            bg-[#FB7185]
            shadow-[0_0_25px_#FB7185]
          "
        />

        <div
          className="
            absolute
            top-[48%]
            left-[58%]
            w-3
            h-3
            rounded-full
            bg-[#FDB4C0]
          "
        />

        <div
          className="
            absolute
            top-[62%]
            left-[38%]
            w-2.5
            h-2.5
            rounded-full
            bg-[#FB7185]
          "
        />

        {/* Pulse */}

        <div
          className="
            absolute
            top-[24%]
            left-[25%]
            w-10
            h-10
            rounded-full
            border
            border-[#FB7185]/40
            animate-ping
          "
        />

        {/* Live Location */}

        <div
          className="
            absolute
            top-7
            left-7
            px-4
            py-2
            rounded-full
            bg-[#21181B]/90
            backdrop-blur-md
            border
            border-white/[0.08]
          "
        >
          <p className="text-[8px] uppercase tracking-[0.3em] text-[#FB7185]">
            Live Location
          </p>
        </div>

        {/* SOS */}

        <div
          className="
            absolute
            bottom-7
            left-7
            right-7
            flex
            items-center
            justify-between
            p-5
            rounded-2xl
            bg-[#21181B]/90
            backdrop-blur-md
            border
            border-white/[0.08]
          "
        >
          <div>
            <p className="text-[8px] uppercase tracking-[0.25em] text-white/30">
              Emergency Status
            </p>

            <p className="text-sm text-white/70 mt-1">
              Trusted Contacts Active
            </p>
          </div>

          <div
            className="
              relative
              w-14
              h-14
              rounded-full
              bg-[#FB7185]/10
              border
              border-[#FB7185]/40
              flex
              items-center
              justify-center
              text-[10px]
              font-semibold
              text-[#FB7185]
              transition-all
              duration-500
              group-hover:scale-110
            "
          >
            <span className="absolute inset-[-6px] rounded-full border border-[#FB7185]/10 animate-pulse" />
            SOS
          </div>
        </div>
      </div>
    );
  }

  /* ================= EXCEL ANALYZER ================= */

  return (
    <div
      className="
        absolute
        inset-0
        bg-[#101918]
        p-7
        sm:p-9
        transition-transform
        duration-700
        group-hover:scale-[1.02]
      "
    >
      {/* Header */}

      <div className="flex items-center justify-between mb-6">
        <div>
          <p className="text-[8px] uppercase tracking-[0.3em] text-[#5EEAD4]/60">
            Analytics Dashboard
          </p>

          <p className="text-base sm:text-lg text-white/70 mt-1">
            Excel Overview
          </p>
        </div>

        <div className="px-3 py-1.5 rounded-full bg-[#5EEAD4]/10 border border-[#5EEAD4]/20 text-[8px] text-[#5EEAD4]">
          ANALYZING
        </div>
      </div>

      {/* Spreadsheet */}

      <div className="rounded-xl border border-white/[0.07] overflow-hidden bg-white/[0.015]">
        <div className="grid grid-cols-4 bg-white/[0.04]">
          {["Name", "Sales", "Growth", "Status"].map((item) => (
            <div
              key={item}
              className="px-3 py-3 text-[7px] text-white/30 border-r border-white/[0.05]"
            >
              {item}
            </div>
          ))}
        </div>

        {[1, 2, 3, 4].map((row) => (
          <div
            key={row}
            className="
              grid
              grid-cols-4
              border-t
              border-white/[0.05]
              hover:bg-[#5EEAD4]/[0.04]
              transition-colors
            "
          >
            <div className="px-3 py-3 text-[7px] text-white/45">
              User {row}
            </div>

            <div className="px-3 py-3 text-[7px] text-white/45">
              ${row * 240}
            </div>

            <div className="px-3 py-3 text-[7px] text-[#5EEAD4]">
              +{row * 8}%
            </div>

            <div className="px-3 py-3 text-[7px] text-white/35">
              Active
            </div>
          </div>
        ))}
      </div>

      {/* Chart */}

      <div className="mt-6 flex items-end gap-2 h-24">
        {[35, 55, 42, 70, 50, 82, 65, 92].map(
          (height, index) => (
            <div
              key={index}
              className="
                flex-1
                rounded-t-md
                bg-[#5EEAD4]/35
                transition-all
                duration-500
                group-hover:bg-[#5EEAD4]/65
              "
              style={{
                height: `${height}%`,
              }}
            />
          )
        )}
      </div>

      <div className="flex justify-between mt-4">
        <span className="text-[8px] text-white/25">
          Monthly Growth
        </span>

        <span className="text-[8px] text-[#5EEAD4]">
          +24.8%
        </span>
      </div>
    </div>
  );
};


/* =========================================================
   PROJECTS SECTION
========================================================= */

const Projects = () => {
  const sectionRef = useRef(null);

  const [visible, setVisible] = useState(false);

  /* =======================================================
     INTERSECTION OBSERVER
  ======================================================= */

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.15,
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
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
      <div className="max-w-6xl mx-auto">

        {/* =================================================
            HEADER
        ================================================= */}

        <div
          className={`
            mb-14
            transition-all
            duration-[1100ms]
            ease-[cubic-bezier(0.76,0,0.24,1)]

            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }
          `}
        >
          <p className="text-sm tracking-[0.25em] uppercase text-[#C9A27E] mb-4">
            Selected Work
          </p>

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">

            <h2
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                font-semibold
                tracking-tight
              "
            >
              Projects
              <span className="text-[#C9A27E]">
                .
              </span>
            </h2>

            <p className="max-w-md text-sm leading-6 text-white/45">
              A selection of applications I've built using modern
              technologies and creative problem solving.
            </p>

          </div>
        </div>


        {/* =================================================
            PROJECT GRID
        ================================================= */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-8
          "
        >

          {projects.map((project, index) => {

            const isRight = index === 1;

            return (
              <article
                key={project.number}
                className="
                  group
                  rounded-2xl
                  border
                  border-white/[0.08]
                  bg-white/[0.025]
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:-translate-y-2
                  hover:border-white/[0.15]
                  hover:shadow-2xl
                  hover:shadow-black/20
                "
              >

                {/* =================================================
                    CINEMATIC PROJECT PREVIEW
                ================================================= */}

                <div className="relative h-80 sm:h-[360px] overflow-hidden">

                  <div
                    className={`
                      absolute
                      inset-0

                      ${
                        visible
                          ? isRight
                            ? "animate-[projectRevealRight_1.5s_cubic-bezier(0.76,0,0.24,1)_forwards]"
                            : "animate-[projectRevealLeft_1.5s_cubic-bezier(0.76,0,0.24,1)_forwards]"
                          : "opacity-0"
                      }
                    `}
                    style={{
                      animationDelay: visible
                        ? `${index * 250}ms`
                        : "0ms",
                    }}
                  >
                    <ProjectPreview project={project} />
                  </div>


                  {/* Bottom Overlay */}

                  <div
                    className="
                      absolute
                      inset-x-0
                      bottom-0
                      h-24
                      bg-gradient-to-t
                      from-black/40
                      to-transparent
                      pointer-events-none
                    "
                  />

                </div>


                {/* =================================================
                    PROJECT CONTENT
                ================================================= */}

                <div
                  className={`
                    p-6
                    sm:p-7

                    transition-all
                    duration-1000
                    ease-out

                    ${
                      visible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                    }
                  `}
                  style={{
                    transitionDelay: visible
                      ? `${index * 250 + 700}ms`
                      : "0ms",
                  }}
                >

                  {/* Title */}

                  <div className="flex items-start justify-between gap-4">

                    <div>

                      <p
                        className="
                          text-[10px]
                          uppercase
                          tracking-[0.25em]
                          mb-2
                        "
                        style={{
                          color: project.accent,
                        }}
                      >
                        Project {project.number}
                      </p>

                      <h3
                        className="
                          text-2xl
                          sm:text-[1.7rem]
                          font-medium
                          tracking-tight
                        "
                      >
                        {project.title}
                      </h3>

                    </div>


                    {/* GitHub */}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={`${project.title} GitHub`}
                      className="
                        flex-shrink-0
                        w-10
                        h-10
                        rounded-full
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-white/50
                        hover:text-[#0A090B]
                        hover:bg-[#F5F1E8]
                        hover:border-[#F5F1E8]
                        transition-all
                        duration-300
                        hover:rotate-6
                      "
                    >
                      ↗
                    </a>

                  </div>


                  {/* Description */}

                  <p className="mt-4 text-sm leading-6 text-white/45">
                    {project.description}
                  </p>


                  {/* Technologies */}

                  <div className="flex flex-wrap gap-2 mt-6">

                    {project.tech.map((item) => (
                      <span
                        key={item}
                        className="
                          px-3
                          py-1.5
                          rounded-full
                          bg-white/[0.035]
                          border
                          border-white/[0.07]
                          text-[11px]
                          text-white/45
                          transition-colors
                          duration-300
                          hover:text-white/70
                        "
                      >
                        {item}
                      </span>
                    ))}

                  </div>


                  {/* Bottom */}

                  <div
                    className="
                      mt-7
                      pt-5
                      border-t
                      border-white/[0.07]
                      flex
                      items-center
                      justify-between
                    "
                  >

                    <span
                      className="
                        text-[10px]
                        tracking-[0.2em]
                        uppercase
                        text-white/25
                      "
                    >
                      Web Application
                    </span>


                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="
                        text-xs
                        text-white/50
                        hover:text-[#C9A27E]
                        transition-colors
                      "
                    >
                      View GitHub →
                    </a>

                  </div>

                </div>

              </article>
            );
          })}

        </div>

      </div>


      {/* =================================================
          BACKGROUND GLOW
      ================================================= */}

      <div
        className="
          pointer-events-none
          absolute
          -bottom-40
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[300px]
          rounded-full
          bg-[#C9A27E]/5
          blur-[130px]
        "
      />


      {/* =================================================
          CINEMATIC ANIMATIONS
      ================================================= */}

      <style>{`

        /* LEFT → RIGHT REVEAL */

        @keyframes projectRevealLeft {

          0% {
            clip-path: inset(0 100% 0 0);
            transform: scale(1.12);
            opacity: 0;
          }

          35% {
            opacity: 1;
          }

          70% {
            transform: scale(1.035);
          }

          100% {
            clip-path: inset(0 0 0 0);
            transform: scale(1);
            opacity: 1;
          }

        }


        /* RIGHT → LEFT REVEAL */

        @keyframes projectRevealRight {

          0% {
            clip-path: inset(0 0 0 100%);
            transform: scale(1.12);
            opacity: 0;
          }

          35% {
            opacity: 1;
          }

          70% {
            transform: scale(1.035);
          }

          100% {
            clip-path: inset(0 0 0 0);
            transform: scale(1);
            opacity: 1;
          }

        }

      `}</style>

    </section>
  );
};

export default Projects;