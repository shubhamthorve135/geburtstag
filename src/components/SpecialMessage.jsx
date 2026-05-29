import { motion } from 'framer-motion';
import TypingAnimation from './TypingAnimation';

const SpecialMessage = ({ onBack }) => {
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.8 },
    },
  };

  return (
    <motion.div
      className="fixed inset-0 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900 overflow-auto z-50"
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Stars background */}
      <div className="fixed inset-0 pointer-events-none">
        <motion.div
          className="absolute inset-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="absolute top-10 left-10 w-1 h-1 bg-white rounded-full opacity-80 animate-pulse" />
          <div className="absolute top-20 right-20 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-white rounded-full opacity-70 animate-pulse" style={{ animationDelay: '2s' }} />
          <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1.5s' }} />
          <div className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-white rounded-full opacity-75 animate-pulse" style={{ animationDelay: '2.5s' }} />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-6">
        <motion.div
          className="glass-card max-w-2xl w-full p-12 md:p-16"
          initial={{ opacity: 0, scale: 0.8, y: 50 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ type: 'spring', damping: 25, stiffness: 200, delay: 0.3 }}
        >
          {/* Close Button */}
          <motion.button
            onClick={onBack}
            className="absolute top-6 right-6 text-gray-300 hover:text-white text-2xl transition-colors"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.95 }}
          >
            ✕
          </motion.button>

          {/* Letter styling */}
          <motion.div
            className="space-y-6 text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {/* Moon emoji */}
            <motion.div
              className="text-6xl"
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            >
              🌙
            </motion.div>

            {/* Title */}
            <motion.h2
              className="text-4xl md:text-5xl font-bold sunset-text font-serif"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              A Letter for You
            </motion.h2>

            {/* Main message with typing animation */}
            <motion.div
              className="text-left space-y-6 text-gray-100 leading-relaxed text-lg handwritten-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >

              <p>
                <TypingAnimation
                  text="Dear Divyaa,"
                  delay={1}
                />
              </p>

              <p>
                <TypingAnimation
                  text="Happy 26th birthday! 🎉"
                  delay={2}
                />
              </p>

              <p>
                <TypingAnimation
                  text="Cheers to another year of you being your amazing self. I hope this year brings you as much happiness, love and success."
                  delay={3}
                />
              </p>


              <p>
                <TypingAnimation
                  text="You are kind. The way you observe, read and understands people. The way you find joy in the smallest things a good meal, a beautiful sunset, clouds and the balloons. For me this things will always remind me of you. You understand that life is made of moments, not destinations."
                  delay={4}
                />
              </p>

              <p>
                <TypingAnimation
                  text="I hope you always get people in your life who genuinely care about you, understand you properly and stay soft with your heart."
                  delay={6}
                />
              </p>


              <p>
                <TypingAnimation
                  text="May you have enough clouds to stare at, enough sunsets to pause for, enough happiness in small as well as big things and enough peace to sleep well."
                  delay={7}
                />
              </p>

              <p>
                <TypingAnimation
                  text="And no matter how old you grow... please always keep the child in you alive. Keep smiling, keep shining and yes... keep slaying ✨"
                  delay={8}
                />
              </p>

              <p>
                <TypingAnimation
                  text="Also I envy one thing about you that how you are sorted about the things you want in life so I hope you always get best of everything you want and deserve."
                  delay={9}
                />
              </p>

              <p>
                <TypingAnimation
                  text="I know you haven't asked me to do any of this for this birthday. But I genuinely couldn't stop myself."
                  delay={10}
                />
              </p>


              <p>
                <TypingAnimation
                  text="Kay karanar... dil to baccha hai 😭"
                  delay={11}
                />
              </p>

              <p>
                <TypingAnimation
                  text="Accept this as a token of friendship, My final act of whatever we had have."
                  delay={12}
                />
              </p>

              <p>
                <TypingAnimation
                  text="Honestly, people say once feelings get involved it's better to choose distance."
                  delay={13}
                />
              </p>

              <p>
                <TypingAnimation
                  text="Maybe they're right."
                  delay={14}
                />
              </p>

              <p>
                <TypingAnimation
                  text="But I still prefer your presence in my life over pretending I don't care."
                  delay={15}
                />
              </p>

              <p>
                <TypingAnimation
                  text="Even if it's as a friend, because that was who we were and are. I know you may not have felt the same way about me that I felt about you, and I respect that.

I really loved you. I know when I say this, you may feel burdened, and that is the last thing I want. I'm not saying it to make you feel guilty or to expect anything in return. I'm saying it because it's the truth of how I felt. You were someone I genuinely cared about, and those feelings grew naturally from the bond we shared.

Even though things didn't turn out the way we hoped, as you say there is no future. I'm grateful for every conversation, every memory, and every moment of trust between us. I will always respect your feelings, and more than anything, I want you to be happy.
"
                  delay={16}
                />
              </p>

              <p>
                <TypingAnimation
                  text="Jiddi ahes tu, you know yourself really well ashich raha nehmi never change. Ani ya time madhe baryachsha goshti navyane shikayla bhetlya mazyabaddal ch jyacha me kadhi vichar navata kela. Raagat kasa ani ka shant rahaycha, how to express yourself and be vocal for self ... so you are a good friend and guide too.
                        So I will always thankful to you and tula mahitiy I will always be there for you, just a call/text away.
                        Ani aapli mountains chi trip rahiliy ti pan nko visaru 😀"
                  delay={18}
                />
              </p>
              <p>
                <TypingAnimation
                  text="Ani last la thodasa Gyaan 😭 please try sleeping early sometimes. Drink more water, do a little bit exercise and eat more fruits... 26 chi zhalis ata 😂. Ani he sagala bghun if you have smiled a little give a like and if felt overwhelmed can't help it is what it is 🤪"
                  delay={20}
                />
              </p>


              <p className="text-pink-200 italic">
                <TypingAnimation
                  text="Happy 26th birthday, beautiful soul. 🌸"
                  delay={22}
                />
              </p>

              <p className="text-purple-200">
                <TypingAnimation
                  text="With lots of love, care and good wishes,"
                  delay={23}
                />
              </p>

              <p className="text-lg font-semibold text-sunset-400">
                <TypingAnimation
                  text="Your Friend 🖤"
                  delay={24}
                />
              </p>
            </motion.div>

            {/* Photo */}
            <motion.div
              className="mb-10 flex justify-center"
              initial={{ scale: 0, rotate: -6 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', damping: 18 }}
            >
              <div className="glass-card p-3 rotate-[-2deg] hover:rotate-0 transition-all duration-500 shadow-2xl">
                <div className="grid gap-4 justify-items-center md:grid-cols-2">
                  <img
                    src={`${import.meta.env.BASE_URL}us.jpeg`}
                    alt="Us"
                    className="w-full max-w-[18rem] h-auto object-cover rounded-2xl"
                  />
                  <img
                    src={`${import.meta.env.BASE_URL}us2.png`}
                    alt="Us"
                    className="w-full max-w-[18rem] h-auto object-cover rounded-2xl"
                  />
                </div>

                <p className="text-center mt-4 text-pink-200 italic text-lg">
                  some of my favorite memories ✨
                </p>
              </div>
            </motion.div>

            {/* Decorative elements */}
            <motion.div
              className="flex justify-center gap-4 pt-8 text-3xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 22 }}
            >
              <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity }}>
                ✨
              </motion.span>
              <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}>
                🎈
              </motion.span>
              <motion.span animate={{ y: [0, -10, 0] }} transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}>
                🌸
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Back button at bottom */}
      <motion.button
        onClick={onBack}
        className="fixed bottom-8 left-1/2 -translate-x-1/2 glass-card px-8 py-3 rounded-full font-semibold hover:bg-white/20 transition-colors z-20"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Back to Home
      </motion.button>
    </motion.div>
  );
};

export default SpecialMessage;
