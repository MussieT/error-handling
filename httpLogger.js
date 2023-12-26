const morgan = require('morgan')
const json = require('morgan-json')
const logger = require('./logger')

const format = json({
    method: ':method',
    url: ':url',
    status: ':status',
    contentLegnth: ':res[content-length]',
    responseTime: ':response-time'
})

const httpLogger = morgan(format, {
    stream: {
        write: (message) => {
            const {
                method,
                url,
                status,
                contentLength,
                responseTime
            } = JSON.parse(message)

            logger.info('HTTP access log', {
                timestamp: new Date().toString(),
                method,
                url,
                status: Number(status),
                contentLength,
                responseTime: Number(responseTime)
            })
        },
    },
})

module.exports = httpLogger
