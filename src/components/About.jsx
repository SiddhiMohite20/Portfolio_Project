import { useEffect, useRef, useState } from "react";

const About = () => {
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
        threshold: 0.25,
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
      id="about"
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
          top-20
          -left-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#C9A27E]/6
          blur-[140px]
          animate-[slowFloat_8s_ease-in-out_infinite]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          -right-40
          w-[450px]
          h-[450px]
          rounded-full
          bg-[#9D8175]/5
          blur-[140px]
          animate-[slowFloat_10s_ease-in-out_infinite_reverse]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Section Label */}
        <div
          className={`
            flex
            items-center
            gap-4
            mb-10
            transition-all
            duration-1000
            ${
              visible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }
          `}
        >
          <span
            className={`
              block
              h-[1px]
              bg-[#C9A27E]
              transition-all
              duration-700
              delay-200
              ${visible ? "w-10" : "w-0"}
            `}
          />

          <span className="text-[11px] uppercase tracking-[0.4em] text-[#C9A27E]">
            About Me
          </span>
        </div>


        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">

          {/* LEFT */}
          <div className="overflow-hidden">

            <h2
              className={`
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-8xl
                font-light
                leading-[0.88]
                tracking-[-0.055em]
                transition-all
                duration-[1200ms]
                ease-[cubic-bezier(0.77,0,0.175,1)]
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-24"
                }
              `}
            >
              Curious.
              <br />

              <span
                className="
                  text-[#C9A27E]
                  inline-block
                  transition-transform
                  duration-500
                  hover:translate-x-3
                "
              >
                Creative.
              </span>

              <br />

              Always
              <br />

              <span className="text-white/25">
                Building.
              </span>
            </h2>

          </div>


          {/* RIGHT */}
          <div
            className={`
              md:pt-4
              transition-all
              duration-1000
              delay-300
              ${
                visible
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-16"
              }
            `}
          >

            <p className="text-lg sm:text-xl leading-8 text-white/65">
              I am Siddhi Mohite, a Computer Engineering student
              and MERN Stack Developer passionate about creating
              modern, responsive, and user-friendly web applications.
            </p>

            <p className="mt-6 text-sm sm:text-base leading-7 text-white/40">
              I enjoy solving problems, exploring new technologies,
              and turning ideas into meaningful digital experiences.
              For me, development is not just about writing code —
              it's about creating something people can actually use.
            </p>


            {/* Info Cards */}
            <div
              className={`
                mt-12
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-8
                transition-all
                duration-1000
                delay-500
                ${
                  visible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }
              `}
            >

              <div
                className="
                  group
                  relative
                  border-t
                  border-white/10
                  pt-5
                  transition-all
                  duration-500
                  hover:-translate-y-1
                "
              >
                <div
                  className="
                    absolute
                    top-[-1px]
                    left-0
                    h-[1px]
                    w-0
                    bg-[#C9A27E]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Focus
                </p>

                <p className="mt-3 text-sm text-white/70 group-hover:text-[#C9A27E] transition-colors">
                  Full Stack Development
                </p>
              </div>


              <div
                className="
                  group
                  relative
                  border-t
                  border-white/10
                  pt-5
                  transition-all
                  duration-500
                  hover:-translate-y-1
                "
              >
                <div
                  className="
                    absolute
                    top-[-1px]
                    left-0
                    h-[1px]
                    w-0
                    bg-[#C9A27E]
                    transition-all
                    duration-500
                    group-hover:w-full
                  "
                />

                <p className="text-[10px] uppercase tracking-[0.25em] text-white/30">
                  Currently
                </p>

                <p className="mt-3 text-sm text-white/70 group-hover:text-[#C9A27E] transition-colors">
                  Learning & Building
                </p>
              </div>

            </div>


           

          </div>

        </div>
      </div>


      <style>{`
        @keyframes slowFloat {
          0%, 100% {
            transform: translate(0, 0);
          }

          50% {
            transform: translate(25px, -20px);
          }
        }
      `}</style>

    </section>
  );
};

export default About;