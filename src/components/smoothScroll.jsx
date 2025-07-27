// SmoothScroll.jsx
import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

const SmoothScroll = () => {
  // useEffect(() => {
  //   const lenis = new Lenis({
  //     duration: 1.2,
  //     easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  //     smooth: true,
  //   });
    useEffect (()=>{
      const lenis = new Lenis();
      function raf(time){
        lenis.raf(time);
        requestAnimationFrame(raf);
      }
      requestAnimationFrame(raf);
    },[])
    // const raf = (time) => {
    //   lenis.raf(time);
    //   requestAnimationFrame(raf);
    // };

    // requestAnimationFrame(raf);

    // return () => {
    //   lenis.destroy();
    // };
  // }, []);

  return null; // This component only controls scroll, it doesn't render anything
};

export default SmoothScroll;
