import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="max-w-[1440px] mx-auto px-6 h-20 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter uppercase"
        >
          Kraft<span className="text-accent">werk</span>
        </motion.div>

        <nav className="hidden md:flex gap-12 text-sm font-bold uppercase tracking-widest">
          {["System", "Modules", "Laboratory", "Archive"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              whileHover={{ color: "hsl(var(--accent))" }}
              className="transition-colors"
            >
              {item}
            </motion.a>
          ))}
        </nav>

        <div className="flex items-center gap-6">
          <button className="hidden md:block px-6 py-2 bg-primary border border-border text-xs font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all">
            Enter Lab
          </button>
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-background border-b border-border p-6 md:hidden flex flex-col gap-6"
        >
          {["System", "Modules", "Laboratory", "Archive"].map((item) => (
            <a key={item} href="#" className="text-xl font-black uppercase tracking-tighter">{item}</a>
          ))}
        </motion.div>
      )}
    </header>
  );
}