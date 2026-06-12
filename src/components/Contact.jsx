import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-[#0D1117] text-white py-24 px-8"
    >
      <h2 className="text-4xl font-bold text-center text-blue-400">
        Contact Me
      </h2>

      <div className="w-24 h-1 bg-blue-500 mx-auto mt-3 mb-12 rounded"></div>

      <div className="max-w-3xl mx-auto">
        <div className="bg-[#161B22] rounded-xl p-8 space-y-6">

          <div className="flex items-center gap-4">
            <FaEnvelope className="text-blue-400 text-2xl" />
            <span>mohitesiddhi811@gmail.com</span>
          </div>

          <div className="flex items-center gap-4">
            <FaMapMarkerAlt className="text-blue-400 text-2xl" />
            <span>Pune, Maharashtra</span>
          </div>

          <div className="flex items-center gap-4">
            <FaLinkedin className="text-blue-400 text-2xl" />
            <a
              href="https://www.linkedin.com/in/siddhi-mohite-a53951281"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center gap-4">
            <FaGithub className="text-blue-400 text-2xl" />
            <a
              href="https://github.com/SiddhiMohite20"
              target="_blank"
              rel="noreferrer"
              className="hover:text-blue-400"
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