const { Server } = require("socket.io")
const { handleEvents } = require("./events")

let io

const initSocket = (httpServer) => {
  io = new Server(httpServer, {
    path: "/real-time",
    cors: {
      origin: "*", 
    },
  }) 

  io.on("connection", (socket) => {
    handleEvents(socket, io)
  })
}

const getIO = () => {
  if (!io) {
    throw new Error("Socket.io not initialized!")
  }
  return io
}

module.exports = { initSocket, getIO }
