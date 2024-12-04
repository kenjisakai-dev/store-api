import supplierRepository from '../repositories/supplier.repository.js';

async function createSupplier(supplier) {
    try {
        return await supplierRepository.insertSupplier(supplier);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getSuppliers() {
    try {
        const suppliers = await supplierRepository.getSuppliers();

        if (suppliers.length === 0) {
            throw new Error('Não existe fornecedores cadastrados.');
        }

        return suppliers;
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getSupplier(cod_supplier) {
    try {
        const supplier = await supplierRepository.getSupplier(cod_supplier);

        if (!supplier) {
            throw new Error('O fornecedor não foi encontrado.');
        }

        return supplier;
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function updateSupplier(supplier) {
    try {
        await getSupplier(supplier.cod_supplier);
        return await supplierRepository.updateSupplier(supplier);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
};
