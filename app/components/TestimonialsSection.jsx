"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Carlos M.",
    location: "Pampatar",
    text: "Excelente trabajo en la remodelación de mi cocina. Cumplieron tiempos y el acabado fue impecable.",
  },
  {
    name: "María R.",
    location: "Porlamar",
    text: "Instalaron la planta eléctrica y todo quedó perfecto. Muy responsables y atentos.",
  },
  {
    name: "José L.",
    location: "La Asunción",
    text: "Trabajo de drywall y electricidad muy profesional. Los recomiendo 100%.",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 bg-white">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-16"
        >
          Lo Que Dicen Nuestros Clientes
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-50 border border-gray-200 p-8 rounded-2xl shadow-sm hover:shadow-lg transition"
            >
              <div className="text-yellow-500 mb-4 text-lg">
                ★★★★★
              </div>

              <p className="text-gray-600 mb-6 italic">
                "{item.text}"
              </p>

              <div className="font-semibold text-gray-900">
                {item.name}
              </div>
              <div className="text-sm text-gray-500">
                {item.location}
              </div>
            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}