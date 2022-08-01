import express from 'express'
import api from './api'
import { constants } from './config'
import loader from './loaders/loader'

const { SERVER_PORT, MONGODB_URI } = constants

function startServer () {
  const app = express()

  loader.init({
    expressApp: app,
    exppressRoutes: api(),
    connString: MONGODB_URI
  })

  app.listen(SERVER_PORT, (err) => {
    if (err) console.log(err)
    console.log(`server is running on port: ${SERVER_PORT}`)
  })
}

startServer()
