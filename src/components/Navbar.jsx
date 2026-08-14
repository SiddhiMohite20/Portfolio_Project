import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const navItems = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Certificates", id: "certificates" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems
        .map((item) => document.getElementById(item.id))
        .filter(Boolean);

      let current = "home";

      sections.forEach((section) => {
        const top = section.getBoundingClientRect().top;

        if (top <= 150) {
          current = section.id;
        }
      });

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    setMenuOpen(false);
  };

  return (
    <nav
      className={`
        fixed
        top-0
        left-0
        w-full
        z-50
        px-4
        sm:px-6

        transition-all
        duration-500

        ${scrolled ? "pt-3" : "pt-5"}
      `}
    >
      <div
        className={`
          mx-auto
          max-w-6xl
          rounded-full

          border
          border-white/[0.08]

          bg-[#12100F]/75
          backdrop-blur-xl

          transition-all
          duration-500

          ${
            scrolled
              ? "shadow-2xl shadow-black/30 border-white/[0.12]"
              : ""
          }
        `}
      >

        <div className="h-16 px-5 sm:px-7 flex items-center justify-between">


          {/* =================================================
              LOGO
          ================================================= */}

          <button
            onClick={() => scrollToSection("home")}
            className="
              group
              relative
              flex
              items-center
              gap-3
              text-[#F3EDE4]
            "
          >

            {/* Small accent */}

            <span
              className="
                w-2
                h-2
                rounded-full
                bg-[#C9A27E]

                group-hover:scale-125

                transition-transform
                duration-300
              "
            />


            {/* Name */}

            <span
              className="
                text-base
                sm:text-lg
                font-semibold
                tracking-[0.12em]
                uppercase
              "
            >
              Siddhi
            </span>


            {/* Underline */}

            <span
              className="
                absolute
                bottom-[-5px]
                left-5
                h-[1px]
                w-0
                bg-[#C9A27E]

                group-hover:w-[calc(100%-20px)]

                transition-all
                duration-500
              "
            />

          </button>


          {/* =================================================
              DESKTOP NAVIGATION
          ================================================= */}

          <div className="hidden lg:flex items-center gap-1">

            {navItems.map((item, index) => (

              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  group
                  relative

                  px-4
                  py-2

                  rounded-full

                  text-[13px]

                  transition-all
                  duration-300

                  ${
                    active === item.id
                      ? "bg-[#F3EDE4] text-[#12100F]"
                      : "text-white/50 hover:text-[#F3EDE4] hover:bg-white/[0.05]"
                  }
                `}
              >

                {/* Active dot */}

                {active === item.id && (
                  <span
                    className="
                      absolute
                      left-2
                      top-1/2
                      -translate-y-1/2

                      w-1
                      h-1

                      rounded-full

                      bg-[#C9A27E]
                    "
                  />
                )}

                <span
                  className={`
                    transition-transform
                    duration-300

                    ${
                      active === item.id
                        ? "ml-2"
                        : "group-hover:translate-y-[-1px]"
                    }
                  `}
                >
                  {item.name}
                </span>

              </button>

            ))}

          </div>


          {/* =================================================
              MOBILE MENU BUTTON
          ================================================= */}

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="
              lg:hidden

              w-10
              h-10

              rounded-full

              border
              border-white/10

              flex
              items-center
              justify-center

              text-[#F3EDE4]

              hover:border-[#C9A27E]/50
              hover:text-[#C9A27E]

              transition-all
              duration-300
            "
            aria-label="Toggle navigation"
          >

            <span
              className={`
                transition-transform
                duration-300
                ${menuOpen ? "rotate-90" : ""}
              `}
            >
              {menuOpen ? <FaTimes /> : <FaBars />}
            </span>

          </button>

        </div>


        {/* =================================================
            MOBILE MENU
        ================================================= */}

        <div
          className={`
            lg:hidden
            overflow-hidden

            transition-all
            duration-500

            ${
              menuOpen
                ? "max-h-[500px] opacity-100 pb-4"
                : "max-h-0 opacity-0"
            }
          `}
        >

          <div className="px-4 flex flex-col gap-1">

            {navItems.map((item, index) => (

              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
                  group
                  relative

                  w-full
                  text-left

                  px-5
                  py-3

                  rounded-xl

                  text-sm

                  transition-all
                  duration-300

                  ${
                    active === item.id
                      ? "bg-[#F3EDE4] text-[#12100F]"
                      : "text-white/50 hover:bg-white/[0.05] hover:text-[#F3EDE4]"
                  }
                `}
              >

                <span
                  className={`
                    mr-4
                    text-[10px]
                    tracking-[0.2em]

                    ${
                      active === item.id
                        ? "text-[#C9A27E]"
                        : "text-[#C9A27E]/60"
                    }
                  `}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                {item.name}

                {active === item.id && (
                  <span
                    className="
                      absolute
                      right-5
                      top-1/2
                      -translate-y-1/2

                      w-1.5
                      h-1.5

                      rounded-full

                      bg-[#C9A27E]
                    "
                  />
                )}

              </button>

            ))}

          </div>

        </div>

      </div>
    </nav>
  );
};

export default Navbar;