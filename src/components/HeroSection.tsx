import { motion } from "framer-motion";
import { LiquidEther } from "@/components/ui/LiquidEther";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <LiquidEther />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 w-full relative z-10">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-12 lg:col-span-8 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="text-[12vw] leading-[0.9] font-black uppercase tracking-tighter mb-8">
                FORM <br />
                <span className="text-accent">FOLLOWS</span> <br />
                FUNCTION.
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="flex items-start gap-8"
            >
              <div className="w-1 bg-accent h-24 mt-2" />
              <p className="text-xl max-w-md font-medium text-muted-foreground uppercase leading-tight tracking-tight">
                Industrial design meets brutalist modularity. A laboratory for the next generation of structural aesthetics.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="mt-12 flex flex-wrap gap-4"
            >
              <button className="px-10 py-5 bg-accent text-white font-black uppercase tracking-[0.2em] flex items-center gap-4 hover:bg-white hover:text-black transition-all">
                Start Prototype <ArrowRight size={20} />
              </button>
              <button className="px-10 py-5 border-2 border-primary bg-primary/10 font-black uppercase tracking-[0.2em] backdrop-blur-sm">
                View Specs
              </button>
            </motion.div>
          </div>
          
          <div className="hidden lg:block lg:col-span-4 self-end pb-20">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="aspect-square bg-primary border-4 border-accent relative group"
            >
              ///IMG:industrial concrete building detail|square|brutalist///
              <div className="absolute inset-0 bg-accent/20 mix-blend-multiply transition-opacity group-hover:opacity-0" />
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <div className="text-[10px] font-bold uppercase tracking-[0.3em]">Scroll Down</div>
        <div className="w-[1px] h-12 bg-accent/50" />
      </motion.div>
    </section>
  );
}