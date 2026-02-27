"use client";

import { motion } from "framer-motion";

export default function TrustSection() {
  return (
    <section className="relative py-20 bg-white text-center overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(245,158,11,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Soluciones Integrales en Isla de Margarita
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

          {[
            "Atención Rápida",
            "Trabajos Garantizados",
            "Personal Calificado",
            "Materiales de Calidad",
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-100 p-6 rounded-xl shadow-sm hover:shadow-md transition"
            >
              <p className="font-semibold">{item}</p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}