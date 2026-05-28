import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const TypingAnimation = ({ text, delay = 0, speed = 0.05 }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    if (!text) return;

    const timer = setTimeout(() => {
      let index = 0;
      const interval = setInterval(() => {
        setDisplayedText(text.slice(0, index));
        index++;
        if (index > text.length) {
          clearInterval(interval);
        }
      }, speed * 50);

      return () => clearInterval(interval);
    }, delay * 1000);

    return () => clearTimeout(timer);
  }, [text, delay, speed]);

  return (
    <motion.span
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
    >
      {displayedText}
      {displayedText.length < text.length && (
        <motion.span
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.8, repeat: Infinity }}
          className="inline-block w-0.5 h-6 bg-white ml-1"
        />
      )}
    </motion.span>
  );
};

export default TypingAnimation;
