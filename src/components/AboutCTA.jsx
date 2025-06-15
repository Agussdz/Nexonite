export default function AboutCTA() {
  return (
    <section className="px-4 lg:px-6 py-16 lg:py-24 bg-gradient-to-r from-purple-600 to-pink-600">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
          Siap Memulai Perjalanan Digital Bersama Kami?
        </h2>
        <p className="text-xl text-white/90 mb-8 leading-relaxed">
          Mari wujudkan visi digital Anda dengan tim ahli yang berpengalaman.
          Konsultasi gratis untuk menentukan solusi terbaik bagi bisnis Anda.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-purple-600 rounded-lg font-semibold hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg">
            Konsultasi Gratis
          </button>
          <button className="px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
            Lihat Portfolio
          </button>
        </div>
      </div>
    </section>
  );
}
