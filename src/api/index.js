import testRouter from './routes/test.router'
import { constants } from '../config'
import authorRouter from './routes/author.router'

export default () => {
  return [
    { path: `${constants.PREFIX}/`, controller: testRouter },
    { path: `${constants.PREFIX}/authors`, controller: authorRouter }
  ]
}
