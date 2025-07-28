import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaInstagram, FaLinkedin, FaYoutube, FaGithub } from 'react-icons/fa'
import { SiAdobephotoshop, SiAdobepremierepro } from 'react-icons/si'

function Footer() {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Me", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="bg-[var(--color-secondary)] text-[var(--color-text)] border-t border-[var(--color-primary)] py-8 px-4 sm:px-10 z-10 overflow-hidden">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 items-center text-center sm:text-left">

        {/* Branding */}
        <div>
          <h2 className="text-xl font-bold tracking-wider" style={{ fontFamily: "Orbitron, sans-serif" }}>
            Khuzaima <span className="text-[var(--color-primary)]">DEV</span>
          </h2>
          <p className="text-sm mt-2">Ready For Crafting The Work.</p>
        </div>

        {/* Quick Navigation Links */}
        <div>
          <h3 className="font-semibold text-base mb-2">Quick Links</h3>
          <nav className="flex flex-col items-center sm:items-start space-y-1 text-sm">
            {navLinks.map(link => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `hover:text-[var(--color-accent)] transition duration-300 border-b-2 border-transparent hover:border-[var(--color-accent)] p-1
                   ${isActive ? 'text-[var(--color-text)] border-b-[var(--color-background)]' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>

        {/* Social Links */}
        <div className='w-full flex md:flex-wrap'>
          <h3 className="font-semibold text-base mb-3 text-start w-100">Follow Me</h3>
          <div className="flex gap-4 sm:items-start space-y-1 text-sm">
            <a href="https://instagram.com/khuzaima2020" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-background)] transition scale-140">
              <FaInstagram />
            </a>
            <a href="https://github.com/khuzaima324" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-background)] transition scale-140">
              <FaGithub />
            </a>
            <a href="https://youtube.com/your-channel" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-background)] transition scale-140">
              <FaYoutube />
            </a>
            <a href="https://linkedin.com/in/khuzaima-iqbal" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-background)] transition scale-140">
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-xs mt-8 text-gray-500">
        © {new Date().getFullYear()} Khuzaima. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
