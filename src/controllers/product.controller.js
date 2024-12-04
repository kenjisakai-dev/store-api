import logger from '../loggs/logging.js';
import productService from '../services/product.service.js';

async function createProduct(req, res, next) {
    try {
        const product = req.body;
        const { name, description, value, stock, cod_supplier } = product;

        if (!name || !description || !value || !stock || !cod_supplier) {
            throw new Error(
                'Nome, Descrição, Valor, Estoque e Código do Fornecedor são obrigatórios.',
            );
        }

        const response = await productService.createProduct(product);

        logger.info('[PRODUCT] POST - Produto criado com sucesso.');
        return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

async function getProducts(req, res, next) {
    try {
        const products = await productService.getProducts();

        logger.info('[PRODUCT] GET - Produtos obtidos com sucesso.');
        return res.status(200).send(products);
    } catch (err) {
        next(err);
    }
}

async function getProduct(req, res, next) {
    try {
        const product = await productService.getProduct(req.params.cod_product);

        logger.info('[PRODUCT] GET - Produto obtido com sucesso.');
        return res.status(200).send(product);
    } catch (err) {
        next(err);
    }
}

async function updateProduct(req, res, next) {
    try {
        const product = req.body;
        const { cod_product } = product;

        if (!cod_product) {
            throw new Error('Código do Produto é obrigatório.');
        }

        const response = await productService.updateProduct(product);

        logger.info('[PRODUCT] PATCH - Produto atualizado com sucesso.');
        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
};
