import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";

interface BlogPostProps {
  blogPosts: {
    title: string;
    date: string;
    readTime: string;
    excerpt: string;
    image: string;
  }[];
}

export const BlogSection = ({ blogPosts }: BlogPostProps) => {
  if (!blogPosts || blogPosts.length === 0) {
    return null;
  }
  return (
    <section id="blog" className="py-20 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Insight & Tips Teknologi</h2>
          <p className="text-xl text-gray-600">
            Dapatkan wawasan terbaru seputar teknologi dan pengembangan aplikasi
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="relative overflow-hidden">
                <Image
                  width={400}
                  height={250}
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar size={16} />
                    {post.date}
                  </div>
                  <div>{post.readTime} baca</div>
                </div>
                <h3 className="text-xl font-semibold mb-3 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                  Baca Selengkapnya <ArrowRight size={16} />
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition">
            Lihat Semua Artikel
          </button>
        </div>
      </div>
    </section>
  );
};
