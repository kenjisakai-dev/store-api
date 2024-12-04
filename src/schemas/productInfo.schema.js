import mongoose from 'mongoose';
import ReviewSchema from './review.schema.js';

const ProductInfoSchema = new mongoose.Schema(
    {
        cod_product: Number,
        category: String,
        width: String,
        height: String,
        depth: String,
        reviews: [ReviewSchema],
    },
    { collection: 'productInfo' },
);

export default ProductInfoSchema;
