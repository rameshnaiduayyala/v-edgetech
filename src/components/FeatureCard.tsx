import { motion } from 'framer-motion'

const FeatureCard = ({ title, description, imageSrc, index }: any) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.06 }}
    viewport={{ once: true }}
    className="
      bg-white dark:bg-zinc-950
      border border-neutral-200 dark:border-neutral-800
      rounded-xl
      transition
      hover:border-neutral-400 dark:hover:border-neutral-600
      overflow-hidden
    "
  >
    <div className="p-6 flex flex-col h-full">
      <h3 className="text-sm uppercase tracking-widest text-neutral-500 mb-3">
        {title}
      </h3>

      <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed mb-6">
        {description}
      </p>

      <img
        src={imageSrc}
        alt={title}
        className="rounded-lg object-cover w-full h-40 border border-neutral-200 dark:border-neutral-800"
      />
    </div>
  </motion.div>
)

const SplitBlock = ({
  title,
  heading,
  description,
  imgUrl,
  reverse = false,
  actions = [],
}: any) => (
  <div
    className={`mt-32 grid lg:grid-cols-2 gap-16 items-center ${
      reverse ? 'lg:flex-row-reverse' : ''
    }`}
  >
    <motion.div
      initial={{ opacity: 0, x: reverse ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <p className="text-xs uppercase tracking-widest text-neutral-500 mb-4">
        {title}
      </p>

      <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white mb-6">
        {heading}
      </h2>

      <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10">
        {description}
      </p>

      <div className="flex gap-4">
        {actions.map((a: any, i: number) => (
          <button
            key={i}
            className={`px-6 py-3 text-sm font-medium rounded-md transition ${
              a.variant === 'solid'
                ? 'bg-cyan-600 text-white hover:bg-cyan-700'
                : 'border border-neutral-300 dark:border-neutral-700 text-neutral-700 dark:text-neutral-300 hover:border-neutral-500'
            }`}
          >
            {a.label}
          </button>
        ))}
      </div>
    </motion.div>

    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="
        border border-neutral-200 dark:border-neutral-800
        rounded-xl
        overflow-hidden
      "
    >
      <img
        src={imgUrl}
        alt={heading}
        className="w-full h-auto object-cover"
      />
    </motion.div>
  </div>
)

const FeatureSection = () => {
  const features = [
    {
      title: 'Speed & Scale',
      description:
        'Real-time analytics designed to scale with your most demanding AI workloads.',
      imageSrc:
        'https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/bltf12737aaaa75f1e7/67b631d99bea6d864b491671/img_single-shot-retrieval-for-ai-apps_splitblock.png',
    },
    {
      title: 'Platform',
      description:
        'A future-proof platform that enables intelligent application development end to end.',
      imageSrc:
        'https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/bltf12737aaaa75f1e7/67b631d99bea6d864b491671/img_single-shot-retrieval-for-ai-apps_splitblock.png',
    },
    {
      title: 'Real-time analytics',
      description:
        'Unified support for SQL, JSON, full-text, and vector workloads at scale.',
      imageSrc:
        'https://images.contentstack.io/v3/assets/bltac01ee6daa3a1e14/bltf12737aaaa75f1e7/67b631d99bea6d864b491671/img_single-shot-retrieval-for-ai-apps_splitblock.png',
    },
  ]

  return (
    <section className="bg-white dark:bg-zinc-950 py-32 px-6 border-t border-neutral-200 dark:border-neutral-800">
      <div className="max-w-7xl mx-auto">

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-10">
          {features.map((f, i) => (
            <FeatureCard key={i} {...f} index={i} />
          ))}
        </div>

        {/* Split Sections */}
        <SplitBlock
          title="Speed & Scale"
          heading="Built for real-time, built to scale"
          description="Support enterprise workloads with consistent performance at any scale."
          imgUrl={features[0].imageSrc}
          actions={[{ label: 'Learn more', variant: 'outline' }]}
        />

        <SplitBlock
          title="Platform"
          heading="Everything you need. Nothing you don’t."
          description="A streamlined platform that evolves with your AI applications."
          imgUrl={features[1].imageSrc}
          reverse
          actions={[{ label: 'Learn more', variant: 'outline' }]}
        />

        <SplitBlock
          title="Analytics"
          heading="One platform. All workloads."
          description="Run transactional, analytical, and AI-driven workloads in a unified system."
          imgUrl={features[2].imageSrc}
          actions={[
            { label: 'Get started', variant: 'solid' },
            { label: 'Documentation', variant: 'outline' },
          ]}
        />
      </div>
    </section>
  )
}

export default FeatureSection

