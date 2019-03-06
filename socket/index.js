const Detected = require('./event/Detected')

exports.start = (io) => {
  io.on('connect', async (socket) => {
    try {
      console.log('소켓 연결 성공');
    } catch (error){
      console.log('소켓 연결 실패');
      console.log(error.message);
      socket.disconnect();
      return;
    }

    socket.on('Detected', (data) => Detected.FireDetected(socket, data));
    socket.on('disconnect', async () => {
      console.log('소켓 연결 끊김');
    })
  })
}