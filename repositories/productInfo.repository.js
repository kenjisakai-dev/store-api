import { getClient } from './mongo.db.js';
import Product from '../models/product.model.js';

async function createProductInfo(productInfo) {
  const client = getClient();
  try {
    await client.connect();
    await client
      .db('store-api')
      .collection('productInfo')
      .insertOne(productInfo);
    return productInfo;
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function updateProductInfo(productInfo) {
  const client = getClient();
  try {
    await client.connect();
    await client
      .db('store-api')
      .collection('productInfo')
      .updateOne(
        { productId: productInfo.productId },
        { $set: { ...productInfo } }
      );
    return productInfo;
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function getProductInfo(productId) {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db('store-api')
      .collection('productInfo')
      .findOne({ productId });
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function getProduct(id) {
  try {
    return await Product.findByPk(id, { raw: true });
  } catch (err) {
    throw err;
  }
}

async function deleteProductInfo(productId) {
  const client = getClient();
  try {
    await client.connect();
    return await client
      .db('store-api')
      .collection('productInfo')
      .deleteOne({ productId });
  } catch (err) {
    throw err;
  } finally {
    await client.close();
  }
}

async function createReview(review, productId) {
  try {
    const productInfo = await getProductInfo(productId);
    productInfo.reviews.push(review);
    await updateProductInfo(productInfo);
    return review;
  } catch (err) {
    throw err;
  }
}

async function deleteReview(productId, index) {
  try {
    const productInfo = await getProductInfo(productId);
    productInfo.reviews.splice(index, 1);
    await updateProductInfo(productInfo);
  } catch (err) {
    throw err;
  }
}

export default {
  createProductInfo,
  updateProductInfo,
  getProductInfo,
  getProduct,
  deleteProductInfo,
  createReview,
  deleteReview,
};
