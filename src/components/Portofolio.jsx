import React from "react";

export default function Portofolio({
  showHeader = true,
  showFilters = false,
  variant = "home",
}) {
  const projects = [
    {
      id: 1,
      title: "SmartPos",
      description:
        "Sistem kasir digital yang membantu bisnis mengelola transaksi, stok barang, dan laporan keuangan dengan mudah.",
      image: "https://via.placeholder.com/600x400?text=SmartPOS+Dashboard",
      bgColor: "from-blue-50 to-indigo-100",
    },
    {
      id: 2,
      title: "MediCare",
      description:
        "Aplikasi rumah sakit untuk manajemen pasien, rekam medis elektronik, jadwal dokter, dan pemantauan kesehatan real-time.",
      image: "https://via.placeholder.com/600x400?text=MediCare+System",
      bgColor: "from-cyan-50 to-blue-100",
    },
    {
      id: 3,
      title: "BookingEase",
      description:
        "Sistem reservasi online untuk hotel, restoran, dan layanan lainnya dengan fitur jadwal otomatis serta notifikasi pemesanan.",
      image: "https://via.placeholder.com/600x400?text=BookingEase+Platform",
      bgColor: "from-yellow-50 to-orange-100",
    },
    {
      id: 4,
      title: "EduLearn",
      description:
        "Platform pembelajaran online dengan fitur kelas virtual, manajemen tugas, dan analitik performa siswa untuk institusi pendidikan.",
      image: "https://via.placeholder.com/600x400?text=EduLearn+Platform",
      bgColor: "from-purple-50 to-indigo-100",
    },
    {
      id: 5,
      title: "FoodMarket",
      description:
        "Aplikasi pemesanan makanan online dengan fitur pelacakan pengiriman real-time dan sistem pembayaran terintegrasi.",
      image: "https://via.placeholder.com/600x400?text=FoodMarket+App",
      bgColor: "from-green-50 to-emerald-100",
    },
    {
      id: 6,
      title: "TravelGo",
      description:
        "Website pemesanan perjalanan dengan fitur pencarian destinasi, perbandingan harga, dan rekomendasi paket wisata personal.",
      image: "https://via.placeholder.com/600x400?text=TravelGo+Website",
      bgColor: "from-orange-50 to-red-100",
    },
  ];

  const displayProjects = variant === "home" ? projects.slice(0, 3) : projects;

  return (
    <section className={`px-4 lg:px-6 py-16 lg:py-24`}>
      <div className="max-w-7xl mx-auto">
        {showFilters && variant === "full" && (
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              "All Proyek",
              "Company Profile",
              "Travel",
              "Katalog Produk",
              "Usaha Makanan",
              "Pendidikan",
            ].map((label) => (
              <button
                key={label}
                className={`px-6 py-3 ${
                  label === "All Proyek"
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                } rounded-full font-medium transition-colors`}
              >
                {label}
              </button>
            ))}
          </div>
        )}

        {showHeader && (
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <div>
              {variant === "home" && (
                <div className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-600 rounded-full text-sm font-medium mb-4">
                  Portofolio
                </div>
              )}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
                Proyek Unggulan Kami
              </h2>
            </div>
            {variant === "home" && (
              <a
                href="/portfolio"
                className="px-6 py-2 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors mt-4 sm:mt-0 inline-block text-center"
              >
                Show All
              </a>
            )}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              {variant === "home" ? (
                <div
                  className={`aspect-video bg-gradient-to-br ${project.bgColor} p-6 flex items-center justify-center`}
                >
                  {project.id === 1 && (
                    <div className="w-full h-full bg-white rounded-lg shadow-sm p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="h-8 bg-blue-500 rounded"></div>
                        <div className="h-8 bg-green-500 rounded"></div>
                        <div className="h-8 bg-orange-500 rounded"></div>
                      </div>
                      <div className="space-y-2">
                        <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        <div className="h-2 bg-gray-200 rounded w-1/2"></div>
                      </div>
                    </div>
                  )}
                  {project.id === 2 && (
                    <div className="w-full h-full bg-white rounded-lg shadow-sm p-4">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex space-x-2">
                          <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex justify-between items-center">
                          <div className="h-3 bg-gray-300 rounded w-1/4"></div>
                          <div className="h-6 bg-blue-500 rounded px-2"></div>
                        </div>
                        <div className="h-2 bg-gray-200 rounded"></div>
                        <div className="h-2 bg-gray-200 rounded w-4/5"></div>
                        <div className="h-2 bg-gray-200 rounded w-3/5"></div>
                      </div>
                    </div>
                  )}
                  {project.id === 3 && (
                    <div className="w-full h-full bg-gradient-to-br from-orange-200 to-yellow-200 rounded-lg relative overflow-hidden">
                      <div className="absolute inset-0 p-4">
                        <div className="grid grid-cols-4 gap-2 h-full">
                          <div className="bg-yellow-400 rounded shadow-sm"></div>
                          <div className="bg-yellow-300 rounded shadow-sm"></div>
                          <div className="bg-orange-400 rounded shadow-sm"></div>
                          <div className="bg-yellow-500 rounded shadow-sm"></div>
                          <div className="bg-orange-300 rounded shadow-sm"></div>
                          <div className="bg-yellow-400 rounded shadow-sm"></div>
                          <div className="bg-orange-500 rounded shadow-sm"></div>
                          <div className="bg-yellow-300 rounded shadow-sm"></div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="aspect-video bg-white p-4 border-b">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {project.description}
                </p>
                <button className="w-full py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
                  Lihat Detail
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
