import { motion } from "framer-motion";

const stats = [
  { id: "01", label: "Core Modules", value: "14.2k", unit: "PHz" },
  { id: "02", label: "Latent Latency", value: "0.003", unit: "ms" },
  { id: "03", label: "Material Stress", value: "99.9", unit: "%" },
  { id: "04", label: "Energy Flux", value: "2.4", unit: "GW" },
];

export function LabStats() {
  return (
    <section className="bg-primary text-primary-foreground py-20 border-y border-accent/30">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="md:border-r border-primary-foreground/10 last:border-0 md:px-12 flex flex-col gap-2"
            >
              <span className="text-accent text-[10px] font-mono font-bold tracking-widest">[{stat.id}]</span>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl md:text-5xl font-black tabular-nums tracking-tighter">{stat.value}</span>
                <span className="text-xs font-mono uppercase text-primary-foreground/50">{stat.unit}</span>
              </div>
              <span className="uppercase text-[10px] tracking-widest font-bold opacity-60">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}