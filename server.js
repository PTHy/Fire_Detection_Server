require('dotenv').config()

const { PORT : port } = process.env;
const Http = require('http')

const server = Http.createServer();

const io = require('socket.io')(server);

const socketServer = require('./socket');

socketServer.start(io);

server.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
})