import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Contenido from './components/Contenido';
import Imagenpagina from './components/Imagenpagina';
import './App.css';

import celticsImage from './imagenes/celtics.jpg';
import bucksImage from './imagenes/bucks.jpg';
import lakersImage from './imagenes/lakers.jpg';
import raptorsImage from './imagenes/raptors.webp';

const equipos = [
  {
    nombre: "CELTICS",
    descripcion: "Fundado en 1946, el Boston Celtics es uno de los equipos más antiguos y exitosos de la NBA. Con una rica historia y una base de aficionados apasionados, los Celtics han ganado 17 campeonatos de la NBA, empatados con los Lakers por el mayor número de títulos en la liga. El equipo es conocido por su distintiva camiseta verde y blanco y por leyendas del baloncesto como Bill Russell, Larry Bird, y Paul Pierce.",
    imagen: celticsImage,
  },
  {
    nombre: "BUCKS",
    descripcion: "Los Milwaukee Bucks, fundados en 1968, han crecido hasta convertirse en uno de los equipos más destacados de la NBA en la última década. Después de ganar su primer campeonato en 1971 con Kareem Abdul-Jabbar, los Bucks experimentaron una renovación reciente y ganaron su segundo título en 2021 liderados por Giannis Antetokounmpo. El equipo se destaca por su juego dinámico y su base de aficionados leales en Milwaukee.",
    imagen: bucksImage,
  },
  {
    nombre: "LAKERS",
    descripcion: "Los Angeles Lakers, uno de los equipos más glamorosos y exitosos en la historia de la NBA, fueron fundados en 1947. Con 17 campeonatos de la NBA, los Lakers han sido el hogar de muchos de los mejores jugadores del baloncesto, incluyendo Magic Johnson, Kareem Abdul-Jabbar, Shaquille O'Neal, y Kobe Bryant. Actualmente, el equipo sigue siendo una fuerza dominante con estrellas como LeBron James y Anthony Davis.",
    imagen: lakersImage,
  },
  {
    nombre: "RAPTORS",
    descripcion: "Fundados en 1995, los Toronto Raptors son el único equipo canadiense en la NBA. El equipo ganó su primer campeonato de la NBA en 2019, una hazaña histórica liderada por Kawhi Leonard. Los Raptors han crecido en popularidad y éxito, convirtiéndose en un símbolo de orgullo nacional para los aficionados al baloncesto en Canadá. Son conocidos por su energía en el Scotiabank Arena y su emblemática mascota, el Raptor.",
    imagen: raptorsImage,
  },
];

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Contenido equipos={equipos} />} />
          <Route path="/image1" element={<Imagenpagina equipo={equipos[0]} />} />
          <Route path="/image2" element={<Imagenpagina equipo={equipos[1]} />} />
          <Route path="/image3" element={<Imagenpagina equipo={equipos[2]} />} />
          <Route path="/image4" element={<Imagenpagina equipo={equipos[3]} />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

