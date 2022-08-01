import express from 'express'
import { constants } from './config'

const { SERVER_PORT } = constants

function startServer () {
  const app = express()

  app.listen(SERVER_PORT, (err) => {
    if (err) console.log(err)
    console.log(`server is running on port: ${SERVER_PORT}`)
  })
}

startServer()
