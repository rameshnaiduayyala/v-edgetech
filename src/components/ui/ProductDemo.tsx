import React from 'react'

const ProductDemo: React.FC = () => {
  return (
    <section id="demo" className="py-24 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Watch Our AI in Action</h2>
        <p className="text-white/70 max-w-2xl mx-auto">
          See how our object detection and counting system works in real-time across multiple environments.
        </p>
      </div>

      <div className="relative rounded-2xl overflow-hidden shadow-lg border border-white/10">
        <video
          className="w-full h-auto rounded-2xl"
          controls
          poster="/demo-poster.jpg"
        >
          <source src="/demo.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}

export default ProductDemo
