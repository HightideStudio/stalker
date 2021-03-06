import winston from "winston";

const logger = winston.createLogger({
    level: 'debug',
    format: winston.format.combine(
        winston.format.colorize(),
        winston.format.timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        winston.format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`),
    ),
    transports: [new winston.transports.Console()],
    exitOnError: false,
});

export default logger;