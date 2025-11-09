import { useState } from 'react';

const defaultLabs = [
  {
    id: 'recon-basics',
    title: 'Reconnaissance Basics',
    level: 'Beginner',
    tags: ['OSINT', 'Footprinting'],
    summary: 'Learn passive and active recon to map a target surface safely.'
  },
  {
    id: 'web-auth-bypass',
    title: 'Web Auth Bypass',
    level: 'Intermediate',
    tags: ['Web', 'Auth'],
    summary: 'Explore common authentication flaws and bypass patterns.'
  },
  {
    id: 'xss-playground',
    title: 'Cross-Site Scripting',
    level: 'Intermediate',
    tags: ['Web', 'XSS'],
    summary: 'Practice reflected and stored XSS in a safe environment.'
  },
  {
    id: 'crypto-puzzles',
    title: 'Crypto Puzzles',
    level: 'Beginner',
    tags: ['Crypto'],
    summary: 'Crack simple ciphers and learn about common pitfalls.'
  }
];

export default function LabsList({ onSelect }) {
  const [query, setQuery] = useState('');
  const [level, setLevel] = useState('All');

  const items = defaultLabs.filter(l =>
    (level === 'All' || l.level === level) &&
    (l.title.toLowerCase().includes(query.toLowerCase()) || l.tags.join(' ').toLowerCase().includes(query.toLowerCase()))
  );

  return (
    <section id="labs" className="py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">Guided Labs</h2>
            <p className="text-white/60">Short, focused scenarios designed for safe practice.</p>
          </div>
          <div className="flex gap-2">
            <input
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search labs..."
              className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <select
              value={level}
              onChange={e => setLevel(e.target.value)}
              className="px-3 py-2 rounded-md bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option>All</option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>
        </div>

        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map(lab => (
            <button
              key={lab.id}
              onClick={() => onSelect?.(lab)}
              className="group text-left rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 hover:bg-white/10 transition p-4"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-white font-medium">{lab.title}</h3>
                <span className="text-xs text-white/60 px-2 py-1 rounded bg-white/5 border border-white/10">{lab.level}</span>
              </div>
              <p className="mt-2 text-sm text-white/70">{lab.summary}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {lab.tags.map(t => (
                  <span key={t} className="text-xs text-emerald-300/90 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    {t}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
