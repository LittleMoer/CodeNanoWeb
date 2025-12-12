import { Check } from 'lucide-react'

export default function Footer() {
  const links = ['Produk', 'Harga', 'Studi Kasus', 'Dokumentasi', 'Kontak']
  
  const trustSignals = [
    'Gratis selamanya untuk fitur dasar',
    'Data tersimpan aman di Indonesia',
    'Support Bahasa Indonesia via WhatsApp',
  ]

  return (
    <footer id="footer" className="py-20 bg-gradient-to-br from-gray-50 to-white border-t border-gray-200">
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Akhiri Kekacauan. Mulai Berkembang.
          </h2>
          
          <p className="mt-4 text-lg text-gray-600">
            Bergabunglah dengan ribuan pemilik bisnis yang sudah beralih dari spreadsheet berantakan ke sistem yang tumbuh bersama mereka.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-8 py-3 text-base font-semibold text-white hover:bg-primary-500 transition-colors"
            >
              Konsultasi Gratis Sekarang
            </a>
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border-2 border-gray-300 px-8 py-3 text-base font-semibold text-gray-700 hover:border-primary-600 hover:text-primary-600 transition-colors"
            >
              Lihat Projek Klien
            </a>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-600">
            {trustSignals.map((t) => (
              <div key={t} className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary-600" />
                <span>{t}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-6 rounded-xl bg-primary-50 border border-primary-200">
            <p className="text-gray-700 italic">
              "Dari pencatatan manual jadi punya dashboard lengkap—tanpa pusing migrasi data"
            </p>
            <p className="mt-2 text-sm font-semibold text-gray-900">
              - Pak Umar, Owner PT Sima Pekasya (Gunung Pati)
            </p>
          </div>
        </div>

        <nav className="mt-16 flex flex-wrap justify-center gap-6 text-sm text-gray-600">
          {links.map((l) => (
            <a key={l} href="#" className="hover:text-primary-600 transition-colors">
              {l}
            </a>
          ))}
        </nav>

        <p className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} CodeNano. Hak cipta dilindungi.
        </p>
      </div>
    </footer>
  )
}
