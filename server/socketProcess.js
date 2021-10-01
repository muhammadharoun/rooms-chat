const data = require('./data');


const socketFunc = (socket) => {
    socket.on('join', ({ username, room }, callback) => {
      socket.join(room);
      console.log(`User with ID: ${socket.id} joined room: ${room}`);
    // if(data[room]){
    //     socket.emit('success', data[room].massges);
    // }else{
    //     data[room] = {massges:[]}
    // }
    });

    socket.on('send_message', ({msg,room,username}) => {
        // data[room].massges.push({msg:msg,username:username})
        console.log('server send_message',msg);
        socket.to(room).emit('receive_message', msg);
        
    })
    
    
    socket.on('disconnect', () => {
      console.log('disconnect');
    })
  }

module.exports = socketFunc;

