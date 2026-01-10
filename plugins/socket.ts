import { Server } from 'socket.io'

export const socketPlugin = async (fastify: any) => {
  const io = new Server(fastify.server, {
    cors: { origin: '*' }
  })

  fastify.decorate('io', io)
}
