import express from 'express';
import   {Server} from 'socket.io';
import http from 'http';

const app = express();
const socketConnection = async() => {

  const server = http.createServer(app);
  const io = new Server(server);
  io.on('connection', (socket) => {
        console.log("a user connected ");

        socket.on('disconnect', () => {
          console.log('user disconnected');
        })
  })
}

export default socketConnection;
