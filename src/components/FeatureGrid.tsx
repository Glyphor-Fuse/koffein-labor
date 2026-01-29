import { motion } from "framer-motion";
import { Zap, Shield, Maximize, Cpu } from "lucide-react";

const features = [
  { icon: <Zap />, title: "High Output", text: "Optimized for maximum industrial throughput." },
  { icon: <Shield />, title: "Safety Protocol", text: "Multi-layered encryption for physical assets." },
  { icon: <Maximize />, title: "Scalability", text: "Vertical expansion without footprint increase." },
  { icon: <Cpu />, title: "Core Sync", text: "Real-time synchronization across all lab units." },
];

export function FeatureGrid() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-4 mb-12 lg:mb-0">
            <h2 className="text-4xl font-black uppercase leading-none tracking-tighter mb-8">
              ENGINEERED <br />FOR <span className="text-accent underline decoration-8 underline-offset-8">PERFORMANCE</span>
            </h2>
            <p className="text-muted-foreground uppercase text-sm tracking-widest font-bold">
              All systems verified for Berlin Industrial Standards. 
            </p>
          </div>

          <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-12">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-6 items-start"
              >
                <div className="p-4 bg-primary border border-border text-accent">
                  {f.icon}
                </div>
                <div>
                  <h4 className="text-xl font-black uppercase mb-2">{f.title}</h4>
                  <p className="text-muted-foreground leading-snug">{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="mt-32 border-t-8 border-primary pt-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-2xl font-bold italic text-secondary">
                "The most efficient system is one where every element serves a primary structural purpose."
              </p>
              <div className="font-mono text-sm tracking-widest text-accent">— CHIEF ARCHITECT, LAB-04</div>
            </div>
            <div className="h-48 bg-primary relative overflow-hidden border border-border">
              ///IMG:industrial schematic blueprint|landscape|minimalist///
              <div className="absolute inset-0 bg-accent/10 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}