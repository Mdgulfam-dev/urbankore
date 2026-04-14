import { Phone, Mail, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white">
              UrbanKore<span className="text-[#d4af37]">.</span>
            </h2>
            <p className="mt-3 text-sm text-gray-400">
              30+ years of experience in interior design and home renovation. We
              deliver premium quality work across Punjab,Jalandhar. Chandigarh &
              Haryana.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
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
                <Link to="/projects" className="hover:text-[#d4af37]">
                  Projects
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
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-3">Our Services</h3>
            <ul className="space-y-2 text-sm">
              <li>Interior Design</li>
              <li>Home Renovation</li>
              <li>Modular Kitchen</li>
              <li>False Ceiling</li>
              <li>Painting</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3">Contact Us</h3>

            <div className="space-y-3 text-sm">
              <p className="flex items-center gap-2">
                <Phone size={16} /> +91 8847405508
              </p>

              <p className="flex items-center gap-2">
                <Mail size={16} /> urbankorebuilder@gmail.com
              </p>

              <p className="flex items-start gap-2">
                <MapPin size={16} /> Punjab,Jalandhar. Chandigarh & Haryana,
                India
              </p>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/918847405508"
              className="inline-block mt-4 bg-[#d4af37] text-white px-4 py-2 rounded-lg text-sm hover:opacity-90"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-700 mt-10 pt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} UrboKore. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
