const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0D1117]/90 backdrop-blur-md text-white px-10 py-5 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-blue-400">
        Siddhi.dev
      </h1>

     <ul className="flex gap-10 font-medium">
        <li>
          <a href="#home" className="hover:text-blue-400 transition duration-300">
            Home
          </a>
        </li>

        <li>
          <a href="#about" className="hover:text-blue-400 transition duration-300">
            About
          </a>
        </li>

        <li>
          <a href="#skills" className="hover:text-blue-400 transition duration-300">
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" className="hover:text-blue-400 transition duration-300">
            Projects
          </a>
        </li>

        <li>
          <a href="#education" className="hover:text-blue-400 transition duration-300">
            Education
          </a>
        </li>

        <li>
  <a
    href="#certificates"
    className="hover:text-blue-400 transition duration-300"
  >
    Certificates
  </a>
</li>

        <li>
          <a href="#contact" className="hover:text-blue-400 transition duration-300">
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;