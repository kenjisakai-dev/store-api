import productInfoRepository from '../repositories/productInfo.repository.js';

async function createProductInfo(productInfo) {
  return await productInfoRepository.createProductInfo(productInfo);
}

export default { createProductInfo };
