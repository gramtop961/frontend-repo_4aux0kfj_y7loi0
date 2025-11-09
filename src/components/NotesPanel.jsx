import { useEffect, useState } from 'react';
import { Save, Trash2 } from 'lucide-react';

function loadNotes() {
  try {
    const raw = localStorage.getItem('notes');
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

export default function NotesPanel() {
  const [notes, setNotes] = useState(loadNotes());
  const [text, setText] = useState('');

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  const add = () => {
    if (!text.trim()) return;
    setNotes([{ id: crypto.randomUUID(), body: text, ts: new Date().toISOString() }, ...notes]);
    setText('');
  };

  const remove = (id) => setNotes(notes.filter(n => n.id !== id));

  return (
    <section id="notes" className="py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="p-3 border-b border-white/10 flex items-center justify-between">
              <p className="text-sm text-white/80">Quick Notes</p>
              <button onClick={add} className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded bg-emerald-500/90 hover:bg-emerald-500 text-white"><Save className="h-3 w-3"/>Save</button>
            </div>
            <textarea
              value={text}
              onChange={e => setText(e.target.value)}
              placeholder="Write your findings, payloads, or commands here..."
              className="w-full h-40 p-3 font-mono text-sm bg-black/60 text-emerald-200 placeholder-white/30 outline-none"
            />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="p-3 border-b border-white/10">
              <p className="text-sm text-white/80">Saved Notes</p>
            </div>
            <ul className="divide-y divide-white/10">
              {notes.length === 0 ? (
                <li className="p-4 text-sm text-white/60">No notes yet. Your saved notes will appear here.</li>
              ) : (
                notes.map(n => (
                  <li key={n.id} className="p-4 hover:bg-white/5">
                    <div className="flex items-start justify-between gap-3">
                      <pre className="whitespace-pre-wrap text-sm text-emerald-200 font-mono flex-1">{n.body}</pre>
                      <button onClick={() => remove(n.id)} className="shrink-0 inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-white/80"><Trash2 className="h-3 w-3"/>Delete</button>
                    </div>
                    <p className="mt-2 text-xs text-white/40">{new Date(n.ts).toLocaleString()}</p>
                  </li>
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
