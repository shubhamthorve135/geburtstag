import { motion } from 'framer-motion';
import { useMemo } from 'react';

const FloatingBalloons = () => {
  const balloons = useMemo(() => {
    return Array.from({ length: 8 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 10 + Math.random() * 10,
      emoji: ['🎈', '🎉', '✨', '🧸', '🐼'][Math.floor(Math.random() * 2)],
      size: ['text-4xl', 'text-4xl', 'text-5xl'][Math.floor(Math.random() * 3)],
    }));
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {balloons.map((balloon) => (
        <motion.div
          key={balloon.id}
          className={`absolute ${balloon.size}`}
          initial={{
            y: window.innerHeight + 50,
            x: `${balloon.left}%`,
            opacity: 0,
          }}
          animate={{
            y: -100,
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: balloon.duration,
            delay: balloon.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          {balloon.emoji}
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingBalloons;
