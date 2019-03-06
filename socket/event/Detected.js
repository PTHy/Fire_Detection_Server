exports.FireDetected = async (socket, data) => {
  try {
    const { room } = data;
    var path;
    if(room.toLowerCase() === "b")
      path = 'C'
    else if (room.toLowerCase() === "c")
      path = 'B'
    else 
      throw error
    
    const payload = {
      'status': 200,
      'path': path
    }

    socket.emit('Detected', payload);
    socket.broadcast.emit('Detected', payload);
  }catch (error) {
    console.log(error.message);
    const payload = {
      'status': 500
    }

    socket.emit('Detected', payload);
    return;
  }
}