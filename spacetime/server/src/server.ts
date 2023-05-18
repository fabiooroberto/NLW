import fastity from 'fastify'
import { PrismaClient } from '@prisma/client'

const app = fastity()
const prisma = new PrismaClient()

app.get('/', async () => {
  const users = await prisma.user.findMany()
  return users
})

app.get('/hello', () => {
  return 'Hello world'
})

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🧑‍💻 HTTP server running on http://localhost:3333')
  })
