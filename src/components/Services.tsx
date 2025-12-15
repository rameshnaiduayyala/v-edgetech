import React from 'react'
import { Bot, Brain, Cloud, Cpu, Settings, ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

const services = [
  {
    icon: Bot,
    title: 'AI Development',
    desc: 'Custom AI models, vision systems, and predictive analytics for industrial use cases.',
  },
  {
    icon: Brain,
    title: 'Gen AI Integration',
    desc: 'Enterprise-grade LLM integrations for automation, decision support, and insights.',
  },
  {
    icon: Cloud,
    title: 'Cloud & Edge AI',
    desc: 'Scalable AI deployment across cloud-native and edge computing environments.',
  },
  {
    icon: Cpu,
    title: 'Embedded Systems',
    desc: 'Optimized AI pipelines for Jetson, Coral, Raspberry Pi, and custom hardware.',
  },
  {
    icon: Settings,
    title: 'Automation & Control',
    desc: 'AI-driven control systems integrated with PLCs, robotics, and factory automation.',
  },
  {
    icon: ShieldCheck,
    title: 'Security & Surveillance',
    desc: 'Computer vision–based access control, monitoring, and compliance solutions.',
  },
]

const Services: React.FC = () => {
  return (
    <section
      id="services"
      className="bg-white dark:bg-zinc-950 py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
            Services
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white leading-tight">
            Precision-built AI systems<br />for real-world industry
          </h2>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
            We design and deploy robust AI solutions with a strong focus on reliability,
            performance, and long-term scalability.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="
                  bg-white dark:bg-zinc-950
                  border border-neutral-200 dark:border-neutral-800
                  rounded-xl
                  p-8
                  hover:border-neutral-400 dark:hover:border-neutral-600
                  transition
                "
              >
                {/* Icon */}
                <Icon
                  size={28}
                  strokeWidth={1.5}
                  className="text-cyan-600 mb-6"
                />

                {/* Title */}
                <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {service.desc}
                </p>

                {/* Divider */}
                <div className="mt-6 h-px w-10 bg-neutral-200 dark:bg-neutral-800" />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
