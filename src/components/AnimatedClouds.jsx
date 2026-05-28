import { motion } from 'framer-motion';

const AnimatedClouds = () => {
  const cloudVariants = {
    animate: {
      x: ['-100%', '100vw'],
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-purple-900 to-orange-900" />

      {/* Animated stars appearing */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
      >
        <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse" />
        <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full opacity-75 animate-pulse" style={{ animationDelay: '2.5s' }} />
      </motion.div>

      {/* Moving Clouds */}
      <motion.div
        className="absolute top-10 left-0 text-6xl opacity-20"
        variants={cloudVariants}
        animate="animate"
      >
        ☁️
      </motion.div>

      <motion.div
        className="absolute top-1/4 left-0 text-7xl opacity-15"
        variants={cloudVariants}
        animate="animate"
        style={{ animationDelay: '5s' }}
      >
        ☁️
      </motion.div>

      <motion.div
        className="absolute top-1/2 left-0 text-5xl opacity-25"
        variants={cloudVariants}
        animate="animate"
        style={{ animationDelay: '10s' }}
      >
        ☁️
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 left-0 text-6xl opacity-20"
        variants={cloudVariants}
        animate="animate"
        style={{ animationDelay: '15s' }}
      >
        ☁️
      </motion.div>

      {/* Floating cloud accents */}
      <motion.div
        className="absolute top-20 right-1/3 text-5xl opacity-10"
        variants={floatingVariants}
        animate="animate"
      >
        ☁️
      </motion.div>

      <motion.div
        className="absolute bottom-1/3 left-1/2 text-6xl opacity-15"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '3s' }}
      >
        ☁️
      </motion.div>
    </div>
  );
};

export default AnimatedClouds;
