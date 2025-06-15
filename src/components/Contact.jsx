export default function Contact() {
  return (
    <section className="px-4 lg:px-6 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dGVhbXdvcmt8ZW58MHx8MHx8fDA%3D"
              alt="Team discussing website project"
              className="w-full h-[330px] object-cover"
            />
          </div>

          {/* Content */}
          <div className="space-y-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
              Bangun Website Impian Anda Bersama Kami
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Kami menghadirkan solusi digital untuk bisnis Anda dengan website
              yang cepat, modern, dan responsif. Dapatkan desain profesional,
              fitur unggulan, serta performa maksimal untuk pengalaman terbaik.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-lg font-semibold hover:from-pink-600 hover:to-purple-700 transition-all transform hover:scale-105 shadow-lg">
              Hubungi Kami
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
