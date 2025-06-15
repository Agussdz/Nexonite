import { Star } from "lucide-react";
import hero3d from "../assets/hero-3d.png";

export default function HeroSections({ variant = "home" }) {
  if (variant === "templates") {
    return (
      <section className="px-4 lg:px-6 py-12 lg:py-20 bg-gradient-to-r from-pink-500 to-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Pilih Template Menarik Yang Sesuai Dengan Kebutuhan Anda!
              </h1>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center mx-auto">
                <div className="w-64 h-48 relative">
                  {/* Website mockups illustration */}
                  <div className="absolute inset-0 grid grid-cols-2 gap-2">
                    <div className="bg-blue-100 rounded-lg p-2">
                      <div className="w-full h-4 bg-blue-500 rounded mb-2"></div>
                      <div className="space-y-1">
                        <div className="h-2 bg-gray-300 rounded"></div>
                        <div className="h-2 bg-gray-300 rounded w-3/4"></div>
                      </div>
                    </div>
                    <div className="bg-yellow-100 rounded-lg p-2">
                      <div className="w-full h-4 bg-yellow-500 rounded mb-2"></div>
                      <div className="space-y-1">
                        <div className="h-2 bg-gray-300 rounded"></div>
                        <div className="h-2 bg-gray-300 rounded w-2/3"></div>
                      </div>
                    </div>
                    <div className="bg-green-100 rounded-lg p-2">
                      <div className="w-full h-4 bg-green-500 rounded mb-2"></div>
                      <div className="space-y-1">
                        <div className="h-2 bg-gray-300 rounded"></div>
                        <div className="h-2 bg-gray-300 rounded w-4/5"></div>
                      </div>
                    </div>
                    <div className="bg-indigo-100 rounded-lg p-2">
                      <div className="w-full h-4 bg-indigo-500 rounded mb-2"></div>
                      <div className="space-y-1">
                        <div className="h-2 bg-gray-300 rounded"></div>
                        <div className="h-2 bg-gray-300 rounded w-1/2"></div>
                      </div>
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

  if (variant === "portfolio") {
    return (
      <section className="px-4 lg:px-6 py-12 lg:py-20 bg-gradient-to-r from-indigo-600 to-indigo-600">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6">
                Kumpulan Proyek Yang Telah Kami Kembangkan Sesuai Dengan
                Kebutuhan Berbagai Sektor
              </h1>
            </div>

            {/* Hero Illustration */}
            <div className="relative">
              <div className="w-80 h-80 bg-white rounded-full flex items-center justify-center mx-auto">
                <div className="w-64 h-64 relative">
                  {/* Person with charts illustration */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative w-full h-full">
                      {/* Blue person */}
                      <div className="absolute bottom-0 right-8 w-24 h-40 bg-blue-500 rounded-t-full">
                        {/* Head */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-blue-500 rounded-full">
                          {/* Face */}
                          <div className="absolute top-3 left-3 w-4 h-4 bg-white rounded-full"></div>
                        </div>
                        {/* Arm */}
                        <div className="absolute top-4 -left-12 w-16 h-4 bg-blue-500 rounded-full transform -rotate-12"></div>
                      </div>

                      {/* Charts and elements */}
                      <div className="absolute top-4 left-4 w-24 h-16 bg-blue-100 rounded-lg border-2 border-blue-400 flex items-center justify-center">
                        <div className="grid grid-cols-3 gap-1 p-1">
                          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
                          <div className="h-3 w-3 rounded-full bg-green-500"></div>
                          <div className="h-3 w-3 rounded-full bg-cyan-500"></div>
                          <div className="h-1 w-full bg-red-400 col-span-3"></div>
                          <div className="h-1 w-full bg-blue-400 col-span-3"></div>
                          <div className="h-1 w-full bg-green-400 col-span-3"></div>
                        </div>
                      </div>

                      {/* Puzzle piece */}
                      <div className="absolute top-8 right-8 w-12 h-12">
                        <div className="w-10 h-10 bg-red-400 rounded-lg transform rotate-12"></div>
                        <div className="absolute top-6 left-6 w-10 h-10 bg-green-400 rounded-lg transform -rotate-12"></div>
                      </div>

                      {/* Clock */}
                      <div className="absolute bottom-12 left-8 w-16 h-16 bg-white rounded-full border-4 border-blue-500 flex items-center justify-center">
                        <div className="w-1 h-6 bg-blue-800 absolute transform origin-bottom rotate-45"></div>
                        <div className="w-1 h-4 bg-blue-800 absolute transform origin-bottom -rotate-45"></div>
                        <div className="w-2 h-2 bg-blue-800 absolute rounded-full"></div>
                      </div>

                      {/* Stats */}
                      <div className="absolute bottom-4 right-4 w-20 h-10 bg-blue-100 rounded-lg border border-blue-400 flex items-center justify-center">
                        <div className="w-full h-4 flex space-x-1 px-1">
                          <div className="w-1/4 h-full bg-blue-500"></div>
                          <div className="w-1/3 h-full bg-red-500"></div>
                          <div className="w-1/5 h-full bg-green-500"></div>
                          <div className="w-1/6 h-full bg-yellow-500"></div>
                        </div>
                      </div>
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

  // Default home variant
  return (
    <section className="px-4 lg:px-6 py-12 ">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center ">
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-medium">
              ✨ Solusi Digital Untuk Bisnis Masa Depan
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Bangun Aplikasi Website Yang{" "}
              <span className="text-indigo-600">Cepat</span>,{" "}
              <span className="text-indigo-600">Modern</span>, Dan Siap{" "}
              <span className="text-indigo-600">Mengembangkan</span> Bisnis
              Anda.
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 leading-relaxed">
              Siap memulai perjalanan digital Anda? Hubungi kami untuk
              konsultasi gratis dan temukan solusi terbaik untuk bisnis Anda!
            </p>

            {/* CTA Button with Social Proof */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-indigo-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg">
                Hubungi Kami
              </button>

              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-blue-500 border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                    A
                  </div>
                  <div className="w-10 h-10 rounded-full bg-green-500 border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                    B
                  </div>
                  <div className="w-10 h-10 rounded-full bg-orange-500 border-2 border-white flex items-center justify-center text-white text-sm font-semibold">
                    C
                  </div>
                </div>
                <div className="text-sm">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <p className="text-gray-600">4.9 dari 50+ Klien</p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="flex justify-end items-center">
            <div className="">
              <img
                src={hero3d}
                alt="Website building illustration"
                className="w-[90%] h-auto"
              />
            </div>
            {/* Background decoration */}
            <div className=""></div>
          </div>
        </div>
      </div>
    </section>
  );
}
