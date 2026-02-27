"use client";

import { motion } from "framer-motion";

export default function ContactFormSection() {
  return (
    <section id="contacto" className="py-32 bg-white">

      <div className="max-w-3xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-6"
        >
          Solicita tu Presupuesto
        </motion.h2>

        <p className="text-center text-gray-600 mb-12">
          Déjanos tus datos y nos comunicaremos contigo lo antes posible.
        </p>

        <form className="space-y-6">

          <input
            type="text"
            placeholder="Nombre completo"
            className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <input
            type="tel"
            placeholder="Teléfono"
            className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <textarea
            placeholder="Cuéntanos qué servicio necesitas"
            rows={4}
            className="w-full border border-gray-300 rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-500"
          />

          <button
            type="submit"
            className="w-full bg-yellow-500 hover:bg-yellow-600 transition py-4 rounded-full font-semibold text-black"
          >
            Enviar Solicitud
          </button>

        </form>

      </div>

    </section>
  );
}