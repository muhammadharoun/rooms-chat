const socketFunc = require('./socketProcess');
const express = require('express');

const app = express();

const http = require('http');
const cors = require('cors');
app.use( (cors));

const { Server } = require('socket.io');

const server = http.createServer(app);
const router = require('./routes');


const io = new Server(server,{
  cors:{
    origin:"http://localhost:3000"
  }
})



app.use(router);

io.on('connection', (socket) => {
  socketFunc(socket)
});




server.listen(process.env.PORT || 3001, () => console.log(`Server has started.`));