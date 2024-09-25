// src/components/Header.tsx
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  return (
    <motion.header
      className="bg-polkadot-purple text-white shadow"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link to="/" className="text-2xl font-unbounded">
          Rendición de Cuentas
        </Link>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    isActive
                      ? 'underline text-kusama-yellow'
                      : 'hover:text-kusama-yellow'
                  }
                  end
                >
                  Inicio
                </NavLink>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive
                      ? 'underline text-kusama-yellow'
                      : 'hover:text-kusama-yellow'
                  }
                >
                  Sobre Nosotros
                </NavLink>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <NavLink
                  to="/proposals"
                  className={({ isActive }) =>
                    isActive
                      ? 'underline text-kusama-yellow'
                      : 'hover:text-kusama-yellow'
                  }
                >
                  Propuestas
                </NavLink>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <NavLink
                  to="/faqs"
                  className={({ isActive }) =>
                    isActive
                      ? 'underline text-kusama-yellow'
                      : 'hover:text-kusama-yellow'
                  }
                >
                  FAQs
                </NavLink>
              </motion.div>
            </li>
            <li>
              <motion.div
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    isActive
                      ? 'underline text-kusama-yellow'
                      : 'hover:text-kusama-yellow'
                  }
                >
                  Contacto
                </NavLink>
              </motion.div>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;