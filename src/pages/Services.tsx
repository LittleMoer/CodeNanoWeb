export default function Services() {
  return (
    <section className="container py-12">
      <h2 className="font-display text-3xl font-bold">B2B SaaS Branding Services</h2>
      <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
        {[
          { name: 'Category & Positioning', desc: 'ICP definition, problem framing, value narrative, competitive angle.' },
          { name: 'Messaging Architecture', desc: 'Tiered messaging for corporate, product, and solution pages.' },
          { name: 'Identity System', desc: 'Logo suite, typography, color scales, iconography, motion language.' },
          { name: 'Design System', desc: 'Tokens, components, guidelines; Figma + code alignment for marketing and product.' },
          { name: 'Website & Conversion', desc: 'IA, hero narratives, social proof, PLG/enterprise flows, demo CTAs.' },
          { name: 'Sales Enablement', desc: 'Deck templates, one-pagers, case studies, ROI narratives.' },
        ].map((s) => (
          <li key={s.name} className="rounded-lg border border-neutral-200 p-6">
            <h3 className="font-semibold">{s.name}</h3>
            <p className="mt-2 text-neutral-700">{s.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
