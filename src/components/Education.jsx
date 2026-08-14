import { useEffect, useRef, useState } from "react";

const education = [
  {
    year: "2024 — 2027",
    degree: "B.E. Computer Engineering",
    institute: "RMD Sinhgad Technical Institute, Pune",
    status: "Currently Pursuing",
  },
  {
    year: "2021 — 2024",
    degree: "Diploma in Computer Engineering",
    institute: "Karmaveer Bhaurao Patil Polytechnic, Satara",
    status: "Completed",
  },
];

const Education = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.2,
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
      id="education"
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

      {/* ================= BACKGROUND ================= */}

      <div
        className="
          absolute
          top-[-150px]
          right-[-150px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#C9A27E]/6
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-[-180px]
          left-[-150px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#8B9CFF]/5
          blur-[140px]
          pointer-events-none
        "
      />


      <div className="relative z-10 max-w-6xl mx-auto">


        {/* ================= HEADER ================= */}

        <div
          className={`
            mb-16
            transition-all
            duration-1000
            ease-[cubic-bezier(0.76,0,0.24,1)]
            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-12"
            }
          `}
        >

          <div className="flex items-center gap-4 mb-6">

            <span className="w-10 h-[1px] bg-[#C9A27E]" />

            <span
              className="
                text-[10px]
                uppercase
                tracking-[0.45em]
                text-[#C9A27E]
              "
            >
              My Journey
            </span>

          </div>


          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">

            <h2
              className="
                text-5xl
                sm:text-6xl
                md:text-7xl
                font-light
                tracking-[-0.06em]
                leading-[0.9]
              "
            >
              Education
              <span className="text-[#C9A27E]">
                .
              </span>
            </h2>


            <p
              className="
                max-w-md
                text-sm
                leading-6
                text-white/40
              "
            >
              The academic journey that shaped my foundation
              in computer engineering and technology.
            </p>

          </div>

        </div>


        {/* ================= TIMELINE ================= */}

        <div className="relative max-w-5xl mx-auto">


          {/* Vertical Line */}

          <div
            className={`
              absolute
              left-[7px]
              md:left-1/2
              top-0
              bottom-0
              w-[1px]
              bg-white/[0.08]
              md:-translate-x-1/2
              origin-top
              transition-transform
              duration-[1400ms]
              ease-[cubic-bezier(0.76,0,0.24,1)]
              ${
                visible
                  ? "scale-y-100"
                  : "scale-y-0"
              }
            `}
          />


          {/* ================= EDUCATION ITEMS ================= */}

          <div className="space-y-16 md:space-y-24">

            {education.map((item, index) => {

              const isEven = index % 2 === 0;

              return (
                <div
                  key={item.degree}
                  className="
                    relative
                    grid
                    grid-cols-1
                    md:grid-cols-2
                    gap-8
                  "
                >

                  {/* ================= TIMELINE DOT ================= */}

                  <div
                    className={`
                      absolute
                      left-[-1px]
                      md:left-1/2
                      top-8
                      w-4
                      h-4
                      rounded-full
                      bg-[#12100F]
                      border-2
                      border-[#C9A27E]
                      md:-translate-x-1/2
                      z-20

                      transition-all
                      duration-700

                      ${
                        visible
                          ? "scale-100 opacity-100"
                          : "scale-0 opacity-0"
                      }
                    `}
                    style={{
                      transitionDelay: `${index * 250 + 300}ms`,
                    }}
                  >

                    <span
                      className="
                        absolute
                        inset-[3px]
                        rounded-full
                        bg-[#C9A27E]
                      "
                    />

                  </div>


                  {/* ================= LEFT / RIGHT YEAR ================= */}

                  <div
                    className={`
                      ${
                        isEven
                          ? "md:text-right md:pr-16"
                          : "md:order-2 md:pl-16"
                      }

                      pl-10
                      md:pl-0

                      transition-all
                      duration-[1100ms]
                      ease-[cubic-bezier(0.76,0,0.24,1)]

                      ${
                        visible
                          ? "opacity-100 translate-x-0"
                          : isEven
                            ? "opacity-0 -translate-x-20"
                            : "opacity-0 translate-x-20"
                      }
                    `}
                    style={{
                      transitionDelay: `${index * 250}ms`,
                    }}
                  >

                    <span
                      className="
                        text-sm
                        tracking-[0.2em]
                        text-[#C9A27E]/70
                      "
                    >
                      {item.year}
                    </span>

                  </div>


                  {/* ================= CARD ================= */}

                  <div
                    className={`
                      ${
                        isEven
                          ? "md:pl-16"
                          : "md:order-1 md:pr-16"
                      }

                      pl-10
                      md:pl-0

                      transition-all
                      duration-[1100ms]
                      ease-[cubic-bezier(0.76,0,0.24,1)]

                      ${
                        visible
                          ? "opacity-100 translate-x-0"
                          : isEven
                            ? "opacity-0 translate-x-20"
                            : "opacity-0 -translate-x-20"
                      }
                    `}
                    style={{
                      transitionDelay: `${index * 250 + 150}ms`,
                    }}
                  >

                    <div
                      className="
                        group
                        relative
                        rounded-2xl
                        border
                        border-white/[0.08]
                        bg-white/[0.025]
                        p-6
                        sm:p-7

                        transition-all
                        duration-500

                        hover:-translate-y-2
                        hover:border-[#C9A27E]/30
                        hover:bg-[#C9A27E]/[0.035]
                      "
                    >

                      {/* Top Accent */}

                      <div
                        className="
                          absolute
                          top-0
                          left-6
                          right-6
                          h-[1px]
                          bg-gradient-to-r
                          from-transparent
                          via-[#C9A27E]/40
                          to-transparent
                          opacity-0
                          group-hover:opacity-100
                          transition-opacity
                          duration-500
                        "
                      />


                      {/* Status */}

                      <div className="flex items-center justify-between gap-4 mb-5">

                        <span
                          className="
                            text-[9px]
                            uppercase
                            tracking-[0.3em]
                            text-white/25
                          "
                        >
                          Education
                        </span>


                        <span
                          className="
                            px-3
                            py-1
                            rounded-full
                            border
                            border-[#C9A27E]/20
                            bg-[#C9A27E]/5
                            text-[9px]
                            text-[#C9A27E]/70
                          "
                        >
                          {item.status}
                        </span>

                      </div>


                      {/* Degree */}

                      <h3
                        className="
                          text-xl
                          sm:text-2xl
                          font-medium
                          tracking-tight
                          text-white/90

                          group-hover:text-[#C9A27E]

                          transition-colors
                          duration-300
                        "
                      >
                        {item.degree}
                      </h3>


                      {/* Institute */}

                      <p
                        className="
                          mt-3
                          text-sm
                          leading-6
                          text-white/40
                        "
                      >
                        {item.institute}
                      </p>


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
                            uppercase
                            tracking-[0.25em]
                            text-white/20
                          "
                        >
                          Computer Engineering
                        </span>


                        <span
                          className="
                            text-lg
                            text-white/20
                            group-hover:text-[#C9A27E]
                            group-hover:translate-x-1
                            transition-all
                            duration-300
                          "
                        >
                          ↗
                        </span>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>


        

      </div>

    </section>
  );
};

export default Education;