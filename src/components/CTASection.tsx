import { motion } from "framer-motion";
import { Orb } from "@/components/ui/orb";

export function CTASection() {
  return (
    <section className="py-40 relative bg-primary overflow-hidden">
      <Orb className="top-0 right-0 -translate-y-1/2 translate-x-1/2 opacity-30" />
      
      <div className="max-w-[1440px] mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-7xl md:text-9xl font-black uppercase tracking-tighter mb-12">
            JOIN THE <span className="text-accent italic">LAB</span>
          </h2>
          <p className="text-xl text-muted-foreground uppercase tracking-widest max-w-2xl mx-auto mb-16 font-bold">
            Apply for modular testing or request system documentation for your facility.
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <button className="w-full md:w-auto px-16 py-6 bg-accent text-white font-black uppercase tracking-widest text-lg hover:scale-105 transition-transform">
              Apply Now
            </button>
            <button className="w-full md:w-auto px-16 py-6 border-4 border-white text-white font-black uppercase tracking-widest text-lg hover:bg-white hover:text-black transition-all">
              Documentation
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}