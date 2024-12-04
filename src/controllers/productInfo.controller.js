import productInfoService from '../services/productInfo.service.js';
import logger from '../loggs/logging.js';

async function createProductInfo(req, res, next) {
    try {
        const productInfo = req.body;
        const { cod_product, category } = productInfo;

        if (!cod_product || !category) {
            throw new Error('Código do produto e Categoria são obrigatórios.');
        }

        const response = await productInfoService.createProductInfo(
            productInfo,
        );

        logger.info(
            '[PRODUCT_INFO] POST - A informação do produto foi criado com sucesso.',
        );
        return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

async function getProductsInfo(req, res, next) {
    try {
        const response = await productInfoService.getProductsInfo();

        logger.info(
            '[PRODUCT_INFO] GET - As informações dos produtos foram obtidos com sucesso.',
        );

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function getProductInfo(req, res, next) {
    try {
        const { cod_product } = req.params;

        if (!cod_product) {
            throw new Error('Código do produto é obrigatório.');
        }

        const response = await productInfoService.getProductInfo(cod_product);

        logger.info(
            '[PRODUCT_INFO] GET - A informação do produto foi obtida com sucesso.',
        );

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function updateProductInfo(req, res, next) {
    try {
        const productInfo = req.body;
        const { cod_product } = productInfo;

        if (!cod_product) {
            throw new Error('Código do produto é obrigatório.');
        }

        const response = await productInfoService.updateProductInfo(
            productInfo,
        );

        logger.info(
            '[PRODUCT_INFO] UPDATE - Informação do produto atualizado com sucesso.',
        );

        return res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

async function createReview(req, res, next) {
    try {
        const { cod_product, name, description } = req.body;

        if (!cod_product || !name || !description) {
            throw new Error(
                'Código do produto, Nome e Descrição são obrigatórios.',
            );
        }

        const review = {
            name,
            description,
        };

        const response = await productInfoService.createReview(
            cod_product,
            review,
        );

        logger.info('[PRODUCT_INFO] POST - Review criado com sucesso.');

        return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    createProductInfo,
    getProductsInfo,
    getProductInfo,
    updateProductInfo,
    createReview,
};
