import React from 'react'
import { motion } from 'framer-motion'
import { UploadCloud, Activity, Zap } from 'lucide-react'

const steps = [
  {
    step: '01',
    icon: UploadCloud,
    title: 'Upload',
    desc: 'Securely stream or upload visual data from edge devices, cameras, or cloud sources.',
  },
  {
    step: '02',
    icon: Activity,
    title: 'Analyze',
    desc: 'Process data using production-grade AI models for detection, classification, and insights.',
  },
  {
    step: '03',
    icon: Zap,
    title: 'Act',
    desc: 'Trigger alerts, automate workflows, or surface intelligence in real time.',
  },
]

const HowItWorks: React.FC = () => {
  return (
    <section
      id="how-it-works"
      className="bg-white dark:bg-zinc-950 py-32 px-6 border-t border-neutral-200 dark:border-neutral-800"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white leading-tight">
            From data to action,<br />in three steps
          </h2>
          <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
            A simple, reliable pipeline designed for real-world AI deployment
            across edge and cloud environments.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 relative">

          {/* Connector line */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-px bg-neutral-200 dark:bg-neutral-800" />

          {steps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                viewport={{ once: true }}
                className="
                  relative z-10
                  bg-white dark:bg-zinc-950
                  border border-neutral-200 dark:border-neutral-800
                  rounded-xl
                  p-8
                  hover:border-neutral-400 dark:hover:border-neutral-600
                  transition
                "
              >
                {/* Step number */}
                <div className="text-sm font-medium text-neutral-500 mb-6">
                  {step.step}
                </div>

                {/* Icon */}
                <Icon
                  size={26}
                  strokeWidth={1.5}
                  className="text-cyan-600 mb-5"
                />

                {/* Title */}
                <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {step.desc}
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

export default HowItWorks
