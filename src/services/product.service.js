import productRepository from '../repositories/product.repository.js';
import supplierService from '../services/supplier.service.js';

async function createProduct(product) {
    try {
        await supplierService.getSupplier(product.cod_supplier);

        return await productRepository.insertProduct(product);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getProducts() {
    try {
        const products = await productRepository.getProducts();

        if (products.length === 0) {
            throw new Error('Não existe produtos cadastrados.');
        }

        return products;
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getProduct(cod_product) {
    try {
        const product = await productRepository.getProduct(cod_product);

        if (!product) {
            throw new Error('O Produto não foi encontrado.');
        }

        return product;
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function updateProduct(product) {
    try {
        await getProduct(product.cod_product);

        if (product.cod_supplier) {
            await supplierService.getSupplier(product.cod_supplier);
        }

        return await productRepository.updateProduct(product);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function checkProductInStock(product) {
    if (product.stock <= 0) {
        throw new Error('O Produto informado não tem em estoque.');
    }
}

export default {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    checkProductInStock,
};
