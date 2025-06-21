import { CheckCircle, Code, Database, Users } from "lucide-react";
import React from "react";

function LayananSection() {
  return (
    <section id="layanan" className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Layanan Unggulan Kami</h2>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Solusi teknologi komprehensif yang dirancang khusus untuk kebutuhan
          bisnis modern
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <div className="group p-8 border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-blue-50 to-indigo-50">
          <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-200 transition">
            <Code className="text-blue-600" size={32} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">Aplikasi Web & Mobile</h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Bangun aplikasi modern dengan teknologi terdepan seperti React,
            Next.js, dan React Native. Responsive, cepat, dan user-friendly.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> Progressive
              Web App (PWA)
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" />{" "}
              Cross-platform Mobile
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> SEO Optimized
            </li>
          </ul>
        </div>

        <div className="group p-8 border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-pink-50">
          <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-purple-200 transition">
            <Database className="text-purple-600" size={32} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">
            Sistem Informasi Instansi
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Kelola data dan operasional bisnis dengan sistem informasi yang
            terintegrasi. Dari klinik hingga enterprise management.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> Custom
              Dashboard
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> Database
              Management
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> Role-based
              Access
            </li>
          </ul>
        </div>

        <div className="group p-8 border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-green-50 to-emerald-50">
          <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-green-200 transition">
            <Users className="text-green-600" size={32} />
          </div>
          <h3 className="text-2xl font-semibold mb-4">
            Maintenance & Dukungan
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Jaminan sistem selalu optimal dengan layanan maintenance proaktif
            dan dukungan teknis 24/7 dari tim expert kami.
          </p>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> 24/7
              Monitoring
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> Security
              Updates
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle size={16} className="text-green-500" /> Performance
              Optimization
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default LayananSection;
