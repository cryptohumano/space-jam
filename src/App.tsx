// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Importa las páginas
import Home from './pages/Home';
import About from './pages/About';
import Proposals from './pages/Proposals';
import Contact from './pages/Contact';
import FAQs from './pages/FAQs';
import SubmitProposal from './pages/SubmitProposal';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/proposals" element={<Proposals />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/submit-proposal" element={<SubmitProposal />} />
        {/* Añade más rutas según sea necesario */}
        {/* Ruta para páginas no encontradas */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

// Componente para páginas no encontradas (404)
const NotFound: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl font-unbounded mb-4">404 - Página No Encontrada</h1>
      <p className="mb-4">Lo sentimos, la página que buscas no existe.</p>
      <a href="/" className="bg-blue-500 hover:bg-blue-700 text-white font-unbounded py-2 px-4 rounded">
        Volver al Inicio
      </a>
    </div>
  );
};

export default App;