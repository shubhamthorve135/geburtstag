import { motion } from 'framer-motion';

const VolumeControl = ({ volume, isMuted, onVolumeChange, onToggleMute }) => {
  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    onVolumeChange(newVolume);
  };

  return (
    <motion.div
      className="fixed bottom-8 right-8 z-40 flex items-center gap-3 glass-card px-4 py-3 rounded-full"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1 }}
    >
      <motion.button
        onClick={onToggleMute}
        className="text-xl hover:text-pink-400 transition-colors"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
      >
        {isMuted ? '🔇' : '🔊'}
      </motion.button>
      <input
        type="range"
        min="0"
        max="1"
        step="0.1"
        value={isMuted ? 0 : volume}
        onChange={handleVolumeChange}
        className="w-20 cursor-pointer"
      />
    </motion.div>
  );
};

export default VolumeControl;
