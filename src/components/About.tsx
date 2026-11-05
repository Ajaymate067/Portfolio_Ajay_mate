import { motion } from 'framer-motion';
import { User, GraduationCap, MapPin } from 'lucide-react';
import SectionHeading from '@/components/ui/SectionHeading';
import { aboutData, personalInfo } from '@/data/portfolio';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItem = {
  hidden: { opacity: 0, x: -16 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function About() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <SectionHeading label="Get to Know Me" title="A Little About Me" />

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* ── Left Column ── */}
          <motion.div
            className="lg:col-span-3"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={0}
            variants={fadeUp}
          >
            <p className="text-lg text-text-secondary leading-relaxed">
              {aboutData.intro}
            </p>
            <p className="text-text-secondary leading-relaxed mt-4">
              {aboutData.approach}
            </p>

            {/* Current Goals Card */}
            <motion.div
              className="glass rounded-2xl p-6 mt-8"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.15}
              variants={fadeUp}
            >
              <h3 className="font-semibold text-deep-navy text-lg mb-4">
                🎯 Current Goals
              </h3>

              <motion.ul
                className="space-y-3"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                variants={staggerContainer}
              >
                {aboutData.currentGoals.map((goal, i) => (
                  <motion.li
                    key={i}
                    className="flex items-start gap-3 text-text-secondary"
                    variants={staggerItem}
                  >
                    <span className="mt-1.5 h-2 w-2 flex-shrink-0 rounded-full bg-primary-blue" />
                    <span>{goal}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </motion.div>

          {/* ── Right Column ── */}
          <motion.div
            className="lg:col-span-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            custom={0.2}
            variants={fadeUp}
          >
            {/* Profile Card */}
            <div className="glass rounded-2xl overflow-hidden">
              {/* Photo placeholder */}
              <div className="h-64 w-full bg-gradient-to-br from-primary-blue/10 to-accent-blue/10 flex flex-col items-center justify-center gap-3">
                <User className="h-16 w-16 text-primary-blue/40" strokeWidth={1.4} />
                <span className="text-sm text-text-secondary font-medium">
                  Your Photo
                </span>
              </div>

              <div className="p-6 space-y-4">
                {/* Name & Title */}
                <div>
                  <h3 className="font-display text-xl font-bold text-deep-navy">
                    {personalInfo.name}
                  </h3>
                  <p className="text-text-secondary text-sm">
                    {personalInfo.title}
                  </p>
                </div>

                {/* Info rows */}
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3 text-text-secondary">
                    <GraduationCap className="h-4 w-4 mt-0.5 text-primary-blue flex-shrink-0" />
                    <div>
                      <p className="font-medium text-text-primary">
                        {personalInfo.degree}
                      </p>
                      <p>{personalInfo.university}</p>
                      <p>{personalInfo.yearOfStudy}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-text-secondary">
                    <MapPin className="h-4 w-4 text-primary-blue flex-shrink-0" />
                    <span>{personalInfo.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Currently Exploring Card */}
            <motion.div
              className="glass rounded-2xl p-6 mt-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              custom={0.35}
              variants={fadeUp}
            >
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-semibold text-deep-navy text-lg">
                  🔍 Currently Exploring
                </h3>
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-blue/60" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-primary-blue" />
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {aboutData.currentlyExploring.map((item, i) => (
                  <motion.span
                    key={i}
                    className="bg-secondary-bg rounded-full px-3 py-1 text-sm text-primary-blue font-medium"
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.35,
                      delay: 0.4 + i * 0.07,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
