export default function AboutHero() {
  return (
    <section className="px-4 lg:px-6 py-12 lg:py-20 bg-gradient-to-r from-blue-500 to-cyan-600">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 text-white rounded-full text-sm font-medium mb-6">
              ✨ Tentang NexoNite
            </div>
            <h1 className="text-2xl lg:text-4xl font-bold leading-tight mb-6">
              Membangun Masa Depan Digital Indonesia Bersama-sama
            </h1>
            <p className="text-xl text-white/90 leading-relaxed mb-8">
              Sejak 2022, kami telah membantu lebih dari 500+ bisnis di
              Indonesia untuk bertransformasi digital dengan solusi website yang
              inovatif dan berkualitas tinggi.
            </p>
            <div className="grid grid-cols-3 gap-6">
              <div className="text-center bg-white rounded-md p-2">
                <div className="text-2xl text-blue-500 font-bold">500+</div>
                <div className="text-blue-500 text-sm">Klien Puas</div>
              </div>
              <div className="text-center bg-white rounded-md p-2">
                <div className="text-2xl text-blue-500 font-bold">4.9</div>
                <div className="text-blue-500 text-sm">Rating</div>
              </div>
              <div className="text-center bg-white rounded-md p-2">
                <div className="text-2xl text-blue-500 font-bold">3+</div>
                <div className="text-blue-500 text-sm">Tahun</div>
              </div>
            </div>
          </div>

          {/* Hero Illustration */}
          <div className="">
            <div className="  rounded-full flex items-center justify-center mx-auto">
              <img
                src="https://cdni.iconscout.com/illustration/premium/thumb/consumers-provide-feedback-about-product-satisfaction-online-illustration-download-in-svg-png-gif-file-formats--customer-review-stress-level-pack-people-illustrations-10522742.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
