import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppBar from "./components/WhatsAppBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Servicios y Mantenimientos SG | Remodelaciones en Margarita",
  description:
    "Empresa especializada en remodelación, electricidad, plomería, drywall y planta eléctrica en Isla de Margarita.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 `}
      >
        {/* Navbar fijo */}
        <Navbar />

        {/* Contenido principal */}
        <main className="pt-2">
          {children}
        </main>

        {/* Barra WhatsApp fija */}
        <WhatsAppBar />
      </body>
    </html>
  );
}