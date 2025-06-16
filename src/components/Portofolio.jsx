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
      image:
        "https://turboly.com/blog/image/2018-03-05-4-Manfaat-POS-Berbasis-Web.jpg",
    },
    {
      id: 2,
      title: "MediCare",
      description:
        "Aplikasi rumah sakit untuk manajemen pasien, rekam medis elektronik, jadwal dokter, dan pemantauan kesehatan real-time.",
      image:
        "https://149842030.v2.pressablecdn.com/wp-content/uploads/2020/08/medicalcenter-free-website-template.jpg",
    },
    {
      id: 3,
      title: "BookingEase",
      description:
        "Sistem reservasi online untuk hotel, restoran, dan layanan lainnya dengan fitur jadwal otomatis serta notifikasi pemesanan.",
      image:
        "https://cozzy.id/uploads/0000/630/2024/12/17/cozzyid-hotel-murah-hotel-terdekat-penginapan-murah-penginapan-terdekat-booking-hotel-web-booking-hotel-sumber-gambar-frommers.jpeg",
    },
    {
      id: 4,
      title: "EduLearn",
      description:
        "Platform pembelajaran online dengan fitur kelas virtual, manajemen tugas, dan analitik performa siswa untuk institusi pendidikan.",
      image:
        "https://cdn.dribbble.com/userupload/38626229/file/original-0cd035ad3ec7d8fb103e12fd95bf8ac3.png?format=webp&resize=400x300&vertical=center",
    },
    {
      id: 5,
      title: "FoodMarket",
      description:
        "Aplikasi pemesanan makanan online dengan fitur pelacakan pengiriman real-time dan sistem pembayaran terintegrasi.",
      image:
        "https://cdn.dribbble.com/userupload/19057524/file/original-2fe5ebf358562f299b66f93895ea4892.png?format=webp&resize=400x300&vertical=center",
    },
    {
      id: 6,
      title: "TravelGo",
      description:
        "Website pemesanan perjalanan dengan fitur pencarian destinasi, perbandingan harga, dan rekomendasi paket wisata personal.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTj7Tov375ZRYgBr26ObImhRr7GaGX5rXmd2g&s",
    },
  ];

  const displayProjects = variant === "home" ? projects.slice(0, 3) : projects;

  return (
    <section className="px-4 lg:px-6 py-16 lg:py-24 ">
      <div className="max-w-7xl mx-auto pt-10">
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow "
            >
              <div className="aspect-video bg-white p-4 ">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
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
