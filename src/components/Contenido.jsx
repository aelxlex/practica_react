import React from 'react';
import { Link } from 'react-router-dom';
import Formulario from './Formulario';
import './Contenido.css';

const Contenido = ({ equipos }) => (
  <>
    <section className="banner">
      <p>La NBA o Asociación Nacional de Baloncesto- se la conoce como uno de los Mejores deportes del mundo, liga estadounidense de baloncesto profesional(NBA). La NBA se fundó en Nueva York el 6 de junio de 1946 como la Basketball Association of America.</p>
    </section>
    <section className="info-sections">
      {equipos.map((equipo, index) => (
        <div className="info-item" key={index}>
          <h3>{equipo.nombre}</h3>
          <Link to={`/image${index + 1}`}>
            <img src={equipo.imagen} alt={equipo.nombre} className="info-image" />
          </Link>
          <p>{equipo.descripcion}</p>
        </div>
      ))}
    </section>
    <Formulario/>
  </>
);

export default Contenido;


