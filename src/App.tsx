import React from 'react';
import whatsappLogo from './Public/whatsapp-logo.jpg'; 
import './index.css';

const App: React.FC = () => {

  const sendWhatsAppMessage = () => {
    // Reemplaza el mensaje con el que deseas iniciar la conversación
    const message = encodeURIComponent("¡Hola! Estoy interesado en obtener más información sobre sus servicios.");
    window.open(`https://wa.me/9994393319?text=${message}`, '_blank');
  };

  return (
    <div className="bg-gray-100 min-h-screen flex flex-col relative">
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
      <main className="flex-1 mt-8 mb-8 overflow-auto"> {/* overflow-auto para permitir el scroll */}
        <div className="container mx-auto py-8">
          <section id="intro" className="mb-8 animate-fade-in-down">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Bienvenido a AndaGG</h2>
            <p className="text-lg text-gray-700">Brindamos soluciones integrales para clínicas y médicos, desde software especializado hasta estrategias de marketing.</p>
          </section>

          <section id="services" className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Nuestros Servicios</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Servicios */}
            </ul>
          </section>

          <section id="contact" className="animate-fade-in-up mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contacto</h2>
            <p className="text-lg text-gray-700 mb-2">Ponte en contacto con nosotros para más detalles.</p>
            <p className="text-lg text-gray-700 mb-2">Email: info@andagg.com</p>
            <p className="text-lg text-gray-700">Teléfono: +123456789</p>
          </section>

          {/* Agregar más contenido aquí */}

        </div>

        {/* Floating WhatsApp Button */}
        <button onClick={sendWhatsAppMessage} className="fixed bottom-8 right-8 md:bottom-16 md:right-16 lg:right-20 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-full shadow-lg z-10">
          <img src={whatsappLogo} alt="WhatsApp" className="w-6 h-6" />
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-4 mt-8">
        <div className="container mx-auto text-center">
          <p className="text-sm animate-bounce">&copy; {new Date().getFullYear()} AndaGG. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
