import React from 'react';
import { Camera, Eye, Activity, LayoutGrid, BarChart, Cpu } from 'lucide-react';

const features = [
  {
    icon: <Eye size={28} className="text-cyan-400" />,
    title: 'Real-Time Object Detection',
    desc: 'Instantly recognize and track objects using high-performance AI models.'
  },
  {
    icon: <Camera size={28} className="text-cyan-400" />,
    title: 'Multi-Camera Integration',
    desc: 'Seamlessly integrate feeds from multiple IP or edge cameras in one dashboard.'
  },
  {
    icon: <Activity size={28} className="text-cyan-400" />,
    title: 'Edge AI Inference',
    desc: 'Deploy AI models on edge devices for real-time decision-making at the source.'
  },
  {
    icon: <BarChart size={28} className="text-cyan-400" />,
    title: 'Live Analytics Dashboard',
    desc: 'Monitor performance metrics, heatmaps, and activity timelines in real time.'
  },
  {
    icon: <LayoutGrid size={28} className="text-cyan-400" />,
    title: 'Modular Architecture',
    desc: 'Flexible plug-and-play system components for custom industrial needs.'
  },
  {
    icon: <Cpu size={28} className="text-cyan-400" />,
    title: 'Cloud Sync & Control',
    desc: 'Remotely manage, update, and sync devices through a secure cloud portal.'
  },
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 px-6 mx-auto bg-white/70 dark:bg-zinc-950/70 transition-colors duration-500">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 dark:text-white">
          Platform Capabilities
        </h2>
        <p className="text-blue-900 dark:text-neutral-400 max-w-2xl mx-auto">
          Powerful AI features designed to elevate your industrial automation, surveillance, and insights.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {features.map((f, i) => (
          <div
            key={i}
            className="p-6 bg-teal-900/90 dark:bg-slate-800/60 border border-white/10 
                       rounded-2xl backdrop-blur-xl hover:shadow-xl transition duration-300"
          >
            <div className="mb-3">{f.icon}</div>
            <h3 className="text-lg font-semibold text-white dark:text-white mb-2">{f.title}</h3>
            <p className="text-sm text-white/80 dark:text-neutral-300 leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
