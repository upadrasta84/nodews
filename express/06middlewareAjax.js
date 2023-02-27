const express = require('express')
const app = express()
const helmet = require('helmet')

app.use(helmet()) //just by doing this and above line, we get protection from bunch of security related attacks. listed in https://www.npmjs.com/package/helmet
app.use(express.static('staticDir'))
app.use(express.json()) //this will be used for json parsing and is part of core express.
app.use(express.urlencoded({extended:false})) //without this, the json submitted will not come through properly and will need a lot of manual coding to read it.



app.post('/ajax', (req, res)=> { 
    console.log(req.headers) //we can see a header called content-type': 'application/x-www-form-urlencoded.. this is why we need express.urlencoded for us.
    console.log('--------------')
    console.log(req.body)
    console.log('--------------')
    console.log(req.body.name)
//    res.send('test') //this does not work in browser but when we request to /ajax via postman, we will see this response.
    //this is because, the content type of response is text/html which the ajax promise doesnt know how to deal with. we need to send it as json.
    //to resolve it, we need to use res.json
  
    res.json('["test",1,2,3]') //doing this will change the content type to application/json
})
app.listen(3000)

//to test this, we need to run node with this file and then browse localhost:3000/06ajax.html
//ajax.html will submit a json via ajax request to /ajax route which will be picked by the above.


