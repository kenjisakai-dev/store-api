import saleService from '../services/sale.service.js';
import logger from '../loggs/logging.js';

async function createSale(req, res, next) {
    try {
        const sale = req.body;
        const { cod_client, cod_product } = sale;

        if (!cod_client || !cod_product) {
            throw new Error(
                'Código do cliente e Código do produto são obrigatórios.',
            );
        }

        const response = await saleService.createSale(sale);

        logger.info('[SALE] POST - Venda cadastrada com sucesso.');
        return res.status(201).send(response);
    } catch (err) {
        next(err);
    }
}

async function getSales(req, res, next) {
    try {
        const sales = await saleService.getSales(req.params.cod_sale);

        logger.info('[SALE] GET - Vendas obtidas com sucesso.');
        return res.status(200).send(sales);
    } catch (err) {
        next(err);
    }
}

async function getSale(req, res, next) {
    try {
        const sale = await saleService.getSale(req.params.cod_sale);

        logger.info('[SALE] GET - Venda obtida com sucesso');
        return res.status(200).send(sale);
    } catch (err) {
        next(err);
    }
}

async function updateSale(req, res, next) {
    try {
        const sale = req.body;
        const { cod_sale } = sale;

        if (!cod_sale) {
            throw new Error('Código da venda é obrigatório.');
        }

        const response = await saleService.updateSale(sale);

        logger.info('[SALE] PATCH - Venda atualizada com sucesso.');
        res.status(200).send(response);
    } catch (err) {
        next(err);
    }
}

export default {
    createSale,
    getSales,
    getSale,
    updateSale,
};
