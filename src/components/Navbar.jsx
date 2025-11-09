import { Shield, Terminal } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 backdrop-blur bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400">
            <Shield className="h-5 w-5" />
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold tracking-tight">BlueLabs</p>
            <p className="text-xs text-white/60">Ethical Hacking Playground</p>
          </div>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#labs" className="text-white/80 hover:text-white transition">Labs</a>
          <a href="#playground" className="text-white/80 hover:text-white transition">Playground</a>
          <a href="#notes" className="text-white/80 hover:text-white transition">Notes</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-md bg-emerald-500/90 hover:bg-emerald-500 text-white px-3 py-2 text-sm font-medium transition">
          <Terminal className="h-4 w-4" />
          Open Console
        </button>
      </div>
    </header>
  );
}
