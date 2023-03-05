import mongoose from 'mongoose';

const ReviewSchema = new mongoose.Schema(
  {
    name: String,
    description: String,
  },
  { collation: 'productInfo' }
);

export default ReviewSchema;
