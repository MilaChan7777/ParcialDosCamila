import { router, socket } from "../routes.js";

export default function renderScreen2() {
  const app = document.getElementById("app");

  // Estructura HTML básica de la pantalla final
  app.innerHTML = `
    <h1>¡Resultados Finales!</h1>
    <div id="winner-info">
      <p>Esperando resultados...</p> 
    </div>
  `;

  // Función para actualizar la pantalla con la información del ganador
  function showWinner(winner) {
    const winnerInfo = document.getElementById("winner-info");
    winnerInfo.innerHTML = `
      <h2>¡Felicidades, ${winner.name}!</h2>
      <p>Has ganado con un puntaje de ${winner.score} puntos</p>
    `;
  }

  // Escuchar el evento 'announceWinner' para recibir la información del ganador
  socket.on("announceWinner", (winner) => {
    showWinner(winner); // Actualizar la pantalla con los datos del ganador
  });
}

