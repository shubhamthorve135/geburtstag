import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const Modal = ({ isOpen, onClose, title, emoji, children, backgroundImage }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { type: 'spring', damping: 25, stiffness: 300 },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 20,
      transition: { duration: 0.2 },
    },
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm z-10"
            variants={backdropVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          />

          {/* Modal */}
          <div className="relative w-full max-w-2xl z-20 pointer-events-auto">
            <button
              type="button"
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="absolute top-6 right-6 text-gray-300 hover:text-white text-2xl transition-colors z-50 pointer-events-auto rounded-full p-3 bg-black/20 hover:bg-white/10"
              aria-label="Close modal"
              style={{ pointerEvents: 'auto', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
            >
              ✕
            </button>

            <motion.div
              className="relative glass-card max-h-[80vh] overflow-y-auto w-full overflow-hidden"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {backgroundImage && (
                <div
                  className="absolute inset-0 bg-cover bg-center opacity-40 filter z-0"
                  style={{ backgroundImage: `url(${backgroundImage})`, pointerEvents: 'none' }}
                  aria-hidden="true"
                />
              )}

              {/* Content */}
              <div className="relative z-30 p-8">
              <motion.div
                className="text-6xl mb-4"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ type: 'spring', delay: 0.1 }}
              >
                {emoji}
              </motion.div>

              <motion.h2
                className="text-3xl font-bold mb-6 sunset-text"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {title}
              </motion.h2>

              <motion.div
                className="text-gray-100 leading-relaxed space-y-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {children}
              </motion.div>
            </div>
          </motion.div>
        </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
