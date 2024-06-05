import React from 'react';
import { Link } from 'react-router-dom';

const ImagenPagina = ({ equipo }) => (
  <div className="info-item">
    <h3>{equipo.nombre}</h3>
    <img src={equipo.imagen} alt={equipo.nombre} className="info-image" />
    <p>{equipo.descripcion}</p>
  </div>
);

export default ImagenPagina;
