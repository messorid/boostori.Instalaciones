"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Contáctanos",
    desc: "Cuéntanos tu proyecto y evaluamos tus necesidades.",
  },
  {
    number: "02",
    title: "Evaluación y Presupuesto",
    desc: "Analizamos el área y te entregamos una propuesta clara.",
  },
  {
    number: "03",
    title: "Ejecución Profesional",
    desc: "Realizamos el trabajo con materiales de calidad y supervisión.",
  },
  {
    number: "04",
    title: "Entrega Garantizada",
    desc: "Revisamos contigo y aseguramos satisfacción total.",
  },
];

export default function ProcessSection() {
  return (
    <section className="relative py-28 bg-black text-white overflow-hidden">

      {/* Glow sutil de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(245,158,11,0.12),transparent_50%)]" />

      <div className="relative max-w-6xl mx-auto px-6">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-center mb-20"
        >
          Cómo Trabajamos
        </motion.h2>

        <div className="relative">

          {/* Línea vertical */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-[2px] bg-yellow-500/40" />

          <div className="space-y-20">

            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 ${
                  index % 2 === 0
                    ? "md:justify-start"
                    : "md:justify-end"
                }`}
              >
                {/* Contenido */}
                <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-2xl w-full md:w-[45%] shadow-lg">

                  <span className="text-yellow-500 text-4xl font-bold block mb-4">
                    {step.number}
                  </span>

                  <h3 className="text-xl font-semibold mb-3">
                    {step.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.desc}
                  </p>

                </div>

              </motion.div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
}