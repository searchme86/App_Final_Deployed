import mongoose from 'mongoose';

const productSchema = new mongoose.Schema(
  {
    pdUploaderNickname: { type: String, required: true },
    pdUploaderImage: { type: String, required: true },
    pdCategory: { type: String, required: true },
    pdType: { type: String, required: true },
    pdBrand: { type: String, required: true },
    pdTitle: { type: String, required: true },
    pdImage: { type: String, required: true },
    pdPrice: { type: String, required: true },
    pdDes: { type: String, required: true },
    pdDegree: { type: String, required: true },
    pdAddress: { type: [String], required: true },
    pdWish: { type: String },
    pdSizeInfo: [
      {
        pdSize: { type: String },
        pdPriceBySize: { type: String },
      },
    ],
    pdtags: [String],
    createdAt: {
      type: Date,
      default: new Date(),
    },
  },
  { timestamps: true }
);

const Product = mongoose.model('Product', productSchema);
export default Product;
