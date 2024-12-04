import logger from '../loggs/logging.js';
import supplierService from '../services/supplier.service.js';

async function createSupplier(req, res, next) {
    try {
        const supplier = req.body;
        const { name, cnpj, phone, email, address } = supplier;

        if (!name || !cnpj || !phone || !email || !address) {
            throw new Error(
                'Nome, CNPJ, Telefone, Email e Endereço são obrigatórios.',
            );
        }
        const response = await supplierService.createSupplier(supplier);

        logger.info('[SUPPLIER] GET - Fornecedor cadastrado com sucesso.');
        return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

async function getSuppliers(req, res, next) {
    try {
        const suppliers = await supplierService.getSuppliers();

        logger.info('[SUPPLIER] GET - Fornecedores obtidos com sucesso.');
        return res.status(200).send(suppliers);
    } catch (err) {
        next(err);
    }
}

async function getSupplier(req, res, next) {
    try {
        const supplier = await supplierService.getSupplier(
            req.params.cod_supplier,
        );

        logger.info('[SUPPLIER] GET - Fornecedor obtido com sucesso.');
        return res.status(200).send(supplier);
    } catch (err) {
        next(err);
    }
}

async function updateSupplier(req, res, next) {
    try {
        const supplier = req.body;
        const { cod_supplier } = supplier;

        if (!cod_supplier) {
            throw new Error('Código do fornecedor é obrigatório.');
        }

        const response = await supplierService.updateSupplier(supplier);

        logger.info('[SUPPLIER] PUT - Fornecedor atualizado com sucesso.');
        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    createSupplier,
    getSuppliers,
    getSupplier,
    updateSupplier,
};
