// MegaMenu.tsx
import React from 'react'
import { Cpu, Brain, Bot, Cloud } from 'lucide-react'
import { motion } from 'framer-motion'

const MegaMenu: React.FC = () => {
  return (
   <motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 20 }}
  transition={{ duration: 0.2 }}
  className="absolute right-0 top-full mt-4 w-[520px] max-w-[95vw] grid grid-cols-2 gap-6 p-4 bg-black/50 border border-white/10 rounded-2xl shadow-2xl backdrop-blur-md z-50"
>
      <div>
        <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Capabilities</h4>
        <ul className="space-y-3 text-white/80 text-sm">
          <li className="flex items-center gap-3 hover:text-cyan-400 transition">
            <Cpu size={18} href='#solutions'/> Real-Time Detection
          </li>
          <li className="flex items-center gap-3 hover:text-cyan-400 transition">
            <Brain size={18} /> Smart Analytics
          </li>
          <li className="flex items-center gap-3 hover:text-cyan-400 transition">
            <Bot size={18} /> AI Model Tuning
          </li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold text-sm mb-3 uppercase tracking-wide">Platforms</h4>
        <ul className="space-y-3 text-white/80 text-sm">
          <li className="flex items-center gap-3 hover:text-cyan-400 transition">
            <Cloud size={18} /> Edge Devices
          </li>
          <li className="flex items-center gap-3 hover:text-cyan-400 transition">
            <Cpu size={18} /> Cloud Inference
          </li>
          <li className="flex items-center gap-3 hover:text-cyan-400 transition">
            <Brain size={18} /> Retail & Smart City
          </li>
        </ul>
      </div>
    </motion.div>
  )
}

export default MegaMenu
