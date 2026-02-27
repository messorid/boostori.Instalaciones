"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const images = [
  "/gallery/1.png",
  "/gallery/2.png",
  "/gallery/3.png",
  "/gallery/4.png",
];

export default function GallerySection() {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 1.1, spacing: 15 },
  });

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
          Proyectos Realizados
        </h2>

        {/* MOBILE SLIDER */}
        <div className="block md:hidden">
          <div ref={sliderRef} className="keen-slider">
            {images.map((img, index) => (
              <div
                key={index}
                className="keen-slider__slide rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-80 w-full">
                  <Image
                    src={img}
                    alt="Proyecto realizado"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            ← Desliza →
          </p>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid md:grid-cols-2 gap-8">
          {images.map((img, index) => (
            <div
              key={index}
              className="rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition"
            >
              <div className="relative h-96 w-full">
                <Image
                  src={img}
                  alt="Proyecto realizado"
                  fill
                  className="object-cover hover:scale-105 transition duration-500"
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}