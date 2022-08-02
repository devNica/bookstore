import testRouter from './routes/test.router'
import { constants } from '../config'

export default () => {
  return [
    { path: `${constants.PREFIX}/`, controller: testRouter }
  ]
}
