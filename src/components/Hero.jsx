import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[60vh] grid lg:grid-cols-2 items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/6Yl6sJfsc2bUvtYh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="relative z-10 p-8 lg:p-16">
        <div className="max-w-xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
            Practice hacking safely.
            <span className="block text-emerald-400">Take notes as you learn.</span>
          </h1>
          <p className="mt-4 text-white/70 text-lg">
            A clean, focused environment with guided labs, an interactive playground, and a live notes panel so your workflow stays in one place.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#labs" className="px-4 py-2 rounded-md bg-white text-black font-medium hover:bg-white/90 transition">Explore Labs</a>
            <a href="#playground" className="px-4 py-2 rounded-md bg-emerald-500/90 text-white font-medium hover:bg-emerald-500 transition">Open Playground</a>
          </div>
        </div>
      </div>
      <div className="relative hidden lg:block" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black via-black/40 to-black" />
    </section>
  );
}
