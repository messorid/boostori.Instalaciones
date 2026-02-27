"use client";

export default function WhatsAppBar() {

  const phone = "5804248661847";

  const message = encodeURIComponent(
    "Hola Vengo de su Página Web, estoy interesado en sus servicios de remodelación en Margarita. ¿Podrían enviarme información y presupuesto?"
  );

  return (
    <div className="fixed bottom-0 left-0 w-full z-50">

      <a
        href={`https://wa.me/${phone}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-green-600 hover:bg-green-700 transition text-white text-center py-4 font-semibold text-base md:text-lg"
      >
        📲 Escríbenos por WhatsApp Ahora
      </a>

    </div>
  );
}