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

export default { createProductInfo };
