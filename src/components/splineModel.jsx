// import React from 'react';
// import Spline from '@splinetool/react-spline';
// import { motion, useScroll, useTransform } from 'framer-motion';

// const SplineModel = ({ sectionRef, endRef }) => {
//   const { scrollYProgress } = useScroll({
//     target: sectionRef,
//     offset: ['start end', 'end start'],
//   });

//   const { scrollYProgress: endScroll } = useScroll({
//     target: endRef,
//     offset: ['start end', 'end start'],
//   });

//   // Clamp progress: 0 to 0.5 maps to 0 to 1, then stays at 1
//   const clampedProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);

//   // Use clampedProgress for position transformations
//   const top = useTransform(clampedProgress, [0, 1], ['9rem', '55%']);
//   const left = useTransform(clampedProgress, [0, 1], ['100%', '80%']);
//   const x = useTransform(clampedProgress, [0, 1], ['-30%', '-140%']);
//   const y = useTransform(clampedProgress, [0, 1], ['0%', '-50%']);

//   // Opacity uses endScroll to fade out later
//   const opacity = useTransform(endScroll, [0, 0.6], [1, 0]);

//   return (
//     <motion.div
//       style={{
//         position: 'fixed',
//         top,
//         left,
//         x,
//         y,
//         opacity,
//         zIndex: 50,
//         width: '400px',
//         height: '400px',
//       }}
//       className="md:w-[400px] md:h-[400px] transition h-[200px] w-[200px]"
//     >
//       <Spline scene="https://prod.spline.design/XymyCwg8o6C14z1P/scene.splinecode" />
//     </motion.div>
//   );
// };

// export default SplineModel;

import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion, useScroll, useTransform } from 'framer-motion';

const SplineModel = ({ sectionRef, endRef }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize(); // Run on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const { scrollYProgress: endScroll } = useScroll({
    target: endRef,
    offset: ['start end', 'end start'],
  });

  const clampedProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  const top = useTransform(clampedProgress, [0, 1], ['9rem', '55%']);
  const left = useTransform(clampedProgress, [0, 1], ['100%', '80%']);
  const x = useTransform(clampedProgress, [0, 1], ['-30%', '-140%']);
  const y = useTransform(clampedProgress, [0, 1], ['0%', '-50%']);
  const opacity = useTransform(endScroll, [0, 0.6], [1, 0]);

  return (
    <motion.div
      style={{
        position: isMobile ? 'static' : 'fixed', // Fixed for desktop, normal flow for mobile
        top: isMobile ? 'auto' : top,
        left: isMobile ? 'auto' : left,
        x: isMobile ? 0 : x,
        y: isMobile ? 0 : y,
        opacity,
        zIndex: 50,
        width: isMobile ? '100%' : '400px',
        height: isMobile ? '500px' : '400px',
        paddingTop: isMobile ? '10rem' : '0',
      }}
      className="md:w-[400px] md:h-[400px] h-[600px] w-[600px] overflow-hidden"
    >
      <Spline scene="https://prod.spline.design/XymyCwg8o6C14z1P/scene.splinecode" />
    </motion.div>
  );
};

export default SplineModel;
