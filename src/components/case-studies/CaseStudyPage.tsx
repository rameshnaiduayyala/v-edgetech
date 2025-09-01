import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logisticsImg from '@/assets/industries/logistics.jpg';
import { Badge } from "../ui/badge";


const industryData: Record<string, any> = {
  logistics: {
    title: "Logistics AI Optimization",
    subtitle: "Real-time route prediction & fleet analytics",
    image: logisticsImg,
    tags: ["AI", "Cloud", "Fleet"],
    overview: `A leading logistics company used Gazzee's platform to reduce delivery costs and improve vehicle utilization by 23%.`,
    problem: `Manual route planning, unexpected delays, and poor demand prediction caused frequent inefficiencies.`,
    solution: `We deployed a real-time route optimizer using predictive modeling, edge tracking, and demand clustering.`,
    useCases: [
      "Dynamic Route Optimization",
      "Traffic & Weather-Aware ETAs",
      "Fleet Heatmap Visualization",
    ],
    results: [
      "23% Reduction in delivery times",
      "12% Lower fuel usage",
      "98% Route prediction accuracy",
    ],
    quote: {
      name: "VP of Logistics Innovation",
      text: `"Gazzee's AI solution completely changed our logistics intelligence. It’s like having a control tower in your pocket."`,
    },
  },
  // Add healthcare, finance, manufacturing...
};

const CaseStudyPage = () => {
  const { slug } = useParams();
  const data = industryData[slug || ""];

  if (!data) return <div className="p-10 text-center">Case study not found.</div>;

  return (
    <section className="min-h-screen dark:bg-zinc-950 bg-white text-neutral-900 dark:text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={`${data.image}?auto=format&fit=crop&w=1600`}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-10 flex flex-col items-center justify-end h-full text-center px-6 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            {data.title}
          </motion.h1>
          <p className="text-xl text-neutral-300 mt-2">{data.subtitle}</p>
          <div className="mt-4 flex gap-2 flex-wrap justify-center">
            {data.tags.map((tag: string, i: number) => (
              <Badge key={i} className="bg-violet-800/60 text-white backdrop-blur-sm">
                {tag}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-5xl mx-auto px-6 py-20 space-y-20">
        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-semibold mb-4">Overview</h2>
          <p className="text-neutral-600 dark:text-neutral-300">{data.overview}</p>
        </motion.div>

        {/* Problem & Solution */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          <div>
            <h3 className="text-2xl font-semibold mb-2">Problem</h3>
            <p className="text-neutral-600 dark:text-neutral-300">{data.problem}</p>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">Solution</h3>
            <p className="text-neutral-600 dark:text-neutral-300">{data.solution}</p>
          </div>
        </motion.div>

        {/* Use Cases */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Key Applications</h3>
          <ul className="space-y-2 list-disc pl-6 text-neutral-600 dark:text-neutral-300">
            {data.useCases.map((item: string, i: number) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Results */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Results & Metrics</h3>
          <ul className="grid sm:grid-cols-2 gap-4 text-neutral-600 dark:text-neutral-300">
            {data.results.map((result: string, i: number) => (
              <li key={i} className="bg-white/5 rounded-lg px-4 py-3 border border-white/10">
                ✅ {result}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Quote */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-gradient-to-br from-zinc-800 to-black rounded-xl p-6 text-white shadow-xl"
        >
          <blockquote className="text-lg italic">“{data.quote.text}”</blockquote>
          <p className="mt-4 text-right font-medium">— {data.quote.name}</p>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <h4 className="text-2xl font-semibold mb-4">Want to transform your industry?</h4>
          <Button className="text-white bg-gradient-to-r from-cyan-500 to-blue-600">
            Contact Us →
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CaseStudyPage;
