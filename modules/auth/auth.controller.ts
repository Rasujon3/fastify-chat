import { register } from './auth.service'

export const register = async (req: any, reply: any) => {
  const user = await register(req.body)
  return reply.send(user)
}
