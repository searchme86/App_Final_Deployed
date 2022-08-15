import mongoose from 'mongoose';

const categorySchema = new mongoose.Schema(
  {
    categoryTitle: { type: String },
    categoryDescription: { type: String },
    categoryLink: { type: String },
    imageFile: { type: String },
    ImageDescription: { type: String },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

const Category = mongoose.model('Category', categorySchema);
export default Category;
