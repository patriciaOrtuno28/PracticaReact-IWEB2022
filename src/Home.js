import React from "react";
import "./Home.css";

const Home = () => (
  <div class="container">
    <h1>¡Bienvenido!</h1>
    <h2>Página principal de minijuegos en React</h2>
    <p>
      En esta página podrás jugar a diferentes juegos. <br/>
      Haz click en la pestaña del juego al que quieras jugar.
    </p>
    <div class="footer">
      <div class="footer_contents">
        <b>IWEB 2021</b>
        &emsp;
        Daniel Sanz Sobrino
        &emsp;
        Patricia Ortuño Otero
      </div>
    </div>
  </div>
);

export default Home;