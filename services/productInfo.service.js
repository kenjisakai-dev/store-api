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

export default { createProductInfo, updateProductInfo, getProductInfo };
