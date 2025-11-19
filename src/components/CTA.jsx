export default function CTA() {
  return (
    <section id="cta" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-blue-600/20 via-blue-500/10 to-cyan-400/10 p-8 md:p-12 backdrop-blur overflow-hidden">
          <div className="relative z-10 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl text-white font-semibold">Experience AI that elevates clinical care</h3>
              <p className="mt-3 text-blue-200/90">Start your free 14‑day trial. No credit card required.</p>
              <form onSubmit={(e)=>e.preventDefault()} className="mt-6 flex flex-col sm:flex-row gap-3">
                <input type="email" required placeholder="Work email" className="w-full sm:flex-1 px-4 py-3 rounded-lg bg-slate-950/60 border border-white/15 text-blue-100 placeholder:text-blue-300/50 focus:outline-none focus:ring-2 focus:ring-blue-500/50" />
                <button className="px-5 py-3 rounded-lg bg-blue-500 text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)] hover:shadow-[0_10px_45px_-10px_rgba(59,130,246,1)] transition">Request access</button>
              </form>
              <div className="mt-3 text-xs text-blue-300/70">By continuing you agree to our Terms and Privacy.</div>
            </div>
            <div className="text-blue-200/80 text-sm">
              <ul className="grid grid-cols-2 gap-4">
                <li className="rounded-xl border border-white/10 bg-slate-900/50 p-4">SOC 2 Type II</li>
                <li className="rounded-xl border border-white/10 bg-slate-900/50 p-4">HIPAA-ready</li>
                <li className="rounded-xl border border-white/10 bg-slate-900/50 p-4">EHR integrations</li>
                <li className="rounded-xl border border-white/10 bg-slate-900/50 p-4">Global availability</li>
              </ul>
            </div>
          </div>
          <div className="absolute -right-24 -bottom-24 w-[500px] h-[500px] bg-blue-500/20 blur-3xl rounded-full pointer-events-none" />
        </div>
      </div>
    </section>
  )
}
