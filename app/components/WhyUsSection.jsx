"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "Experiencia Comprobada",
    desc: "Más de 10 años desarrollando proyectos residenciales y comerciales en Margarita.",
  },
  {
    title: "Garantía en Cada Trabajo",
    desc: "Respaldamos nuestros proyectos con compromiso y responsabilidad.",
  },
  {
    title: "Materiales de Calidad",
    desc: "Utilizamos materiales duraderos y adecuados para cada tipo de instalación.",
  },
  {
    title: "Atención Rápida",
    desc: "Respuesta inmediata y acompañamiento durante todo el proceso.",
  },
  {
    title: "Presupuestos Claros",
    desc: "Sin costos ocultos ni sorpresas inesperadas.",
  },
  {
    title: "Equipo Profesional",
    desc: "Personal capacitado con experiencia técnica en múltiples áreas.",
  },
];

export default function WhyUsSection() {
  return (
    <section className="py-28 bg-gray-50 overflow-hidden">

      <div className="max-w-6xl mx-auto px-6 text-center">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold mb-6"
        >
          ¿Por Qué Elegirnos?
        </motion.h2>

        <p className="text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          Somos una empresa comprometida con la calidad, la responsabilidad y la satisfacción de cada cliente.
        </p>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              {/* Icono minimalista */}
              <div className="w-12 h-12 mx-auto mb-6 rounded-full bg-yellow-500/15 flex items-center justify-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
              </div>

              <h3 className="text-lg font-semibold mb-3 text-gray-900">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.desc}
              </p>

            </motion.div>
          ))}

        </div>

      </div>

    </section>
  );
}