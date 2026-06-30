import profile from "../assets/profile.jpg";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-[#0D1117] text-white flex flex-col justify-center items-center px-6 text-center pt-20"
    >
      <img
        src={profile}
        alt="Siddhi Mohite"
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full border-4 border-blue-500 object-cover shadow-lg shadow-blue-500/30"
      />

      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6">
        Hi, I'm Siddhi Mohite
      </h1>

      <p className="text-lg sm:text-xl text-gray-400 mt-4">
        MERN Stack Developer
      </p>

      <p className="text-gray-400 mt-4 max-w-xl text-sm sm:text-base md:text-lg">
        Passionate Computer Engineering student focused on building
        responsive and scalable web applications using MERN Stack.
      </p>

      <div className="flex gap-6 mt-8">
        <a
          href="https://github.com/SiddhiMohite20"
          target="_blank"
          rel="noreferrer"
          className="text-3xl hover:text-blue-400 transition"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.linkedin.com/in/siddhi-mohite-a53951281"
          target="_blank"
          rel="noreferrer"
          className="text-3xl hover:text-blue-400 transition"
        >
          <FaLinkedin />
        </a>
      </div>
    </section>
  );
};

export default Hero;