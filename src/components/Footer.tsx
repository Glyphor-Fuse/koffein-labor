import { motion } from "framer-motion";
import { Github, Twitter, Instagram } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground pt-32 pb-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 mb-24">
          <div className="md:col-span-6">
            <h2 className="text-6xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
              Stay <br />
              <span className="text-accent">Calibrated</span>
            </h2>
            <div className="flex gap-4">
              <input 
                type="email" 
                placeholder="LAB@SYSTEM.INT" 
                className="bg-transparent border-b border-primary-foreground/30 py-4 w-full focus:outline-none focus:border-accent font-mono uppercase text-sm"
              />
              <button className="border border-primary-foreground/30 px-8 hover:bg-accent hover:border-accent transition-colors uppercase font-bold text-xs tracking-widest">
                Join
              </button>
            </div>
          </div>

          <div className="md:col-span-3 flex flex-col gap-6 uppercase text-xs tracking-widest">
            <span className="text-primary-foreground/40 font-bold">Contact</span>
            <p className="font-bold">Wilhelmstraße 43<br />10117 Berlin, DE</p>
            <p className="font-bold">+49 30 2000 000</p>
            <p className="font-bold text-accent">nexus@kruft.lab</p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-6 uppercase text-xs tracking-widest">
            <span className="text-primary-foreground/40 font-bold">Follow</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-accent transition-colors"><Twitter size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={20} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Github size={20} /></a>
            </div>
            <div className="mt-auto">
              <p className="text-[10px] text-primary-foreground/30">KRUFT-OS VERSION 4.2.0-STABLE</p>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-primary-foreground/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] font-mono uppercase tracking-[0.3em] text-primary-foreground/40">
          <span>© 2024 KRUFT RESEARCH LAB</span>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary-foreground transition-colors">Privacy Protocol</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Safety Specs</a>
            <a href="#" className="hover:text-primary-foreground transition-colors">Legal Chassis</a>
          </div>
        </div>
      </div>
    </footer>
  );
}