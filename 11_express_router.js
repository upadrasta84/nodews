const userRouter = require('./11_express_routers')
const express = require('express')

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())
app.use(userRouter)




app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

