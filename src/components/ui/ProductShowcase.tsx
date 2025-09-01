import { useState } from "react";
import {
  Tabs,
  TabsList,
  TabsTrigger,
  TabsContent,
} from "@/components/ui/tabs";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion, AnimatePresence } from "framer-motion";

const ProductShowcase: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Vision");
  const [modalData, setModalData] = useState<any>(null);

  const productData = {
    Vision: [
      {
        name: "People Detection",
        desc: "Detect and count people in real-time from video feeds.",
        preview: "/src/assets/ai bot.png",
        type: "image",
        video: "/src/assets/video1.mp4",
      },
      {
        name: "Vehicle Detection",
        desc: "Identify and track vehicles in traffic videos.",
        preview: "/src/assets/bg2.png",
        type: "image",
        video: "/demos/vehicle-detection-demo.mp4",
      },
    ],
    Analytics: [
      {
        name: "Heatmap Generator",
        desc: "Visualize footfall or attention areas in retail spaces.",
        preview: "/demos/heatmap.jpg",
        type: "image",
        video: "/demos/heatmap-demo.mp4",
      },
      {
        name: "Zone Alert System",
        desc: "AI-based alerts when someone enters restricted zones.",
        preview: "/demos/zone-alert.jpg",
        type: "image",
        video: "/demos/zone-alert-demo.mp4",
      },
    ],
  };

  return (
    <section
      id="usecases"
      className="bg-white/70 dark:bg-zinc-950/70 py-28 px-4 md:px-12 xl:px-0"
    >
      <div className="max-w-7xl mx-auto text-center mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500"
        >
          AI Use Cases
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
          className="mt-6 text-lg text-zinc-700 dark:text-zinc-300 max-w-2xl mx-auto leading-relaxed"
        >
          Explore real-world applications of our AI-driven video analytics
          platform.
        </motion.p>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="flex justify-center gap-4 mb-14 bg-white/10 dark:bg-zinc-800/60 px-6 py-4 rounded-full border border-white/10 shadow-inner backdrop-blur-md">
          {Object.keys(productData).map((cat) => (
            <TabsTrigger
              key={cat}
              value={cat}
              className="px-6 py-2 text-sm font-medium rounded-full transition-all hover:text-cyan-400 dark:hover:text-cyan-300 hover:bg-cyan-100/10 dark:hover:bg-cyan-900/30"
            >
              {cat}
            </TabsTrigger>
          ))}
        </TabsList>

        {Object.entries(productData).map(([category, products]) => (
          <TabsContent key={category} value={category}>
            <Swiper
              spaceBetween={32}
              slidesPerView={1.1}
              breakpoints={{
                768: { slidesPerView: 2.2 },
                1024: { slidesPerView: 3 },
              }}
              className="p-6"
            >
              {products.map((p, idx) => (
                <SwiperSlide key={idx} className="flex justify-center">
                  <motion.div
                    onClick={() => setModalData(p)}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    whileHover={{
                      scale: 1.03,
                      y: -6,
                      boxShadow: "0 15px 30px rgba(0, 255, 255, 0.15)",
                    }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="group bg-white/60 dark:bg-zinc-900/40 border border-white/10 rounded-3xl overflow-hidden shadow-md backdrop-blur-md cursor-pointer hover:border-cyan-400"
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={p.preview}
                        alt={p.name}
                        className="w-full h-full object-fill transition-transform"
                      />
                    </div>
                    <div className="p-5 text-left">
                      <h3 className="text-xl font-semibold text-blue-900 dark:text-amber-400">
                        {p.name}
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 mt-2 leading-snug">
                        {p.desc}
                      </p>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </TabsContent>
        ))}
      </Tabs>

      {/* Modal */}
      <Dialog open={!!modalData} onOpenChange={() => setModalData(null)}>
        <DialogContent className="bg-black/90 dark:bg-zinc-900 backdrop-blur-lg border border-white/10 max-w-3xl w-full rounded-2xl p-0 overflow-hidden">
          <AnimatePresence>
            {modalData && (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 40 }}
              >
                <video
                  src={modalData.video}
                  autoPlay
                  loop
                  muted
                  controls
                  className="w-full h-[400px] object-contain bg-black"
                />
                <div className="p-6 space-y-2">
                  <h3 className="text-2xl font-bold text-white">
                    {modalData.name}
                  </h3>
                  <p className="text-sm text-white/70">{modalData.desc}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default ProductShowcase;
