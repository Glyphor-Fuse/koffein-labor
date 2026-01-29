import { Github, Twitter, Instagram } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-background border-t-4 border-primary py-24 px-6 lg:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-6">
            <div className="flex items-center gap-2 mb-8">
              <div className="w-10 h-10 bg-primary flex items-center justify-center">
                <span className="text-background font-bold text-xl uppercase">K</span>
              </div>
              <span className="text-3xl font-black tracking-tighter uppercase">Kraftwerk</span>
            </div>
            <p className="text-muted-foreground max-w-sm uppercase font-bold text-sm leading-relaxed">
              Industrial Design Studio established in Berlin. Focused on Brutalist principles and Bauhaus utility.
            </p>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-black uppercase mb-8 tracking-widest text-accent">Navigation</h4>
            <ul className="space-y-4 font-bold uppercase text-sm">
              <li><a href="#" className="hover:text-accent transition-colors">Manifesto</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Laboratory</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Specimens</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Archive</a></li>
            </ul>
          </div>

          <div className="md:col-span-3">
            <h4 className="font-black uppercase mb-8 tracking-widest text-accent">Social</h4>
            <div className="flex gap-6">
              <a href="#" className="hover:text-accent transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-accent transition-colors"><Github size={24} /></a>
            </div>
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-black opacity-40 tracking-widest uppercase">
          <p>© 2024 KRAFTWERK LABS // ALL RIGHTS RESERVED</p>
          <p>BUILT IN BERLIN // VERSION 2.0.4-BETA</p>
        </div>
      </div>
    </footer>
  );
}
