import React from 'react'
import { Camera, Eye, Activity, LayoutGrid, BarChart, Cpu } from 'lucide-react'

const features = [
  {
    icon: Eye,
    title: 'Real-time object detection',
    desc: 'Detect and track objects instantly using production-grade AI models.',
  },
  {
    icon: Camera,
    title: 'Multi-camera integration',
    desc: 'Unify feeds from IP and edge cameras into a single operational view.',
  },
  {
    icon: Activity,
    title: 'Edge AI inference',
    desc: 'Run AI models directly on edge devices for low-latency decisions.',
  },
  {
    icon: BarChart,
    title: 'Live analytics dashboards',
    desc: 'Monitor KPIs, heatmaps, and system activity in real time.',
  },
  {
    icon: LayoutGrid,
    title: 'Modular architecture',
    desc: 'Composable system design to adapt quickly to industrial requirements.',
  },
  {
    icon: Cpu,
    title: 'Cloud sync & control',
    desc: 'Securely manage, update, and monitor devices from a central cloud portal.',
  },
]

const Features: React.FC = () => {
  return (
    <section
      id="features"
      className="bg-white dark:bg-zinc-950 py-32 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="max-w-3xl mb-20">
          <p className="text-sm uppercase tracking-widest text-neutral-500 mb-4">
            Platform capabilities
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-neutral-900 dark:text-white mb-6">
            Built for real-world AI deployment
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400">
            A robust, scalable platform designed for industrial automation,
            computer vision, and real-time intelligence.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((f, i) => {
            const Icon = f.icon
            return (
              <div
                key={i}
                role="article"
                tabIndex={0}
                className="
                  h-full
                  bg-white dark:bg-zinc-950
                  border border-neutral-200 dark:border-neutral-800
                  rounded-xl
                  p-8
                  transition
                  hover:bg-neutral-50 dark:hover:bg-zinc-900/40
                  hover:border-neutral-400 dark:hover:border-neutral-600
                  focus:outline-none
                  focus:ring-2 focus:ring-cyan-600/30
                "
              >
                {/* Icon */}
                <Icon
                  size={26}
                  strokeWidth={1.5}
                  className="text-cyan-600 mb-5"
                />

                {/* Title */}
                <h3 className="text-xl font-medium text-neutral-900 dark:text-white mb-3">
                  {f.title}
                </h3>

                {/* Description */}
                <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {f.desc}
                </p>

                {/* Divider */}
                <div className="mt-6 h-px w-10 bg-neutral-200 dark:bg-neutral-800" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Features
