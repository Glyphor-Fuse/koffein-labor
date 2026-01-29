export function Footer() {
  return (
    <footer className="bg-primary text-background border-t-2 border-accent pt-24 pb-12 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-24">
          <div className="md:col-span-6">
            <h2 className="text-[10vw] font-black uppercase tracking-tighter leading-[0.8] mb-8">
              WERK<br /><span className="text-accent">STATT</span>
            </h2>
          </div>
          <div className="md:col-span-3 md:col-start-8">
            <h4 className="font-black uppercase mb-6 tracking-widest text-accent">Contact</h4>
            <ul className="flex flex-col gap-4 text-sm font-bold uppercase">
              <li><a href="#" className="hover:line-through">Berlin HQ</a></li>
              <li><a href="#" className="hover:line-through">Operations</a></li>
              <li><a href="#" className="hover:line-through">Archive</a></li>
              <li><a href="#" className="hover:line-through">Email</a></li>
            </ul>
          </div>
          <div className="md:col-span-2">
             <h4 className="font-black uppercase mb-6 tracking-widest text-accent">Social</h4>
             <ul className="flex flex-col gap-4 text-sm font-bold uppercase">
              <li><a href="#" className="hover:line-through">Instagram</a></li>
              <li><a href="#" className="hover:line-through">Twitter/X</a></li>
              <li><a href="#" className="hover:line-through">LinkedIn</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center border-t-2 border-secondary/10 pt-12 gap-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">
            © 2024 WERKSTATT INDUSTRIAL LABORATORY. ALL RIGHTS RESERVED. FORM FOLLOWS FUNCTION.
          </p>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-6 h-6 border border-secondary/20" />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
