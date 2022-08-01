import expressLoader from './express.loader'

export default {
  init: async ({ expressApp = null, exppressRoutes = null }) => {
    await expressLoader(expressApp, exppressRoutes)
  }
}
