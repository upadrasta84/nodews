const express = require('express')
//when we do the above require express, node is going to go to the node_modules and go to the express directory and opens the index.js file there
//express' index.js exports the express.js from lib directory. Basically the above require is similar to getting that js file into our code.

//an app is an express application which will be created from the createApplication function inside hte express module. 
const app = express()


const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


