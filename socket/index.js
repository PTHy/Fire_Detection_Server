
exports.start = ((io) => {
  io.on('connect', async (socket) => {
    console.log(`socket is conntected`)
  })
})