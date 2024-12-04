import productInfoRepository from '../repositories/productInfo.repository.js';
import productRepository from '../repositories/product.repository.js';

async function createProductInfo(productInfo) {
    const { info } = await getProductInfo(productInfo.cod_product);

    if (info) {
        throw new Error('Infomação do produto já existe.');
    }

    return await productInfoRepository.createProductInfo(productInfo);
}

async function getProductsInfo() {
    const productsInfo = await productInfoRepository.getProductsInfo();

    if (productsInfo.length === 0) {
        throw new Error('Não existe informações dos produtos.');
    }

    return productsInfo;
}

async function getProductInfo(cod_product) {
    const product = await productRepository.getProduct(cod_product);
    const info = await productInfoRepository.getProductInfo(
        parseInt(cod_product),
    );

    if (!product && !info) {
        throw new Error('O produto não foi encontrado.');
    }

    return { product, info };
}

async function updateProductInfo(productInfo) {
    const { info } = await getProductInfo(productInfo.cod_product);

    if (!info) {
        throw new Error('A informação do produto não foi encontrada.');
    }

    return await productInfoRepository.updateProductInfo(productInfo);
}

async function createReview(cod_product, review) {
    const { info } = await getProductInfo(cod_product);

    if (!info) {
        throw new Error('A informação do produto não foi encontrada.');
    }

    info.reviews.push(review);

    return await productInfoRepository.createReview(cod_product, info);
}

export default {
    createProductInfo,
    getProductsInfo,
    getProductInfo,
    updateProductInfo,
    createReview,
};
