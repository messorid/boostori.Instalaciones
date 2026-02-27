"use client";

import { motion } from "framer-motion";

export default function FinalCTA() {
  return (
    <section className="relative py-32 bg-gradient-to-br from-yellow-500 to-yellow-600 text-black text-center overflow-hidden">

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(255,255,255,0.2),transparent_60%)]" />

      <div className="relative max-w-4xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-8"
        >
          ¿Listo para comenzar tu proyecto?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mb-10 text-lg"
        >
          Contáctanos hoy mismo y recibe tu presupuesto sin compromiso.
        </motion.p>

        <motion.a
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          href="#contacto"
          className="bg-black text-white px-10 py-5 rounded-full font-semibold hover:bg-gray-900 transition"
        >
          Solicitar Presupuesto Ahora
        </motion.a>

      </div>

    </section>
  );
}