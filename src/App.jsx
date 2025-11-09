import Navbar from './components/Navbar';
import Hero from './components/Hero';
import LabsList from './components/LabsList';
import Playground from './components/Playground';
import NotesPanel from './components/NotesPanel';

import { useState } from 'react';

export default function App() {
  const [lastOutput, setLastOutput] = useState('');

  return (
    <div className="min-h-screen bg-black text-white selection:bg-emerald-500/40 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <LabsList onSelect={(lab) => alert(`Selected: ${lab.title}`)} />
        <Playground onOutput={(out) => setLastOutput(out)} />
        <NotesPanel />
      </main>

      <footer className="border-t border-white/10 py-8 text-center text-sm text-white/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p>Built for ethical learning. All playground actions are simulated locally.</p>
          {lastOutput && (
            <p className="mt-2 text-white/60">Last output length: {lastOutput.length} chars</p>
          )}
        </div>
      </footer>
    </div>
  );
}
