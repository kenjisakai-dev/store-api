import ProductInfoService from '../services/productInfo.service.js';

async function createProductInfo(req, res, next) {
  try {
    let productInfo = req.body;
    if (!productInfo.productId) {
      throw new Error('O ProductInfo ID é obrigatório.');
    }
    productInfo = await ProductInfoService.createProductInfo(productInfo);
    res.send(productInfo);
    logger.info(`[PRODUCT_INFO] POST - ${JSON.stringify(productInfo)}`);
  } catch (err) {
    next(err);
  }
}

async function updateProductInfo(req, res, next) {
  try {
    let productInfo = req.body;
    if (!productInfo.productId) {
      throw new Error('O ProductInfo ID é obrigatório.');
    }
    productInfo = await ProductInfoService.updateProductInfo(productInfo);
    res.send(productInfo);
    logger.info(`[PRODUCT_INFO] UPDATE - ${JSON.stringify(productInfo)}`);
  } catch (err) {
    next(err);
  }
}

async function getProductInfo(req, res, next) {
  try {
    let productInfo = await ProductInfoService.getProductInfo(req.params.id);
    res.send(productInfo);
    logger.info(`[PRODUCT_INFO] GET - ${JSON.stringify(productInfo)}`);
  } catch (err) {
    next(err);
  }
}

export default { createProductInfo, updateProductInfo, getProductInfo };
