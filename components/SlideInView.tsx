import { motion } from 'framer-motion';

const variants = {
  offscreen: { opacity: 0, y: 50 },
  onscreen: { opacity: 1, y: 0 },
};

export const SlideInView = ({ children }: any) => {
  return (
    <motion.div
      initial='offscreen'
      whileInView='onscreen'
      viewport={{ once: true, amount: 0.8 }}
      transition={{ duration: 0.4, ease: 'easeInOut' }}
      variants={variants}>
      {children}
    </motion.div>
  );
};
