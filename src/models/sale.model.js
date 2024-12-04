import Sequelize from 'sequelize';
import db from '../database/db.js';
import Client from './client.model.js';
import Product from './product.model.js';

const Sale = db.define(
    'sale',
    {
        cod_sale: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        value: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        date: {
            type: Sequelize.DATE,
            allowNull: false,
        },
    },
    { underscored: true },
);

Sale.belongsTo(Client, { foreignKey: 'cod_client' });
Sale.belongsTo(Product, { foreignKey: 'cod_product' });

export default Sale;
