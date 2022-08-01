import expressLoader from './express.loader'
import mongoLoader from './mongo.loader'

export default {
  init: async ({ expressApp = null, exppressRoutes = null, connString = null }) => {
    await mongoLoader(connString)
    await expressLoader(expressApp, exppressRoutes)
  }
}
