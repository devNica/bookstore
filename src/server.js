import express from 'express'
import api from './api'
import { constants } from './config'
import loader from './loaders/loader'
import * as expressHandlebars from 'express-handlebars'
import path from 'path'

const { SERVER_PORT, MONGODB_URI } = constants

function startServer () {
  const app = express()

  loader.init({
    expressApp: app,
    exppressRoutes: api(),
    connString: MONGODB_URI
  })

  const hbs = expressHandlebars.create({
    defaultLayout: 'base',
    extname: 'hbs',
    runtimeOptions: {
      allowProtoPropertiesByDefault: true,
      allowProtoMethodsByDefault: true
    }
  })

  // CONFIGURACION DE HANDLEBARS COMO MOTOR DE PLANTILLAS
  app.engine('hbs', hbs.engine)
  app.set('view engine', 'hbs')
  app.set('views', path.join(__dirname, 'views'))

  app.listen(SERVER_PORT, (err) => {
    if (err) console.log(err)
    console.log(`server is running on port: ${SERVER_PORT}`)
  })
}

startServer()
