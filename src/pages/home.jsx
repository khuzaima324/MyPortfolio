import React, { useState, useEffect, useRef } from 'react'
import MainContent from '../components/mainContent'
import IntroSection from '../components/introSection'
import { useScroll, useTransform, motion } from 'framer-motion';
// import Lenis from 'lenis'
import Lenis from '@studio-freight/lenis';
import { Code2, FileCode, Braces, TerminalSquare, Bug, Database, Cloud, Cpu, Code } from 'lucide-react' // Optional Lucide icons
import WelcomeModal from '../components/welcomeMessage';

const shapes = [
  '<div>', '</div>', '<html>', '<body>', '<section>', '</section>', '<React/>', '<JSX>', '</>', '<p>', '</a>', '<button>', '<form>',
]
const icons = [
  Code2, FileCode, Braces, TerminalSquare, Bug, Database, Cloud, Cpu, Code
]
// Random function
const random = (min, max) => Math.random() * (max - min) + min

function HomePage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  // const cursorRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX,
        y: e.clientY,
      })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])


  const backgroundItems = []
  for (let i = 0; i < 8; i++) {
    const isIcon = Math.random() > 0.5
    const top = `${random(0, 100)}%`
    const left = `${random(0, 100)}%`
    const size = random(16, 64) // in px
    const opacity = random(0.01, 0.1)
    const factor = random(-0.02, 0.02)
    const style = {
      top,
      left,
      fontSize: `${size}px`,
      width: `${size}px`,
      height: `${size}px`,
      opacity,
      position: 'absolute',
      pointerEvents: 'none',
      transition: 'transform 0.3s ease-in-out, opacity 0.1s ease-in-out',
      willchange: 'transform, opacity',
      pointerEvents: 'none',
    }
    if (isIcon) {
      const Icon = icons[Math.floor(Math.random() * icons.length)]
      backgroundItems.push(<Icon key={i} className='absolute text-white ' style={style} />)
    } else {
      const text = shapes[Math.floor(Math.random() * shapes.length)]
      backgroundItems.push(
        <span key={i} className='absolute text-white select-none' style={style}>
          {text}
        </span>
      )
    }
  }

  return (
    <div
      className=" w-full bg-[var(--color-primary)] text-white relative min-h-screen"
      style={{ fontFamily: 'var(--font-orbitron)' }}
    >
      {/* Floating HTML tag shapes */}
      <div className="absolute inset-0 z-0">
        {backgroundItems}
      </div>

      <WelcomeModal/>
      
      {/* both home page sections */}
      <div className="sectionWrapper">
        {/* Main content */}
        <MainContent />
        {/* Intro Section / Section 2 */}
        <IntroSection/>
      </div>

    </div>
  )
}

export default HomePage
