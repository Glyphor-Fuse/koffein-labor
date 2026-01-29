import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-background border-b-2 border-primary">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center px-6 h-20">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 bg-primary flex items-center justify-center">
            <span className="text-background font-bold text-xl">W</span>
          </div>
          <span className="font-black text-2xl tracking-tighter uppercase hidden md:block">Werkstatt</span>
        </div>
        
        <nav className="hidden md:flex gap-12 font-bold uppercase text-sm tracking-widest">
          <a href="#" className="hover:text-accent transition-colors">Laboratory</a>
          <a href="#" className="hover:text-accent transition-colors">Manifesto</a>
          <a href="#" className="hover:text-accent transition-colors">Archive</a>
          <a href="#" className="text-accent underline decoration-2 underline-offset-4">Join Us</a>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-20 left-0 w-full bg-background border-b-2 border-primary p-6 md:hidden flex flex-col gap-6 font-bold uppercase"
        >
          <a href="#" onClick={() => setIsOpen(false)}>Laboratory</a>
          <a href="#" onClick={() => setIsOpen(false)}>Manifesto</a>
          <a href="#" onClick={() => setIsOpen(false)}>Archive</a>
        </motion.div>
      )}
    </header>
  );
}
