import { motion } from "framer-motion";
import { Menu, Zap } from "lucide-react";

export function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 border-b border-primary/20 bg-background/80 backdrop-blur-md"
    >
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Zap className="text-accent fill-accent" size={24} />
          <span className="text-xl font-black tracking-tighter uppercase">KRUFT / LAB</span>
        </div>
        
        <nav className="hidden md:flex items-center gap-12 font-medium uppercase text-xs tracking-[0.2em]">
          <a href="#" className="hover:text-accent transition-colors">Research</a>
          <a href="#" className="hover:text-accent transition-colors">Hardware</a>
          <a href="#" className="hover:text-accent transition-colors">Archive</a>
          <button className="bg-primary text-primary-foreground px-6 py-2 hover:bg-accent hover:text-white transition-all duration-300">
            CONNECT
          </button>
        </nav>

        <button className="md:hidden">
          <Menu size={24} />
        </button>
      </div>
    </motion.header>
  );
}