import { BookOpen, TrendingUp, Building2 } from 'lucide-react'

const steps = [
  {
    icon: BookOpen,
    number: '1',
    title: 'Mulai dengan Yang Anda Butuh Sekarang',
    desc: 'Cukup catat penjualan, stok, dan pengeluaran. Interface sesederhana Google Docs.',
  },
  {
    icon: TrendingUp,
    number: '2',
    title: 'Aktifkan Fitur Saat Siap',
    desc: 'Butuh invoice otomatis? Klik "Aktifkan." Butuh role karyawan? Tinggal unlock. Semua data lama tetap utuh.',
  },
  {
    icon: Building2,
    number: '3',
    title: 'Sekarang Anda Punya Sistem Lengkap',
    desc: 'Approval multi-level, laporan keuangan real-time, inventory tracking—semua sudah built-in. Tanpa pindah platform.',
  },
]

export default function BridgeSection() {
  return (
    <section id="solution" className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Inilah Cara CodeNano Bekerja
          </h2>
          <p className="mt-4 text-lg text-primary-200">
            Bayangkan punya satu workspace digital yang hari ini berfungsi sebagai buku catatan pintar, tahun depan berubah jadi sistem manajemen lengkap—tanpa perlu export-import data.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s) => (
            <div
              key={s.number}
              className="rounded-xl bg-white/10 backdrop-blur border border-white/20 p-8 text-center"
            >
              <div className="mx-auto w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mb-4 text-white text-2xl font-bold">
                {s.number}
              </div>
              <div className="mx-auto w-12 h-12 flex items-center justify-center mb-4">
                <s.icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-primary-200">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
