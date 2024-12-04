import express from 'express';
import cors from 'cors';
import logger from './src/loggs/logging.js';
import clientsRouter from './src/routes/client.route.js';
import productsRouter from './src/routes/product.route.js';
import suppliersRouter from './src/routes/supplier.route.js';
import salesRouter from './src/routes/sale.route.js';
import productInfoRouter from './src/routes/productInfo.route.js';

const app = express();
app.use(express.json());
app.use(cors());

app.post('/database/create', async (req, res) => {
    await sequelize.sync();
    res.send('Database create');
});

// app.post('/database/drop', async (req, res) => {
//     await sequelize.drop();
//     res.send('Database Drop');
// });

app.use('/client', clientsRouter);
app.use('/supplier', suppliersRouter);
app.use('/product', productsRouter);
app.use('/sale', salesRouter);
app.use('/productInfo', productInfoRouter);

app.use((err, req, res, next) => {
    const route = req.url.split('/')[1].toUpperCase();
    logger.error(`[${route}] ${req.method} - ${err.message}`);

    return res.status(400).send({ erro: err.message });
});

app.listen(3000, () => console.log('API Started!'));
