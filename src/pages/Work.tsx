import BrandIntro from '../components/BrandIntro'
import PortfolioGrid from '../components/PortfolioGrid'

export default function Work() {
  return (
    <>
      <section className="container py-12">
        <h2 className="font-display text-3xl font-bold">Selected Work</h2>
        <p className="mt-4 max-w-2xl text-neutral-700">A cross-industry selection of brand identities and design systems.</p>
      </section>
      <BrandIntro />
      <PortfolioGrid />
    </>
  )
}
