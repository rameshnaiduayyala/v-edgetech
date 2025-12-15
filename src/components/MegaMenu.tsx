// MegaMenu.tsx
import React from 'react'
import { Cpu, Brain, Bot, Cloud } from 'lucide-react'
import { motion } from 'framer-motion'

const MegaMenu: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12 }}
      transition={{ duration: 0.2 }}
      className="
        absolute right-0 top-full mt-4
        w-[520px] max-w-[95vw]
        grid grid-cols-2 gap-8
        bg-white dark:bg-zinc-950
        border border-neutral-200 dark:border-neutral-800
        rounded-xl
        p-6
        shadow-lg
        z-50
      "
    >
      {/* Capabilities */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
          Capabilities
        </h4>
        <ul className="space-y-4 text-sm">
          <li className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition cursor-pointer">
            <Cpu size={16} className="text-cyan-600" />
            Real-time detection
          </li>
          <li className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition cursor-pointer">
            <Brain size={16} className="text-cyan-600" />
            Smart analytics
          </li>
          <li className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition cursor-pointer">
            <Bot size={16} className="text-cyan-600" />
            AI model tuning
          </li>
        </ul>
      </div>

      {/* Platforms */}
      <div>
        <h4 className="text-xs font-semibold uppercase tracking-widest text-neutral-500 mb-4">
          Platforms
        </h4>
        <ul className="space-y-4 text-sm">
          <li className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition cursor-pointer">
            <Cloud size={16} className="text-cyan-600" />
            Edge devices
          </li>
          <li className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition cursor-pointer">
            <Cpu size={16} className="text-cyan-600" />
            Cloud inference
          </li>
          <li className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300 hover:text-neutral-900 dark:hover:text-white transition cursor-pointer">
            <Brain size={16} className="text-cyan-600" />
            Retail & smart city
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default MegaMenu
