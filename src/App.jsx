import React from 'react';

// Importación de componentes
import Header from './components/comp_Header.jsx';
import TarjetaServicio from './components/TarjetaServicio.jsx';
import ProgramaNotas from './components/ProgramaNotas.jsx';
import ProgramaSaludos from './components/ProgramaSaludos.jsx';
import ProgramaCalculadora from './components/ProgramaCalculadora.jsx';
import Calculadora from './components/Calculadora.jsx';
import CalculadoraPresupuesto from './components/CalculadoraPresupuesto.jsx';

const empresa = {
  nombre: 'Ibserveis',
  servicios: 'Páginas web y programación'
};
const imagenlogo = 'https://fakeimg.pl/150x50/?text=logo+empresa';
const texto_Header = 'Trabajos en internet';

const Principal = (props) => (
  <main style={{ padding: '10px 0' }}>
    <h2 style={{ fontSize: 'clamp(1.2rem, 4vw, 1.8rem)' }}>{props.slogan}</h2>
    <p>Nuestra empresa {empresa.nombre} le ofrece servicios de {empresa.servicios}.</p>
  </main>
);

const Footer = () => (
  <footer style={{ borderTop: '1px solid #444', marginTop: '20px', paddingTop: '10px' }}>
    <p>Copyright 2022</p>
  </footer>
);

export default function App() {
  return (
    <div style={{
      width: '100%',
      maxWidth: '900px',
      margin: '0 auto',
      padding: '15px',
      boxSizing: 'border-box',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      
      {/* Ejercicio 5.2 */}
      <section className="card-section">
        <h2 style={{ color: '#007bff' }}>Ejercicio 5.2 - Webs de Empresa</h2>
        <Header logo={imagenlogo} texto={texto_Header} />
        <Principal slogan="La primera empresa en hacerlo bien" />
        <Footer />
      </section>

      {/* Ejercicio 5.3 */}
      <section className="card-section">
        <h2 style={{ color: '#007bff' }}>Ejercicio 5.3 - Muro de Servicios IBEROSTAR</h2>
        <TarjetaServicio
          titulo="Páginas Web Corporativas"
          descripcion="Diseño modular adaptado a dispositivos móviles."
          tipoEtiqueta="Nuevo"
        />
        <TarjetaServicio
          titulo="Mantenimiento de Servidores"
          descripcion="Monitoreo 24/7 de sistemas de almacenamiento."
          tipoEtiqueta="Urgente"
        />
        <TarjetaServicio
          titulo="Desarrollo de Software"
          descripcion="Aplicaciones a medida para la gestión hotelera."
          tipoEtiqueta="Popular"
        />
      </section>

      {/* Ejercicio 6.1 */}
      <section className="card-section">
        <h2 style={{ color: '#28a745' }}>Ejercicio 6.1 - Comprobador de Notas</h2>
        <ProgramaNotas />
      </section>

      {/* Ejercicio 6.2 */}
      <section className="card-section">
        <h2 style={{ color: '#28a745' }}>Ejercicio 6.2 - Saludos y Despedidas</h2>
        <ProgramaSaludos />
      </section>

      {/* Ejercicio 6.3 */}
      <section className="card-section">
        <h2 style={{ color: '#28a745' }}>Ejercicio 6.3 - Conversor de Grados</h2>
        <ProgramaCalculadora />
      </section>

      {/* Ejercicio 6.4 */}
      <section className="card-section">
        <h2 style={{ color: '#28a745' }}>Ejercicio 6.4 - Máquina de Calcular</h2>
        <Calculadora />
      </section>

      {/* Ejercicio 6.5 */}
      <section className="card-section">
        <h2 style={{ color: '#28a745' }}>Ejercicio 6.5 - Calculadora de Presupuestos</h2>
        <CalculadoraPresupuesto />
      </section>

    </div>
  );
}