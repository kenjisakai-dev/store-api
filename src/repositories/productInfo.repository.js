import connect from '../database/mongo.db.js';
import ProductInfoSchema from '../schemas/productInfo.schema.js';

const mongoose = await connect();
const ProductInfo = mongoose.model('productInfo', ProductInfoSchema);

async function createProductInfo(productInfo) {
    try {
        const record = new ProductInfo(productInfo);
        return await record.save();
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getProductsInfo() {
    try {
        const query = ProductInfo.find({});
        return await query.exec();
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function getProductInfo(cod_product) {
    try {
        const query = ProductInfo.findOne({ cod_product });
        return await query.exec();
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function updateProductInfo(productInfo) {
    try {
        const { cod_product } = productInfo;

        await ProductInfo.findOneAndUpdate({ cod_product }, productInfo);

        return await getProductInfo(productInfo.cod_product);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

async function createReview(cod_product, productInfo) {
    try {
        await updateProductInfo(productInfo);
        return await getProductInfo(cod_product);
    } catch (erro) {
        throw new Error(erro.message);
    }
}

export default {
    createProductInfo,
    getProductsInfo,
    getProductInfo,
    updateProductInfo,
    createReview,
};
