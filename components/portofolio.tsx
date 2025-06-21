import { portofolioItem } from "@/types";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

interface PortofolioProps {
  portofolioItems: portofolioItem[] | [];
}

export const PortofolioSection = ({ portofolioItems }: PortofolioProps) => {
  if (!portofolioItems || portofolioItems.length === 0) {
    return null;
  }
  return (
    <section id="portfolio" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Portfolio Terbaru</h2>
          <p className="text-xl text-gray-600">
            Lihat hasil karya terbaik kami yang telah membantu berbagai bisnis
            berkembang
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {portofolioItems.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <Image
                  width={400}
                  height={300}
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-700">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                <div className="flex flex-wrap gap-2 mb-4">
                  {item.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-lg text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Lihat Detail <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Lihat Semua Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};
