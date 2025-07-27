// // ne updated code
// import React, { useRef } from 'react';
// import Spline from '@splinetool/react-spline';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const SplineModel = () => {
//   const sectionRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start end', 'end start']
//   });

// const top = useTransform(scrollYProgress, [0, 1], ['9rem', '70%']);
// const left = useTransform(scrollYProgress, [0, 1], ['100%', '44%']);
// const x = useTransform(scrollYProgress, [0, 1], ['-50%', '-50%']); // always center based on element size
// const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);
// // const margin = useTransform(margin, [0,1],["0%","10%"]);

//   return (
//     <>
//       <motion.div
//         style={{
//           position: 'fixed',
//           top,
//           left,
//           x,
//           y,
//           zIndex: 50,
//           width: '400px',
//           height: '400px'
//         }}
//         className="md:w-[400px] md:h-[400px]"
//       >
//         <Spline scene="https://prod.spline.design/XymyCwg8o6C14z1P/scene.splinecode" />
//       </motion.div>

//       {/* Section controlling the scroll range */}
//       <div ref={sectionRef} className="w-full h-[200vh]" />
//     </>
//   );
// };

// export default SplineModel;

import React, {useRef} from 'react';
import Spline from '@splinetool/react-spline';
import { easeOut, motion, useScroll, useTransform } from 'framer-motion';

const SplineModel = ({ sectionRef, endRef }) => {
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: endScroll } = useScroll({
    target: endRef,
    offset: ['start end', 'end start'],
  });

  const top = useTransform(scrollYProgress, [0, 1], ['9rem', '70%']);
  const left = useTransform(scrollYProgress, [0, 1], ['90%', '33%']);
  const x = useTransform(scrollYProgress, [0, 1], ['-50%', '-50%']);
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

    // Fade out robot as we scroll to the endRef
  const opacity = useTransform(endScroll, [0, 0.4], [1, 0]);

  return (
    <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: -160 }}
        viewport={{ once: false }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
      style={{
        position: 'fixed',
        top,
        left,
        x,
        y,
        zIndex: 50,
        width: '400px',
        height: '400px',
        transition: "transform 2s easeOut",
      }}
      className="md:w-[400px] md:h-[400px] transition"
    >
      <Spline scene="https://prod.spline.design/XymyCwg8o6C14z1P/scene.splinecode" />
    </motion.div>
  );
};

export default SplineModel;

// import React, { useRef, useEffect, useState } from 'react';
// import Spline from '@splinetool/react-spline';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const SplineModel = ({ sectionRef }) => {
//   const [shouldStop, setShouldStop] = useState(false);
//   const splineRef = useRef(null);

//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start end', 'end start'],
//   });

//   const top = useTransform(scrollYProgress, [0, 1], ['9rem', '70%']);
//   const left = useTransform(scrollYProgress, [0, 1], ['100%', '44%']);
//   const x = useTransform(scrollYProgress, [0, 1], ['-50%', '-50%']);
//   const y = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

//   // Manually observe scroll position to stop movement
//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const stopAt = window.innerHeight * 1.9; // You can adjust this threshold
//       if (scrollY > stopAt) {
//         setShouldStop(true);
//       } else {
//         setShouldStop(false);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <motion.div
//       ref={splineRef}
//       style={{
//         opacity: shouldStop ? 0 : 1,
//         position: 'fixed',
//         top: shouldStop ? '70%' : top,
//         left: shouldStop ? '44%' : left,
//         x,
//         y,
//         zIndex: 50,
//         width: '400px',
//         height: '400px',
//         transition: 'all 0.3s ease',
//         pointerEvents: 'none',
//       }}
//       className="md:w-[400px] md:h-[400px]"
//     >
//       <Spline scene="https://prod.spline.design/XymyCwg8o6C14z1P/scene.splinecode" />
//     </motion.div>
//   );
// };

// export default SplineModel;
