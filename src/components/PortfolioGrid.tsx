type Project = {
  title: string
  industry: string
  cover: string
  metric?: string
}

const projects: Project[] = [
  { title: 'Nimbus Cloud', industry: 'B2B SaaS — DevOps', cover: 'https://picsum.photos/seed/nimbus/800/600', metric: '+38% demo conversion' },
  { title: 'DataLoop', industry: 'B2B SaaS — Analytics', cover: 'https://picsum.photos/seed/dataloop/800/600', metric: '+27% qualified pipeline' },
  { title: 'SecureLayer', industry: 'B2B SaaS — Security', cover: 'https://picsum.photos/seed/securelayer/800/600', metric: '-22% churn YoY' },
  { title: 'FlowDesk', industry: 'B2B SaaS — Productivity', cover: 'https://picsum.photos/seed/flowdesk/800/600', metric: '+3x paid activation' },
  { title: 'LedgerIQ', industry: 'B2B SaaS — FinOps', cover: 'https://picsum.photos/seed/ledgeriq/800/600', metric: '+19% ASP' },
  { title: 'RelayOS', industry: 'B2B SaaS — Support', cover: 'https://picsum.photos/seed/relay/800/600', metric: '-35% time-to-value' },
]

export default function PortfolioGrid() {
  return (
    <section className="container py-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <figure key={p.title} className="group overflow-hidden rounded-lg border border-neutral-200">
            <img src={p.cover} alt={p.title} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
            <figcaption className="p-4">
              <div className="text-sm text-neutral-600">{p.industry}</div>
              <div className="font-semibold">{p.title}</div>
              {p.metric && (
                <div className="mt-1 text-xs font-medium text-brand-700">{p.metric}</div>
              )}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
