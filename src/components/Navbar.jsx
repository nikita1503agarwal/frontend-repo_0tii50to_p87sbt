import { useState } from 'react'
import { Menu, Stethoscope, ShieldCheck, Sparkles } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-blue-500/10 border border-blue-400/20 text-blue-300 shadow-[0_0_30px_rgba(59,130,246,0.35)]">
            <Stethoscope className="w-6 h-6" />
          </div>
          <div className="">
            <p className="text-white font-semibold leading-none">VitalSight</p>
            <p className="text-xs text-blue-300/70">Healthcare AI Platform</p>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#features" className="text-blue-200/80 hover:text-white transition">Features</a>
          <a href="#security" className="text-blue-200/80 hover:text-white transition">Security</a>
          <a href="#pricing" className="text-blue-200/80 hover:text-white transition">Pricing</a>
          <a href="#faq" className="text-blue-200/80 hover:text-white transition">FAQ</a>
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a href="#" className="px-4 py-2 text-blue-200 hover:text-white transition">Sign in</a>
          <a href="#cta" className="px-4 py-2 rounded-lg bg-blue-500 text-white shadow-[0_10px_30px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_10px_40px_-10px_rgba(59,130,246,0.9)] transition">Get started</a>
        </div>

        <button aria-label="Open menu" onClick={() => setOpen(v => !v)} className="md:hidden p-2 rounded-lg border border-white/10 text-blue-100">
          <Menu className="w-5 h-5" />
        </button>
      </nav>

      {open && (
        <div className="md:hidden mx-4 mb-4 rounded-2xl border border-white/10 bg-slate-900/70 backdrop-blur-xl">
          <div className="px-6 py-4 flex flex-col gap-3">
            <a href="#features" className="text-blue-200/90">Features</a>
            <a href="#security" className="text-blue-200/90">Security</a>
            <a href="#pricing" className="text-blue-200/90">Pricing</a>
            <a href="#faq" className="text-blue-200/90">FAQ</a>
            <div className="h-px bg-white/10 my-2" />
            <a href="#" className="text-blue-200/90">Sign in</a>
            <a href="#cta" className="px-4 py-2 rounded-lg bg-blue-500 text-white text-center">Get started</a>
            <div className="flex items-center gap-2 text-xs text-blue-300/70 mt-1">
              <ShieldCheck className="w-4 h-4" /> HIPAA-ready • End‑to‑end encryption
            </div>
            <div className="flex items-center gap-2 text-xs text-blue-300/70">
              <Sparkles className="w-4 h-4" /> Powered by privacy-first AI
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
