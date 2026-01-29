import { motion } from 'framer-motion';

const features = [
  {
    id: "01",
    title: "Structural Rigidity",
    desc: "Mathematical grid systems that never break. Precision is not an option; it is the foundation of every pixel we deploy.",
  },
  {
    id: "02",
    title: "Industrial Logic",
    desc: "Inspired by the factories of Berlin-Moabit. Raw materials, exposed functionality, and unapologetic efficiency.",
  },
  {
    id: "03",
    title: "Kinetic Labor",
    desc: "Motion that feels heavy, intentional, and mechanical. Every transition is a calculated gear shift in the machine.",
  },
  {
    id: "04",
    title: "Typographic Power",
    desc: "Oversized headers that defy container constraints. Text is architecture. Information is the infrastructure.",
  }
];

export function FeaturesSection() {
  return (
    <section className="bg-primary text-background py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-none">
            The<br />System
          </h2>
          <div className="max-w-md">
            <p className="text-secondary/60 uppercase font-bold text-sm tracking-widest leading-loose">
              Our principles are immutable. We do not design for the eye; we design for the operation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t-2 border-secondary/20">
          {features.map((f, i) => (
            <motion.div 
              key={f.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`p-12 border-secondary/20 group hover:bg-accent transition-colors duration-500 ${
                i % 2 === 0 ? 'md:border-r-2' : ''
              } ${
                i < 2 ? 'border-b-2' : ''
              }`}
            >
              <span className="block text-accent group-hover:text-primary font-black text-2xl mb-8">{f.id}</span>
              <h3 className="text-3xl font-black uppercase mb-4 tracking-tight group-hover:text-primary">{f.title}</h3>
              <p className="text-secondary/70 group-hover:text-primary/80 font-medium leading-relaxed">
                {f.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
