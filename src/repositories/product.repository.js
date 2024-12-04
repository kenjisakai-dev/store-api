import Product from '../models/product.model.js';

async function insertProduct(product) {
    return await Product.create(product);
}

async function getProducts() {
    return await Product.findAll();
}

async function getProduct(cod_product) {
    return await Product.findByPk(cod_product);
}

async function updateProduct(product) {
    await Product.update(product, {
        where: {
            cod_product: product.cod_product,
        },
    });
    return await getProduct(product.cod_product);
}

export default {
    insertProduct,
    getProducts,
    getProduct,
    updateProduct,
};
