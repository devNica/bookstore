import express, { Router } from 'express'
import pkg from '../../../package.json'

const app = express()

app.set('pkg', pkg)

const testRouter = Router()

testRouter.get('/', (_req, res) => {
  const info = {
    appName: app.get('pkg').name,
    appDescription: app.get('pkg').description,
    appAuthor: app.get('pkg').author,
    appVersion: app.get('pkg').version
  }
  res.json(info)
})

export default testRouter
