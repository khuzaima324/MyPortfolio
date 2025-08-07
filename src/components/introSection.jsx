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

  return (
    <section ref={targetRef} className="h-screen bg-black text-white flex items-center justify-center px-6 relative overflow-hidden">

      <motion.div
        className="h-150 w-150 rounded-full bg-zinc-900 flex items-center justify-center relative z-10"
        style={{
          boxShadow: "0px 0px 20px var(--color-accent)" 
        }}
        initial={{scale:0, opacity:0}}
        animate={{scale:1, opacity:1}}
        transition={{duration:1}}
        viewport={true}
      >
        <div className='p-10 pt-0 text-center'>
          <h2 className='mb-5 text-center text-3xl'>What I Do?</h2>
          <p className='mb-2 text-sm px-1.5'>🚀 <br /> Building responsive single-page web applications with modern front-end technologies including React.js, Next.js, Redux.js, TailwindCSS, HTML5, CSS3, and Bootstrap</p>
          <p className='mb-2 text-sm'>🛠️ <br /> Designing secure and high-performance backends using Node.js and Express.js</p>
          <p className='mb-2 text-sm'>🔗 <br /> Developing and integrating APIs while following modern programming best practices for seamless application communication</p>
          <p className='mb-2 text-sm px-1.5'>🎬 <br /> Crafting engaging and visually appealing video content with professional editing techniques to deliver impactful storytelling and high-quality productions</p>
        </div>
        {/* <p className=' inline-block text-center'>I'm A Web Developer & Video Editor <br /> Head Over To About Me To Learn More</p> */}
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
