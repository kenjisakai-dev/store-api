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

export default {
  createProductInfo,
  updateProductInfo,
  getProductInfo,
  getProduct,
};
