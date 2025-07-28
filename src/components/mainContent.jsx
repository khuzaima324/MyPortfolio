import React from 'react'
import { useState, useEffect } from 'react'
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Scale, ChevronDown } from 'lucide-react';
import { useNavigate, NavLink } from 'react-router-dom';
// import SplineModel from './splineModel';

function mainContent() {
  // scroll Indicator at bottom
  const [indicator, setIndicator] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      setIndicator(window.scrollY < 50); // Show only at top
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // All my skills Typing
  const skills = [
    'Web Developer ', 'Video Editor ', 'Content Creator '
  ]
  const [text, setText] = useState('');
  const [skillIndex, setSkillIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  // use Effect
  useEffect(() => {
    const currentSkill = skills[skillIndex];
    if (charIndex < currentSkill.length) {
      const timeout = setTimeout(() => {
        setText((prev) => prev + currentSkill[charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setText('');
        setCharIndex(0);
        setSkillIndex((prev) => (prev + 1) % skills.length);
      }, 1000); // Pause before switching to next word
      return () => clearTimeout(timeout);
    }
  }, [charIndex, skillIndex, skills]);

  return (
    <>
      <section className='content-wrapper flex justify-between md:items-center w-[80%] max-h-screen h-[50vh] md:h-screen mx-auto overflow-hidden'>
        <div className="left-content w-full md:w-1/2 z-50">
          <motion.div
            className="left-content w-full"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 3 }}
          >
            <h1 className='tittle text-5xl font-bold mb-1.5'>Khuzaima Iqbal</h1>
            <h2 className='text-2xl'>
              <span className='Im text-gray-500 text-sm'>I'm a </span>
              {text}
              <span className="blinking-cursor"> |</span>
            </h2>
            <NavLink
              to="/contactMe"
              className="relative inline-block px-6 py-2 mt-4 rounded-2xl border border-white text-white overflow-hidden transition-colors duration-300"
            >
              <span className="relative z-10">Hire Me</span>
              <span
                className="absolute inset-0 animate-pulse bg-white opacity-10 blur-xl"
                aria-hidden="true"
              ></span>
            </NavLink>
            <a
              href="src\assets\KhuzaimaCv.pdf" // Update with actual CV path or URL
              download="Khuzaima_CV.pdf"
              className="block text-[var(--color-text)] w-fit font-semibold py-1 px-3 rounded-lg border border-[var(--color-text)]/30 shadow-lg z-60 pointer-events-auto text-sm mt-2"
              whileHover={{ scale: 1.05, backgroundColor: "var(--color-text)", color: "var(--color-primary)" }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV
            </a>
          </motion.div>
        </div>
        {/* <div className="right-content w-lg-[50%] flex justify-center items-center max-w-[50%]">
          <SplineModel />
        </div> */}

      </section>
      {/* scrool down indicator */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 z-50">
        <motion.div
          initial={{ opacity: 1 }}
          animate={{ opacity: indicator ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="absolute bottom-1 left-1/2 transform -translate-x-1/2 z-10"
        >
          <ChevronDown
            className="animate-bounce text-white"
            size={32}
          />
        </motion.div>
      </div>
    </>

  )
}

// export default mainContent
export default React.memo(mainContent);
