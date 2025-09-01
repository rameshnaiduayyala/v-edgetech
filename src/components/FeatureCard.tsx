import { motion } from 'framer-motion';

const FeatureCard = ({ title, description, imageSrc, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
    className="bg-white/50 dark:bg-white/10 border border-white/10 backdrop-blur-md rounded-2xl 
               shadow-xl hover:shadow-emerald-900/80 hover:-translate-y-1 transition-all duration-300 
               overflow-hidden"
  >
    <div className="p-6 flex flex-col h-full justify-between bg-sky-900/80 dark:bg-slate-800/60">
      <div>
        <h3 className="text-amber-400 text-xl font-semibold mb-3 tracking-tight">
          {title}
        </h3>
        <p className="text-blue-950 dark:text-neutral-300 text-sm leading-relaxed font-medium">
          {description}
        </p>
      </div>
      <div className="mt-6">
        <img
          src={imageSrc}
          alt={title}
          className="rounded-xl object-cover w-full h-40 border border-white/5"
        />
      </div>
    </div>
  </motion.div>
);

const SplitBlock = ({
  title,
  heading,
  description,
  imgUrl,
  reverse = false,
  actions = [],
  glow = false,
}: any) => (
  <div
    className={`mt-32 grid lg:grid-cols-2 items-center gap-16 ${
      reverse ? 'lg:flex-row-reverse' : ''
    }`}
  >
    <motion.div
      initial={{ opacity: 0, x: reverse ? 30 : -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
    >
      <p className="text-amber-400 text-xs font-semibold mb-3 uppercase tracking-widest">
        {title}
      </p>
      <h2 className="text-blue-900 dark:text-white text-4xl md:text-5xl font-bold leading-tight mb-5">
        {heading}
      </h2>
      <p className="text-blue-800 dark:text-neutral-400 mb-8 text-lg">{description}</p>
      <div className="flex flex-wrap gap-4">
        {actions.map((a: any, i: number) => (
          <button
            key={i}
            className={`px-6 py-3 rounded-full text-sm font-medium transition-all ${
              a.variant === 'glass'
                ? 'bg-white/10 text-cyan-300 border border-white/10 backdrop-blur-md hover:bg-white/20'
                : 'bg-gradient-to-r from-cyan-500 to-green-500 text-black hover:from-cyan-600 hover:to-green-600'
            }`}
          >
            {a.label}
          </button>
        ))}
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative"
    >
      <div className="overflow-hidden rounded-xl shadow-2xl border border-cyan-400 bg-slate-700 dark:bg-slate-800">
        <img
          src={imgUrl}
          alt={heading}
          className="rounded-xl w-full h-auto object-cover"
        />
      </div>
      {glow && (
        <div className="absolute -top-10 -right-10 w-60 h-60 bg-cyan-400/30 blur-3xl rounded-full z-[-1]" />
      )}
    </motion.div>
  </div>
);

const FeatureSection = () => {
  const features = [
    {
      title: 'SPEED + SCALE',
      description:
        'Lightning-fast analytics with unlimited scale. Support your most demanding applications with real-time analytics — no matter how big your apps, user base or concurrency demands grow.',
      imageSrc:
        'https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/bltf12737aaaa75f1e7/67b631d99bea6d864b491671/img_single-shot-retrieval-for-ai-apps_splitblock.png',
    },
    {
      title: 'PLATFORM',
      description:
        'Feature rich. Future proof. Build your intelligent applications with a feature-rich platform that delivers everything you need.',
      imageSrc:
        'https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/bltf12737aaaa75f1e7/67b631d99bea6d864b491671/img_single-shot-retrieval-for-ai-apps_splitblock.png',
    },
    {
      title: 'REAL-TIME ANALYTICS',
      description:
        'Scale from one to one million customers, handling SQL, JSON, full text and vector workloads — all in one unified platform.',
      imageSrc:
        'https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/bltf12737aaaa75f1e7/67b631d99bea6d864b491671/img_single-shot-retrieval-for-ai-apps_splitblock.png',
    },
  ];

  return (
    <section className="bg-white/70 dark:bg-zinc-950/70 text-blue-900 dark:text-white py-24 px-6 transition-colors duration-500">
      <div className="max-w-7xl mx-auto">
        {/* Grid Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((feature, i) => (
            <FeatureCard key={i} {...feature} index={i} />
          ))}
        </div>

        {/* Split Image Blocks */}
        <SplitBlock
          title="SPEED + SCALE"
          heading="Lightning-fast analytics with unlimited scale"
          description="Support your most demanding applications with real-time analytics — no matter how big your apps, user base or concurrency demands grow."
          imgUrl={features[0].imageSrc}
          actions={[{ label: 'Learn more', variant: 'glass' }]}
        />

        <SplitBlock
          title="PLATFORM"
          heading="Feature rich. Future proof."
          description="Build your intelligent applications with a feature-rich platform that delivers everything you need."
          imgUrl={features[1].imageSrc}
          reverse
          actions={[{ label: 'Learn more', variant: 'glass' }]}
        />

        <SplitBlock
          title="REAL-TIME ANALYTICS"
          heading="Unified data platform for modern applications"
          description="Handle diverse workloads including SQL, JSON, full text, and vector operations with blazing-fast performance. Perfect for AI-powered applications and real-time analytics at any scale."
          imgUrl={features[2].imageSrc}
          glow
          actions={[
            { label: 'Try it now', variant: 'solid' },
            { label: 'View documentation', variant: 'solid' },
          ]}
        />
      </div>
    </section>
  );
};

export default FeatureSection;
