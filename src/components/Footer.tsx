import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="bg-background border-t-8 border-primary py-20 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          <div className="col-span-1 md:col-span-2">
            <div className="text-4xl font-black uppercase tracking-tighter mb-8">
              KRAFT<span className="text-accent">WERK</span>
            </div>
            <p className="text-muted-foreground uppercase text-sm font-bold tracking-widest max-w-sm">
              Modular industrial design for high-performance environments. Berlin / Kreuzberg 2024.
            </p>
          </div>
          
          <div>
            <h5 className="font-black uppercase mb-6 tracking-widest text-accent">Navigation</h5>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
              <li><a href="#" className="hover:text-accent transition-colors">Core Systems</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Safety Protocols</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Archive</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="font-black uppercase mb-6 tracking-widest text-accent">Contact</h5>
            <ul className="space-y-4 text-sm font-bold uppercase tracking-wider">
              <li>LAB-04 @ BERLIN</li>
              <li>COMMMS@KRAFTWERK.IO</li>
              <li>+49 30 000 000</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 font-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          <div>© 2024 KRAFTWERK Bauhaus Laboratory. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy / Impressum</a>
            <a href="#" className="hover:text-white">Security Specs</a>
          </div>
        </div>
      </div>
    </footer>
  );
}