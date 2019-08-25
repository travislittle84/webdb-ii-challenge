const server = require('./server.js')

const port = process.env.PORT || 8000
server.listen(port, () => {
    console.log(`\n## Server running on port ${port} ##\n`)
})
