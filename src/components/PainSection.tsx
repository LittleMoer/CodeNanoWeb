import { FileSpreadsheet, DollarSign, AlertCircle } from 'lucide-react'

const pains = [
  {
    icon: FileSpreadsheet,
    title: 'Excel Sudah Tidak Cukup',
    desc: "Dulu cukup pakai spreadsheet. Sekarang ada 10 file berbeda, tidak tahu mana yang terbaru, dan takut kehilangan data.",
  },
  {
    icon: DollarSign,
    title: 'Uang Bocor Tanpa Sadar',
    desc: "Invoice lupa ditagih. Stok hilang entah kemana. Pengeluaran tidak tercatat. Akhir bulan bingung kenapa untung tipis.",
  },
  {
    icon: AlertCircle,
    title: 'Software "Proper" Terlalu Ribet',
    desc: "Lihat demo ERP = pusing. Setup butuh 6 bulan. Harga puluhan juta. Tim Anda takut pakai karena terlalu kompleks.",
  },
]

export default function PainSection() {
  return (
    <section id="problem" className="py-20 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
          Kenapa Bisnis yang Berkembang Malah Jadi Berantakan?
        </h2>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          {pains.map((p) => (
            <div
              key={p.title}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-lg bg-red-100 text-red-600 mb-4">
                <p.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
              <p className="mt-3 text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <blockquote className="text-lg italic text-gray-700 border-l-4 border-primary-600 pl-4">
            "Aplikasi sederhana cepat ketinggalan. Aplikasi canggih terlalu mahal dan susah. Harusnya ada yang di tengah-tengah."
          </blockquote>
        </div>
      </div>
    </section>
  )
}
