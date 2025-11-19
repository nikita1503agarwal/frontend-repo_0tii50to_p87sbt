import { Lock, ShieldCheck, KeyRound, FileCheck2 } from 'lucide-react'

export default function Security() {
  return (
    <section id="security" className="relative py-24">
      <div className="relative mx-auto max-w-7xl px-6">
        <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-slate-900/70 to-slate-900/30 p-8 md:p-12 backdrop-blur">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-xs text-emerald-200 mb-5">
                <ShieldCheck className="w-4 h-4" /> Built with security-first design
              </div>
              <h3 className="text-2xl md:text-3xl text-white font-semibold">Enterprise-grade protection, out of the box</h3>
              <p className="mt-3 text-blue-200/90">Encryption at rest and in transit, SSO/SAML, least-privilege access, and end-to-end auditability ensure your data stays safe.</p>
              <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2 text-blue-200/90"><Lock className="w-4 h-4" /> AES-256 + TLS 1.3</div>
                <div className="flex items-center gap-2 text-blue-200/90"><KeyRound className="w-4 h-4" /> RBAC + SCIM</div>
                <div className="flex items-center gap-2 text-blue-200/90"><FileCheck2 className="w-4 h-4" /> Audit logs</div>
                <div className="flex items-center gap-2 text-blue-200/90"><ShieldCheck className="w-4 h-4" /> HIPAA-ready</div>
              </div>
            </div>
            <div className="rounded-2xl border border-white/10 bg-slate-950/60 p-6">
              <pre className="text-[11px] leading-5 text-blue-200/90 overflow-auto">
{`POST /v1/notes\nAuthorization: Bearer <token>\nContent-Type: application/json\n\n{\n  "patient_id": "a19c2...",\n  "transcript": "...",\n  "template": "soap"\n}`}              
              </pre>
              <div className="mt-3 text-xs text-blue-300/70">All requests encrypted and signed.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
