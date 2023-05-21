import fastity from 'fastify'
import cors from '@fastify/cors'
import { memoriesRoutes } from './routes/memories'

const app = fastity()

app.register(cors, {
  origin: ['http://localhost:3000'],
})

app.register(memoriesRoutes)

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log('🧑‍💻 HTTP server running on http://localhost:3333')
  })
