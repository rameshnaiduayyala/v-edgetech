import React from 'react';
import { motion } from 'framer-motion';
import { UploadCloud, Activity, Zap } from 'lucide-react';

const steps = [
  {
    icon: <UploadCloud size={36} className="text-cyan-400" />,
    title: '1. Upload',
    desc: 'Stream or upload visual data from edge devices, cameras, or cloud storage sources.',
  },
  {
    icon: <Activity size={36} className="text-purple-400" />,
    title: '2. Analyze',
    desc: 'Process the data using powerful AI models for detection, classification, and insights.',
  },
  {
    icon: <Zap size={36} className="text-green-400" />,
    title: '3. Act',
    desc: 'Trigger alerts, control systems, or visualize dashboards in real-time.',
  },
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-24 px-6 bg-white/70 dark:bg-zinc-950/70 text-neutral-800 dark:text-white transition-colors duration-300 overflow-hidden">
      {/* Heading */}
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400">How It Works</h2>
        <p className="max-w-2xl mx-auto mt-4 text-lg text-neutral-600 dark:text-neutral-300">
          A seamless 3-step pipeline to empower your systems with real-time AI vision.
        </p>
      </div>

      {/* Timeline */}
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 relative">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
              viewport={{ once: true }}
              className="relative bg-white/70 dark:bg-white/5 border border-white/10 backdrop-blur-md p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
            >
              <div className="mb-4">{step.icon}</div>
              <h3 className="text-xl font-semibold text-blue-900 dark:text-white mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-neutral-700 dark:text-neutral-400 leading-relaxed">
                {step.desc}
              </p>

              {/* Line Connector */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 right-[-35px] w-[70px] h-[2px] bg-gradient-to-r from-cyan-400 to-green-400"></div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Glowing background */}
      <motion.div
        className="absolute top-0 left-1/2 w-[500px] h-[500px] bg-cyan-300/20 blur-3xl rounded-full -z-10 transform -translate-x-1/2"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
};

export default HowItWorks;
