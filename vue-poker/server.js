const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()
const port = process.env.PORT || 5000

app.use('/', serveStatic(path.join(__dirname, '/dist')))

// allows vue-router to parse routes correctly when in 'history' mode
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'))
})

app.listen(port)

console.log(`Server started on port ${port}`)
