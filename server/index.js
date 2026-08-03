import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('WS server is running');
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: { origin: '*' },
});

let activeSessions = 0;

io.on('connection', (socket) => {
  activeSessions += 1;
  io.emit('sessions:count', activeSessions);

  socket.on('disconnect', () => {
    activeSessions -= 1;
    io.emit('sessions:count', activeSessions);
  });
});

const PORT = 4000;
httpServer.listen(PORT, () => {
  console.log(`WS server running on http://localhost:${PORT}`);
});