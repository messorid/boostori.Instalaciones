"use client";

import { motion } from "framer-motion";

export default function LocationSection() {
  return (
    <section className="py-28 bg-gray-50">

      <div className="max-w-5xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-10"
        >
          Trabajamos en Toda la Isla de Margarita
        </motion.h2>

        <p className="text-gray-600 mb-12 text-lg">
          Atendemos proyectos residenciales y comerciales en:
        </p>

        <div className="flex flex-wrap justify-center gap-4">

          {[
            "Pampatar",
            "Porlamar",
            "La Asunción",
            "Maneiro",
            "Juan Griego",
            "Playa El Agua",
          ].map((city, index) => (
            <span
              key={index}
              className="bg-white border border-gray-200 px-6 py-3 rounded-full shadow-sm text-sm font-medium"
            >
              {city}
            </span>
          ))}

        </div>

      </div>

    </section>
  );
}