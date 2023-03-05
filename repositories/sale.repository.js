import Sale from '../models/sale.model.js';
import Client from '../models/client.model.js';
import Product from '../models/product.model.js';

async function insertSale(sale) {
  try {
    return await Sale.create(sale);
  } catch (err) {
    throw err;
  }
}

async function getSales() {
  try {
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
  } catch (err) {
    throw err;
  }
}

async function getSalesByClientId(clientId) {
  try {
    return await Sale.findAll({
      where: {
        clientId,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getSalesByProductId(productId) {
  try {
    return await Sale.findAll({
      where: {
        productId,
      },
    });
  } catch (err) {
    throw err;
  }
}

async function getSalesBySupplierId(supplierId) {
  try {
    return await Sale.findAll({
      include: [
        {
          model: Product,
          where: {
            supplierId,
          },
        },
      ],
    });
  } catch (err) {
    throw err;
  }
}

async function getSale(id) {
  try {
    return await Sale.findByPk(id);
  } catch (err) {
    throw err;
  }
}

async function updateSale(sale) {
  try {
    await Sale.update(sale, {
      where: {
        saleId: sale.saleId,
      },
      value: sale.value,
      date: sale.date,
      clientId: sale.clientIdc,
    });
    return await getSale(sale.saleId);
  } catch (err) {
    throw err;
  }
}

async function deleteSale(id) {
  try {
    await Sale.destroy({
      where: {
        saleId: id,
      },
    });
    return await getSale(id);
  } catch (err) {
    throw err;
  }
}

export default {
  insertSale,
  getSales,
  getSalesByClientId,
  getSalesByProductId,
  getSalesBySupplierId,
  getSale,
  updateSale,
  deleteSale,
};
