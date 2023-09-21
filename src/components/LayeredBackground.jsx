import { useRef } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';
import Wave from '../features/components/Wave';
import Nav from './Nav';
import SideNav from './SideNav';

const LayeredBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);
  const navY = useTransform(scrollYProgress, [0, 1], ['0%', '-100%']);

  return (
    <div ref={ref}>
      <motion.div style={{ y: navY }} className="fixed top-0 w-full z-50">
        <Nav />
      </motion.div>
      <motion.div className="fixed z-50 right-36 top-40">
        <SideNav />
      </motion.div>

      <div className="w-full h-screen overflow-hidden relative grid place-items-center">
        <motion.h1
          style={{ y: textY }}
          className="text-6xl md:text-9xl relative font-orbitron font-semibold text-yellow-200 z-10 flex drop-shadow-neon "
        >
          Hey,
          <Wave />
          I'm Jared
        </motion.h1>

        <motion.div
          className="absolute inset-0 z-0 group"
          style={{
            backgroundImage: `url(image-full.jpg)`,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: backgroundY,
          }}
        ></motion.div>
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `url(image-bottom.png)`,
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
          }}
        ></motion.div>
      </div>
    </div>
  );
};

export default LayeredBackground;
