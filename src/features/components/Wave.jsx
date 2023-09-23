import { motion } from 'framer-motion';

const Wave = () => {
  return (
    <motion.div
      className="animate-[wiggle_1s_ease-in-out_infinite]"
      // whileHover={{ rotate: 45 }}
      // transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      👋🏼
    </motion.div>
  );
};

export default Wave;

// automatic waving via tailwind
//<motion.div className="animate-[wave_2s_linear_infinite]">👋🏼</motion.div>
