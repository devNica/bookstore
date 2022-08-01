import mongoose from 'mongoose'

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true
    },
    coverUrl: {
      type: String,
      required: true
    },
    backCoverUrl: {
      type: String,
      required: true
    },
    isbn: {
      type: String,
      required: true
    },
    numberPages: {
      type: Number,
      default: 0
    },
    copiesAvailables: {
      type: Number,
      default: 0
    },
    isAvailable: {
      type: Boolean,
      required: true,
      default: true
    },
    authors: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'authors'
      }
    ],
    categories: [
      {
        type: mongoose.Types.ObjectId,
        ref: 'category'
      }
    ]
  },
  {
    timestamps: true,
    versionKey: false
  }
)

// eslint-disable-next-line new-cap
const BookModel = new mongoose.model('book', bookSchema)

export default BookModel
