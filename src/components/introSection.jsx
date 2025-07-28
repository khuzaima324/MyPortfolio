import React, { useRef } from 'react'
import { useScroll, useTransform, motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaYoutube, FaGitAlt } from 'react-icons/fa'
import { SiAdobephotoshop, SiAdobepremierepro } from 'react-icons/si'

function IntroSection() {
  const skills = [
    { icon: <SiAdobephotoshop />, class: 'top-[20%] left-[100%]' },
    { icon: <SiAdobepremierepro />, class: 'top-[10%] left-[110%]' },
    { icon: <FaHtml5 />, class: 'top-[20%] left-[0%]' },
    { icon: <FaCss3Alt />, class: 'top-[35%] left-[-10%]' },
    { icon: <FaJs />, class: 'top-[40%] left-[105%]' },
    { icon: <FaReact />, class: 'top-[5%] left-[90%]' },
    { icon: <FaYoutube />, class: 'top-[2%] left-[10%]' },
    { icon: <FaGitAlt />, class: 'top-[0%] left-[20%]' },
  ]

  const targetRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "center center"]
  })

  // Animate circle from bottom (y: 200) to center (y: 0)
  const circleY = useTransform(scrollYProgress, [0, 2], [100, 400])

  // Animate heading from top (y: -100) to its position above the circle (y: 0)
  const headingY = useTransform(scrollYProgress, [0, 2], [-30, 50])

  return (
    <section ref={targetRef} className="h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">
      <motion.h2
        initial={{opacity: 0, scale: 0}}
        whileInView={{opacity: 1, scale: 1}}
        // viewport={{once: true}}
        transition={{ duration: 2}}
        className="absolute top-[10%] text-4xl font-bold z-20"
        style={{ y: headingY}}

      >
        What I Do?
      </motion.h2>

      <motion.div
        // style={{ y: circleY }}
        className="h-200 w-200 rounded-full bg-zinc-900 flex items-center justify-center relative z-10 overflow-hidden"
        style={{
          y: circleY,
          boxShadow: "0px 0px 100px var(--color-accent)"
        }}
      >
        <p className='md:hidden inline-block text-center'>I'm A Web Developer & Video Editor <br /> Head Over To About Me To Learn More</p>
        {skills.map((skill, i) => (
          <motion.div
            key={i}
            className={`absolute text-3xl text-white ${skill.class} transition z-50`}
            initial={{ opacity: 0, scale: 0.3 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: i * 0.15 }}
            // viewport={{ once: true }}
          >
            {skill.icon}
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default React.memo(IntroSection)
