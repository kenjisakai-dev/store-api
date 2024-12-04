import Sequelize from 'sequelize';
import db from '../database/db.js';
import Supplier from './supplier.model.js';

const Product = db.define(
    'product',
    {
        cod_product: {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        description: {
            type: Sequelize.STRING,
            allowNull: false,
        },
        value: {
            type: Sequelize.DOUBLE,
            allowNull: false,
        },
        stock: {
            type: Sequelize.INTEGER,
            allowNull: false,
        },
    },
    { underscored: true },
);

Product.belongsTo(Supplier, { foreignKey: 'cod_supplier' });

export default Product;
