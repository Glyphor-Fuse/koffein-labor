import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { LiquidEther } from '@/components/ui/LiquidEther';
import { Orb } from '@/components/ui/orb';

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end pt-32 pb-16 px-6 lg:px-12 overflow-hidden">
      <LiquidEther />
      <Orb className="top-1/4 -right-20 opacity-40" />
      <Orb className="bottom-1/4 -left-20 opacity-20" color="hsl(var(--primary))" />

      <div className="max-w-[1400px] mx-auto w-full grid grid-cols-12 gap-0 relative z-10">
        <div className="col-span-12 lg:col-span-8 border-l border-border pl-8 py-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-accent font-bold tracking-widest text-sm mb-4">BERLIN // DEUTSCHLAND</h2>
            <h1 className="text-6xl md:text-8xl lg:text-[120px] font-black leading-[0.9] tracking-tighter uppercase mb-8">
              Industrial<br />Bauhaus<br />Precision
            </h1>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="flex flex-col md:flex-row gap-8 items-start md:items-center"
          >
            <p className="max-w-md text-muted-foreground text-lg leading-tight uppercase font-medium">
              A raw collision of concrete textures and geometric precision. High-contrast utility accents for the modern age.
            </p>
            <button className="group flex items-center gap-4 bg-primary text-background px-10 py-5 font-black text-xl hover:bg-accent transition-colors">
              ENTER LAB <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>
          </motion.div>
        </div>

        <div className="hidden lg:flex col-span-4 border-l border-border flex-col justify-between p-8">
          <div className="text-right space-y-2">
            <p className="text-xs font-bold opacity-50">STATION_ID: 808-KW</p>
            <p className="text-xs font-bold opacity-50">TEMP: 22°C // HUMID: 45%</p>
          </div>
          
          <div className="relative h-64 border border-border bg-muted/20 group overflow-hidden">
            ///IMG:industrial architectural detail concrete steel|portrait|editorial///
            <div className="absolute inset-0 bg-accent/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 border-t border-border flex items-center px-12 overflow-hidden">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="whitespace-nowrap flex gap-12 text-sm font-bold opacity-30 tracking-[0.3em]"
        >
          {Array(10).fill("KRAFTWERK // INDUSTRIAL UTILITY // BAUHAUS GEOMETRY // CONCRETE AESTHETICS // ").join("")}
        </motion.div>
      </div>
    </section>
  );
}
