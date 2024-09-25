// src/pages/SubmitProposal.tsx
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { motion } from 'framer-motion';

interface ProposalFormValues {
  title: string;
  description: string;
  budget: number;
}

const SubmitProposal: React.FC = () => {
  const initialValues: ProposalFormValues = {
    title: '',
    description: '',
    budget: 0,
  };

  const validationSchema = Yup.object({
    title: Yup.string()
      .max(100, 'El título no puede exceder los 100 caracteres')
      .required('El título es obligatorio'),
    description: Yup.string()
      .max(1000, 'La descripción no puede exceder los 1000 caracteres')
      .required('La descripción es obligatoria'),
    budget: Yup.number()
      .min(1, 'El presupuesto debe ser al menos 1')
      .required('El presupuesto es obligatorio'),
  });

  const handleSubmit = (values: ProposalFormValues, { resetForm }: any) => {
    console.log('Formulario enviado:', values);
    alert('¡Propuesta enviada exitosamente!');
    resetForm();
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <motion.main
        className="flex-grow container mx-auto px-4 py-16"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-unbounded mb-8 text-center">Enviar una Propuesta</h1>
        
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="max-w-2xl mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              {/* Título de la Propuesta */}
              <div className="mb-4">
                <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                  Título de la Propuesta
                </label>
                <Field
                  type="text"
                  name="title"
                  id="title"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingresa el título de tu propuesta"
                />
                <ErrorMessage name="title" component="div" className="text-red-500 text-xs italic mt-1" />
              </div>

              {/* Descripción */}
              <div className="mb-6">
                <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                  Descripción
                </label>
                <Field
                  as="textarea"
                  name="description"
                  id="description"
                  rows={5}
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Describe tu propuesta"
                />
                <ErrorMessage name="description" component="div" className="text-red-500 text-xs italic mt-1" />
              </div>

              {/* Presupuesto */}
              <div className="mb-6">
                <label htmlFor="budget" className="block text-gray-700 text-sm font-bold mb-2">
                  Presupuesto (en USD)
                </label>
                <Field
                  type="number"
                  name="budget"
                  id="budget"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Ingresa el presupuesto solicitado"
                />
                <ErrorMessage name="budget" component="div" className="text-red-500 text-xs italic mt-1" />
              </div>

              {/* Botón de Envío con animación */}
              <div className="flex items-center justify-center">
                <motion.button
                  type="submit"
                  className="bg-polkadot-pink hover:bg-polkadot-purple text-white font-unbounded py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {isSubmitting ? 'Enviando...' : 'Enviar Propuesta'}
                </motion.button>
              </div>
            </Form>
          )}
        </Formik>
      </motion.main>

      <Footer />
    </div>
  );
};

export default SubmitProposal;