const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        bg-[#0A090B]
        text-[#F5F1E8]
        px-6
        sm:px-8
        py-8
      "
    >

      {/* Top Line */}

      <div className="max-w-6xl mx-auto">

        <div
          className="
            h-[1px]
            w-full
            bg-gradient-to-r
            from-transparent
            via-white/[0.10]
            to-transparent
            mb-8
          "
        />


        {/* Footer Content */}

        <div
          className="
            flex
            flex-col
            sm:flex-row
            items-center
            justify-between
            gap-5
          "
        >

          {/* Name */}

          <div className="text-center sm:text-left">

            <p
              className="
                text-sm
                font-medium
                tracking-wide
                text-white/70
              "
            >
              Siddhi Mohite
            </p>

            <p
              className="
                mt-1
                text-[9px]
                uppercase
                tracking-[0.3em]
                text-white/20
              "
            >
              MERN Stack Developer
            </p>

          </div>


          {/* Center */}

          <p
            className="
              text-[10px]
              uppercase
              tracking-[0.25em]
              text-white/20
              text-center
            "
          >
            © {new Date().getFullYear()} Siddhi Mohite
          </p>


          {/* Back To Top */}

          <a
            href="#home"
            className="
              group
              flex
              items-center
              gap-3
              text-[10px]
              uppercase
              tracking-[0.2em]
              text-white/30
              hover:text-[#C9A27E]
              transition-colors
              duration-300
            "
          >

            <span>
              Back to top
            </span>

            <span
              className="
                w-8
                h-8
                rounded-full
                border
                border-white/10
                flex
                items-center
                justify-center

                group-hover:border-[#C9A27E]/40
                group-hover:-translate-y-1

                transition-all
                duration-300
              "
            >
              ↑
            </span>

          </a>

        </div>


        {/* Bottom Text */}

        <div className="mt-7 text-center">

          <p
            className="
              text-[9px]
              tracking-[0.25em]
              uppercase
              text-white/10
            "
          >
            Designed · Developed · Crafted with intention
          </p>

        </div>

      </div>

    </footer>
  );
};

export default Footer;