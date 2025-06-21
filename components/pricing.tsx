import { CheckCircle } from "lucide-react";

export const PricingSection = () => {
  return (
    <section id="harga" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Paket Harga Terjangkau</h2>
          <p className="text-xl text-gray-600">
            Pilih paket yang sesuai dengan kebutuhan dan budget bisnis Anda
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-shadow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <p className="text-gray-600 mb-4">Perfect untuk startup & UKM</p>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                Rp 1-1.5 Juta
              </div>
              <p className="text-sm text-gray-500">CRUD App Sederhana</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Responsive
                Design
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Database
                Integration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Basic
                Authentication
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> 1 Bulan
                Support
              </li>
            </ul>
            <a
              href="https://wa.link/6dpti9"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Pilih Basic
              </button>
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-xl border-2 border-blue-600 relative transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium">
                Most Popular
              </span>
            </div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Standard</h3>
              <p className="text-gray-600 mb-4">
                Ideal untuk bisnis berkembang
              </p>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                Rp 2-3 Juta
              </div>
              <p className="text-sm text-gray-500">App + Admin Panel</p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Semua fitur
                Basic
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Admin
                Dashboard
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> API
                Integration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> 3 Bulan
                Support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Free
                Training
              </li>
            </ul>
            <a
              href="https://wa.me/6285640598173?text=Halo%20Solutekno%21%20Saya%20ingin%20tahu%20lebih%20lanjut%20tentang%20*Paket%20Standard*%20untuk%20aplikasi%20%2B%20admin%20panel.%20Apakah%20bisa%20diskusi%20lebih%20lanjut%3F%20%F0%9F%91%A8%E2%80%8D%F0%9F%92%BB
"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-blue-600 text-white py-3 rounded-full font-semibold hover:bg-blue-700 transition">
                Pilih Standard
              </button>
            </a>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-sm border hover:shadow-lg transition-shadow">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <p className="text-gray-600 mb-4">Solusi enterprise lengkap</p>
              <div className="text-3xl font-bold text-blue-600 mb-2">
                Rp 3.5 Juta+
              </div>
              <p className="text-sm text-gray-500">
                Full-stack + API/Integrasi
              </p>
            </div>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Semua fitur
                Standard
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Custom
                Features
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Third-party
                Integration
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> 6 Bulan
                Support
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={18} className="text-green-500" /> Priority
                Support
              </li>
            </ul>
            <a
              href="https://wa.me/6285640598173?text=Halo%20Tim%20Solutekno%21%20Saya%20tertarik%20menggunakan%20*Paket%20Premium*%20untuk%20sistem%20full-stack%20%2B%20integrasi%20API.%20Bisa%20dibantu%20estimasi%20%26%20detail%20teknisnya%3F%20%F0%9F%9A%80
"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="w-full bg-gray-100 text-gray-800 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Pilih Premium
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
