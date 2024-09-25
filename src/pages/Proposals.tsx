// src/pages/Proposals.tsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProposalCard from '../components/ProposalCard';
import { motion } from 'framer-motion';
import AnimatedSection from '../components/AnimatedSection';

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

const Proposals: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <motion.main
        className="flex-grow"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <AnimatedSection className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-unbounded mb-8 text-center">Propuestas Financiadas</h1>
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
          </div>
        </AnimatedSection>
      </motion.main>

      <Footer />
    </div>
  );
};

export default Proposals;