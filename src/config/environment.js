import dotenv from 'dotenv';
dotenv.config();

export default {
    db_host: process.env.DB_HOST,
    db_username: process.env.DB_USERNAME,
    db_password: process.env.DB_PASSWORD,
    db_database: process.env.DB_DATABASE,
    mongodb_connection_string: process.env.MONGODB_CONNECTION_STRING,
};
