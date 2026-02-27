"use client";

import { useState } from "react";
import Image from "next/image";

const phone = "5804248661847";

const message = encodeURIComponent(
  "Hola 👋, estoy interesado en sus servicios de remodelación en Margarita. ¿Podrían enviarme información?"
);

const links = [
  { name: "Inicio", href: "#inicio" },
  { name: "Remodelación", href: "#servicios" },
  { name: "Plomería", href: "#servicios" },
  { name: "Electricidad", href: "#servicios" },
  { name: "Drywall", href: "#servicios" },
  { name: "Planta Eléctrica", href: "#servicios" },
  { name: "Cristalería", href: "#servicios" },
  { name: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo que lleva al Hero */}
        <a href="#inicio" className="flex items-center gap-3">
          <Image
            src="/logo.jpg"
            alt="Servicios y Mantenimientos SG"
            width={42}
            height={42}
            className="object-contain"
          />
          <span className="font-semibold text-lg hidden sm:block">
            Servicios SG
          </span>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">

          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-yellow-500 transition"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contacto"
            rel="noopener noreferrer"
            className="bg-yellow-500 hover:bg-yellow-600 transition px-5 py-2 rounded-full font-semibold ml-4"
          >
            Presupuesto
          </a>

        </nav>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
            <span className="block w-6 h-0.5 bg-black"></span>
          </div>
        </button>

      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-6 space-y-4">

          {links.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-800 font-medium"
            >
              {link.name}
            </a>
          ))}

          <a
            href="#contacto"
            rel="noopener noreferrer"
            className="block bg-yellow-500 text-center py-3 rounded-full font-semibold mt-4"
          >
            Solicitar Presupuesto
          </a>

        </div>
      )}
    </header>
  );
}