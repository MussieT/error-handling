const winston = require('winston')
const Logsene = require('winston-logsene')

const customeLevels = {
    levels: {
        error: 0,
        warn: 1,
        info: 2,
        http: 3,
        verbose: 4,
        debug: 5,
        silly: 6
    },
}

const options = {
    console: {
        level: 'debug',
        handleExceptions: true,
        json: false,
        colorize: true,
        format: winston.format.combine(
            winston.format.colorize({ all: true }),
            winston.format.simple(),
            winston.format.timestamp({
                format: 'YYYY-MM-DD HH:mm:ss'
            }),
        ),
    },
}

const logger = winston.createLogger({
    level: customeLevels.levels,
    transports: [
        new winston.transports.Console(options.console),
    ],
    exitOnError: false
})

module.exports = logger
