import ProductInfoRepository from '../repositories/productInfo.repository.js';

async function createProductInfo(productInfo) {
  return await ProductInfoRepository.createProductInfo(productInfo);
}

async function updateProductInfo(productInfo) {
  return await ProductInfoRepository.updateProductInfo(productInfo);
}

async function getProductInfo(id) {
  const product = await ProductInfoRepository.getProduct(id);
  product.info = await ProductInfoRepository.getProductInfo(parseInt(id));
  return product;
}

async function deleteProductInfo(id) {
  return await ProductInfoRepository.deleteProductInfo(parseInt(id));
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
};
