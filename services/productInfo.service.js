import ProductInfoRepository from '../repositories/productInfo.repository.js';
import ProductRepository from '../repositories/product.repository.js';

async function createProductInfo(productInfo) {
  return await ProductInfoRepository.createProductInfo(productInfo);
}

async function getProductsInfo() {
  return await ProductInfoRepository.getProductsInfo();
}

async function getProductInfo(id) {
  const product = await ProductRepository.getProduct(id);
  const info = await ProductInfoRepository.getProductInfo(parseInt(id));
  return { product, info };
}

async function updateProductInfo(productInfo) {
  return await ProductInfoRepository.updateProductInfo(productInfo);
}

async function deleteProductInfo(productId) {
  return await ProductInfoRepository.deleteProductInfo(parseInt(productId));
}

async function createReview(review, id) {
  return await ProductInfoRepository.createReview(review, id);
}

async function deleteReview(productId, index) {
  await ProductInfoRepository.deleteReview(parseInt(productId), index);
}

export default {
  createProductInfo,
  updateProductInfo,
  getProductInfo,
  deleteProductInfo,
  createReview,
  deleteReview,
  getProductsInfo,
};
