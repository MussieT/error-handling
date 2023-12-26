const express = require('express')
const { logErrorMiddleware, returnError, logError } = require('./errorHandler')
const httpLogger = require('./httpLogger.js')
const { Api404Error } = require('./errorTypes.js')

require('./error-unhandled.js')

const app = express()

app.use(httpLogger)

app.get('/', (req, res, next) => {
    res.status(200).send('Hello World!')
})

function fetchData() {
    return new Promise((resolve, reject) => {
        let data = 0
        resolve(data)
    });
}

app.post('/user', (req, res, next) => {
    fetchData().then(() => {
        throw new Api404Error('User Not found')
    }).catch((error) => {
        console.info('here we are')
        next(error)
    })
})

app.use(logErrorMiddleware)
app.use(returnError)

app.listen(3000, () => {
    console.info('we are running good.')
})
