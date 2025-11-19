import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[86vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/2fSS9b44gtYBt4RI/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-28 pb-24">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1 text-xs text-blue-200 mb-5 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Live clinical AI assistant
          </div>
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-[0_0_25px_rgba(59,130,246,0.35)]">
            Healthcare insights that feel effortless
          </h1>
          <p className="mt-5 text-lg text-blue-200/90">
            Turn raw patient data into action. Summarize encounters, flag risks, and generate documentation with a secure, compliant AI made for clinicians.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <a href="#cta" className="px-5 py-3 rounded-lg bg-blue-500 text-white text-center shadow-[0_10px_30px_-10px_rgba(59,130,246,0.7)] hover:shadow-[0_10px_45px_-10px_rgba(59,130,246,1)] transition">Start free trial</a>
            <a href="#features" className="px-5 py-3 rounded-lg border border-white/15 bg-white/5 text-blue-100 text-center hover:bg-white/10 transition">See how it works</a>
          </div>

          <div className="mt-8 grid grid-cols-2 gap-4 max-w-md text-blue-200/80 text-sm">
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-3 backdrop-blur pointer-events-none">
              99.95% uptime SLA
            </div>
            <div className="rounded-xl border border-white/10 bg-slate-900/40 p-3 backdrop-blur pointer-events-none">
              HIPAA-ready controls
            </div>
          </div>
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent pointer-events-none" />
    </section>
  )
}
