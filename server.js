require('dotenv').config()

const path = require('path');
const { PORT : port } = process.env;
const Http = require('http')
const express = require('express');

const app = new express();

app.engine('html', require('ejs').renderFile);

app.get('/', (req,res) => {
  res.render(path.join(__dirname, 'public', 'index.html'));
})

const server = Http.createServer(app);

const io = require('socket.io')(server);

const socketServer = require('./socket');

socketServer.start(io);

server.listen(port, () => {
  console.log(`Server is Running on port ${port}`);
})