const httpStatusCodes = require('./httpStatusCodes')
const BaseError = require('./baseError')

class Api404Error extends BaseError {
    constructor(name, statusCode = httpStatusCodes.NOT_FOUND, description = 'Not Found', isOperational = true) {
        super(name, statusCode, description, isOperational)
    }
}

class BadRequestError extends BaseError {
    constructor(name, statusCode = httpStatusCodes.BAD_REQUEST, description = 'Bad Request', isOperational = true) {
        super(name, statusCode, description, isOperational)
    }
}

class InternalServerError extends BaseError {
    constructor(name, statusCode = httpStatusCodes.INTERNAL_SERVER, description = 'Internal Server Error', isOperational = true) {
        super(name, statusCode, description, isOperational)
    }
}

module.exports = {
    Api404Error,
    BadRequestError,
    InternalServerError
}
