export default function Contact() {
  return (
    <section className="container py-12">
      <h2 className="font-display text-3xl font-bold">Contact</h2>
      <form className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <input className="col-span-1 rounded-md border border-neutral-300 p-3" placeholder="Name" />
        <input className="col-span-1 rounded-md border border-neutral-300 p-3" placeholder="Email" />
        <input className="sm:col-span-2 rounded-md border border-neutral-300 p-3" placeholder="Company" />
        <textarea className="sm:col-span-2 rounded-md border border-neutral-300 p-3" rows={5} placeholder="Tell us about your project" />
        <button type="button" className="sm:col-span-2 rounded-md bg-brand-600 px-4 py-2 font-semibold text-white hover:bg-brand-700">Submit</button>
      </form>
      <p className="mt-4 text-neutral-600 text-sm">Form is a placeholder — connect to your backend or service.</p>
    </section>
  )
}
