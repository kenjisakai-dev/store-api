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

async function deleteProductInfo(req, res, next) {
  try {
    const productInfo = await ProductInfoService.getProductInfo(req.params.id);
    await ProductInfoService.deleteProductInfo(req.params.id);
    res.send({
      message: 'O ProductInfo ID informado foi excluído com sucesso.',
      productInfo: productInfo,
    });
    logger.info(`[PRODUCT_INFO] DELETE`);
  } catch (err) {
    next(err);
  }
}

async function createReview(req, res, next) {
  try {
    let params = req.body;
    if (!params.productId || !params.review) {
      throw new Error('O ProductInfo ID e Review são obrigatórios.');
    }
    res.send(
      await ProductInfoService.createReview(params.review, params.productId)
    );
    logger.info(`[PRODUCT_INFO] POST`);
  } catch (err) {
    next(err);
  }
}

async function deleteReview(req, res, next) {
  try {
    const review = ProductInfoService.deleteReview(
      req.params.id,
      req.params.index
    );
    res.send({
      message: 'O ProductInfo ID informado foi excluído com sucesso.',
      review: review,
    });
    logger.info(`[PRODUCT_INFO] DELETE`);
  } catch (err) {
    next(err);
  }
}

export default {
  createProductInfo,
  updateProductInfo,
  getProductInfo,
  deleteProductInfo,
  createReview,
  deleteReview,
};
