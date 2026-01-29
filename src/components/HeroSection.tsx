import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Orb } from "@/components/ui/orb";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-3 py-1 bg-accent text-white text-[10px] font-bold tracking-[0.3em] uppercase mb-6">
              Establishment 2024 / Berlin DE
            </span>
            <h1 className="text-6xl md:text-[120px] font-black leading-[0.85] tracking-tighter uppercase mb-12">
              Industrial <br />
              <span className="text-accent">Brutalism</span> <br />
              Hardware
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end gap-12"
          >
            <p className="max-w-md text-muted-foreground uppercase text-sm leading-relaxed tracking-wider">
              A dedicated research facility focused on the intersection of raw materiality and high-performance computation. We build tools for the next era of industrial autonomy.
            </p>
            
            <button className="group flex items-center gap-4 bg-primary text-primary-foreground p-8 md:p-12 hover:bg-accent transition-colors">
              <span className="font-bold uppercase tracking-widest text-lg">Initialize Protocol</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>
      </div>

      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-1/3 h-2/3 opacity-20 pointer-events-none grayscale">
        ///IMG:industrial circuit board macro|portrait|minimalist///
      </div>
      
      <div className="absolute top-[20%] right-[10%] opacity-40">
        <Orb size={300} color="hsl(var(--secondary))" />
      </div>
    </section>
  );
}