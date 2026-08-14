import { useEffect, useRef, useState } from "react";

const certificates = [
  {
    number: "01",
    title: "NPTEL - DSA Using Java Development",
    category: "Programming",
    accent: "#C9A27E",
  },
  {
    number: "02",
    title: "Oracle AI Foundation",
    category: "Artificial Intelligence",
    accent: "#A78BFA",
  },
  {
    number: "03",
    title: "HackerRank Certificate (SQL Basic)",
    category: "Database",
    accent: "#5EEAD4",
  },
  {
    number: "04",
    title: "MERN Workshop Certificate",
    category: "Full Stack Development",
    accent: "#FB7185",
  },
];

const Certificates = () => {
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
      id="certificates"
      className="
        relative
        overflow-hidden
        bg-[#0A090B]
        text-[#F5F1E8]
        py-28
        px-6
        sm:px-8
      "
    >

      {/* ================= BACKGROUND GLOW ================= */}

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
          -bottom-40
          -left-40
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#C9A27E]/5
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
            duration-[1100ms]
            ease-[cubic-bezier(0.76,0,0.24,1)]

            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-14"
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
              Recognition
            </span>

          </div>


          <div
            className="
              flex
              flex-col
              md:flex-row
              md:items-end
              md:justify-between
              gap-6
            "
          >

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
              Certifications
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
              A collection of certifications and learning
              experiences that strengthen my technical foundation.
            </p>

          </div>

        </div>


        {/* ================= CERTIFICATES ================= */}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">


          {certificates.map((certificate, index) => (

            <div
              key={certificate.number}
              className={`
                group
                relative
                min-h-[210px]
                rounded-2xl
                overflow-hidden

                border
                border-white/[0.08]

                bg-white/[0.025]

                transition-all
                duration-[1100ms]
                ease-[cubic-bezier(0.76,0,0.24,1)]

                hover:-translate-y-2
                hover:border-white/[0.16]

                ${
                  visible
                    ? "opacity-100 translate-x-0 scale-100"
                    : index % 2 === 0
                      ? "opacity-0 -translate-x-24 scale-[0.96]"
                      : "opacity-0 translate-x-24 scale-[0.96]"
                }
              `}
              style={{
                transitionDelay: visible
                  ? `${index * 160}ms`
                  : "0ms",
              }}
            >


              {/* ================= ACCENT GLOW ================= */}

              <div
                className="
                  absolute
                  -top-20
                  -right-20
                  w-48
                  h-48
                  rounded-full
                  blur-[70px]
                  opacity-0
                  group-hover:opacity-20
                  transition-opacity
                  duration-700
                "
                style={{
                  backgroundColor: certificate.accent,
                }}
              />


              {/* ================= NUMBER ================= */}

              <div
                className="
                  absolute
                  top-6
                  right-7
                  text-[10px]
                  tracking-[0.3em]
                  text-white/20
                  group-hover:text-white/40
                  transition-colors
                  duration-500
                "
              >
                {certificate.number}
              </div>


              {/* ================= MAIN CONTENT ================= */}

              <div className="relative z-10 p-7 sm:p-8 h-full flex flex-col">


                {/* Certificate Icon */}

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    border
                    flex
                    items-center
                    justify-center
                    mb-8

                    transition-all
                    duration-500

                    group-hover:scale-110
                    group-hover:rotate-3
                  "
                  style={{
                    borderColor: `${certificate.accent}35`,
                    backgroundColor: `${certificate.accent}0D`,
                    color: certificate.accent,
                  }}
                >

                  {/* Certificate Shape */}

                  <div className="relative">

                    <div
                      className="
                        w-5
                        h-6
                        rounded-[3px]
                        border
                      "
                      style={{
                        borderColor: certificate.accent,
                      }}
                    />

                    <div
                      className="
                        absolute
                        bottom-[-5px]
                        left-[5px]
                        w-2
                        h-2
                        rotate-45
                        border-r
                        border-b
                      "
                      style={{
                        borderColor: certificate.accent,
                      }}
                    />

                  </div>

                </div>


                {/* Category */}

                <p
                  className="
                    text-[9px]
                    uppercase
                    tracking-[0.3em]
                    mb-3
                  "
                  style={{
                    color: certificate.accent,
                  }}
                >
                  {certificate.category}
                </p>


                {/* Title */}

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-medium
                    leading-snug
                    tracking-tight
                    text-white/85

                    group-hover:text-white

                    transition-colors
                    duration-300
                  "
                >
                  {certificate.title}
                </h3>


                {/* Bottom */}

                <div className="mt-auto pt-8">


                  {/* Animated Line */}

                  <div className="flex items-center gap-3">

                    <div
                      className="
                        h-[1px]
                        w-10
                        group-hover:w-20
                        transition-all
                        duration-500
                      "
                      style={{
                        backgroundColor: certificate.accent,
                      }}
                    />

                    <span
                      className="
                        text-[9px]
                        uppercase
                        tracking-[0.25em]
                        text-white/20
                        group-hover:text-white/40
                        transition-colors
                      "
                    >
                      Certified
                    </span>

                  </div>

                </div>

              </div>


              {/* ================= BORDER SHINE ================= */}

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
                  backgroundColor: certificate.accent,
                }}
              />

            </div>

          ))}

        </div>


        

      </div>

    </section>
  );
};

export default Certificates;