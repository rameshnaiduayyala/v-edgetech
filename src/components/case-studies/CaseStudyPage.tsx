import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import logisticsImg from "@/assets/industries/logistics.jpg";
import healthcareImg from "@/assets/industries/healthcare.jpg";
import financeImg from "@/assets/industries/finance.jpg";
import manufacturingImg from "@/assets/industries/manufacturing.jpg";

type CaseStudy = {
  title: string;
  subtitle: string;
  image: string;
  tags: string[];
  overview: string;
  problem: string;
  solution: string;
  useCases: string[];
  results: string[];
  quote: {
    name: string;
    text: string;
  };
};

const industryData: Record<string, CaseStudy> = {
  /* -------------------------------------------------- */
  /* LOGISTICS */
  /* -------------------------------------------------- */
  logistics: {
    title: "Logistics & Supply Chain Optimization",
    subtitle:
      "Route optimization and fleet intelligence for large-scale logistics operations",
    image: logisticsImg,
    tags: ["Optimization", "Cloud Analytics", "Supply Chain"],
    overview:
      "A multinational logistics provider partnered with Gazzee to improve delivery efficiency and fleet utilization across regional distribution networks.",
    problem:
      "Legacy planning tools and static routing models limited the company’s ability to respond to traffic variability, demand spikes, and operational disruptions.",
    solution:
      "Gazzee deployed a cloud-native optimization platform combining real-time telemetry, traffic-aware routing, and predictive demand modeling.",
    useCases: [
      "Dynamic route optimization",
      "Traffic-aware ETA prediction",
      "Fleet utilization analytics",
    ],
    results: [
      "18% reduction in average delivery time",
      "11% improvement in fleet utilization",
      "15% decrease in fuel consumption",
    ],
    quote: {
      name: "VP, Supply Chain Operations",
      text:
        "The platform gave us measurable improvements in efficiency without disrupting existing workflows. The results were visible within the first quarter.",
    },
  },

  /* -------------------------------------------------- */
  /* HEALTHCARE */
  /* -------------------------------------------------- */
  healthcare: {
    title: "Healthcare & Life Sciences Analytics",
    subtitle:
      "AI-assisted imaging analysis and operational intelligence for healthcare systems",
    image: healthcareImg,
    tags: ["Medical Imaging", "AI Analytics", "Healthcare"],
    overview:
      "A regional healthcare network adopted Gazzee’s AI analytics platform to enhance imaging workflows and improve operational visibility across facilities.",
    problem:
      "Manual review processes and fragmented data systems led to delays in diagnostics and limited insight into imaging utilization and patient throughput.",
    solution:
      "Gazzee implemented an AI-assisted imaging analysis pipeline integrated with clinical systems, enabling faster reviews and centralized operational insights.",
    useCases: [
      "AI-assisted medical imaging analysis",
      "Operational throughput analytics",
      "Clinical workflow optimization",
    ],
    results: [
      "22% reduction in imaging review turnaround time",
      "17% increase in imaging department throughput",
      "Improved consistency in diagnostic workflows",
    ],
    quote: {
      name: "Director of Clinical Informatics",
      text:
        "The solution improved efficiency while fitting seamlessly into our clinical workflows. Adoption across teams was smooth and well received.",
    },
  },

  /* -------------------------------------------------- */
  /* FINANCE */
  /* -------------------------------------------------- */
  finance: {
    title: "Financial Services Risk & Intelligence",
    subtitle:
      "Risk modeling and fraud detection for modern financial platforms",
    image: financeImg,
    tags: ["Risk & Compliance", "Data Platforms", "Security"],
    overview:
      "A mid-sized financial services firm partnered with Gazzee to strengthen fraud detection and gain deeper visibility into transaction risk patterns.",
    problem:
      "Rule-based detection systems generated high false-positive rates and lacked adaptability to evolving fraud techniques.",
    solution:
      "Gazzee introduced a data-driven risk modeling platform using behavioral analytics and adaptive anomaly detection.",
    useCases: [
      "Transaction risk scoring",
      "Fraud detection and alerting",
      "Customer behavior analytics",
    ],
    results: [
      "28% reduction in false-positive alerts",
      "19% improvement in fraud detection accuracy",
      "Faster investigation and response times",
    ],
    quote: {
      name: "Head of Risk Analytics",
      text:
        "We were able to improve detection accuracy while reducing operational overhead. The system adapts well to changing risk patterns.",
    },
  },

  /* -------------------------------------------------- */
  /* MANUFACTURING */
  /* -------------------------------------------------- */
  manufacturing: {
    title: "Manufacturing & Industrial Intelligence",
    subtitle:
      "Predictive maintenance and quality analytics for industrial operations",
    image: manufacturingImg,
    tags: ["Industrial AI", "Automation", "Manufacturing"],
    overview:
      "A global manufacturing company worked with Gazzee to modernize quality inspection and equipment monitoring across production lines.",
    problem:
      "Reactive maintenance practices and manual quality checks resulted in unplanned downtime and inconsistent product quality.",
    solution:
      "Gazzee deployed an AI-driven monitoring and inspection platform combining sensor data, visual inspection, and predictive analytics.",
    useCases: [
      "Predictive maintenance analytics",
      "Automated quality inspection",
      "Production performance monitoring",
    ],
    results: [
      "16% reduction in unplanned downtime",
      "14% improvement in defect detection rates",
      "Higher consistency in production quality",
    ],
    quote: {
      name: "Director of Manufacturing Systems",
      text:
        "The platform helped us move from reactive to proactive operations. The improvements were incremental but meaningful at scale.",
    },
  },
};

const CaseStudyPage = () => {
  const { slug } = useParams();
  const data = industryData[slug || ""];

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-slate-400">
        Case study not found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-zinc-950 text-white">
      {/* HERO */}
      <div className="relative h-[60vh] w-full overflow-hidden">
        <img
          src={data.image}
          alt={data.title}
          className="absolute inset-0 h-full w-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />

        <div className="relative z-10 max-w-5xl mx-auto h-full flex flex-col justify-end px-6 pb-16">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="text-4xl md:text-5xl font-semibold tracking-tight"
          >
            {data.title}
          </motion.h1>

          <p className="mt-4 text-lg md:text-xl text-slate-300 max-w-2xl">
            {data.subtitle}
          </p>

          {/* Metadata */}
          <div className="mt-6 flex gap-6 text-sm text-slate-300">
            {data.tags.map((tag, i) => (
              <span key={i} className="border-l border-slate-500 pl-4">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* CONTENT */}
      <div className="max-w-5xl mx-auto px-6 py-24 space-y-24">
        {/* Overview */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold tracking-tight mb-4">
            Overview
          </h2>
          <p className="text-slate-400 leading-relaxed max-w-3xl">
            {data.overview}
          </p>
        </motion.section>

        {/* Problem / Solution */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 gap-16"
        >
          <div>
            <h3 className="text-lg font-semibold mb-3">Problem</h3>
            <p className="text-slate-400 leading-relaxed">
              {data.problem}
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Solution</h3>
            <p className="text-slate-400 leading-relaxed">
              {data.solution}
            </p>
          </div>
        </motion.section>

        {/* Use Cases */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-4">Key Applications</h3>
          <ul className="space-y-2 text-slate-400 list-disc pl-5 max-w-3xl">
            {data.useCases.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.section>

        {/* Results */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-lg font-semibold mb-10">
            Results & Impact
          </h3>

          <div className="border-t border-slate-800 pt-12 grid sm:grid-cols-3 gap-12">
            {data.results.map((result, i) => {
              const [value, ...label] = result.split(" ");
              return (
                <div key={i}>
                  <p className="text-4xl font-semibold">{value}</p>
                  <p className="mt-2 text-sm text-slate-400">
                    {label.join(" ")}
                  </p>
                </div>
              );
            })}
          </div>
        </motion.section>

        {/* Quote */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-l-4 border-sky-500 pl-6 max-w-3xl"
        >
          <blockquote className="text-lg text-slate-200 leading-relaxed">
            “{data.quote.text}”
          </blockquote>
          <p className="mt-4 text-sm text-slate-400">
            — {data.quote.name}
          </p>
        </motion.section>

        {/* CTA */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h4 className="text-2xl font-semibold mb-6">
            Ready to modernize your operations?
          </h4>

          <Button className="px-6 py-3 bg-sky-500 hover:bg-sky-400 text-white">
            Contact Sales
          </Button>
        </motion.section>
      </div>
    </section>
  );
};

export default CaseStudyPage;
