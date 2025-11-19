export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Simple, transparent pricing</h2>
          <p className="mt-3 text-blue-200/90">Start free. Scale as you grow. Cancel anytime.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
            <div className="text-blue-200/80 text-sm">Starter</div>
            <div className="mt-2 text-white text-3xl font-semibold">$0<span className="text-base text-blue-300/70">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-blue-200/80">
              <li>Up to 3 users</li>
              <li>50 notes/month</li>
              <li>Email support</li>
            </ul>
            <a href="#cta" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg border border-white/15 bg-white/5 text-blue-100 hover:bg-white/10 transition">Get started</a>
          </div>

          <div className="rounded-2xl border border-blue-400/30 bg-slate-900/80 p-6 backdrop-blur shadow-[0_0_60px_rgba(59,130,246,0.25)] scale-[1.02]">
            <div className="text-blue-200/80 text-sm">Pro</div>
            <div className="mt-2 text-white text-3xl font-semibold">$49<span className="text-base text-blue-300/70">/mo</span></div>
            <ul className="mt-4 space-y-2 text-sm text-blue-200/80">
              <li>Unlimited users</li>
              <li>2,000 notes/month</li>
              <li>Priority support</li>
              <li>SSO (OAuth)</li>
            </ul>
            <a href="#cta" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg bg-blue-500 text-white hover:opacity-90 transition">Start Pro trial</a>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur">
            <div className="text-blue-200/80 text-sm">Enterprise</div>
            <div className="mt-2 text-white text-3xl font-semibold">Custom</div>
            <ul className="mt-4 space-y-2 text-sm text-blue-200/80">
              <li>BAA and HIPAA readiness</li>
              <li>Dedicated environment</li>
              <li>Custom integrations</li>
              <li>SLAs & onboarding</li>
            </ul>
            <a href="#cta" className="mt-6 inline-block w-full text-center px-4 py-2 rounded-lg border border-white/15 bg-white/5 text-blue-100 hover:bg-white/10 transition">Talk to sales</a>
          </div>
        </div>
      </div>
    </section>
  )
}
