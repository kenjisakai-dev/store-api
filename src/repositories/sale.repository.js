import Sale from '../models/sale.model.js';
import Client from '../models/client.model.js';
import Product from '../models/product.model.js';

async function insertSale(sale) {
    return await Sale.create(sale);
}

async function getSales() {
    return await Sale.findAll({
        include: [
            {
                model: Client,
            },
            {
                model: Product,
            },
        ],
    });
}

async function getSale(cod_sale) {
    return await Sale.findByPk(cod_sale, {
        include: [
            {
                model: Client,
            },
            {
                model: Product,
            },
        ],
    });
}

export default {
    insertSale,
    getSale,
    getSales,
};
