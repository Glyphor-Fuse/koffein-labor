import { motion } from 'framer-motion';

const experiments = [
  {
    id: "EXP-01",
    title: "Structural Rigidity",
    desc: "Analysis of load-bearing concrete forms under high-stress conditions.",
    image: "///IMG:brutalist concrete architecture close up|square|editorial///"
  },
  {
    id: "EXP-02",
    title: "Chromatic Utility",
    desc: "Testing high-visibility safety orange against charcoal industrial foundations.",
    image: "///IMG:industrial safety gear minimal|square|editorial///"
  },
  {
    id: "EXP-03",
    title: "Kinetic Geometry",
    desc: "The interaction of shadow and light on rotating mechanical apertures.",
    image: "///IMG:metal mechanical parts gear geometry|square|editorial///"
  }
];

export function LaboratorySection() {
  return (
    <section className="py-24 bg-secondary/30 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-12 border-b border-border pb-12 mb-24">
          <div className="col-span-12 lg:col-span-4">
            <h2 className="text-5xl font-black uppercase tracking-tighter">The Laboratory</h2>
          </div>
          <div className="col-span-12 lg:col-span-8 pt-6 lg:pt-0">
            <p className="text-xl text-muted-foreground uppercase font-medium max-w-2xl">
              Our process is systematic, rigorous, and unapologetically industrial. We dissect form to find function in its rawest state.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-border">
          {experiments.map((exp, idx) => (
            <motion.div
              key={exp.id}
              whileHover={{ backgroundColor: "hsl(var(--background))" }}
              className={`p-12 border-border ${idx !== 2 ? 'lg:border-r' : ''} border-b lg:border-b-0 group transition-colors`}
            >
              <p className="text-accent font-black mb-12 tracking-widest">{exp.id}</p>
              <div className="mb-12 aspect-square bg-muted/20 relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                {exp.image}
              </div>
              <h3 className="text-3xl font-black uppercase mb-4 tracking-tighter">{exp.title}</h3>
              <p className="text-muted-foreground uppercase text-sm leading-relaxed">{exp.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
