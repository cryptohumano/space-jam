// src/components/Footer.tsx
import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <motion.footer
      className="bg-gray-800 text-white"
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto py-6 px-4 flex flex-col md:flex-row justify-between items-center">
        <p className="mb-4 md:mb-0">
          © {new Date().getFullYear()} Space-Jam Collective. Todos los derechos
          reservados.
        </p>
        <div className="flex space-x-4">
          <a href="mailto:contacto@ejemplo.com" className="hover:text-polkadot-pink">
            Correo
          </a>
          <a
            href="https://twitter.com/tucolectivo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-kusama-yellow"
          >
            Twitter
          </a>
          <a
            href="https://facebook.com/tucolectivo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-kusama-yellow"
          >
            Facebook
          </a>
          {/* Añade más enlaces de redes sociales si es necesario */}
          <Link
            to="/about"
            className="hover:text-polkadot-pink"
          >
            Sobre Nosotros
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;