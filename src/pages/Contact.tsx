// src/pages/Contact.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-16">
        <h1 className="text-4xl font-unbounded mb-4">Contacto</h1>
        {/* Implementa el formulario de contacto o información de contacto */}
        <p>Aquí va el formulario de contacto o la información necesaria.</p>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;