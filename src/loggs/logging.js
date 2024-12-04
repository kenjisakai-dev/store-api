import winston from 'winston';

const { combine, timestamp, label, printf } = winston.format;
const myFormat = printf(({ level, message, label, timestamp }) => {
    return `${timestamp} [${label}] ${level} ${message}`;
});

const logger = winston.createLogger({
    level: 'silly',
    transports: [
        new winston.transports.File({ filename: './logs/store-api.log' }),
    ],
    format: combine(label({ label: 'store-api' }), timestamp(), myFormat),
});

export default logger;
