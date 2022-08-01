import mongoose from 'mongoose'

const authorSchema = new mongoose.Schema(
  {
    fullname: {
      type: String,
      required: true
    },
    authorImageUrl: {
      type: String,
      required: true
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

// eslint-disable-next-line new-cap
const AuthorModel = new mongoose.model('author', authorSchema)

export default AuthorModel
