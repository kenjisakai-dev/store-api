import SupplierRepository from '../repositories/supplier.repository.js';
import ProductRepository from '../repositories/product.repository.js';

async function createSupplier(supplier) {
  return await SupplierRepository.insertSupplier(supplier);
}

async function getSuppliers() {
  const supplier = await SupplierRepository.getSuppliers();
  if (supplier.length > 0) {
    return supplier;
  }
  throw new Error('Não existe Suppliers na tabela.');
}

async function getSupplier(id) {
  if (await SupplierRepository.getSupplier(id)) {
    return await SupplierRepository.getSupplier(id);
  }
  throw new Error('O Supplier ID informado não existe.');
}

async function updateSupplier(supplier) {
  await getSupplier(supplier.supplierId);
  return await SupplierRepository.updateSupplier(supplier);
}

async function deleteSupplier(id) {
  await getSupplier(id);
  const supplier = await ProductRepository.getProductsBySupplierId(id);
  if (supplier.length > 0) {
    throw new Error(
      'Não é possível excluir o Supplier ID pois ele tem produto cadastrado.'
    );
  }
  return await SupplierRepository.deleteSupplier(id);
}

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  updateSupplier,
  deleteSupplier,
};
