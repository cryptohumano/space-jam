// src/pages/Home.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import AnimatedSection from '../components/AnimatedSection';
import ProposalCard from '../components/ProposalCard';

const mockProposals = [
  {
    id: 1,
    title: 'Propuesta 1',
    description: 'Descripción detallada de la Propuesta 1. Explicación completa del objetivo y el impacto que tendrá.',
    imageUrl: '/images/proposal1.jpg',
  },
  {
    id: 2,
    title: 'Propuesta 2',
    description: 'Descripción detallada de la Propuesta 2. Explicación completa del objetivo y el impacto que tendrá.',
    imageUrl: '/images/proposal2.jpg',
  },
  {
    id: 3,
    title: 'Propuesta 3',
    description: 'Descripción detallada de la Propuesta 3. Explicación completa del objetivo y el impacto que tendrá.',
    imageUrl: '/images/proposal3.jpg',
  },
  // Añade más propuestas según sea necesario
];

const Home: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <motion.main
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Banner */}
        <AnimatedSection
          className="bg-cover bg-center h-screen flex items-center justify-center relative"
          style={{ backgroundImage: 'url(/images/banner.jpg)' }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-gray-900 bg-opacity-50"></div>
          {/* Contenido del Banner */}
          <div className="relative z-10 flex flex-col items-center text-center text-white px-4">
            <h2 className="text-4xl md:text-6xl font-unbounded mb-4">
              Transparencia y Responsabilidad
            </h2>
            <p className="text-lg md:text-2xl mb-8">
              Evaluamos propuestas a fondo perdido para asegurar un impacto positivo.
            </p>
            <Link
              to="/proposals"
              className="bg-polkadot-pink hover:bg-polkadot-purple text-white font-unbounded py-3 px-6 rounded transition duration-300"
            >
              Explorar Propuestas
            </Link>
          </div>
        </AnimatedSection>

        {/* Descripción */}
        <AnimatedSection className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-unbounded text-center mb-6">¿Quiénes Somos?</h3>
            <p className="text-center max-w-3xl mx-auto">
              Somos un colectivo dedicado a garantizar la transparencia y efectividad en la asignación de fondos
              para proyectos que buscan generar un impacto real en la sociedad. Evaluamos cada propuesta a fondo
              perdido, asegurando que los recursos se utilicen de manera responsable y eficiente.
            </p>
          </div>
        </AnimatedSection>

        {/* Últimas Propuestas */}
        <AnimatedSection className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-unbounded text-center mb-8">Últimas Propuestas Financiadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {mockProposals.map((proposal) => (
                <ProposalCard
                  key={proposal.id}
                  id={proposal.id}
                  title={proposal.title}
                  description={proposal.description}
                  imageUrl={proposal.imageUrl}
                />
              ))}
            </div>
            <div className="text-center mt-8">
              <Link
                to="/proposals"
                className="bg-polkadot-pink hover:bg-polkadot-purple text-white font-unbounded py-3 px-6 rounded transition duration-300"
              >
                Ver Todas las Propuestas
              </Link>
            </div>
          </div>
        </AnimatedSection>

        {/* Llamada a la Acción */}
        <AnimatedSection className="py-16 bg-kusama-orange text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-unbounded mb-4">¿Tienes una Propuesta?</h3>
            <p className="mb-6">
              Envíanos tu propuesta para evaluación y financiación. Juntos podemos hacer la diferencia.
            </p>
            <Link
              to="/submit-proposal"
              className="bg-white text-kusama-orange font-unbounded py-3 px-6 rounded hover:bg-gray-200 transition duration-300"
            >
              Enviar Propuesta
            </Link>
          </div>
        </AnimatedSection>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Home;