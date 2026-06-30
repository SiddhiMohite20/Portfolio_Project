import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#0D1117]/90 backdrop-blur-md text-white px-6 md:px-10 py-5">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-400">
          Siddhi.dev
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 font-medium">
          <li><a href="#home" className="hover:text-blue-400">Home</a></li>
          <li><a href="#about" className="hover:text-blue-400">About</a></li>
          <li><a href="#skills" className="hover:text-blue-400">Skills</a></li>
          <li><a href="#projects" className="hover:text-blue-400">Projects</a></li>
          <li><a href="#education" className="hover:text-blue-400">Education</a></li>
          <li><a href="#certificates" className="hover:text-blue-400">Certificates</a></li>
          <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <ul className="md:hidden flex flex-col gap-5 mt-6 text-center font-medium bg-[#161B22] p-5 rounded-lg">
          <li><a href="#home" onClick={() => setOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
          <li><a href="#skills" onClick={() => setOpen(false)}>Skills</a></li>
          <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
          <li><a href="#education" onClick={() => setOpen(false)}>Education</a></li>
          <li><a href="#certificates" onClick={() => setOpen(false)}>Certificates</a></li>
          <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;