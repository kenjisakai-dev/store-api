import Supplier from '../models/supplier.model.js';

async function insertSupplier(supplier) {
    return await Supplier.create(supplier);
}

async function getSuppliers() {
    return await Supplier.findAll();
}

async function getSupplier(cod_supplier) {
    return await Supplier.findByPk(cod_supplier);
}

async function updateSupplier(supplier) {
    await Supplier.update(supplier, {
        where: {
            cod_supplier: supplier.cod_supplier,
        },
    });
    return await getSupplier(supplier.cod_supplier);
}

export default {
    insertSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
};
