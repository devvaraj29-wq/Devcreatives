import React from "react";

const services = [
  "Logo Design",
  "Product Card",
  "Cotton Box",
  "Hospital Files",
  "Visual Aids",
  "Visiting Cards",
  "Flex",
  "Poster",
  "Brochure",
  "Bill Book",
  "Covers",
  "Invitations",
  "Boards",
  "Stickers",
];

const gallery = [
  { id: 1, title: "Branding - Sample 1", src: "/images/placeholder1.jpg" },
  { id: 2, title: "Poster - Sample 2", src: "/images/placeholder2.jpg" },
  { id: 3, title: "Product Card - Sample", src: "/images/placeholder3.jpg" },
  { id: 4, title: "Visiting Card - Sample", src: "/images/placeholder4.jpg" },
  { id: 5, title: "Brochure - Sample", src: "/images/placeholder5.jpg" },
  { id: 6, title: "Sticker - Sample", src: "/images/placeholder6.jpg" },
];

export default function DevCreativesPortfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-900 via-red-800 to-red-700 text-gray-100">
      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-yellow-400 flex items-center justify-center shadow-lg">
            <span className="font-bold text-red-900">DC</span>
          </div>
          <div>
            <h1 className="text-2xl font-extrabold leading-tight">Dev Creatives</h1>
            <p className="text-sm opacity-90">Colorful • Creative • Professional</p>
          </div>
        </div>
        <nav className="hidden md:flex gap-6 items-center text-sm">
          <a href="#services" className="hover:underline">Services</a>
          <a href="#portfolio" className="hover:underline">Portfolio</a>
          <a href="#about" className="hover:underline">About</a>
          <a href="#contact" className="bg-yellow-400 text-red-900 px-4 py-2 rounded shadow font-semibold">Contact</a>
        </nav>
        <div className="md:hidden">
          <button className="bg-yellow-400 text-red-900 px-3 py-2 rounded">Menu</button>
        </div>
      </header>

      <section className="max-w-6xl mx-auto p-6 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">Colourful & Creative Graphic Design</h2>
          <p className="text-lg opacity-90 mb-6">Dev Creatives—We craft memorable logos, packaging, marketing materials and more. From visiting cards to bill books and full brand identity, we bring your ideas to life with vibrant, print-ready designs.</p>
          <div className="flex gap-4">
            <a href="#contact" className="bg-yellow-400 text-red-900 px-6 py-3 rounded-lg font-semibold shadow">Hire Us</a>
            <a href="#portfolio" className="border border-yellow-300 px-6 py-3 rounded-lg">View Work</a>
          </div>
        </div>
        <div className="md:w-1/2">
          <div className="rounded-2xl overflow-hidden shadow-2xl bg-white/5 p-6">
            <div className="w-full h-64 bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-yellow-300 font-bold text-2xl">
              Your showcase image here
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="max-w-6xl mx-auto p-6 mt-6">
        <h3 className="text-3xl font-bold mb-4">Our Services</h3>
        <p className="mb-4 opacity-90">Full print & digital design services — tailored for businesses, events and products.</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {services.map((s, idx) => (
            <div key={idx} className="p-4 rounded-lg bg-white/6 backdrop-blur-sm border border-white/6">
              <div className="text-sm font-semibold">{s}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="portfolio" className="max-w-6xl mx-auto p-6 mt-8">
        <h3 className="text-3xl font-bold mb-4">Selected Work</h3>
        <p className="mb-6 opacity-90">Click any image to view details. Replace the demo thumbnails with your real project images.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {gallery.map((item) => (
            <div key={item.id} className="rounded-lg overflow-hidden bg-white/6 border border-white/6 shadow-lg">
              <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
                <span className="p-4">{item.title} (replace image)</span>
              </div>
              <div className="p-4 bg-white/3">
                <div className="font-semibold">{item.title}</div>
                <div className="text-sm opacity-80 mt-1">Branding • Print • Packaging</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="max-w-6xl mx-auto p-6 mt-8 bg-white/3 rounded-2xl border border-white/6">
        <div className="md:flex items-center gap-6">
          <div className="md:w-2/3">
            <h3 className="text-2xl font-bold">About Dev Creatives</h3>
            <p className="mt-3 opacity-90">Dev Creatives is a full-service graphic design studio focused on colourful, print-ready and digital assets. We specialise in logo & identity, packaging, marketing collaterals and visual aids that communicate clearly and look great in print and online.</p>
            <ul className="mt-4 grid grid-cols-2 gap-2 text-sm">
              <li>✅ High-resolution print files</li>
              <li>✅ Fast turnarounds</li>
              <li>✅ Revisions until satisfied</li>
              <li>✅ Local & bulk printing coordination</li>
            </ul>
          </div>
          <div className="md:w-1/3 mt-6 md:mt-0">
            <div className="p-4 bg-white/5 rounded-lg">
              <div className="font-semibold">Quick Contact</div>
              <div className="text-sm mt-2">Email: devcreatives29@gmail.com</div>
              <div className="text-sm">Phone: +91 98765 43210</div>
              <div className="text-sm mt-2">Instagram: @dev_creatives</div>
            </div>
          </div>
        </div>
      </section>

      <footer id="contact" className="max-w-6xl mx-auto p-6 mt-12">
        <div className="rounded-2xl p-6 bg-gradient-to-r from-yellow-400 to-yellow-300 text-red-900">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div>
              <h4 className="text-2xl font-extrabold">Work with Dev Creatives</h4>
              <p className="opacity-90 mt-1">Send project details or sample files. We’ll reply with a quote and timeline.</p>
            </div>
            <div className="mt-4 md:mt-0">
              <a href="mailto:devcreatives29@gmail.com" className="bg-red-900 text-yellow-300 px-5 py-3 rounded font-semibold">Email Us</a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-white/80 mt-6">© {new Date().getFullYear()} Dev Creatives — All rights reserved</div>
      </footer>
    </div>
  );
}
