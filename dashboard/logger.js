import winston from "winston"

const logger = winston.createLogger({
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.file({filename: 'logs/app/log'})
    ]
})

export default logger