require('dotenv').config()
const helmet = require('helmet')
const cors = require('cors')
const express = require('express')

const app = express()
const notFoundMiddleware = require('./middleware/not-found')
const errorMiddleware = require('./middleware/error-handler')

// middleware
app.use(cors())
app.use(helmet())
app.use(express.json())

// rootes
app.get('/ping', (req, res) => {
  res.send('pong!')
})

// products routes

app.use(notFoundMiddleware)
app.use(errorMiddleware)

const PORT = process.env.PORT || 3000
const start = async () => {
  try {
    // connectDB
    app.listen(PORT, console.log(`server running in port ${PORT}`))
  } catch (error) {
    console.log(error)
  }
}

start()
