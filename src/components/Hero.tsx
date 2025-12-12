import { Check } from 'lucide-react'

export default function Hero() {
  const bullets = [
    'Ramah Pemula — Semudah menulis catatan di buku, tapi jauh lebih powerful',
    'Tumbuh Bersama Anda — Unlock fitur baru saat bisnis berkembang, tanpa ganti software',
    'Harga Jujur — Mulai gratis untuk usaha kecil, bayar saat Anda butuh lebih',
  ]

  return (
    <section id="hero" className="pt-28 pb-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Mulai Simpel.
            <br />
            <span className="text-primary-600">Tumbuh Tanpa Batas.</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Dari catatan harian kedai kopi hingga sistem manajemen perusahaan distribusi—semua dalam satu tempat. Tidak perlu pindah aplikasi saat bisnis Anda membesar.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {bullets.map((b) => (
              <div key={b} className="flex items-center gap-2 text-sm text-gray-700">
                <Check className="h-5 w-5 text-primary-600" />
                <span>{b}</span>
              </div>
            ))}
          </div>

          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-6 py-3 text-base font-semibold text-white hover:bg-primary-500 transition-colors"
            >
              Konsultasi Gratis 
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-8 py-3 text-base font-semibold text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors"
            >
              Lihat Projek Klien
            </a>
          </div>
          
          <p className="mt-6 text-sm text-gray-500">
            Sesuaikan dengan kebutuhan bisnis Anda
          </p>
        </div>

        {/* Placeholder Tampilan UI */}
        <div className="mt-16 mx-auto max-w-4xl">
          <div className="rounded-xl border border-gray-200 bg-white shadow-2xl overflow-hidden">
            <div className="h-8 bg-gray-100 flex items-center px-4 gap-2">
              <span className="w-3 h-3 rounded-full bg-red-400"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
              <span className="w-3 h-3 rounded-full bg-green-400"></span>
            </div>
            <div className="h-64 sm:h-80 bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center text-primary-400">
              <span className="text-lg font-medium">Pratinjau Dashboard</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
