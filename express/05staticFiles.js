const express = require('express')
const app = express()

const path = require('path')

app.listen(3000)

app.use(express.static('staticDir'))
//using the above now we can request for localhost:3000/ganesh.JPG
//we can serve any number of static folders as needed
//just with that line above, we can have an entire static website up and running using just 4 lines of code

//in node, we had to have a route handler for every file. With the above, we can serve all the files we need to in one go, whichever can be public.

  
app.all('/', (req, res) =>{
    res.sendFile(path.join(__dirname,'05myfile.html'))
  })

    
app.all('/*', (req, res) =>{
    res.send('invalid request')
  })

  //express works top down. So / will match first section and anything else will match the * section of the all method.
