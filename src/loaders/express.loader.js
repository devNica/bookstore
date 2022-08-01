import cors from 'cors'
import morgan from 'morgan'
import helmet from 'helmet'

export default async function expressLoader (app, routes) {
  if (!app || !Array.isArray(routes)) return new Error('express app cannot be started')

  app.use(helmet())
  app.use(morgan('dev'))
  app.use(cors({ origin: '*' }))

  routes.forEach(r => {
    app.use(r.path, r.controller)
  })
}
