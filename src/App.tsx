import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { faCashRegister } from '@fortawesome/free-solid-svg-icons';
import { faChartLine, faFileInvoiceDollar, faShoppingCart, faCalculator, faNetworkWired, faBullhorn, faPenSquare } from '@fortawesome/free-solid-svg-icons';
import { Link, } from 'react-scroll'; // Importamos react-scroll
import './index.css';
import Fondo from './public/gente-negocios-dandose-mano.jpg';
import LogoAndaGG from './public/Andagg_Color.png';

interface ServiceCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description }) => (
  <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center cursor-pointer transition-transform transform-gpu hover:-translate-y-2 hover:shadow-xl">
    <div className="text-3xl text-gray-800 mb-4">{icon}</div>
    <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
    <p className="text-gray-700 text-center">{description}</p>
  </div>
);

const App: React.FC = () => {
  const sendWhatsAppMessage = () => {
    const message = encodeURIComponent("¡Hola! Estoy interesado en obtener más información sobre sus servicios.");
    window.open(`https://wa.me/9994393319?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen flex flex-col relative">
      <header className="bg-blue-900 text-white py-4 px-8">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold animate-pulse">AndaGG</h1>
          <nav>
            <ul className="flex space-x-4">
              {/* Utilizamos Link de react-scroll en lugar de <a> */}
              <li><Link className="hover:underline" to="intro" smooth={true} duration={300}>Inicio</Link></li>
              <li><Link className="hover:underline" to="services" smooth={true} duration={600}>Servicios</Link></li>
              <li><Link className="hover:underline" to="contact" smooth={true} duration={600}>Contacto</Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <main className=" overflow-auto" style={{backgroundImage: `url(${Fondo})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <div className="container mx-auto py-8">
          <section id="intro" className="mb-8 animate-fade-in-down bg-white rounded-lg shadow-lg flex flex-col  items-center py-3">
            <img className=' w-28 h-32' src={LogoAndaGG} alt="" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4 mt-4 ">Bienvenido a AndaGG</h2>
            <p className="text-lg text-gray-700 ">Brindamos soluciones integrales para clínicas y médicos, desde software especializado hasta estrategias de marketing.</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4 py-4">Nuestros Servicios:</h2>
          </section>

          <section id="services" className="mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <ServiceCard
                icon={<FontAwesomeIcon icon={faChartLine} />}
                title="Gestión Administrativa"
                description="Optimización de procesos administrativos para clínicas y empresas."
              />
              <ServiceCard
                icon={<FontAwesomeIcon icon={faFileInvoiceDollar} />}
                title="Gestión de Facturación"
                description="Servicios de facturación electrónica y control de ingresos."
              />
              <ServiceCard
                icon={<FontAwesomeIcon icon={faShoppingCart} />}
                title="Compras"
                description="Asesoramiento en compras estratégicas y gestión de proveedores."
              />
              <ServiceCard
                icon={<FontAwesomeIcon icon={faCalculator} />}
                title="Contaduría"
                description="Servicios contables especializados para el sector médico."
              />
              <ServiceCard
                icon={<FontAwesomeIcon icon={faNetworkWired} />}
                title="Sistemas y Redes Tecnológicas"
                description="Implementación y mantenimiento de sistemas informáticos."
              />
              <ServiceCard
                icon={<FontAwesomeIcon icon={faBullhorn} />}
                title="Marketing y Posicionamiento"
                description="Estrategias de marketing digital y posicionamiento web."
              />
              <ServiceCard
                icon={<FontAwesomeIcon icon={faPenSquare} />}
                title="Creación de Contenido"
                description="Generación de contenido relevante para redes sociales y blogs."
              />
              <ServiceCard
                icon={<FontAwesomeIcon icon={faCashRegister} />}
                title="Gestión de Puntos de Venta"
                description="Optimización y administración de puntos de venta."
              />
            </div>
          </section>

          <section id="contact" className="animate-fade-in-up mb-8 bg-white rounded-lg shadow-lg px-4 py-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Contacto</h2>
            <p className="text-lg text-gray-700 mb-2">Ponte en contacto con nosotros para más detalles.</p>
            <p className="text-lg text-gray-700 mb-2">Email: info@andagg.com</p>
            <p className="text-lg text-gray-700">Teléfono: +123456789</p>
          </section>
        </div>

        <button onClick={sendWhatsAppMessage} className="fixed bottom-8 right-8 md:bottom-16 md:right-16 lg:right-2 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-full shadow-lg z-10">
          <FontAwesomeIcon icon={faWhatsapp} className="w-6 h-6" />
        </button>
      </main>

      <footer className="bg-gray-900 text-white py-4">
        <div className="container mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} AndaGG. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
