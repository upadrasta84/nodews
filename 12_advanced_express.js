const express = require('express')
const mongoose = require('mongoose')
const userRouter = require('./12_Routes')

mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.suyhx.mongodb.net/sample_weatherdata', {
    useNewUrlParser: true
})

const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     if (req.method === 'GET') {
//         res.send('GET requests are disabled')
//     } else {
//         next()
//     }
// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently down. Check back soon!')
// })

app.use(express.json())
app.use(userRouter)

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})
