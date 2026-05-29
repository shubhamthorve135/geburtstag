import { motion } from 'framer-motion';
import { useState } from 'react';
import SectionCard from './SectionCard';
import Modal from './Modal';

const Homepage = ({ onNavigateToMessage }) => {
  const [activeModal, setActiveModal] = useState(null);
  const modalBgHappiness = `${import.meta.env.BASE_URL}happy.png`;
  const modalBgCareer = `${import.meta.env.BASE_URL}career.png`;
  const modalBgHealth = `${import.meta.env.BASE_URL}health.png`;
  const modalBgTravel = `${import.meta.env.BASE_URL}travel.png`;
  const modalBgFoodie = `${import.meta.env.BASE_URL}foodie.png`;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="relative min-h-screen pt-20 pb-20 px-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header Section */}
      <motion.div className="max-w-4xl mx-auto mb-20 text-center" variants={itemVariants}>
        {/* Profile Photo */}
        <motion.div
          className="mb-8 flex justify-center"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', damping: 20 }}
        >
          <div className="w-44 h-44 rounded-full bg-gradient-to-br from-pink-400 via-orange-300 to-purple-500 p-1 glow-effect">

            <img
              src={`${import.meta.env.BASE_URL}divya.jpeg`}
              alt="Divyaa"
              className="w-full h-full rounded-full object-cover border-4 border-white/20"
            />

          </div>
        </motion.div>

        {/* Title */}
        <motion.h1 className="text-5xl md:text-6xl font-bold mb-8 sunset-text" variants={itemVariants}>
          Happy Birthday Divyaaa 🌸
        </motion.h1>

        {/* Intro Text */}
        <motion.div className="space-y-6 mb-8 text-lg md:text-xl leading-relaxed" variants={itemVariants}>
          <p className="text-gray-200">
            Congratulations on turning 26.
            <br />
            You're now officially at the age where cleaning the house feels therapeutic
            <br />
            and random back pain becomes a personality trait. 😉
          </p>

          <p className="text-orange-200 italic text-xl">
            And no matter how old you grow,
            <br />
            always keep the child in you alive. ☁️✨
          </p>

          <p className="text-pink-200 italic">
            This tiny corner of the internet is just a small gift for your special day from a special friend.
            <br />
            A few wishes, balloons, sunsets, clouds and of course... gulab jamuns.
            <br />
            I know you didn't ask for this still... kay karanar, couldn't resist 😭
            <br />
            Special message at the end
          </p>

        </motion.div>
      </motion.div>

      {/* Section Cards */}
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <SectionCard
            emoji="☁️"
            title="Happiness"
            description="Clouds, sunsets, and those little moments that make your heart feel light."
            onClick={() => setActiveModal('happiness')}
          />

          <SectionCard
            emoji="💻"
            title="Career & Dreams"
            description="For the engineer who meant for something completely different."
            onClick={() => setActiveModal('career')}
          />

          <SectionCard
            emoji="🌙"
            title="Health & Peace"
            description="Peaceful sleep, calm mind, and wisdom."
            onClick={() => setActiveModal('health')}
          />

          <SectionCard
            emoji="✈️"
            title="Travel & Adventure"
            description="Collecting sunsets and memories around the world."
            onClick={() => setActiveModal('travel')}
          />

          <SectionCard
            emoji="🍮"
            title="Foodie You"
            description="Because gulab jamun isn't just a dessert, it's a lifestyle."
            onClick={() => setActiveModal('foodie')}
          />

          <SectionCard
            emoji="💛"
            title="A Message From Me"
            description="A small letter for you."
            onClick={onNavigateToMessage}
          />
        </motion.div>
      </div>

      {/* Modals */}
      <Modal
        isOpen={activeModal === 'happiness'}
        onClose={() => setActiveModal(null)}
        title="Happiness"
        emoji="☁️"
        backgroundImage={modalBgHappiness}
      >
        <div className="space-y-4">
          <p>
            I hope life always gives you enough sunsets to pause for, enough clouds to stare at, and enough little moments that make your heart feel light.
          </p>
          <p>
            Those peaceful afternoons, the soft glow of evening light, the way clouds drift lazily across the sky these are the things that matter. These are the things that fill a soul like yours.
          </p>
          <p>
            May you find happiness not just in the big milestones, but in the everyday magic of being alive. In the warmth of sunshine, in the beauty of clouds, in quiet moments of joy.
          </p>
          <div className="flex justify-center mt-6 text-4xl space-x-4">
            ☁️ 🌅 ✨ 🎈 💕
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'career'}
        onClose={() => setActiveModal(null)}
        title="Career & Dreams"
        emoji="💻"
        backgroundImage={modalBgCareer}
      >
        <div className="space-y-4">

          <p>
            Even you know coding was probably never your true calling.
          </p>

          <p>
            I remember how you used to talk about becoming a makeup artist instead.
            And honestly? That sounds way more believable than you enjoying coding for the rest of your life.
          </p>

          <p>
            Though I can also completely imagine you opening one of those super aesthetic cafés with warm lights, pretty interiors and overpriced coffee people still happily buy.
          </p>

          <p>
            Or simply staying at home peacefully while aggressively cleaning and reorganizing things for mental peace like it's a full-time profession.
          </p>

          <p className="italic text-pink-200">
            Honestly all of these suit you more than Jira tickets and production bugs.
          </p>

          <p>
            But jokes apart, I genuinely hope you find something that makes you feel happy, peaceful and excited about life.
          </p>

          <p className="font-semibold text-orange-200">
            Whatever path you choose —
            MUA, café owner, software engineer or household CEO —
            I just hope it feels like YOU.
          </p>

        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'health'}
        onClose={() => setActiveModal(null)}
        title="Health & Peace"
        emoji="🌙"
        backgroundImage={modalBgHealth}
      >
        <div className="space-y-4">
          <p>
            I hope your mind always finds peace, even on days when life feels too loud.
          </p>
          <p>
            May your body feel strong, your sleep feel restorative, and your heart feel safe.
          </p>
          <p className="text-purple-200">
            Though considering your sleep schedule, peace might arrive at 3AM. And that's okay too. Night owls see a different kind of peace, the world is quieter, the stars are brighter, and somehow everything makes more sense.
          </p>
          <p>
            Take care of yourself. Heal when you need to. Rest when you're tired. Your health and peace matters.
          </p>
          <div className="flex justify-center mt-6 text-4xl space-x-4">
            🌙 ✨ 💤 🌟 🕯️
          </div>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'travel'}
        onClose={() => setActiveModal(null)}
        title="Travel & Adventure"
        emoji="✈️"
        backgroundImage={modalBgTravel}
      >
        <div className="space-y-4">
          <p>
            I hope one day your camera roll becomes 90% sunsets and food pictures.
          </p>
          <p>
            May you travel to places that make your heart sing. May you taste food that surprises your taste buds. May you collect memories more valuable than any souvenir.
          </p>
          <p>
            From beaches that take your breath away to mountains that remind you how small your problems are. From bustling cities to quiet villages where time moves differently.
          </p>
          <p>
            The world is waiting for you to explore it. To find those hidden cafés, to watch sunsets in different time zones, to fill your life with stories and stamps in your passport.
          </p>
          <p className="italic text-pink-200">
            Adventure is out there, and you deserve every bit of it.
          </p>
        </div>
      </Modal>

      <Modal
        isOpen={activeModal === 'foodie'}
        onClose={() => setActiveModal(null)}
        title="Foodie You"
        emoji="🍮"
        backgroundImage={modalBgFoodie}
      >
        <div className="space-y-4">

          <p className="text-lg font-semibold text-yellow-200">
            Your relationship with food is honestly one of the funniest and most relatable things ever.
          </p>

          <p>
            From pav bhaji cravings to random chatpata food obsessions to gulab jamuns that hold emotional significance in your life...
          </p>

          <p className="italic text-pink-200">
            And let's not forget the classic:
            <br />
            “I should diet.”
            <br />
            followed immediately by:
            <br />
            “But if not at this age then when?”
          </p>

          <p>
            Which honestly... is solid logic.
          </p>

          <p>
            I hope life always gives you late-night cravings worth satisfying,
            crispy fries,
            extra buttery pav bhaji,
            perfectly soft gulab jamuns without weight gain :P
            and people who understand the seriousness of food moods.
          </p>


          <p className="italic">
            “May nobody ever disturb you while eating peacefully.
          </p>

          <p className="font-semibold text-orange-200">
            Here's to more café hopping, more midnight cravings, more chatpata food adventures and a lifetime supply of happiness disguised as snacks.
          </p>

          <div className="flex justify-center mt-6 text-4xl space-x-4">
            🍟 🌮 🍮 🌙 🍕 ☕
          </div>

        </div>
      </Modal>
    </motion.div>
  );
};

export default Homepage;
