import { BarChart3, ThumbsUp, Grid3X3 } from "lucide-react";

export default function OurFeatures() {
  return (
    <section className="px-4 lg:px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-6">
            Keunggulan Kami
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Mengapa Harus Membuat Website Di Nexonite?
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Feature 1 */}
          <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl p-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <BarChart3 size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Performa Maksimal</h3>
            <p className="text-white/90 leading-relaxed">
              Website cepat, responsif, dan responsif untuk pengalaman terbaik
              bagi pengunjung.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
              <ThumbsUp size={32} className="text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              SEO Friendly
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Optimasi struktur dan kecepatan agar website lebih mudah ditemukan
              di mesin pencari Google.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
            <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6">
              <Grid3X3 size={32} className="text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Template Siap Pakai
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Kami menyediakan banyak template website siap pakai sesuai
              kebutuhan anda.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
