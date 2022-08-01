import 'dotenv/config'

export default {
  PREFIX: '/bookstore/v1',
  SERVER_PORT: process.env.SERVER_PORT || 6700,
  MONGODB_URI: `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@luxandev.hp7h8y0.mongodb.net/?retryWrites=true&w=majority`
}
