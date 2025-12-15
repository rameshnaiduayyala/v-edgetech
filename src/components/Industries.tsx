import { motion } from 'framer-motion'
import { useRef } from 'react'
import { Link } from 'react-router-dom'

import logisticsImg from '@/assets/industries/logistics.jpg'
import healthcareImg from '@/assets/industries/healthcare.jpg'
import financeImg from '@/assets/industries/finance.jpg'
import manufacturingImg from '@/assets/industries/manufacturing.jpg'

const industries = [
  {
    title: "Logistics & Supply Chain",
    description:
      "Route optimization, fleet intelligence, and real-time supply chain visibility at global scale.",
    image: logisticsImg,
    slug: "logistics",
    tags: ["Optimization", "Cloud Analytics"],
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "AI-driven imaging analysis, clinical decision support, and operational intelligence for healthcare systems.",
    image: healthcareImg,
    slug: "healthcare",
    tags: ["Medical Imaging", "AI Analytics"],
  },
  {
    title: "Financial Services",
    description:
      "Risk modeling, fraud detection, and data-driven customer intelligence for modern financial platforms.",
    image: financeImg,
    slug: "finance",
    tags: ["Risk & Compliance", "Data Platforms"],
  },
  {
    title: "Manufacturing & Industrial",
    description:
      "Predictive maintenance, quality inspection, and production intelligence powered by AI.",
    image: manufacturingImg,
    slug: "manufacturing",
    tags: ["Industrial AI", "Automation"],
  },
];


const IndustryCard = ({
  title,
  description,
  image,
  index,
  slug,
  tags,
}: {
  title: string
  description: string
  image: string
  index: number
  slug: string
  tags?: string[]
}) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    viewport={{ once: true }}
  >
    <Link to={`/case-studies/${slug}`} className="group block h-full">
      <div
        className="
          h-full bg-white dark:bg-zinc-950
          border border-neutral-200 dark:border-neutral-800
          rounded-xl overflow-hidden
          transition
          hover:border-neutral-400 dark:hover:border-neutral-600
        "
      >
        {/* Image */}
        <div className="h-44 w-full overflow-hidden">
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
          />
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-4">
            {tags?.map((tag, i) => (
              <span
                key={i}
                className="
                  text-[11px] uppercase tracking-wide
                  px-2 py-1
                  border border-neutral-200 dark:border-neutral-700
                  text-neutral-500 dark:text-neutral-400
                "
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
            {title}
          </h3>

          {/* Description */}
          <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
            {description}
          </p>

          {/* Divider */}
          <div className="mt-6 h-px w-10 bg-neutral-200 dark:bg-neutral-800" />
        </div>
      </div>
    </Link>
  </motion.div>
)

const Industries = () => {
  const ref = useRef(null)

  return (
    <section
      ref={ref}
      id="industries"
      className="bg-white dark:bg-zinc-950 py-32 px-6 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-12 gap-6 mb-20">
          <div className="col-span-12 md:col-span-5">
            <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
              Industries
            </p>
            <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white leading-tight">
              AI solutions<br />across key sectors
            </h2>
          </div>

          <div className="col-span-12 md:col-span-6 md:col-start-7">
            <p className="text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
              We work across industries where accuracy, reliability, and scalability
              are critical to business outcomes.
            </p>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {industries.map((industry, index) => (
            <IndustryCard key={index} {...industry} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Industries
