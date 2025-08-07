import React, { useState, useEffect } from 'react';
import Spline from '@splinetool/react-spline';
import { motion} from 'framer-motion';

const SplineModel = () => {

  return (
    <motion.div
      className="md:w-[400px] md:h-[400px] h-[480px] w-[480px] opacity-100 z-30" 
      initial={{x:100, opacity:0}}
      animate={{x:0, opacity:1}}
      transition={{duration: 3}}
    >
      <Spline scene="https://prod.spline.design/XymyCwg8o6C14z1P/scene.splinecode"/>
    </motion.div>
  );
};

export default SplineModel;
