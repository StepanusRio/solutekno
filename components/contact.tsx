import { Calendar, CheckCircle, Smartphone } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Hubungi Kami</h2>
        <p className="text-xl text-gray-600 mb-8">
          Tertarik bekerja sama? Mari diskusikan kebutuhan project Anda melalui
          WhatsApp.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="text-green-600" size={32} />
            </div>
            <h3 className="font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-600">Respons cepat dalam 1 jam</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Calendar className="text-blue-600" size={32} />
            </div>
            <h3 className="font-semibold mb-2">Konsultasi</h3>
            <p className="text-gray-600">Gratis & tanpa komitmen</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="text-purple-600" size={32} />
            </div>
            <h3 className="font-semibold mb-2">Estimasi</h3>
            <p className="text-gray-600">Timeline & budget jelas</p>
          </div>
        </div>

        <a
          href="https://wa.me/6285640598173?text=Halo%20Tim%20Solutekno%21%20Saya%20ingin%20konsultasi%20mengenai%20kebutuhan%20pembuatan%20aplikasi%2Fsistem.%20Bisa%20dibantu%20untuk%20diskusi%20awalnya%3F%20%F0%9F%99%8F
"
          target="_blank"
          className="inline-flex items-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:bg-green-600 hover:shadow-xl transition-all transform hover:-translate-y-1"
        >
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488" />
          </svg>
          Chat WhatsApp Sekarang
        </a>
      </div>
    </section>
  );
};
