const { response } = require('express')
const express = require('express')
const app = express()
const helmet = require('helmet')

const path = require('path')


app.use(helmet()) 

app.use(express.static('staticDir'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))


//to use rendering, we need
//1. express 2. view engine such as EJS/handlebars/mustache/Pug(jade) etc 3. we need res.render inside our routes
//4. we need to pass to render 2 args: file we want to use as template and the data

//to use the view engine, we need to call app.set which takes a key and arg --> 
//key is 'view engine' and value is one of ejs/handlebars etc

//app.set('view engine', 'ejs') //we need to do npm i ejs
//app.set('view engine', 'hbs') //we need to do npm i hbs
app.set('view engine', 'pug') //we need to do npm i pug

app.set('views', path.join(__dirname, 'views'))

app.get('/view', (req, res)=> { 
    res.render('index') //for this to work, we need to set view engine and views folder as above and have a file index.ejs in the views folder
 })

 app.get('/view2', (req, res)=> { 
    res.render('ejssample') //for this to work, we need to set view engine and views folder as above and have a file index.ejs in the views folder
 })

 app.get('/view3', (req, res)=> {
    //data in 2nd args will be appended to res.locals 
    res.render('ejssamplewithdata', {username2: "karthik", somehtml: "<p1>some text</p1>"}) //for this to work, we need to set view engine and views folder as above and have a file index.ejs in the views folder
    //somehtml will have to be displayed using <%- %> instead of <%= %> as express doesnt let html be displayed with <%= %> to protect against xss attacks.
 })

 app.get('/view4', (req, res)=> {
    res.render('hbssamplewithdata', {username2: "karthik", somehtml: "<p1>some text</p1>", country: {name:"india",capital:"delhi"}})
 })

 app.get('/pug5', (req, res)=> {
    res.render('pugsamplewithdata', {username2: "karthik", somehtml: "<p1>some text</p1>", country: {name:"india",capital:"delhi"}}) 
 })

app.listen(3000)