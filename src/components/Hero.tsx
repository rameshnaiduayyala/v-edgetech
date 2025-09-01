import React from 'react'
import { motion } from 'framer-motion'
import Bot from "../assets/ai bot.png"
import Bot2 from "../assets/home1.png"
import bg from "/assets/hero-bg.svg"
import { PlayCircle, ArrowRight } from 'lucide-react'
import { GlowEffect } from '@/motion-primitives/glow-effect'

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden pt-24 md:pt-32">
      <img
        src={bg}
        alt="Background"
        className="absolute left-1/2 top-0 w-[2842px] max-w-none -translate-x-1/2 object-cover"
      />
      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-16 h-full text-neutral-800 dark:text-white">
        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center h-full w-full">
          {/* Badge */}
          <motion.div
            className="flex items-center gap-3 bg-gradient-to-r from-cyan-100 to-blue-100 dark:from-cyan-800/30 dark:to-blue-800/30 px-4 py-2 rounded-full shadow-sm max-w-fit mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <motion.img
              src={Bot}
              alt="AI Bot"
              className="w-8 h-8"
              animate={{ y: [0, -12, 0, -6, 0] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="text-sm font-semibold text-blue-900 dark:text-cyan-300 uppercase tracking-wider">
              AI Powered
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="bg-[radial-gradient(89.47%_51.04%_at_44.27%_50%,_#E2E3E9_0%,_#D4D6DE_52.73%,_#3D3F4C_100%)] 
             bg-clip-text text-transparent 
             font-title font-semibold leading-tight 
             text-3xl sm:text-4xl md:text-6xl pb-3"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Empowering Industry with AI Vision
          </motion.h1>


          {/* Subtext */}
          <motion.p
            className="text-base sm:text-lg md:text-xl text-zinc-700 dark:text-zinc-300 max-w-xl mt-6 leading-relaxed tracking-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Real-time object detection and counting powered by intelligent machine vision.
            Built for high performance, scalability, and real-world deployment.
          </motion.p>


          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <div className="relative flex flex-wrap gap-4 items-center justify-start ">
              <GlowEffect
                colors={['#FF5733', '#33FF57', '#3357FF', '#F1C40F']}
                blur="soft"
                scale={0.9}
              />
              <button className="relative z-10 inline-flex items-center gap-2 rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-50 outline outline-1 outline-[#fff2f21f] hover:outline-white hover:bg-zinc-900 transition duration-300 ">
                Book a Demo
                <PlayCircle className="w-4 h-4" />
              </button>
            </div>
            <div className="relative flex flex-wrap gap-4 items-center justify-start">

              <button className="relative z-10 inline-flex items-center gap-2 rounded-md bg-zinc-950 px-4 py-2 text-sm font-medium text-zinc-50 hover:outline-white hover:bg-zinc-900 transition duration-300">
                Explore Our Services
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="w-full md:w-1/2 flex justify-center items-center relative">
          {/* Image with animated float */}
          <motion.div
            className="relative z-10"
            animate={{ opacity: 1, scale: 1, y: [0, -10, 0, -5, 0] }}
            transition={{
              duration: 2,
              delay: 0.3,
              repeat: Infinity,
              repeatType: 'loop',
              ease: 'easeInOut'
            }}
          >
            <img
              src={Bot2}
              alt="AI Visual"
              className="w-[400px] max-w-full drop-shadow-2xl rounded-xl filter contrast-25 saturate-20"
            />

            {/* Optional glowing mesh overlay */}
            <div className="absolute inset-0 z-[-1] pointer-events-none">
              <div className="w-full h-full animate-pulse bg-[radial-gradient(circle_at_center,_rgba(0,255,255,0.08),_transparent_70%)] rounded-xl" />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}

export default Hero
