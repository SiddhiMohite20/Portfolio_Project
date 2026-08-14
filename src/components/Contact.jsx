import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaArrowUp,
} from "react-icons/fa";

import { useEffect, useRef, useState } from "react";

const Contact = () => {
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
      id="contact"
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

      {/* =================================================
          BACKGROUND GLOWS
      ================================================= */}

      <div
        className="
          absolute
          -top-40
          left-1/2
          -translate-x-1/2
          w-[600px]
          h-[400px]
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
          right-[-150px]
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#A78BFA]/5
          blur-[140px]
          pointer-events-none
        "
      />


      <div className="relative z-10 max-w-6xl mx-auto">


        {/* =================================================
            SMALL LABEL
        ================================================= */}

        <div
          className={`
            flex
            items-center
            gap-4
            mb-7

            transition-all
            duration-1000
            ease-[cubic-bezier(0.76,0,0.24,1)]

            ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-12"
            }
          `}
        >

          <span className="w-10 h-[1px] bg-[#C9A27E]" />

          <span
            className="
              text-[10px]
              uppercase
              tracking-[0.45em]
              text-[#C9A27E]
            "
          >
            Get In Touch
          </span>

        </div>


        {/* =================================================
            BIG HEADING
        ================================================= */}

        <div
          className={`
            transition-all
            duration-[1200ms]
            delay-150
            ease-[cubic-bezier(0.76,0,0.24,1)]

            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }
          `}
        >

          <h2
            className="
              text-5xl
              sm:text-6xl
              md:text-7xl
              lg:text-8xl
              font-light
              tracking-[-0.06em]
              leading-[0.88]
            "
          >
            Let's build
            <br />

            <span className="text-[#C9A27E]">
              something
            </span>

            <br />

            meaningful.
          </h2>


          <p
            className="
              mt-8
              max-w-xl
              text-base
              sm:text-lg
              leading-7
              text-white/40
            "
          >
            Have a project, opportunity, or simply want to
            connect? I'd love to hear from you.
          </p>

        </div>


        {/* =================================================
            CONTACT AREA
        ================================================= */}

        <div
          className={`
            mt-16
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-6

            transition-all
            duration-[1200ms]
            delay-300
            ease-[cubic-bezier(0.76,0,0.24,1)]

            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }
          `}
        >


          {/* =================================================
              EMAIL CARD
          ================================================= */}

          <a
            href="mailto:mohitesiddhi811@gmail.com"
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-7
              sm:p-8

              transition-all
              duration-500

              hover:-translate-y-2
              hover:border-[#C9A27E]/30
              hover:bg-[#C9A27E]/[0.035]
            "
          >

            {/* Glow */}

            <div
              className="
                absolute
                -top-20
                -right-20
                w-48
                h-48
                rounded-full
                bg-[#C9A27E]/10
                blur-[70px]
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-700
              "
            />


            <div className="relative z-10">

              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  border
                  border-[#C9A27E]/20
                  bg-[#C9A27E]/5
                  flex
                  items-center
                  justify-center
                  text-[#C9A27E]
                  text-lg

                  group-hover:scale-110
                  group-hover:rotate-3

                  transition-all
                  duration-500
                "
              >
                <FaEnvelope />
              </div>


              <p
                className="
                  mt-7
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                "
              >
                Email
              </p>


              <p
                className="
                  mt-2
                  text-base
                  sm:text-lg
                  text-white/75
                  break-all
                  group-hover:text-white
                  transition-colors
                "
              >
                mohitesiddhi811@gmail.com
              </p>


              <div className="mt-6 flex items-center gap-3">

                <span
                  className="
                    h-[1px]
                    w-8
                    bg-[#C9A27E]
                    group-hover:w-14
                    transition-all
                    duration-500
                  "
                />

                <span className="text-[10px] text-white/25">
                  Send a message →
                </span>

              </div>

            </div>

          </a>


          {/* =================================================
              LOCATION CARD
          ================================================= */}

          <div
            className="
              group
              relative
              overflow-hidden
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-7
              sm:p-8

              transition-all
              duration-500

              hover:-translate-y-2
              hover:border-[#A78BFA]/30
              hover:bg-[#A78BFA]/[0.035]
            "
          >

            <div
              className="
                absolute
                -top-20
                -right-20
                w-48
                h-48
                rounded-full
                bg-[#A78BFA]/10
                blur-[70px]
                opacity-0
                group-hover:opacity-100
                transition-opacity
                duration-700
              "
            />


            <div className="relative z-10">

              <div
                className="
                  w-12
                  h-12
                  rounded-xl
                  border
                  border-[#A78BFA]/20
                  bg-[#A78BFA]/5
                  flex
                  items-center
                  justify-center
                  text-[#A78BFA]
                  text-lg

                  group-hover:scale-110
                  group-hover:rotate-3

                  transition-all
                  duration-500
                "
              >
                <FaMapMarkerAlt />
              </div>


              <p
                className="
                  mt-7
                  text-[9px]
                  uppercase
                  tracking-[0.3em]
                  text-white/25
                "
              >
                Based In
              </p>


              <p
                className="
                  mt-2
                  text-xl
                  sm:text-2xl
                  text-white/75
                  group-hover:text-white
                  transition-colors
                "
              >
                Pune, Maharashtra
              </p>


              <p className="mt-3 text-sm text-white/30">
                Available for opportunities & collaborations.
              </p>

            </div>

          </div>

        </div>


        {/* =================================================
            SOCIAL LINKS
        ================================================= */}

        <div
          className={`
            mt-6
            grid
            grid-cols-1
            sm:grid-cols-2
            gap-6

            transition-all
            duration-[1200ms]
            delay-500
            ease-[cubic-bezier(0.76,0,0.24,1)]

            ${
              visible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-16"
            }
          `}
        >


          {/* LinkedIn */}

          <a
            href="https://www.linkedin.com/in/siddhi-mohite-a53951281"
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-6

              hover:border-[#7DD3FC]/30
              hover:bg-[#7DD3FC]/[0.035]

              transition-all
              duration-500
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#7DD3FC]/20
                  flex
                  items-center
                  justify-center
                  text-[#7DD3FC]
                  group-hover:scale-110
                  transition-transform
                  duration-300
                "
              >
                <FaLinkedin />
              </div>


              <div>

                <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  Connect
                </p>

                <p className="mt-1 text-sm text-white/70">
                  LinkedIn
                </p>

              </div>

            </div>


            <span
              className="
                text-white/20
                group-hover:text-[#7DD3FC]
                group-hover:translate-x-1
                transition-all
              "
            >
              ↗
            </span>

          </a>


          {/* GitHub */}

          <a
            href="https://github.com/SiddhiMohite20"
            target="_blank"
            rel="noreferrer"
            className="
              group
              flex
              items-center
              justify-between
              rounded-2xl
              border
              border-white/[0.08]
              bg-white/[0.025]
              p-6

              hover:border-[#5EEAD4]/30
              hover:bg-[#5EEAD4]/[0.035]

              transition-all
              duration-500
            "
          >

            <div className="flex items-center gap-4">

              <div
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-[#5EEAD4]/20
                  flex
                  items-center
                  justify-center
                  text-[#5EEAD4]
                  group-hover:scale-110
                  transition-transform
                  duration-300
                "
              >
                <FaGithub />
              </div>


              <div>

                <p className="text-[9px] uppercase tracking-[0.25em] text-white/25">
                  Explore
                </p>

                <p className="mt-1 text-sm text-white/70">
                  GitHub
                </p>

              </div>

            </div>


            <span
              className="
                text-white/20
                group-hover:text-[#5EEAD4]
                group-hover:translate-x-1
                transition-all
              "
            >
              ↗
            </span>

          </a>

        </div>


        

      </div>

    </section>
  );
};

export default Contact;