import React from 'react';
import './Formulario.css';
import imagen from '../imagenes/nba.jpg';

const Formulario = () => {
  return (
    <section className="form-section">
        <div className="imagen-container">
            <img src={imagen} alt="Imagen" />
        </div>
        <div className="form-container">
            <h2>¡Contáctanos!</h2>
            <form className="formulario">
                <label htmlFor="nombre">Nombre Completo:</label>
                <input type="text" id="nombre" name="nombre" />
                <br /><br />
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" />
                <br /><br />
                <label htmlFor="mensaje">Mensaje:</label>
                <textarea id="mensaje" name="mensaje"></textarea>
                <br /><br />
                <button type="submit">Enviar</button>
            </form>
        </div>
    </section>
  );
};

export default Formulario;


