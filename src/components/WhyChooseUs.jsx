import {
  Shield,
  Rocket,
  HeadphonesIcon,
  Palette,
  Code,
  TrendingUp,
} from "lucide-react";

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: Shield,
      title: "Keamanan Terjamin",
      description:
        "Website dengan standar keamanan tinggi dan perlindungan data yang optimal",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Rocket,
      title: "Performa Tinggi",
      description:
        "Loading cepat dan optimasi SEO untuk performa website yang maksimal",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: HeadphonesIcon,
      title: "Support 24/7",
      description:
        "Tim support yang siap membantu Anda kapan saja dengan respon cepat",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Palette,
      title: "Desain Modern",
      description: "Desain yang menarik, responsif, dan mengikuti tren terkini",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: Code,
      title: "Teknologi Terdepan",
      description: "Menggunakan teknologi web terbaru untuk hasil yang optimal",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: TrendingUp,
      title: "ROI Maksimal",
      description:
        "Investasi yang menguntungkan dengan peningkatan bisnis yang signifikan",
      color: "from-indigo-500 to-purple-500",
    },
  ];

  return (
    <section className="px-4 lg:px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
            Keunggulan Kami
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Mengapa Memilih NexoNite?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Kami tidak hanya membuat website, tetapi membangun solusi digital
            yang mengembangkan bisnis Anda.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
              >
                <reason.icon size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
