import { Quote, Star } from "lucide-react";

export default function Testimoni() {
  const testimonials = [
    {
      id: 1,
      name: "Dika Anugrah",
      position: "Owner SmartPOS",
      avatar: "DA",
      avatarBg: "from-blue-400 to-purple-500",
      rating: 4,
      text: "Layanan Nexonite luar biasa! Website kasir digital yang mereka buat sangat cepat, mudah digunakan, dan membantu bisnis saya berjalan lebih efisien. Dukungan teknisnya juga sangat responsif!",
    },
    {
      id: 2,
      name: "Siti Rahma",
      position: "CEO Medicare",
      avatar: "SR",
      avatarBg: "from-pink-400 to-red-500",
      rating: 4,
      text: "Kami membutuhkan sistem manajemen rumah sakit yang modern, dan Nexonite berhasil menciptakan platform yang intuitif dan aman. Kini administrasi pasien lebih terorganisir!",
    },
  ];

  return (
    <section className="px-4 lg:px-6 py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Testimoni
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Apa Kata Mereka yang Sudah Membuat Website di Nexonite?
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <div className="text-pink-500 mb-4">
                <Quote size={48} className="fill-pink-500" />
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-gray-300 mr-4 overflow-hidden">
                  <div
                    className={`w-full h-full bg-gradient-to-br ${testimonial.avatarBg} flex items-center justify-center text-white font-bold`}
                  >
                    {testimonial.avatar}
                  </div>
                </div>
                <div>
                  <h4 className="text-purple-600 font-semibold">
                    {testimonial.name}
                  </h4>
                  <p className="text-gray-500 text-sm">
                    {testimonial.position}
                  </p>
                  <div className="flex mt-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                    {[...Array(5 - testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-gray-300" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
