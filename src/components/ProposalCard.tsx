// src/components/ProposalCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface ProposalCardProps {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
}

const ProposalCard: React.FC<ProposalCardProps> = ({ id, title, description, imageUrl }) => {
  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden"
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
      transition={{ type: 'spring', stiffness: 300 }}
    >
      <img src={imageUrl} alt={title} className="h-48 w-full object-cover" />
      <div className="p-6">
        <h4 className="text-xl font-unbounded mb-2">{title}</h4>
        <p className="text-gray-700 mb-4">{description}</p>
        <Link
          to={`/proposals/${id}`}
          className="text-polkadot-pink hover:underline"
        >
          Ver más
        </Link>
      </div>
    </motion.div>
  );
};

export default ProposalCard;