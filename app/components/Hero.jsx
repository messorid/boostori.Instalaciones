"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">

      {/* Imagen de fondo */}
      <Image
        src="/hero-remodelacion.png"
        alt="Remodelaciones en Isla de Margarita"
        fill
        priority
        className="object-cover object-center md:object-center"
      />

      {/* Overlay diferente para mobile y desktop */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70 md:from-black/80 md:via-black/70 md:to-black/90" />

      {/* Glow más sutil */}
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_30%,rgba(245,158,11,0.18),transparent_55%)]" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto text-white">

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-2xl sm:text-3xl md:text-6xl font-bold leading-snug md:leading-tight mb-4 md:mb-6"
        >
          Remodelación y Servicios en Margarita
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="text-sm sm:text-base md:text-xl text-gray-200 mb-6 md:mb-10"
        >
          Electricidad • Plomería • Drywall • Planta Eléctrica • Cristalería
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center"
        >
<a
  href="#contacto"
  className="bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-black text-sm md:text-base"
>
  Solicitar Presupuesto
</a>

<a
  href="tel:+5804248661847"
  className="border border-white hover:bg-white hover:text-black transition-all duration-300 px-6 md:px-8 py-3 md:py-4 rounded-full font-semibold text-sm md:text-base"
>
  Llamar Ahora
</a>
        </motion.div>

      </div>

      {/* Fade inferior suave */}
      <div className="absolute bottom-0 left-0 w-full h-24 md:h-32 bg-gradient-to-t from-white to-transparent" />

    </section>
  );
}