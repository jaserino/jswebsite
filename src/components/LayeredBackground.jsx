import { useRef } from 'react';
import { useTransform, motion, useScroll } from 'framer-motion';

const LayeredBackground = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '200%']);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center"
    >
      <motion.h1
        style={{ y: textY }}
        className="text-6xl md:text-9xl relative z-10 font-orbitron font-semibold text-yellow-200 "
      >
        JARED SERINO
      </motion.h1>

      <motion.div
        className="absolute inset-0 z-0"
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
  );
};

export default LayeredBackground;
