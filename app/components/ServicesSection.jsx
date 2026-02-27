"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";

const services = [
  {
    title: "Remodelación General",
    desc: "Ampliaciones y reformas completas.",
    image: "/services/remodelacion.png",
  },
  {
    title: "Plomería",
    desc: "Instalación y reparación hidráulica.",
    image: "/services/plomeria.png",
  },
  {
    title: "Electricidad",
    desc: "Instalaciones eléctricas seguras.",
    image: "/services/electricidad.png",
  },
  {
    title: "Drywall",
    desc: "Paredes y techos modernos.",
    image: "/services/drywall.png",
  },
  {
    title: "Planta Eléctrica",
    desc: "Sistemas de respaldo eléctrico.",
    image: "/services/planta.png",
  },
  {
    title: "Cristalería y Aluminio",
    desc: "Ventanas y cerramientos premium.",
    image: "/services/cristaleria.png",
  },
];

export default function ServicesSection() {
  const [sliderRef] = useKeenSlider({
    slides: { perView: 1.2, spacing: 15 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 20 },
      },
    },
  });

  return (
    <section className="py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Nuestros Servicios
        </h2>

        {/* MOBILE CARRUSEL */}
        <div className="block md:hidden">
          <div ref={sliderRef} className="keen-slider">
            {services.map((service, index) => (
              <div
                key={index}
                className="keen-slider__slide bg-white rounded-2xl shadow-md overflow-hidden"
              >
                <div className="relative h-56 w-full">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-2">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {service.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-gray-500 mt-4">
            ← Desliza →
          </p>
        </div>

        {/* DESKTOP GRID */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <div className="relative h-56 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}