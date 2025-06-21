import { ChevronRight } from "lucide-react";
import React from "react";

function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-600 via-indigo-700 to-purple-800 text-white py-32 px-6 text-center overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="mb-6">
          <span className="inline-block bg-white/20 text-white px-4 py-2 rounded-full text-sm font-medium mb-4">
            🚀 Transformasi Digital Dimulai Dari Sini
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Wujudkan Ide Jadi
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">
            Aplikasi Nyata
          </span>
        </h1>

        <p className="text-xl md:text-2xl max-w-3xl mx-auto mb-8 leading-relaxed opacity-90">
          Solusi digital terpercaya untuk mengembangkan bisnis Anda. Dari konsep
          hingga deploy, kami hadirkan teknologi yang menguntungkan.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="#contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1 flex items-center gap-2"
          >
            Konsultasi Gratis <ChevronRight size={20} />
          </a>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-3xl font-bold">10+</div>
            <div className="text-blue-200">Project Selesai</div>
          </div>
          <div>
            <div className="text-3xl font-bold">98%</div>
            <div className="text-blue-200">Client Satisfaction</div>
          </div>
          <div>
            <div className="text-3xl font-bold">2</div>
            <div className="text-blue-200">Tahun Pengalaman</div>
          </div>
          <div>
            <div className="text-3xl font-bold">24/7</div>
            <div className="text-blue-200">Support</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
