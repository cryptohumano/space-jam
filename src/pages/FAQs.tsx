// src/pages/Faqs.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { pageVariants, pageTransition } from '../motionVariants';

const FAQs: React.FC = () => {
  return (
    <motion.div
      className="flex flex-col min-h-screen"
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-unbounded mb-4">Preguntas Frecuentes</h1>
        {/* Implementa las preguntas y respuestas frecuentes */}
        <div className="space-y-4">
          <div>
            <h2 className="text-2xl font-unbounded">¿Cómo envío una propuesta?</h2>
            <p>Aquí va la respuesta a la pregunta.</p>
          </div>
          <div>
            <h2 className="text-2xl font-unbounded">¿Cuáles son los criterios de evaluación?</h2>
            <p>Aquí va la respuesta a la pregunta.</p>
          </div>
          {/* Añade más FAQs según sea necesario */}
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </motion.div>
  );
};

export default FAQs;