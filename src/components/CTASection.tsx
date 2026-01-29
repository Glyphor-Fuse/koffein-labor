import { motion } from 'framer-motion';
import { Orb } from '@/components/ui/orb';

export function CTASection() {
  return (
    <section className="py-48 px-6 lg:px-12 relative overflow-hidden bg-primary text-background">
      <Orb className="-bottom-40 -right-40 opacity-30" color="hsl(var(--accent))" />
      
      <div className="max-w-[1400px] mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter mb-12">
            Join the<br />Collective
          </h2>
          <p className="max-w-2xl mx-auto text-xl mb-16 opacity-70 font-medium uppercase tracking-tight">
            Apply for laboratory access and receive experimental updates from the Berlin studio.
          </p>
          
          <div className="flex flex-col md:flex-row gap-4 justify-center max-w-xl mx-auto">
            <input 
              type="email" 
              placeholder="ENTER_EMAIL_ADDRESS"
              className="bg-transparent border-2 border-background/20 px-8 py-5 text-xl font-bold focus:border-accent outline-none flex-grow"
            />
            <button className="bg-accent text-white px-12 py-5 text-xl font-black uppercase hover:bg-white hover:text-accent transition-all">
              Initiate
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
