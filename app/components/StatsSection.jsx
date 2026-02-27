"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";

export default function StatsSection() {
  return (
    <section className="py-20 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">

          <Stat number={10} suffix="+" label="Años de Experiencia" />
          <Stat number={250} suffix="+" label="Proyectos Realizados" />
          <Stat number={100} suffix="%" label="Clientes Satisfechos" />
          <Stat number={1} suffix="h" label="Tiempo de Respuesta" />

        </div>

      </div>
    </section>
  );
}

function Stat({ number, suffix, label }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <div className="text-3xl md:text-5xl font-bold text-yellow-500 mb-3">
        <CountUp end={number} duration={2} />
        {suffix}
      </div>

      <p className="text-gray-600 text-sm md:text-base">
        {label}
      </p>
    </motion.div>
  );
}