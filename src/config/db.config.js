import mongoose from 'mongoose'
import '../models/index'

const connect = (URI_DB) => {
  mongoose.connect(
    URI_DB,
    {
      keepAlive: true
    },
    (err) => {
      if (err) console.err('DB: ERROR: ', err)
      console.log('Conexion a la base de datos correcta')
    }
  )
}

export default connect
