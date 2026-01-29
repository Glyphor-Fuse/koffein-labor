import { motion } from "framer-motion";

const modules = [
  { id: "01", title: "Structural Rigidity", desc: "Reinforced modular frames for high-load environments." },
  { id: "02", title: "Thermal Control", desc: "Advanced liquid-cooled panels with integrated heat sinks." },
  { id: "03", title: "Kinetic Response", desc: "Adaptive joints that react to environmental shifts." },
];

export function GridSystem() {
  return (
    <section id="modules" className="py-32 border-t border-border bg-primary/20">
      <div className="max-w-[1440px] mx-auto px-6">
        <div className="mb-20">
          <span className="text-accent font-mono text-sm tracking-widest font-bold">SECTION 02 // MODULES</span>
          <h2 className="text-6xl font-black uppercase tracking-tighter mt-4">Modular Hardware</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-0 border border-border">
          {modules.map((module, idx) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="p-12 border-border group hover:bg-accent transition-colors duration-500 relative overflow-hidden"
              style={{ borderRight: idx < 2 ? '1px solid hsl(var(--border))' : 'none' }}
            >
              <div className="text-[120px] font-black absolute -top-10 -right-5 opacity-5 group-hover:opacity-20 transition-opacity">
                {module.id}
              </div>
              <div className="relative z-10">
                <span className="font-mono text-accent group-hover:text-white mb-4 block">{module.id}</span>
                <h3 className="text-3xl font-black uppercase mb-6 group-hover:text-white">{module.title}</h3>
                <p className="text-muted-foreground group-hover:text-white/80 leading-relaxed">
                  {module.desc}
                </p>
                <div className="mt-8 w-12 h-1 bg-accent group-hover:bg-white transition-colors" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}