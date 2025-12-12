export default function BrandIntro() {
  const advantages = [
    { title: 'Clear Positioning', desc: 'Sharpen your ICP and narrative to win crowded categories.' },
    { title: 'Credible Identity', desc: 'A visual and verbal system that signals trust to buyers.' },
    { title: 'Scalable Design', desc: 'Tokens and components aligned across marketing and product.' },
    { title: 'Conversion Focus', desc: 'Pages and patterns optimized for demo, trial, and sign-up.' },
  ]

  return (
    <section className="container py-12">
      <div className="max-w-3xl">
        <h2 className="font-display text-3xl font-bold text-white">Brand that drives SaaS growth</h2>
        <p className="mt-4 text-neutral-300">
          We connect brand strategy to revenue outcomes—aligning product, marketing, and sales with a system that
          improves pipeline, activation, and expansion.
        </p>
      </div>

      <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {advantages.map((a) => (
          <li key={a.title} className="rounded-lg border border-neutral-800 p-6 bg-neutral-800">
            <h3 className="font-semibold text-white">{a.title}</h3>
            <p className="mt-2 text-neutral-300 text-sm">{a.desc}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}