import React from "react";
import { Link } from "react-router-dom";

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
      imageUrl:
        "https://img.freepik.com/premium-psd/marketing-website-landing-page_153148-44.jpg",
      description: "Furniture Website",
    },
    {
      id: 2,
      title: "Website Modern Perusahaan Tour & Travel",
      category: "Travel",
      date: "1 - 28 July 2022",
      price: "Free",
      imageUrl:
        "https://nuansagiskonsultan.com/wp-content/uploads/2021/04/jasa-website-company-profile.png",
      description: "Travel Website",
    },
    {
      id: 3,
      title: "Website UMKM Katalog Produk Fashion",
      category: "Katalog Produk",
      date: "1 - 28 July 2022",
      price: "Free",
      imageUrl:
        "https://i.pinimg.com/736x/56/24/22/56242222edd0e1e89c66345b23a91897.jpg",
      description: "Fashion Store",
    },
    {
      id: 4,
      title: "Website E-Learning Sekolah",
      category: "Pendidikan",
      date: "1 - 28 July 2022",
      price: "Free",
      imageUrl:
        "https://cdn.dribbble.com/userupload/5293090/file/original-66575230f03691ae73622929c3274876.png?format=webp&resize=400x300&vertical=center",
      description: "E-Learning",
    },
    {
      id: 5,
      title: "Website UMKM Warung Makanan",
      category: "Usaha Makanan",
      date: "1 - 28 July 2022",
      price: "Free",
      imageUrl:
        "https://img.freepik.com/premium-psd/design-company-website-page_153148-49.jpg",
      description: "Food Business",
    },
    {
      id: 6,
      title: "Website Produk Restoran Steak",
      category: "Usaha Makanan",
      date: "1 - 28 July 2022",
      price: "Free",
      imageUrl:
        "https://img.freepik.com/premium-psd/business-consultancy-website-ui_217752-53.jpg",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayTemplates.map((template) => (
            <div
              key={template.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={template.imageUrl}
                  alt={template.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm text-gray-500">{template.date}</span>
                  <span className="px-3 py-1 bg-pink-100 text-pink-600 rounded-full text-sm font-medium">
                    {template.price}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {template.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">
                  {template.description}
                </p>
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
