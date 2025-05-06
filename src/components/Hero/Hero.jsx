import React from "react";

const slides = [
  {
    id: 1,
    image:
      "https://thecrate.themeslr.com/wp-content/uploads/2021/10/shave-crate-hero-1.jpg?id=7559",
    title: "Premium Grooming Kits",
    desc: "Unleash your best look with our curated shaving products.",
    btn1: "Shop Now",
    btn2: "Learn More",
  },
  {
    id: 2,
    image:
      "https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp",
    title: "Modern Essentials",
    desc: "Explore minimalist designs and modern lifestyle products.",
    btn1: "Explore",
    btn2: "Collections",
  },
  {
    id: 3,
    image:
      "https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp",
    title: "Adventure Awaits",
    desc: "Gear up for your next outdoor adventure in style.",
    btn1: "Get Gear",
    btn2: "See Tips",
  },
  {
    id: 4,
    image:
      "https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp",
    title: "Eco-Friendly Living",
    desc: "Sustainable products for a better tomorrow.",
    btn1: "Go Green",
    btn2: "Our Mission",
  },
];

const Hero = () => {
  return (
    <div className="carousel w-full">
      {slides.map((slide, index) => {
        const prev = (index - 1 + slides.length) % slides.length;
        const next = (index + 1) % slides.length;

        return (
          <div
            key={slide.id}
            id={`slide${slide.id}`}
            className="carousel-item relative w-full h-[80vh]"
          >
            <img
              src={slide.image}
              className="w-full h-full object-cover"
              alt={`Slide ${slide.id}`}
            />

            {/* Centered overlay content */}
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.3)] flex justify-center items-center">
              <div className="text-white text-center px-4 md:px-8">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">
                  {slide.title}
                </h2>
                <p className="text-lg md:text-xl mb-6 max-w-xl mx-auto">
                  {slide.desc}
                </p>
                <div className="flex justify-center gap-4 flex-wrap">
                  <button className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white font-semibold transition">
                    {slide.btn1}
                  </button>
                  <button className="bg-white hover:bg-gray-200 text-blue-600 px-6 py-2 rounded font-semibold transition">
                    {slide.btn2}
                  </button>
                </div>
              </div>
            </div>

            {/* Navigation arrows */}
            <div className="absolute left-5 right-5 top-1/2 flex justify-between transform -translate-y-1/2">
              <a href={`#slide${slides[prev].id}`} className="btn btn-circle">
                ❮
              </a>
              <a href={`#slide${slides[next].id}`} className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Hero;
