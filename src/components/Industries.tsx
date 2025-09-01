import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

import logisticsImg from '@/assets/industries/logistics.jpg';
import healthcareImg from '@/assets/industries/healthcare.jpg';
import financeImg from '@/assets/industries/finance.jpg';
import manufacturingImg from '@/assets/industries/manufacturing.jpg';

const industries = [
  {
    title: 'Logistics',
    description: 'AI-powered supply chain, route optimization, and predictive fleet intelligence.',
    image: logisticsImg,
    slug: 'logistics',
    tags: ['AI', 'Cloud', 'Optimization'],
  },
  {
    title: 'Healthcare',
    description: 'Smart diagnostics, imaging automation, and predictive patient analytics.',
    image: healthcareImg,
    slug: 'healthcare',
    tags: ['AI', 'Edge', 'Imaging'],
  },
  {
    title: 'Finance',
    description: 'Real-time fraud detection, risk modeling, and smart customer experiences.',
    image: financeImg,
    slug: 'finance',
    tags: ['AI', 'Security', 'Data'],
  },
  {
    title: 'Manufacturing',
    description: 'Automated QA, anomaly detection, and predictive maintenance at scale.',
    image: manufacturingImg,
    slug: 'manufacturing',
    tags: ['AI', 'Automation', 'Edge'],
  },
];

const IndustryCard = ({ title, description, image, index, slug ,tags}: { title: string; description: string; image: string; index: number; slug: string ;tags?: string[]}) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    viewport={{ once: true }}
  >
    <Link to={`/case-studies/${slug}`} className="group block">
      <Card className="relative overflow-hidden rounded-2xl border border-white/10 bg-transparent shadow-lg hover:shadow-xl transition-all">
        <div className="relative h-64 w-full">
          <img
            src={`${image}?w=800&auto=format&fit=crop`}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 group-hover:rotate-3"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />
        </div>
        {/* Tag Badges */}
        <div className="absolute top-4 left-4 z-30 flex flex-wrap gap-2">
          {tags?.map((tag: string, i: number) => (
            <span
              key={i}
              className="text-xs px-2 py-0.5 bg-white/10 border border-white/20 text-white backdrop-blur-sm rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <CardContent className="relative z-20 p-6 text-white">
          <h3 className="text-xl font-semibold text-blue-900 dark:text-amber-400">{title}</h3>
          <p className="text-sm mt-2 text-zinc-900 dark:text-white">{description}</p>
        </CardContent>
      </Card>
    </Link>
  </motion.div>
);

const Industries = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const yTop = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 100]), {
    stiffness: 40,
    damping: 20,
  });

  const yBottom = useSpring(useTransform(scrollYProgress, [0, 1], [100, -100]), {
    stiffness: 40,
    damping: 20,
  });

  return (
    <section
      ref={ref}
      id="industries"
      className="relative bg-white/70 dark:bg-zinc-950/70 py-24 px-6 overflow-hidden transition-colors duration-300"
    >
      {/* Animated Blobs */}
      <motion.div
        style={{ y: yTop }}
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[600px] h-[600px] 
                   bg-gradient-radial from-cyan-300/20 to-transparent rounded-full blur-3xl z-0"
      />
      <motion.div
        style={{ y: yBottom }}
        className="absolute bottom-0 right-0 w-[300px] h-[300px] 
                   bg-gradient-radial from-pink-300/20 to-transparent rounded-full blur-2xl z-0"
      />

      {/* Section Heading */}
      <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white"
        >
          Intelligent AI for Every Industry
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-neutral-600 dark:text-neutral-400 text-lg mt-4"
        >
          From logistics to healthcare, Gazzee brings smart automation and real-time analytics.
        </motion.p>
      </div>

      {/* Industry Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {industries.map((industry, index) => (
          <IndustryCard key={index} {...industry} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Industries;
