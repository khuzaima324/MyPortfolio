import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

function header() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/aboutMe' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contactMe' },
    { name: 'Video', path: '/video' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full backdrop-blur-sm bg-transparent z-50" style={{ fontFamily: 'var(--font-orbitron)', color: 'var(--color-text)' }}>
      <div className="max-w-7xl mx-auto px-6 py-4 flex sm:justify-center justify-end items-center ">

        {/* Desktop Navigation */}
        <motion.div
          // className='w-auto'
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <nav className="hidden sm:flex space-x-6">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `text-sm font-medium hover:text-[var(--color-accent)] transition duration-300 border-b-2 p-1 border-transparent hover:border-b-[var(--color-accent)] ${isActive ? 'text-[var(--color-text)] border-b-2 border-b-[var(--color-background)]' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
          </nav>
        </motion.div>
        {/* Hamburger Icon for Mobile */}
        <div className="sm:hidden z-50">
          {open ? (
            <X onClick={() => setOpen(false)} className="w-6 h-6 cursor-pointer" />
          ) : (
            <Menu onClick={() => setOpen(true)} className="w-6 h-6 cursor-pointer" />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <motion.div 
          className="sm:hidden flex flex-col bg-black/90 text-white p-6 space-y-4 h-screen"
          initial={{x:-100, opacity:0.5}}
          animate={{x:0, opacity:1}}
          transition={{duration:1}}
        >
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `text-lg hover:text-cyan-400 transition duration-300 ${isActive ? 'text-cyan-400' : ''
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </motion.div>
      )}
    </header>
  );
}

export default header