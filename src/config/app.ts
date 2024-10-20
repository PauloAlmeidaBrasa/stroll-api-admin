import express from 'express'
import setupRoutes from './routes'
import setUpMiddlewares from './middlewares'

const app = express()

setUpMiddlewares(app)
setupRoutes(app)
export default app