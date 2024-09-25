import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="bg-polkadot-purple text-white shadow"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link to="/" className="text-2xl font-unbounded md:text-3xl">
          Space-Jam Collective
        </Link>
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        <nav className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center md:space-x-6`}>
          <ul className="md:flex md:space-x-6">
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
                      ? 'underline text-kusama-yellow block py-2'
                      : 'hover:text-kusama-yellow block py-2'
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
                      ? 'underline text-kusama-yellow block py-2'
                      : 'hover:text-kusama-yellow block py-2'
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
                      ? 'underline text-kusama-yellow block py-2'
                      : 'hover:text-kusama-yellow block py-2'
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
                      ? 'underline text-kusama-yellow block py-2'
                      : 'hover:text-kusama-yellow block py-2'
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
                      ? 'underline text-kusama-yellow block py-2'
                      : 'hover:text-kusama-yellow block py-2'
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