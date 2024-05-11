import React from 'react';
import './index.css';

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white py-4">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">AndaGG</h1>
          <nav>
            <ul className="flex space-x-4">
              <li><a className="hover:underline" href="/inicio">Inicio</a></li>
              <li><a className="hover:underline" href="/servicios">Servicios</a></li>
              <li><a className="hover:underline" href="/contacto">Contacto</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 mt-8 mb-8"> {/* Agrega mt-8 y mb-8 para márgenes arriba y abajo */}
        <div className="container mx-auto py-8">
          <section id="intro" className="mb-8 animate-fade-in-down">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bienvenido a AndaGG</h2>
            <p className="text-lg text-gray-700">Brindamos soluciones integrales para clínicas y médicos, desde software especializado hasta estrategias de marketing.</p>
          </section>

          <section id="services" className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <li className="bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 animate-fade-in-left">
                <h3 className="text-xl font-semibold mb-2">Desarrollo de software médico</h3>
                <p>Desarrollamos software personalizado para clínicas y médicos.</p>
              </li>
              <li className="bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 animate-fade-in-right">
                <h3 className="text-xl font-semibold mb-2">Asesoramiento contable y administrativo</h3>
                <p>Ofrecemos servicios de contabilidad y administración adaptados a tu negocio.</p>
              </li>
              <li className="bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 animate-fade-in-left">
                <h3 className="text-xl font-semibold mb-2">Creación de contenido médico</h3>
                <p>Generamos contenido médico relevante y de calidad para tu audiencia.</p>
              </li>
              <li className="bg-white shadow-md rounded-lg p-6 transform hover:scale-105 transition-transform duration-300 animate-fade-in-right">
                <h3 className="text-xl font-semibold mb-2">Estrategias de marketing</h3>
                <p>Diseñamos y ejecutamos estrategias de marketing efectivas para profesionales de la salud.</p>
              </li>
            </ul>
          </section>

          <section id="contact" className="animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contacto</h2>
            <p className="text-lg text-gray-700 mb-2">Ponte en contacto con nosotros para más detalles.</p>
            <p className="text-lg text-gray-700 mb-2">Email: info@andagg.com</p>
            <p className="text-lg text-gray-700">Teléfono: +123456789</p>
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 mt-8"> {/* Agrega mt-8 para margen arriba */}
        <div className="container mx-auto text-center">
          <p className="text-sm animate-bounce">&copy; {new Date().getFullYear()} AndaGG. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
