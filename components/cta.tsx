export const CallToActionSection = () => {
  return (
    <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Siap Memulai Project Anda?</h2>
        <p className="text-xl mb-8 opacity-90">
          Konsultasikan ide Anda dengan tim expert kami. Gratis, tanpa komitmen.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#contact"
            className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl hover:bg-blue-50 transition-all transform hover:-translate-y-1"
          >
            Konsultasi Gratis Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};
