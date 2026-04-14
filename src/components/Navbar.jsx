import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-gray-900">
          UrbanKore<span className="text-[#d4af37]">.</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-gray-700 font-medium">
          <li>
            <Link to="/" className="hover:text-[#d4af37]">
              Home
            </Link>
          </li>
          <li>
            <Link to="/services" className="hover:text-[#d4af37]">
              Services
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-[#d4af37]">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-[#d4af37]">
              Contact
            </Link>
          </li>
        </ul>

        {/* CTA */}
        <div className="hidden md:block">
          <a
            href="https://wa.me/918847405508"
            className="bg-[#d4af37] text-white px-5 py-2 rounded-lg hover:opacity-90 transition"
          >
            Get Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pb-4 shadow-md">
          <ul className="flex flex-col gap-4 text-gray-700 font-medium">
            <li>
              <Link to="/" onClick={() => setIsOpen(false)}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" onClick={() => setIsOpen(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={() => setIsOpen(false)}>
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
            </li>
          </ul>

          <a
            href="https://wa.me/918847405508"
            className="block mt-4 bg-[#d4af37] text-white text-center py-2 rounded-lg"
          >
            Get Quote
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
