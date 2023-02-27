const express = require('express')
const app = express()



app.listen(3000)


  /*
  app.get(); read
  app.post(); create
  app.put(); update
  app.delete(); delete
  
  correspond to basic crud opertions and also the http verbs
  we also have app.all() for accepting all the above verbs
  
  all the methods take the path and a callback to run for that matching path.
  */

  
app.all('/all', (req, res) =>{
    res.send('test express')
  })

  app.get('/verbs',(req, res) =>{
    res.send('test express get')
  })
  
  app.post('/verbs',(req, res) =>{
    res.send('test express post')
  })
  
  app.delete('/verbs',(req, res) =>{
    res.send('test express delete')
  })
  
  app.put('/verbs',(req, res) =>{
    res.send('test express put')
  })
  
  //lastly app also has a use method which will use the middleware across the board - this was used in 03middleware.js
  