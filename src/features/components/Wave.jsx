import { motion } from 'framer-motion';

const Wave = () => {
  return (
    <motion.div
      whileHover={{ rotate: 45 }}
      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
    >
      👋🏼
    </motion.div>
  );
};

export default Wave;
