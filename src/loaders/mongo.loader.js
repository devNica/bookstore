import mongoose from 'mongoose'

export default async function mongoLoader (URI_DB) {
  console.log('URIDB', URI_DB)
  if (!URI_DB) throw new Error('connection string not provided')
  mongoose.connect(
    URI_DB,
    {
      keepAlive: true
    },
    (err) => {
      if (err) console.error('DB: ERROR: ', err)
      else console.log('Conexion a la base de datos correcta')
    }
  )
}
