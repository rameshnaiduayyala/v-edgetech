import React from 'react'

import { motion } from 'framer-motion'
import Hero from './components/Hero'
import Services from './components/Services'
import Features from './components/Features'
import Footer from './components/ui/Footer'
import Design from './components/Design'
import FeatureSection from './components/FeatureCard'
import Industries from './components/Industries'
import HowItWorks from './components/ui/HowItWorks'
import Navbar from './components/Navbar'

const App: React.FC = () => {
  return (
    <div className="relative text-white font-sans overflow-x-hidden">
      <main className="min-h-screen">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Navbar />
          <Design />
          <Hero />
        </motion.div>

        <Services />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {/* <ProductDemo /> */}
          <Industries />
          {/* <ProductShowcase /> */}

          <HowItWorks />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <FeatureSection />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Features />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Footer />
        </motion.div>


      </main>

    </div>
  )
}

export default App