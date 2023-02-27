//Express - Fast, unopinionated, minimalist web framework for Node.js
//Express is a minimal and flexible Node.js web application framework that provides a robust set of features for web and mobile applications.
//Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. 
//It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js

//Express is the back-end component of popular development stacks like the MEAN, MERN or MEVN stack,
/*
Makes building web applications with node.js much easier
used for both server rendered apps as well as api/microservices
extremely light, fast, and free
full control of request and response
by far the most popular node framework
great to use with client side frameworks as it's all javascript
*/

//to install express, do npm i express

// Import the Express library.
const express = require('express');
const path = require('path')

// Initializing the app.
const app = express();

console.log(__dirname) //contains the dir of the application
console.log(__filename) //contains the app file name

const logger = (req, res, next) => {
    console.log('middleware to interpret all requests')
    next()
}
//to use the above middleware, we need to use it
app.use(logger)


const rootDir = path.join(__dirname, './public/')

//Handlebars compiles templates into JavaScript functions. This makes the template execution faster than most other template engines.
//Handlebars is a simple templating language. It uses a template and an input object to generate HTML or other text formats. 
//Handlebars templates look like regular text with embedded Handlebars expressions. It can be used with express as the hbs module using npm

app.set('view engine', 'hbs')
app.use(express.static(rootDir)) //this will setup the specified directory to serve files

app.get('', (req,res)=>{
    console.log('/ request received')
    res.render('index1', {
        title: 'hahaha',
        name: 'hehehe',
        placeholder: 'this is the index page, dude!'
    })
})

// Getting the path request and sending the response with text
app.get('/req', (req,res)=>{
    res.send('<h1>Hi, your request has been received</h1>')
})


app.get('/req2/:kar', (req,res)=>{
    res.send('you gave id as '+req.params.kar)
})

app.get('/helloworld', (req,res)=>{
    console.log('helloworld request received',rootDir+'index.html')
    res.render('index1', {
        title: 'hahaha',
        name: 'hehehe',
        placeholder: 'this is the helloworld page'
    })
})

app.get('/helloworld2', (req,res)=>{
    console.log('helloworld2 request received',rootDir+'index.html')
    res.redirect('index2.html')
})

app.get('/help', (req,res)=>{
    res.send('<h1>Hi, help page</h1>')
})

app.get('/help/*', (req,res)=>{
    res.send('<h1>Hi, 404 help not found</h1>')
})
app.get('/help*', (req,res)=>{
    res.send('<h1>Hi, i will help all pages</h1>')

})



//More than one callback function can handle a route (make sure you specify the next object). For example:

app.get('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})


//An array of callback functions can handle a route. For example:

var cb0 = function (req, res, next) {
  console.log('CB0')
  next()
}

var cb1 = function (req, res, next) {
  console.log('CB1')
  next()
}

var cb2 = function (req, res) {
  res.send('Hello from C!')
}

app.get('/example/c', [cb0, cb1, cb2])

/* response methods

res.download()	Prompt a file to be downloaded.
res.end()	End the response process.
res.json()	Send a JSON response.
res.jsonp()	Send a JSON response with JSONP support.
res.redirect()	Redirect a request.
res.render()	Render a view template.
res.send()	Send a response of various types.
res.sendFile()	Send a file as an octet stream.
res.sendStatus()	Set the response status code and send its string representation as the response body.

*/

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

  app.all('/secret', function (req, res, next) {
    console.log('Accessing the secret section ...')
    next() // pass control to the next handler
  })  




// all other pages
app.get('*', (req,res)=>{
    res.send('<h1>Hi, 404</h1>')
})
// Listen on port 2000
app.listen(2000, ()=>{
    console.log('listening at http://localhost:2000')
})

//to run this, run as a normal node app and access using http://localhost:2000

