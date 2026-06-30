import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0D1117] text-white py-20 px-4 sm:px-6 md:px-8"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-center text-blue-400">
        Contact Me
      </h2>

      <div className="w-24 h-1 bg-blue-500 mx-auto mt-3 mb-12 rounded"></div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-[#161B22] rounded-xl p-5 md:p-8 space-y-6">

          <div className="flex items-center gap-4 flex-wrap">
            <FaEnvelope className="text-blue-400 text-xl md:text-2xl shrink-0" />
            <span className="text-sm md:text-base break-all">
              mohitesiddhi811@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-400 text-xl md:text-2xl shrink-0" />
            <span className="text-sm md:text-base">
              Pune, Maharashtra
            </span>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <FaLinkedin className="text-blue-400 text-xl md:text-2xl shrink-0" />
            <a
              href="https://www.linkedin.com/in/siddhi-mohite-a53951281"
              target="_blank"
              rel="noreferrer"
              className="text-sm md:text-base hover:text-blue-400 break-all"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center gap-4 flex-wrap">
            <FaGithub className="text-blue-400 text-xl md:text-2xl shrink-0" />
            <a
              href="https://github.com/SiddhiMohite20"
              target="_blank"
              rel="noreferrer"
              className="text-sm md:text-base hover:text-blue-400 break-all"
            >
              GitHub Profile
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;