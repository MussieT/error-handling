class BaseError extends Error {
    constructor(name, statusCode, isOperational, descripton) {
        super(descripton)

        Object.setPrototypeOf(this, new.target.prototype)
        this.name = name
        this.statusCode = statusCode
        this.isOperational = isOperational

        Error.captureStackTrace(this)
    }
}

module.exports = BaseError
