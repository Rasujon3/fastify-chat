export const register = async (data) => {
  const hashed = await hashPassword(data.password)
  return prisma.user.create({
    data: { ...data, password: hashed }
  })
}
