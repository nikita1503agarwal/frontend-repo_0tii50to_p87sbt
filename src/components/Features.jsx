import { Cpu, ClipboardHeart, Activity, Brain, ShieldCheck, Bot } from 'lucide-react'

const features = [
  {
    icon: ClipboardHeart,
    title: 'Auto documentation',
    desc: 'Generate SOAP notes and discharge summaries from clinical dialogs in seconds.'
  },
  {
    icon: Brain,
    title: 'Clinical reasoning',
    desc: 'Evidence-grounded suggestions with citations and configurable guardrails.'
  },
  {
    icon: Activity,
    title: 'Risk stratification',
    desc: 'Surface gaps-in-care, contraindications, and early warning signals reliably.'
  },
  {
    icon: ShieldCheck,
    title: 'Compliance-first',
    desc: 'Role-based access, PHI redaction, audit trails, and data residency controls.'
  },
  {
    icon: Cpu,
    title: 'EHR integration',
    desc: 'Standards-based FHIR/HL7 APIs with seamless SSO and webhooks.'
  },
  {
    icon: Bot,
    title: 'Ambient scribing',
    desc: 'Real-time transcription tuned for clinical audio environments.'
  }
]

export default function Features() {
  return (
    <section id="features" className="relative py-24">
      <div className="absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white">Built for modern care teams</h2>
          <p className="mt-3 text-blue-200/90">Everything you need to bring AI safely into clinical workflows.</p>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur hover:border-blue-400/30 transition group">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-400/20 text-blue-300 flex items-center justify-center shadow-[0_0_25px_rgba(59,130,246,0.35)]">
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="mt-4 text-white font-medium">{title}</h3>
              <p className="mt-2 text-sm text-blue-200/80">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
