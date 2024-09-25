// src/components/LandingPage.tsx
import React from 'react';
import Header from './Header';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="flex-grow">
        {/* Banner */}
        <section id="home" className="bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/images/banner.jpg)' }}>
          <div className="bg-gray-900 bg-opacity-50 h-full flex flex-col justify-center items-center text-center text-white px-4">
            <h2 className="text-4xl md:text-6xl font-unbounded mb-4">Transparencia y Responsabilidad</h2>
            <p className="text-lg md:text-2xl mb-8">Evaluamos propuestas a fondo perdido para asegurar un impacto positivo en DotSama.</p>
            <a href="#proposals" className="bg-blue-500 hover:bg-blue-700 text-white font-unbounded py-3 px-6 rounded">
              Explorar Propuestas
            </a>
          </div>
        </section>

        {/* Descripción */}
        <section id="about" className="py-16 bg-gray-100">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-unbounded text-center mb-6">¿Quiénes Somos?</h3>
            <p className="text-center max-w-3xl mx-auto">
              Somos un colectivo dedicado a garantizar la transparencia y efectividad en la asignación de fondos para proyectos que buscan generar un impacto real en la sociedad. Evaluamos cada propuesta a fondo perdido, asegurando que los recursos se utilicen de manera responsable y eficiente.
            </p>
          </div>
        </section>

        {/* Últimas Propuestas */}
        <section id="proposals" className="py-16">
          <div className="container mx-auto px-4">
            <h3 className="text-3xl font-unbounded text-center mb-8">Últimas Propuestas Financiadas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Tarjeta de Propuesta - Repetir según sea necesario */}
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img src="/images/proposal1.jpg" alt="Propuesta 1" className="h-48 w-full object-cover"/>
                <div className="p-6">
                  <h4 className="text-xl font-unbounded mb-2">Título de la Propuesta</h4>
                  <p className="text-gray-700 mb-4">Breve descripción de la propuesta. Explicación concisa del objetivo y el impacto esperado.</p>
                  <a href="/proposals/1" className="text-blue-500 hover:underline">Ver más</a>
                </div>
              </div>
              {/* Añade más tarjetas de propuesta aquí */}
            </div>
            <div className="text-center mt-8">
              <a href="/proposals" className="bg-blue-500 hover:bg-blue-700 text-white font-unbounded py-3 px-6 rounded">
                Ver Todas las Propuestas
              </a>
            </div>
          </div>
        </section>

        {/* Llamada a la Acción */}
        <section className="py-16 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h3 className="text-3xl font-unbounded mb-4">¿Tienes una Propuesta?</h3>
            <p className="mb-6">Envíanos tu propuesta para evaluación y financiación. Juntos podemos hacer la diferencia.</p>
            <a href="/submit-proposal" className="bg-white text-blue-600 font-unbounded py-3 px-6 rounded hover:bg-gray-200">
              Enviar Propuesta
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default LandingPage;