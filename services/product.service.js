import ProductRepository from '../repositories/product.repository.js';
import SupplierRepository from '../repositories/supplier.repository.js';
import SaleRepository from '../repositories/sale.repository.js';
import ProductInfoRepository from '../repositories/productInfo.repository.js';

async function createProduct(product) {
  if (await SupplierRepository.getSupplier(product.supplierId)) {
    return await ProductRepository.insertProduct(product);
  }
  throw new Error('O Supplier ID informado não existe.');
}

async function getProducts() {
  const product = await ProductRepository.getProducts();
  if (product.length > 0) {
    return product;
  }
  throw new Error('Não existe Products na tabela.');
}

async function getProduct(id) {
  if (await ProductRepository.getProduct(id)) {
    return await ProductRepository.getProduct(id);
  }
  throw new Error('O Product ID informado não existe.');
}

async function updateProduct(product) {
  await getProduct(product.productId);
  if (!(await SupplierRepository.getSupplier(product.supplierId))) {
    throw new Error('O Supplier ID informado não existe.');
  }
  return await ProductRepository.updateProduct(product);
}

async function deleteProduct(id) {
  const sales = await SaleRepository.getSalesByProductId(id);
  if (sales.length > 0) {
    throw new Error('Não é possível excluir o Product ID pois ele tem vendas.');
  }
  return await ProductRepository.deleteProduct(id);
}

export default {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
};
