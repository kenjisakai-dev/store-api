import ProductService from '../services/product.service.js';

async function createProduct(req, res, next) {
  try {
    let product = req.body;
    if (
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
      throw new Error(
        'Name, Description, Value, Stock e Supplier ID são obrigatórios.'
      );
    }
    product = await ProductService.createProduct(product);
    res.send(product);
    logger.info(`[PRODUCT] POST - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function getProducts(req, res, next) {
  try {
    res.send(await ProductService.getProducts());
    logger.info(`[PRODUCT] GET`);
  } catch (err) {
    next(err);
  }
}

async function getProduct(req, res, next) {
  try {
    res.send(await ProductService.getProduct(req.params.id));
    logger.info(`[PRODUCT] GET`);
  } catch (err) {
    next(err);
  }
}

async function updateProduct(req, res, next) {
  try {
    let product = req.body;
    if (
      !product.productId ||
      !product.name ||
      !product.description ||
      !product.value ||
      !product.stock ||
      !product.supplierId
    ) {
      throw new Error(
        'Product ID, Name, Description, Value, Stock e Supplier ID são obrigatórios.'
      );
    }
    product = await ProductService.updateProduct(product);
    res.send(product);
    logger.info(`[PRODUCT] PUT - ${JSON.stringify(product)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteProduct(req, res, next) {
  try {
    const product = await ProductService.getProduct(req.params.id);
    await ProductService.deleteProduct(req.params.id);
    res.send({
      message: 'O Product ID informado foi excluído com sucesso.',
      product: product,
    });
    logger.info(`[PRODUCT] DELETE`);
  } catch (err) {
    next(err);
  }
}

export default {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
