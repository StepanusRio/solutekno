"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Passions_Conflict } from "next/font/google";
import HeroSection from "@/components/hero";
import LayananSection from "@/components/layanan";
import { PortofolioSection } from "@/components/portofolio";
import { TestimonialSections } from "@/components/testimonials";
import { BlogSection } from "@/components/blog";
import { PricingSection } from "@/components/pricing";
import { CallToActionSection } from "@/components/cta";
import { ContactSection } from "@/components/contact";
import { blogPost, portofolioItem, testimonial } from "@/types";

const passionsConflict = Passions_Conflict({
  variable: "--font-passions-conflict",
  subsets: ["latin"],
  weight: "400",
  display: "auto",
});

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [portfolio, setPortfolio] = useState<portofolioItem[]>([]);
  const [testimonials, setTestimonials] = useState<testimonial[]>([]);
  const [blogPosts, setBlogPosts] = useState<blogPost[]>([]);

  // Simulate fetching data
  // In a real application, you would fetch this data from an API or database
  // For now, we will use hardcoded data
  useEffect(() => {
    // Simulate fetching data from an API
    setTimeout(() => {
      setBlogPosts([]);
      setPortfolio([]);
      setTestimonials([]);
    }, 50);
    // TODO: Replace with actual API calls
    Promise.all([
      fetch("/api/portfolio")
        .then((res) => res.json())
        .then((data) => setPortfolio(data as portofolioItem[])),
      fetch("/api/testimonials")
        .then((res) => res.json())
        .then((data) => setTestimonials(data as testimonial[])),
      fetch("/api/blog")
        .then((res) => res.json())
        .then((data) => setBlogPosts(data as blogPost[])),
    ]);
  }, []);
  return (
    <main className="min-h-screen bg-white text-gray-800">
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-blue-600">
            <span className={`${passionsConflict.className} text-5xl`}>S</span>
            olutekno
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#layanan" className="hover:text-blue-600 transition">
              Layanan
            </a>
            {portfolio.length > 0 && (
              <a href="#portfolio" className="hover:text-blue-600 transition">
                Portfolio
              </a>
            )}
            <a href="#blog" className="hover:text-blue-600 transition">
              Blog
            </a>
            <a href="#harga" className="hover:text-blue-600 transition">
              Harga
            </a>
            <a href="#contact" className="hover:text-blue-600 transition">
              Kontak
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t px-6 py-4">
            <div className="flex flex-col space-y-4">
              <a href="#layanan" className="hover:text-blue-600 transition">
                Layanan
              </a>
              <a href="#portfolio" className="hover:text-blue-600 transition">
                Portfolio
              </a>
              <a href="#blog" className="hover:text-blue-600 transition">
                Blog
              </a>
              <a href="#harga" className="hover:text-blue-600 transition">
                Harga
              </a>
              <a href="#contact" className="hover:text-blue-600 transition">
                Kontak
              </a>
            </div>
          </div>
        )}
      </nav>
      <HeroSection />
      <LayananSection />
      <PortofolioSection portofolioItems={portfolio} />
      <TestimonialSections testimonials={testimonials} />
      <BlogSection blogPosts={blogPosts} />
      <PricingSection />
      <CallToActionSection />
      <ContactSection />
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">Solutekno</div>
              <p className="text-gray-400 mb-4">
                Solusi digital terpercaya untuk mengembangkan bisnis Anda dengan
                teknologi modern dan inovatif. (TEST)
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Layanan</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <p className="hover:text-white transition">Web Development</p>
                </li>
                <li>
                  <p className="hover:text-white transition">Mobile Apps</p>
                </li>
                <li>
                  <p className="hover:text-white transition">
                    Sistem Informasi
                  </p>
                </li>
                <li>
                  <p className="hover:text-white transition">Maintenance</p>
                </li>
              </ul>
            </div>

            <div></div>
            {/* <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition">
                    Karir
                  </a>
                </li>
              </ul>
            </div> */}

            <div>
              <h3 className="text-lg font-semibold mb-4">Kontak</h3>
              <ul className="space-y-2 text-gray-400">
                <li>Semarang, Jawa Tengah</li>
                <li>
                  <a
                    href="https://wa.link/1r6x4z"
                    className="hover:text-white transition"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    +62 8564-0598-173
                  </a>
                </li>
                <li>
                  <a href="mailto:info@solutekno.my.id">info@solutekno.my.id</a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Solutekno. All rights reserved.
              Made with ❤️ in Indonesia
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
