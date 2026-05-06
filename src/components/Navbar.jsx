import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", link: "#about" },
    { name: "Tech", link: "#tech" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-[#0a0a0a]/80 backdrop-blur border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-lg font-semibold tracking-wide">
          Samuel Seifu
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm text-gray-300">
          {navLinks.map((item, i) => (
            <a 
              key={i}
              href={item.link}
              className="hover:text-white transition"
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 text-gray-300">
          {navLinks.map((item, i) => (
            <a 
              key={i}
              href={item.link}
              onClick={() => setOpen(false)}
              className="hover:text-white"
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}