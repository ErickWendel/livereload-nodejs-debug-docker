const fastify = require('fastify')({ logger: true })
const PORT = process.env.PORT || 3000;
const HOST = process.env.HOST || "localhost"

const { sum } = require('./Math')

const val1 = 2
const val2 = 4
const result = sum(val1, val2)
console.log(`result`, result)


const queryStringJsonSchema = {
    type: 'object',
    required: ['number1', 'number2'],
    properties: {
        number1: { type: 'integer' },
        number2: { type: 'integer' }
    }
}

const schema = { query: queryStringJsonSchema }

fastify.get('/', { schema }, ({ query }, res) => {
    const { number1, number2 } = query
    const calculation = sum(number1, number2)
    return res.send({ "hey": "ho! livereload" })
})

const start = async () => {
    try {
        await fastify.listen(PORT, HOST)
        fastify.log.info(`server listening on ${fastify.server.address().port}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}
start()