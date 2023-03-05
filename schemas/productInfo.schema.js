import mongoose from 'mongoose';
import ReviewSchema from './review.schema.js';

const ProductInfoSchema = new mongoose.Schema(
  {
    productId: Number,
    category: String,
    width: String,
    height: String,
    reviews: [ReviewSchema],
  },
  { collation: 'productInfo' }
);

export default ProductInfoSchema;
