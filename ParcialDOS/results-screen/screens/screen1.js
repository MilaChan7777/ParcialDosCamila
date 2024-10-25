// results-screen/screens/screen1.js
import { router, socket } from "../routes.js";

export default function renderScreen1() {
  const app = document.getElementById("app");
  
  // Estructura básica para la pantalla de resultados en tiempo real
  app.innerHTML = `
    <h1>Resultados de los jugadores en tiempo real</h1>
    <ul id="players-list">
    </ul>
  `;

  // Función para actualizar la lista de jugadores en la interfaz
  function updatePlayersList(players) {
    const playersList = document.getElementById("players-list");
    playersList.innerHTML = ""; // Limpiar la lista

    players.forEach((player) => {
      const playerItem = document.createElement("li");
      playerItem.textContent = `${player.name}: ${player.score} puntos`;
      playersList.appendChild(playerItem);
    });
  }

  // Escuchar el evento 'updateScores' desde el servidor para recibir los datos actualizados de los jugadores
  socket.on("updateScores", (players) => {
    updatePlayersList(players); // Actualiza la lista de jugadores con los datos recibidos
  });
}
