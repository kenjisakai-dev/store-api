import SupplierService from '../services/supplier.service.js';

async function createSupplier(req, res, next) {
  try {
    let supplier = req.body;
    if (
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.email ||
      !supplier.address
    ) {
      throw new Error('Name, CNPJ, Phone, Email e Address são obrigatórios.');
    }
    supplier = await SupplierService.createSupplier(supplier);
    res.send(supplier);
    logger.info(`[SUPPLIER] GET - ${JSON.stringify(supplier)}`);
  } catch (err) {
    next(err);
  }
}

async function getSuppliers(req, res, next) {
  try {
    res.send(await SupplierService.getSuppliers());
    logger.info(`[SUPPLIER] GET`);
  } catch (err) {
    next(err);
  }
}

async function getSupplier(req, res, next) {
  try {
    res.send(await SupplierService.getSupplier(req.params.id));
    logger.info(`[SUPPLIER] GET`);
  } catch (err) {
    next(err);
  }
}

async function updateSupplier(req, res, next) {
  try {
    let supplier = req.body;
    if (
      !supplier.supplierId ||
      !supplier.name ||
      !supplier.cnpj ||
      !supplier.phone ||
      !supplier.email ||
      !supplier.address
    ) {
      throw new Error(
        'Supplier ID, Name, CNPJ, phone, Email e Address são obrigatórios.'
      );
    }
    supplier = await SupplierService.updateSupplier(supplier);
    res.send(supplier);
    logger.info(`[SUPPLIER] PUT - ${JSON.stringify(supplier)}`);
  } catch (err) {
    next(err);
  }
}

async function deleteSupplier(req, res, next) {
  try {
    const supplier = await SupplierService.getSupplier(req.params.id);
    await SupplierService.deleteSupplier(req.params.id);
    res.send({
      message: 'O Supplier ID informado foi excluído com sucesso.',
      supplier: supplier,
    });
    logger.info(`[SUPPLIER] DELETE`);
  } catch (err) {
    next(err);
  }
}

export default {
  createSupplier,
  getSuppliers,
  getSupplier,
  updateSupplier,
  deleteSupplier,
};
