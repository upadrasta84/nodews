// REQ ---MIDDLEWARE---> RES
//A middleware function is any function that has access to req, res, and next object

const express = require('express')
const app = express()

// REQ ---MIDDLEWAR---> RES
//A middleware function is any function that has access to req, res, and next object

//the next() method will call the next method which is used by the 'use' method. 
//in below code, we have output as :
//LOGGED4
//LOGGED
//LOGGED 2
//LOGGED3

const requestTime = function (req, res, next) {
  console.log('LOGGED 2')
  req.requestTime = Date.now()
  next()
}

const myLogger = function (req, res, next) {
  console.log('LOGGED')
  next()
}

const myLoggerFiltered = function (req, res, next) {
  console.log('LOGGED4')
  next()
}


app.use('/onlysomerequest',myLoggerFiltered) //this will fire only for the root route. 
app.get('/onlysome',myLogger) //get is only for specific verbs. 'use' is for all verbs.
app.use(requestTime)

app.get('/', (req, res) => {
  console.log('LOGGED3')

    let responseText = 'Hello World!<br>'
    responseText += `<small>Requested at: ${req.requestTime}</small>`
    res.send(responseText)
  })
  app.get('/onlysomerequest', (req, res) => {
    console.log('LOGGED5')
  
      let responseText = 'Hello World!<br>'
      responseText += `<small>Requested at: ${req.requestTime}</small>`
      res.send(responseText)
    })
  app.get('/*', (req, res) => {
    let responseText = 'Hello World!<br>'
    responseText += `smth else</small>`
    res.send(responseText)
  })
    
//with middleware, we dont have to call the middleware function in every single route. Express automatically takes care of the cross cutting concerns. 

//app.use is fancier version of app.get. with app.get we have specific http verbs but not for app.use. 'use' doesnt differentiate the http verbs

app.listen(3000)