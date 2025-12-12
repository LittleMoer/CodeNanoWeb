import { Sprout, Rocket } from 'lucide-react'

const starter = [
  'Bikin invoice cantik tanpa Excel',
  'Tracking stok agar tidak kehabisan barang mendadak',
  'Catat kas masuk-keluar, otomatis jadi laporan',
]

const scaler = [
  'Multi-cabang & multi-gudang dalam 1 dashboard',
  'Role & permission untuk kontrol siapa lihat apa',
  'Approval workflow otomatis (purchase order, reimbursement)',
  'Integrasi akuntansi & perpajakan',
]

export default function AfterSection() {
  return (
    <section id="benefits" className="py-20 bg-white">
      <div className="container">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900">
          Didesain untuk Semua Tahap Bisnis
        </h2>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* For Starters */}
          <div className="rounded-2xl border-2 border-primary-200 bg-primary-50 p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-primary-600 flex items-center justify-center">
                <Sprout className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Untuk Yang Baru Mulai</h3>
                <p className="text-sm text-gray-600">Mikro/UMKM</p>
              </div>
            </div>
            
            <p className="text-lg font-semibold text-gray-900 mb-4">
              Profesionalkan bisnis Anda dalam 10 menit:
            </p>
            
            <ul className="space-y-3">
              {starter.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-primary-600 font-bold mt-1">✓</span>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-6 border-t border-primary-200">
              <p className="text-sm text-gray-600">
                <span className="font-semibold">Harga:</span> Mulai dari 300 ribu (menggunakan domain .my.id dan .site)
              </p>
              <p className="text-sm text-gray-600 mt-2">
                <span className="font-semibold">Siapa cocok:</span> Warung, online shop, jasa freelance, kedai kopi
              </p>
            </div>
          </div>

          {/* For Scalers */}
          <div className="rounded-2xl border-2 border-primary-600 bg-gradient-to-br from-primary-600 to-primary-700 p-8 text-white">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center">
                <Rocket className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Untuk Yang Sedang Berkembang</h3>
                <p className="text-sm text-primary-100">Bisnis Menengah</p>
              </div>
            </div>
            
            <p className="text-lg font-semibold mb-4">
              Kendalikan bisnis yang makin kompleks:
            </p>
            
            <ul className="space-y-3">
              {scaler.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="font-bold mt-1">✓</span>
                  <span className="text-primary-50">{item}</span>
                </li>
              ))}
            </ul>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-sm text-primary-100">
                <span className="font-semibold">Harga:</span> Mulai dari Rp 1.500.000 (menggunakan domain .com)
              </p>
              <p className="text-sm text-primary-100 mt-2">
                <span className="font-semibold">Siapa cocok:</span> Distributor, retail chain, pabrik kecil, agency
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-12 max-w-2xl mx-auto text-center">
          <div className="rounded-xl bg-primary-50 border border-primary-200 p-6">
            <p className="text-lg font-semibold text-gray-900">💡 Yang Terbaik?</p>
            <p className="mt-2 text-gray-700">
              Transisi dari "Baru Mulai" ke "Berkembang" hanya butuh 1 klik. Tidak perlu menggunakan banyak software.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
