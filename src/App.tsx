import React from 'react'

import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Industries from './components/Industries'
import HowItWorks from './components/ui/HowItWorks'
import FeatureSection from './components/FeatureCard'
import Features from './components/Features'
import Footer from './components/ui/Footer'

const App: React.FC = () => {
  return (
    <div className="relative font-sans text-neutral-900 dark:text-white overflow-x-hidden">
      <Navbar />

      <main>
        {/* Hero */}
        <Hero />

        {/* Core sections */}
        <Services />
        <Industries />
        <HowItWorks />
        <FeatureSection />
        <Features />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  )
}

export default App
