import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion} from 'framer-motion';

const SplineModel = () => {

  // const clampedProgress = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 1]);
  // const top = useTransform(clampedProgress, [0, 1], ['9rem', '55%']);
  // const left = useTransform(clampedProgress, [0, 1], ['100%', '80%']);
  // const x = useTransform(clampedProgress, [0, 1], ['-30%', '-140%']);
  // const y = useTransform(clampedProgress, [0, 1], ['0%', '-50%']);
  // const opacity = useTransform(endScroll, [0, 0.6], [1, 0]);

  return (
    <motion.div
      className="md:w-[400px] md:h-[400px] h-[600px] w-[600px]" 
    >
      <Spline scene="https://prod.spline.design/XymyCwg8o6C14z1P/scene.splinecode" />
    </motion.div>
  );
};

export default SplineModel;
