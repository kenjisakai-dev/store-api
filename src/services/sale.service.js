import saleRepository from '../repositories/sale.repository.js';
import clientService from '../services/client.service.js';
import productService from '../services/product.service.js';

async function createSale(sale) {
    try {
        await clientService.getClient(sale.cod_client);
        const product = await productService.getProduct(sale.cod_product);

        await productService.checkProductInStock(product);

        sale.value = product.value;
        sale.date = new Date();

        const data = await saleRepository.insertSale(sale);

        const updateProduct = {
            cod_product: product.cod_product,
            stock: --product.stock,
        };

        await productService.updateProduct(updateProduct);

        return data;
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getSales() {
    try {
        const sales = await saleRepository.getSales();

        if (sales.length === 0) {
            throw new Error('Não existe vendas cadastradas.');
        }

        return sales;
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getSale(cod_sale) {
    try {
        const sale = await saleRepository.getSale(cod_sale);

        if (!sale) {
            throw new Error('A Venda não foi encontrada.');
        }

        return sale;
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function updateSale(sale) {
    try {
        await getSale(sale.cod_sale);

        if (sale.cod_client) {
            await clientService.getClient(sale.cod_client);
        }

        if (sale.cod_product) {
            await productService.getProduct(sale.cod_client);
        }

        return await saleRepository.updateSale(sale);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

export default {
    createSale,
    getSales,
    getSale,
    updateSale,
};
