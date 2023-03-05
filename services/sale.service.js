import SaleRepository from '../repositories/sale.repository.js';
import ClientRepository from '../repositories/client.repository.js';
import ProductRepository from '../repositories/product.repository.js';
import SupplierRepository from '../repositories/supplier.repository.js';

async function createSale(sale) {
  let error = '';
  if (!(await ClientRepository.getClient(sale.clientId))) {
    error = 'O Client ID informado não existe.';
  }
  const product = await ProductRepository.getProduct(sale.productId);
  if (!product) {
    error += 'O Product ID informado não existe.';
  }
  if (error) {
    throw new Error(error);
  }

  if (product.stock > 0) {
    sale = await SaleRepository.insertSale(sale);
    product.stock--;
    await ProductRepository.updateProduct(product);
    return sale;
  } else {
    throw new Error('O Produto informado não possui estoque.');
  }
}

async function getSales(productId, supplierId) {
  if (productId) {
    if (!(await ProductRepository.getProduct(productId))) {
      throw new Error('O Product ID informado não existe.');
    }
    return await SaleRepository.getSalesByProductId(productId);
  }
  if (supplierId) {
    if (!(await SupplierRepository.getSupplier(supplierId))) {
      throw new Error('O Supplier ID informado não existe.');
    }
    return await SaleRepository.getSalesBySupplierId(supplierId);
  }

  const sale = await SaleRepository.getSales();
  if (sale.length > 0) {
    return sale;
  }
  throw new Error('Não existe Sales na tabela.');
}

async function getSale(id) {
  if (await SaleRepository.getSale(id)) {
    return await SaleRepository.getSale(id);
  }
  throw new Error('O Sale ID informado não existe.');
}

async function updateSale(sale) {
  await getSale(sale.saleId);
  if (!(await ClientRepository.getClient(sale.clientId))) {
    throw new Error('O Client ID informado não existe.');
  }
  if (!(await ProductRepository.getProduct(sale.productId))) {
    throw new Error('O Product ID informado não existe.');
  }
  return await SaleRepository.updateSale(sale);
}

async function deleteSale(id) {
  const sale = await SaleRepository.getSale(id);
  if (sale) {
    const product = await ProductRepository.getProduct(sale.productId);
    await SaleRepository.updateSale(id);
    product.stock++;
    await ProductRepository.updateProduct(product);
    return await SaleRepository.deleteSale(id);
  } else {
    throw new Error('O Sale ID informado não existe.');
  }
}

export default {
  createSale,
  getSales,
  getSale,
  updateSale,
  deleteSale,
};
