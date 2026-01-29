import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <nav className="max-w-[1400px] mx-auto flex justify-between items-center h-16 px-6 lg:px-12">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary flex items-center justify-center">
            <span className="text-background font-bold text-lg">K</span>
          </div>
          <span className="text-xl font-black tracking-tighter uppercase">Kraftwerk</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12 text-sm font-bold tracking-widest uppercase">
          <a href="#" className="hover:text-accent transition-colors">Laboratory</a>
          <a href="#" className="hover:text-accent transition-colors">Specimens</a>
          <a href="#" className="hover:text-accent transition-colors">Archive</a>
          <button className="px-6 py-2 border-2 border-primary bg-primary text-background hover:bg-transparent hover:text-primary transition-all">
            Connect
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden absolute top-16 left-0 w-full bg-background border-b border-border p-6 flex flex-col gap-6 font-bold"
        >
          <a href="#" className="text-2xl">Laboratory</a>
          <a href="#" className="text-2xl">Specimens</a>
          <a href="#" className="text-2xl">Archive</a>
        </motion.div>
      )}
    </header>
  );
}
