import React from "react";
import { Link } from "react-router-dom"; // Gunakan ini jika Anda menggunakan React Router

function Templates({
  showHeader = true,
  showFilters = true,
  variant = "home",
}) {
  const templates = [
    {
      id: 1,
      title: "Company Profile - Website Perusahaan Mebel",
      category: "Company Profile",
      date: "1 - 28 July 2022",
      price: "Free",
      bgColor: "from-orange-100 to-yellow-100",
      iconColor: "bg-orange-200",
      description: "Furniture Website",
    },
    {
      id: 2,
      title: "Website Modern Perusahaan Tour & Travel",
      category: "Travel",
      date: "1 - 28 July 2022",
      price: "Free",
      bgColor: "from-blue-100 to-cyan-100",
      iconColor: "bg-blue-200",
      description: "Travel Website",
    },
    {
      id: 3,
      title: "Website UMKM Katalog Produk Fashion",
      category: "Katalog Produk",
      date: "1 - 28 July 2022",
      price: "Free",
      bgColor: "from-pink-100 to-purple-100",
      iconColor: "bg-pink-200",
      description: "Fashion Store",
    },
    {
      id: 4,
      title: "Website E-Learning Sekolah",
      category: "Pendidikan",
      date: "1 - 28 July 2022",
      price: "Free",
      bgColor: "from-indigo-100 to-blue-100",
      iconColor: "bg-indigo-200",
      description: "E-Learning",
    },
    {
      id: 5,
      title: "Website UMKM Warung Makanan",
      category: "Usaha Makanan",
      date: "1 - 28 July 2022",
      price: "Free",
      bgColor: "from-green-100 to-emerald-100",
      iconColor: "bg-green-200",
      description: "Food Business",
    },
    {
      id: 6,
      title: "Website Produk Restoran Steak",
      category: "Usaha Makanan",
      date: "1 - 28 July 2022",
      price: "Free",
      bgColor: "from-red-100 to-orange-100",
      iconColor: "bg-red-200",
      description: "Restaurant",
    },
  ];

  const displayTemplates =
    variant === "home" ? templates.slice(0, 6) : templates;

  return (
    <section
      className={`px-4 lg:px-6 py-16 lg:py-24 ${
        variant === "home" ? "bg-gray-50" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        {showHeader && (
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-0">
              {variant === "home"
                ? "Ratusan Template Website Siap Pakai"
                : "Pilih Template Menarik Yang Sesuai Dengan Kebutuhan Anda!"}
            </h2>
            {variant === "home" && (
              <Link
                to="/templates"
                className="px-6 py-2 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-colors inline-block text-center"
              >
                Show All
              </Link>
            )}
          </div>
        )}

        {/* Filter Tabs */}
        {showFilters && (
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              "All Template",
              "Company Profile",
              "Travel",
              "Katalog Produk",
              "Usaha Makanan",
              "Pendidikan",
            ].map((filter, index) => (
              <button
                key={index}
                className={`px-6 py-3 rounded-full font-medium transition-colors ${
                  index === 0
                    ? "bg-pink-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        )}

        {/* Template Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`aspect-video bg-gradient-to-br ${template.bgColor} p-4`}
              >
                <div className="w-full h-full bg-white rounded-lg shadow-sm flex items-center justify-center">
                  <div className="text-center">
                    <div
                      className={`w-16 h-16 ${template.iconColor} rounded-lg mx-auto mb-2`}
                    />
                    <div className="text-xs text-gray-600">
                      {template.description}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{template.date}</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">
                    {template.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {template.title}
                </h3>
                <button className="w-full py-3 border border-pink-500 text-pink-500 rounded-lg hover:bg-pink-50 transition-colors">
                  Preview Template
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Templates;
