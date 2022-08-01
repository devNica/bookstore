import mongoose from 'mongoose'

const categorySchema = new mongoose.Schema(
  {
    category: {
      type: String,
      unique: true,
      required: true
    },
    isActive: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
)

// eslint-disable-next-line new-cap
const CategoryModel = new mongoose.model('category', categorySchema)

export default CategoryModel
