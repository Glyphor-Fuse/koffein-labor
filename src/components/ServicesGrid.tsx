import { motion } from "framer-motion";

const services = [
  {
    title: "Structural Engineering",
    desc: "Reinforced computational chassis built for extreme environments.",
    size: "col-span-2 row-span-2",
    img: "///IMG:brutalist concrete architecture detail|square|editorial///"
  },
  {
    title: "Optical Sensors",
    desc: "Hyper-precision vision systems with 0.1ms refresh rates.",
    size: "col-span-2 row-span-1",
    img: "///IMG:camera lens optical array|landscape|minimalist///"
  },
  {
    title: "Neural Mapping",
    desc: "Autonomous navigation protocols via local mesh processing.",
    size: "col-span-1 row-span-1",
    img: "///IMG:server room blue lights|portrait|tech///"
  },
  {
    title: "Cyber-Security",
    desc: "Hardened encryption layers at the hardware level.",
    size: "col-span-1 row-span-1",
    img: "///IMG:steel vault door|square|industrial///"
  }
];

export function ServicesGrid() {
  return (
    <section className="py-32 container mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
          Modular <br /> Capabilities
        </h2>
        <p className="max-w-xs text-xs uppercase tracking-[0.2em] font-bold text-muted-foreground leading-relaxed">
          Our laboratory operates as an asymmetric grid of expertise, breaking traditional manufacturing workflows to deliver raw industrial power.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[800px]">
        {services.map((service, idx) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: idx * 0.1 }}
            viewport={{ once: true }}
            className={`${service.size} relative group overflow-hidden border border-primary/10 bg-white`}
          >
            <div className="absolute inset-0 grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 pointer-events-none opacity-40">
              {service.img}
            </div>
            
            <div className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-background via-transparent to-transparent">
              <span className="text-accent font-mono text-xs mb-2">/ 0{idx + 1}</span>
              <h3 className="text-2xl font-black uppercase tracking-tighter mb-2">{service.title}</h3>
              <p className="text-xs uppercase tracking-wider text-muted-foreground max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {service.desc}
              </p>
            </div>
            
            <div className="absolute top-0 right-0 w-8 h-8 border-r border-t border-accent opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}