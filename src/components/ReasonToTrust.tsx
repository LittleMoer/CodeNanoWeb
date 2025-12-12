export default function ReasonToTrust() {
  const reasons = [
    { title: 'Proven SaaS Outcomes', desc: 'Brand systems tied to pipeline, activation, and expansion metrics.' },
    { title: 'Product + Marketing Alignment', desc: 'Unified tokens/components across website and app for consistency.' },
    { title: 'Enterprise Credibility', desc: 'Visual/verbal signals that reduce buyer risk and improve trust.' },
    { title: 'Documentation & Enablement', desc: 'Guides and templates so teams can scale brand reliably.' },
  ]

  return (
    <section id="trust" className="container py-12">
      <h2 className="font-display text-3xl font-bold text-white">Reasons to trust</h2>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r) => (
          <li key={r.title} className="rounded-lg border border-neutral-800 p-6 bg-neutral-800">
            <h3 className="font-semibold text-white">{r.title}</h3>
            <p className="mt-2 text-neutral-300 text-sm">{r.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}