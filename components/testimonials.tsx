import { testimonial } from "@/types";
import { Star } from "lucide-react";
import Image from "next/image";

interface TestimonialProps {
  testimonials: testimonial[] | [];
}

export const TestimonialSections = ({ testimonials }: TestimonialProps) => {
  if (!testimonials || testimonials.length === 0) {
    return null;
  }
  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Apa Kata Klien Kami</h2>
          <p className="text-xl text-gray-600">
            Kepercayaan dan kepuasan klien adalah prioritas utama kami
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border hover:shadow-lg transition-shadow"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="text-yellow-400 fill-current"
                    size={20}
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3">
                <Image
                  width={60}
                  height={60}
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
