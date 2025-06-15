import { Target, Eye, Heart } from "lucide-react";

export default function MissionVision() {
  return (
    <section className="px-4 lg:px-6 py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Misi, Visi & Nilai Kami
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fondasi yang kuat membangun kepercayaan. Inilah prinsip-prinsip yang
            memandu setiap langkah kami.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Mission */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6">
              <Target size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Misi Kami</h3>
            <p className="text-gray-600 leading-relaxed">
              Memberdayakan setiap bisnis di Indonesia dengan solusi digital
              yang inovatif, terjangkau, dan mudah digunakan untuk mencapai
              potensi maksimal mereka di era digital.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
            <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
              <Eye size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Visi Kami</h3>
            <p className="text-white/90 leading-relaxed">
              Menjadi partner digital terdepan yang membantu menciptakan
              ekosistem bisnis Indonesia yang lebih maju, kompetitif, dan
              berkelanjutan melalui teknologi.
            </p>
          </div>

          {/* Values */}
          <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
            <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6">
              <Heart size={32} className="text-white" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Nilai Kami
            </h3>
            <ul className="text-gray-600 space-y-2">
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Inovasi berkelanjutan
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Kualitas terjamin
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Pelayanan terbaik
              </li>
              <li className="flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                Transparansi penuh
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
