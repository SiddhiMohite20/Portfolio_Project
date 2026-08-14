import profile from "../assets/myprofile.png";
import { FaGithub, FaLinkedin, FaArrowDown } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#12100F]
        text-[#F3EDE4]
        flex
        items-center
        justify-center
        px-6
      "
    >
      {/* ================= BACKGROUND ================= */}

      <div
        className="
          absolute
          top-[-20%]
          left-[-15%]
          w-[550px]
          h-[550px]
          rounded-full
          bg-[#C9A27E]/8
          blur-[150px]
        "
      />

      <div
        className="
          absolute
          bottom-[-20%]
          right-[-15%]
          w-[500px]
          h-[500px]
          rounded-full
          bg-[#9D8175]/8
          blur-[150px]
        "
      />

      {/* ================= INTRO NAME ================= */}

      <div
        className="
          absolute
          inset-0
          z-30
          flex
          flex-col
          items-center
          justify-center
          bg-[#12100F]
          pointer-events-none
          animate-[introExit_2.4s_ease-in-out_0s_forwards]
        "
      >

        


        {/* FIRST NAME */}

        <h1
          className="
            text-[17vw]
            sm:text-[15vw]
            md:text-[13vw]
            lg:text-[11vw]
            leading-[0.78]
            font-black
            tracking-[-0.08em]
            uppercase
            opacity-0
            animate-[nameReveal_1.1s_cubic-bezier(0.77,0,0.175,1)_0.35s_forwards]
          "
        >
          SIDDHI
        </h1>


        {/* LAST NAME */}

        <h1
          className="
            text-[17vw]
            sm:text-[15vw]
            md:text-[13vw]
            lg:text-[11vw]
            leading-[0.78]
            font-black
            tracking-[-0.08em]
            uppercase
            text-transparent
            [-webkit-text-stroke:1px_#F3EDE4]
            opacity-0
            animate-[nameReveal_1.1s_cubic-bezier(0.77,0,0.175,1)_0.5s_forwards]
          "
        >
          MOHITE
        </h1>


        {/* Small line */}

        <div
          className="
            mt-8
            w-0
            h-[1px]
            bg-[#C9A27E]
            animate-[lineReveal_0.7s_ease-out_1.2s_forwards]
          "
        />

      </div>


      {/* ================= MAIN CONTENT ================= */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-6xl
          mx-auto
          flex
          flex-col
          md:flex-row
          items-center
          justify-center
          gap-10
          md:gap-16
          pt-16
          opacity-0
          animate-[mainReveal_1s_ease-out_2.15s_forwards]
        "
      >

        {/* ================= PHOTO ================= */}

        <div
          className="
            relative
            group
            w-full
            md:w-[45%]
            flex
            justify-center
            opacity-0
            animate-[photoFromLeft_1.1s_cubic-bezier(0.77,0,0.175,1)_2.15s_forwards]
          "
        >

          {/* Soft glow */}

          <div
            className="
              absolute
              w-[280px]
              h-[350px]
              rounded-full
              bg-[#C9A27E]/10
              blur-[80px]
            "
          />

          {/* Image */}

          <div
            className="
              relative
              w-[250px]
              sm:w-[290px]
              md:w-[330px]
              overflow-hidden
              rounded-[24px]
              border
              border-white/10
              bg-[#181513]
            "
          >

            <img
              src={profile}
              alt="Siddhi Mohite"
              className="
                w-full
                h-auto
                object-cover
                transition-transform
                duration-700
                group-hover:scale-[1.025]
              "
            />

            {/* subtle overlay */}

            <div
              className="
                absolute
                inset-0
                bg-gradient-to-t
                from-[#12100F]/30
                via-transparent
                to-transparent
                pointer-events-none
              "
            />

          </div>


         
        </div>


        {/* ================= TEXT ================= */}

        <div
          className="
            w-full
            md:w-[50%]
            text-center
            md:text-left
            opacity-0
            animate-[textReveal_0.9s_ease-out_2.55s_forwards]
          "
        >

          {/* Label */}

          <p
            className="
              text-[11px]
              sm:text-xs
              uppercase
              tracking-[0.4em]
              text-[#C9A27E]
              mb-5
            "
          >
            MERN Stack Developer
          </p>


          {/* Heading */}

          <h2
            className="
              text-3xl
              sm:text-4xl
              md:text-5xl
              lg:text-[3.4rem]
              font-light
              leading-[1.08]
              tracking-tight
            "
          >
            Turning ideas into {" "}
            <br />

            <span className="font-medium text-[#C9A27E]">
              experiences
            </span>{" "}
            that feel as good as they work.
            <br />

           
          </h2>


          {/* Description */}

          <p
            className="
              mt-6
              max-w-lg
              mx-auto
              md:mx-0
              text-sm
              sm:text-base
              leading-7
              text-white/45
            "
          >
            Computer Engineering student passionate about
            creating modern, responsive and scalable web
            applications using the MERN Stack.
          </p>


          {/* Buttons */}

          <div
            className="
              flex
              flex-wrap
              justify-center
              md:justify-start
              gap-4
              mt-8
            "
          >

            <a
              href="#projects"
              className="
                px-7
                py-3
                rounded-full
                bg-[#F3EDE4]
                text-[#12100F]
                text-sm
                font-medium
                hover:bg-[#C9A27E]
                transition-all
                duration-300
                hover:-translate-y-1
              "
            >
              View My Work
            </a>


            <a
              href="#contact"
              className="
                px-7
                py-3
                rounded-full
                border
                border-white/15
                text-sm
                text-white/70
                hover:border-[#C9A27E]
                hover:text-[#C9A27E]
                transition-all
                duration-300
              "
            >
              Let's Connect
            </a>

          </div>


          {/* Social */}

          <div
            className="
              flex
              justify-center
              md:justify-start
              gap-5
              mt-7
            "
          >

            <a
              href="https://github.com/SiddhiMohite20"
              target="_blank"
              rel="noreferrer"
              className="
                text-lg
                text-white/40
                hover:text-[#C9A27E]
                hover:-translate-y-1
                transition-all
              "
            >
              <FaGithub />
            </a>


            <a
              href="https://www.linkedin.com/in/siddhi-mohite-a53951281"
              target="_blank"
              rel="noreferrer"
              className="
                text-lg
                text-white/40
                hover:text-[#C9A27E]
                hover:-translate-y-1
                transition-all
              "
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

      </div>


     


      {/* ================= ANIMATIONS ================= */}

      <style>{`

        /* Small intro */

        @keyframes smallReveal {

          0% {
            opacity: 0;
            transform: translateY(20px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }

        }


        /* Name comes upward */

        @keyframes nameReveal {

          0% {
            opacity: 0;
            transform: translateY(100px);
          }

          100% {
            opacity: 1;
            transform: translateY(0);
          }

        }


        /* Intro disappears AFTER name */

        @keyframes introExit {

          0% {
            opacity: 1;
            transform: translateY(0);
          }

          65% {
            opacity: 1;
            transform: translateY(0);
          }

          100% {
            opacity: 0;
            transform: translateY(-80px);
            visibility: hidden;
          }

        }


        /* Line */

        @keyframes lineReveal {

          0% {
            width: 0;
          }

          100% {
            width: 70px;
          }

        }


        /* Main */

        @keyframes mainReveal {

          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }

        }


        /* PHOTO FROM LEFT */

        @keyframes photoFromLeft {

          0% {
            opacity: 0;
            transform: translateX(-180px);
          }

          70% {
            opacity: 1;
            transform: translateX(10px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }

        }


        /* TEXT */

        @keyframes textReveal {

          0% {
            opacity: 0;
            transform: translateX(35px);
          }

          100% {
            opacity: 1;
            transform: translateX(0);
          }

        }


        @keyframes fadeIn {

          0% {
            opacity: 0;
          }

          100% {
            opacity: 1;
          }

        }

      `}</style>

    </section>
  );
};

export default Hero;