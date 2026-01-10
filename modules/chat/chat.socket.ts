export const chatSocket = (io: any) => {
  io.on('connection', (socket: any) => {

    socket.on('join_chat', (chatId: any) => {
      socket.join(`chat_${chatId}`)
    })

    socket.on('send_message', async (data: any) => {
      const message = await messageService.create(data)

      io.to(`chat_${data.chatId}`).emit('new_message', message)
    })

  })
}
