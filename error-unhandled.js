const { logError } = require('./errorHandler')

process.on('unhandledRejection', (error) => {
    console.log('----------------- unhandled rejection ----------------------')
    logError(error)
    // process.exit(1)
})

process.on('uncaughtException', () => {
    console.log('----------------- uncaught exception ----------------------')
    logError(error)
    // process.exit(1)
})
