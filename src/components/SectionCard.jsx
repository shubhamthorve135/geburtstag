import { motion } from 'framer-motion';

const SectionCard = ({ emoji, title, description, onClick }) => {
  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    whileInView: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <motion.button
      onClick={onClick}
      variants={cardVariants}
      initial="initial"
      whileInView="whileInView"
      viewport={{ once: true }}
      whileHover={{ y: -10, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass-card-hover p-8 text-left group relative overflow-hidden rounded-2xl cursor-pointer transition-all duration-300"
    >
      {/* Background gradient on hover */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-pink-400/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
      />

      {/* Colored border on hover */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none border-2 border-transparent group-hover:border-pink-300/50 transition-all duration-300"
      />

      <div className="relative z-10">
        <div className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110">{emoji}</div>
        <h3 className="text-xl font-bold mb-3 sunset-text">{title}</h3>
        <p className="text-gray-200/80 text-sm leading-relaxed group-hover:text-gray-100 transition-colors duration-300">{description}</p>
      </div>

      {/* Bottom accent line on hover */}
      <motion.div
        className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-pink-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        initial={{ width: 0 }}
        whileHover={{ width: '100%' }}
        transition={{ duration: 0.3 }}
      />
    </motion.button>
  );
};

export default SectionCard;
