export default function CompanyStory() {
  return (
    <section className="px-4 lg:px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium">
              Cerita Kami
            </div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Perjalanan Membangun Ekosistem Digital Indonesia
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              NexoNite lahir dari visi sederhana: membuat teknologi digital
              dapat diakses oleh semua bisnis di Indonesia. Dimulai pada tahun
              2022 oleh tim developer berpengalaman, kami melihat banyak UMKM
              dan perusahaan yang kesulitan beradaptasi dengan era digital.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Dengan semangat inovasi dan dedikasi tinggi, kami mengembangkan
              solusi website yang tidak hanya modern dan fungsional, tetapi juga
              mudah digunakan dan terjangkau. Setiap proyek yang kami kerjakan
              adalah komitmen kami untuk membantu bisnis Indonesia berkembang di
              era digital.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4">
              <div className="text-center p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                <div className="text-2xl font-bold text-purple-600 mb-2">
                  2022
                </div>
                <div className="text-gray-600 text-sm">Tahun Didirikan</div>
              </div>
              <div className="text-center p-4 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
                <div className="text-2xl font-bold text-blue-600 mb-2">15+</div>
                <div className="text-gray-600 text-sm">Tim Ahli</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square bg-gradient-to-br from-purple-100 to-pink-100 rounded-3xl p-8">
              <div className="w-full h-full bg-white rounded-2xl shadow-lg p-6 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center">
                    <div className="text-white text-2xl font-bold">N</div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 bg-gray-200 rounded w-32 mx-auto"></div>
                    <div className="h-3 bg-gray-200 rounded w-24 mx-auto"></div>
                    <div className="h-3 bg-gray-200 rounded w-28 mx-auto"></div>
                  </div>
                  <div className="flex justify-center space-x-2">
                    <div className="w-8 h-8 bg-blue-200 rounded-full"></div>
                    <div className="w-8 h-8 bg-green-200 rounded-full"></div>
                    <div className="w-8 h-8 bg-yellow-200 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
