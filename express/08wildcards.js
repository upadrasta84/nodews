const express = require('express')
const app = express()
const helmet = require('helmet')

app.use(express.urlencoded({extended:false})) 


//: is like a wildcard and will accept anything as url parameter
//to test, use http://localhost:3000/ajax/seyon
app.get('/ajax/:anything', (req, res)=> { 
    res.set('Karthik', 'Haha') //this is for setting http headers. You can check by doing curl -v http://localhost:3000/ajax/seyon
    res.set('Content-Type', 'text/plain') //with this, html will not be parsed and will show as text
    res.send(`<h1>you gave ${req.params.anything}</h1>`)
})

//app param is another method which will take first arg as any parameter from any route, which  when used will call this middleware function. 
app.param('anything', (req, res,next,anything)=> { 

    console.log(anything);
    next()
});

app.listen(3000)
