import { Sequelize } from 'sequelize';
import env from '../config/environment.js';

const sequelize = new Sequelize(
    env.db_database,
    env.db_username,
    env.db_password,
    {
        host: env.db_host,
        dialect: 'mysql',
        define: {
            timestamps: true,
        },
        logging: false,
    },
);

export default sequelize;
