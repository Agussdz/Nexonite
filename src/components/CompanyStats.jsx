import { Users, Award, Clock, Zap } from "lucide-react";

export default function CompanyStats() {
  const stats = [
    {
      icon: Users,
      number: "500+",
      label: "Klien Puas",
      description: "Bisnis yang telah mempercayai kami",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      number: "98%",
      label: "Tingkat Kepuasan",
      description: "Klien yang merekomendasikan layanan kami",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Clock,
      number: "24/7",
      label: "Support",
      description: "Dukungan teknis sepanjang waktu",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: Zap,
      number: "3x",
      label: "Lebih Cepat",
      description: "Proses pengembangan dibanding kompetitor",
      color: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section className="px-4 lg:px-6 py-16 lg:py-24 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Pencapaian yang Membanggakan
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Angka-angka ini mencerminkan dedikasi kami dalam memberikan layanan
            terbaik untuk setiap klien.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 text-center"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-800 mb-2">
                {stat.label}
              </div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
