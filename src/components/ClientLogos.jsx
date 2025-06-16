export default function ClientLogos() {
  return (
    <section className="px-4 lg:px-6 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left side - Text */}
          <div className="text-center lg:text-left">
            <h2 className="text-2xl font-bold text-gray-700">
              Lebih Dari 50+ Klien
              <br />
              Merasa Puas
            </h2>
          </div>

          {/* Right side - Logos */}
          <div className="flex flex-wrap justify-center lg:justify-end items-center gap-6 lg:gap-8 opacity-70">
            <div className="text-xl lg:text-2xl font-bold text-red-500">
              SKiLLSHARE.
            </div>
            <div className="text-xl lg:text-2xl font-bold text-orange-500">
              Udemy
            </div>
            <div className="text-2xl lg:text-3xl font-bold">
              <span className="text-blue-500">G</span>
              <span className="text-red-500">o</span>
              <span className="text-yellow-500">o</span>
              <span className="text-blue-500">g</span>
              <span className="text-green-500">l</span>
              <span className="text-red-500">e</span>
            </div>
            <div className="text-xl lg:text-2xl font-bold text-blue-600">
              coursera
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
