import { useEffect, useRef, useState } from 'react';
import { Play, Trash2, Copy } from 'lucide-react';

const examples = [
  {
    id: 'curl',
    title: 'Basic cURL',
    code: "curl -I https://example.com",
    desc: 'Send a HEAD request to inspect response headers.'
  },
  {
    id: 'nmap',
    title: 'Nmap TCP Scan',
    code: 'nmap -sS -p 1-1024 192.168.1.1',
    desc: 'Demonstration syntax for a SYN scan (for learning only).'
  },
  {
    id: 'sqlmap',
    title: 'SQLMap Test',
    code: 'sqlmap -u "https://target.tld/page?id=1" --batch',
    desc: 'Illustrative usage of an automated SQL injection tester.'
  }
];

export default function Playground({ onOutput }) {
  const [input, setInput] = useState(examples[0].code);
  const [history, setHistory] = useState([]);
  const outRef = useRef(null);

  useEffect(() => {
    if (outRef.current) {
      outRef.current.scrollTop = outRef.current.scrollHeight;
    }
  }, [history]);

  const run = () => {
    const timestamp = new Date().toLocaleTimeString();
    const fakeOutput = `[$${timestamp}] Executed: ${input}\n\nResult: This is a simulated output for learning.\nNo real systems were touched.`;
    const entry = { cmd: input, out: fakeOutput, ts: timestamp };
    setHistory(h => [...h, entry]);
    onOutput?.(fakeOutput);
  };

  const clear = () => setHistory([]);

  const copy = (text) => navigator.clipboard.writeText(text);

  return (
    <section id="playground" className="py-12 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="p-3 flex items-center gap-2 border-b border-white/10">
              {examples.map(ex => (
                <button key={ex.id} onClick={() => setInput(ex.code)} className="text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-white/80">
                  {ex.title}
                </button>
              ))}
              <div className="ml-auto flex items-center gap-2">
                <button onClick={clear} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-white/80"><Trash2 className="h-3 w-3"/>Clear</button>
                <button onClick={run} className="inline-flex items-center gap-1 text-xs px-3 py-1 rounded bg-emerald-500/90 hover:bg-emerald-500 text-white"><Play className="h-3 w-3"/>Run</button>
              </div>
            </div>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              spellCheck={false}
              className="w-full h-40 p-3 font-mono text-sm bg-black/60 text-emerald-200 outline-none"
            />
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <div className="p-3 flex items-center justify-between border-b border-white/10">
              <p className="text-sm text-white/80">Output</p>
              <button onClick={() => copy(history.map(h=>h.out).join('\n\n'))} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded bg-white/5 hover:bg-white/10 text-white/80"><Copy className="h-3 w-3"/>Copy</button>
            </div>
            <div ref={outRef} className="h-56 overflow-auto p-3 font-mono text-xs bg-black/60 text-emerald-300 whitespace-pre-wrap">
              {history.length === 0 ? (
                <p className="text-white/50">Run a command to see simulated output here.</p>
              ) : (
                history.map((h, i) => (
                  <div key={i} className="mb-4">
                    <p className="text-white/60">$ {h.cmd}</p>
                    <pre className="mt-1">{h.out}</pre>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
