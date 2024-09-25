// src/pages/About.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-unbounded mb-4">Sobre Nosotros</h1>
        <p className="mb-6">
          Aquí puedes agregar información detallada sobre la historia de tu colectivo, sus valores, misión y visión,
          así como presentar al equipo y colaboradores.
        </p>
        {/* Añade más contenido según sea necesario */}
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default About;