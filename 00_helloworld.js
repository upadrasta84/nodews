/* look at scripts section in package.json.. with that, we can do npm run test or npm run dev */

//Node.js is a virtual machine that uses JavaScript as its scripting language and runs Chrome’s V8 JavaScript engine. Basically, 
//Node.js is based on an event-driven architecture where I/O runs asynchronously making it lightweight and efficient

//Node is singlethreaded as webapps typically use a lot of DB processing. Node makes use of DB's multithreaded nature while itself being single threaded.
//This works just fine for the most part for most web applications where DB usage indeed is a lot. 
//A singlethreaded app fails big if you need to do lots of CPU calculations before returning the data. Now, I don't mean a for loop processing the database result. 
//That's still mostly O(n). What I mean is things like doing Fourier transform (mp3 encoding for example), ray tracing (3D rendering) etc.
//Another pitfall of singlethreaded apps is that it will only utilise a single CPU core. So if you have a quad-core server (not uncommon nowdays) you're not 
//using the other 3 cores.


/*
JavaScript was originally designed as a language for manipulating web pages
using an API known as the Document Object Model (DOM). Originally created at
Netscape, it was named JavaScript as an attempt to ride the wave of hype behind the
increasingly popular Java language, a decision that has caused confusion for new
developers for years, as the language has little in common with Java. The early days of
the web didn’t help, with Microsoft developing its own variant, known simply as JScript
which added new features, such as XMLHttpRequest (now part of the main language,
and commonly abbreviated to XHR), which allowed developers to make requests to
external servers to refresh the information on a web page. The European Computer
Manufacturers Association (ECMA) finally decided to attempt to merge these competing
implementations into a new standard, called ECMAScript. Therefore, what is called
JavaScript nowadays is actually various implementations of ECMAScript, which is why
you might hear terms like “ES6” or “ES2018” used in reference to JavaScript (previously it
was versioned by number, but is now by year—ES2018 is the ninth edition of JavaScript).
These refer to the different specifications published by ECMA, which different browsers
are compliant with.

The main thing to
understand about JavaScript is that it is single-threaded and relies on the concept of
asynchronicity extensively. The downside is that, while JavaScript is executing, the
runtime is “blocked.” In the browser, this means that the whole browser will not react
to any interaction from the user while a JavaScript function is running. On the server, it
means no other connections will be accepted or handled.

Many JavaScript applications are IO-bound, rather than CPU-bound—that is, most
of this time is spent waiting for an external event to occur, rather than doing heavy
number crunching. In these kinds of environments, this single threading approach
makes a lot of sense, because Node does not need to actively wait for these external
events to occur. It can just execute a function, then when that function ends, it can
use callbacks and event listeners for various asynchronous activities. When the events
those handlers were set up for occur, those functions can then execute. In between
those two instances, any other callbacks or event listeners can execute in response
to events that have either occurred while the original function was running, or that
happen while there is no active method.

This makes life simpler, because concepts of thread safety do not need to be
considered, which eliminates an entire class of errors and complexity. If you are
handling a callback, you do not need to worry that suddenly another function may
start in the middle of your context and leave some shared state in an inconsistent or
unexpected mode

Polyfills are scripts that provide
pure-JavaScript versions of new APIs that are available in JavaScript, and were effective
in letting people use new JavaScript APIs in old versions of JavaScript. However, they
can’t cover all the holes—for example, adding something like the Geolocation API to a
browser that simply doesn’t support it is impossible. Another limitation of polyfills is
that they can’t actually change the underlying language. As newer versions of JavaScript
evolved, the syntax changed, introducing new ways of expressing classes and defining
anonymous functions. The introduction of transpilers allowed for developers to use
these new features in the code they wrote, but for them to be translated into a less
readable, but backwards-compatible variant to allow for execution in older browsers. 
*/


console.log('Hello Node World!')
//run by opening terminal and hitting 'node 00_helloworld.js'

//------------------------------------------------------------------------------------------------------------------//

//to get the node version, use node -v
// v16.13.2

/*
NPM: The npm stands for Node Package Manager and it is the default package manager for Node.js. It is written entirely in JavaScript, developed by  Isaac Z. Schlueter, 
it was initially released on January 12, 2010. The npm manages all the packages and modules for node.js and consists of command–line client npm. It gets installed into 
the system with the installation of node.js. The required packages and modules in the Node project are installed using npm. A package contains all the files needed for 
a module and modules are the JavaScript libraries that can be included in the Node project according to the requirement of the project.

NPX: The npx stands for Node Package Execute and it comes with the npm, when you installed npm above 5.2.0 version then automatically npx will installed. It is an npm 
package runner that can execute any package that you want from the npm registry without even installing that package. The npx is useful during a single time use package. 
If you have installed npm below 5.2.0 then npx is not installed in your system. 
*/

//to use npm, use npmjs.com
//to use npm, we need to do npm init on the project root folder
//to get npm version, use npm -v  --> 8.1.2

//we will use validator package from npm, which is very popular. in npmjs.com, search for validator, with lowercase v
// https://www.npmjs.com/package/validator

//to use it, we need to do 'npm i validator' or 'npm install validator'
//this vasically took 5 seconds to install validator. It created a node_modules in root directory of the project and in that it created validator folder
//inside validator, look at what files it has 
//using the first npm package also creates a package-lock.json file which will have list of the dependencies and where they were installed from.

const validator = require('validator')

console.log(validator.isEmail('karthik.com'))
console.log(validator.isEmail('karthik@damnit.com'))

//instead of 'requiring' a package as above, we can import the package or a submodule but that is supported in ES6. we dont seem to be using ES6

//we just need package-lock.json to recreate the downloaded packages. all we need to do is delete the node_modules and run 'npm i' or 'npm install' and it will look
//at this file and recreate all the dependencies. I have done that it worked just fine.. 



//------------------------------------------------------------------------------------------------------------------//

//when we do npm i validator, they install the packages locally. 

//to test global packages, we will install nodemon, that will automatically load the same file instead of running the node command each time after saving a file
//to install globally we use npm install nodemon -g
//when we use -g, it will not show up on package.json as the -g will install at an OS level

//when doing nodemon ./00_helloworld.js or nodemon -v, i was getting error that 'cannot be loaded because running scripts is disabled on this system.'
//to circumvent, had to run powershell from start as administror and run the command 'Set-ExecutionPolicy Unrestricted'

//I also installed angular using command npm i -g @angular/cli

console.log('gaga')

//------------------------------------------------------------------------------------------------------------------//


//to get the arguments passed to the program use, process.argv

console.log(process.argv)

/*since I am not passing any arguments, I got:
[
  'C:\\Program Files\\nodejs\\node.exe',
  'D:\\Karthik\\workspaces\\nodews\\00_helloworld.js'
]
*/

console.log('see multi-line comment example above')

console.log(process.argv[20]) //error? no.. getting 'undefined'

console.log(process.argv[0])

//------------------------------------------------------------------------------------------------------------------//

//to test for string, use ===
var myspace = process.argv[2] //get myspace variable as an argument. if it doesnt exist, hardcode to facebook
if(myspace === undefined) {
    myspace = 'facebook'
}

if(myspace === 'facebook') {
    console.log('facebook!')
} else if(myspace == 'google') {
    console.log('google')
} else {
    console.log('linkedin')
}

//------------------------------------------------------------------------------------------------------------------//
const yargs = require('yargs')

//yargs comes with a bunch of functionality for argument parsing. look into it.

yargs.command({
    command: 'mytest',
    describe: 'my test for yargs',
    handler: function() {
        console.log('karthiks mytest arg handler')
    }

})

//to test below, use node 00_helloworld.js mytest
//console.log(yargs.argv) //doing this will print the above 'karthiks mytest arg handler' ... instead of console.log, note yargs.parse() usage below


yargs.command({
    command: 'add',
    describe: 'adding notes',
    builder: {
        title: {
            describe: 'note title'
        }
    },
    handler: function(argv) {
        console.log('karthiks mytest arg handler',argv.title)
    }

})

//to test above, use node 00_helloworld.js add --title='Shopping list'  which will print. note that the above yargs.argv will not be printed as argument provided is not mytest
//karthiks mytest arg handler Shopping list    ..note below that we are now using yargs.parse instead of logging the yargs
yargs.parse()



//------------------------------------------------------------------------------------------------------------------//

//Node has great support out of the box for json
const myjson = {
    myvar1: 'var 1',
    myvar2: 'var 2'
}

const myjsonstr = JSON.stringify(myjson) //note that the above json format is a bit forgiving.. but when using content, everything should be in double quotes like in myjsonfile.json
console.log(myjsonstr)

const myjsonObj = JSON.parse(myjsonstr)
console.log(myjsonObj.myvar1)

console.log(myjsonObj.myvar3) //undefined.. no error

//------------------------------------------------------------------------------------------------------------------//

const fs = require('fs')
const { xyz } = require('color-convert')
var fileBuf = fs.readFileSync('d:/Karthik/workspaces/nodews/myjsonfile.json')
const fileStr = fileBuf.toString()

//console.log(fileBuf)
console.log(fileStr)

const myFileJson = JSON.parse(fileStr)
console.log(myFileJson.myvar1)


//------------------------------------------------------------------------------------------------------------------//
//defensive programming try catch


//const fileBuf = fs.readFileSync('myjsonfile2.json') //cant do this - error filebuf is already declared
fileBuf = fs.readFileSync('myjsonfile.json') //got error first as erarlier fileBuf was const and not var - cannot assign to constant variable... after this error changed to var and it works

//to debug, just add this debugger line and run node as 'node inspect 00_helloworld.js. this gives a url as 
//127.0.0.1:9229  which can be opened in a browser to inspect things. but we need to use chrome://inspect to open it.
//chrome has default integration this way with node but other browsers dont have that.
debugger

try {
    fileBuf = fs.readFileSync('myjsonfile2.json') //this file does not exist - "Error: ENOENT: no such file or directory, open 'myjsonfile2.json'"
} catch(e) {
    console.log('error as file doesnt exist')
}

//------------------------------------------------------------------------------------------------------------------//

//arrow functions

const square = function(x) {
    return x*x
}

console.log(square(9))

//console.log(square2(3)) //error as square2 isnt defined. we cannot use a function before defining it


//above can also be written as 
const square2 = (x) => {
    return x*x
}

console.log(square2(3))
 
//above can be made even simpler.. only for somethig which returns immediately:

const square3 = (x) => x*x

console.log(square3(13))

//------------------------------------------------------------------------------------------------------------------//
//arrow functions dont have a reference to this.


const printme1 = {
    name: 'karthik',
    func1: function() { 
        console.log('hello',this.name) //this is ok as this is a named function
    }
}

printme1.func1() //prints hello karthik


const printme2 = {
    name: 'karthik2',
    func1: () =>  { 
        console.log('hello',this.name) //this is not ok as this is an arrow function and arrow functions cannot have reference to 'this'
    }
}

printme2.func1() //prints hello undefined


//to fix, just remove function declaration altogether like below:

const printme3 = {
    name: 'karthik2',
    func1()  { 
        console.log('hello',this.name) //this is ok now
    }
}

printme3.func1() //prints hello karthik2


const printme4 = {
    name: 'karthik2',
    greetings: ['hi', 'hello', 'bye'],
    func1()  { 
        console.log('hello',this.name) //this 'this' works fine but next 'this' will not
        this.greetings.forEach(function(greet) {
            console.log(greet + ' ' +this.name) //note we are starting another function above, so the context for 'this' changes.
        }) 
    }
}

printme4.func1() //gives undefined as we cannot use 'this' 

//to remediate the above 'this' problem, use 'that' but that is considered old style of coding


const printme5 = {
    name: 'karthik2',
    greetings: ['hi', 'hello', 'bye'],
    func1()  { 
        that = this
        this.greetings.forEach(function(greet) {
            console.log(greet + ' ' +that.name)  //use that.name
        }) 
    }
}

printme5.func1() // ok now but old style of coding


//to remediate the 'that' to 'this' usage, use arrow function instead like below:

const printme6 = {
    name: 'karthik2',
    greetings: ['hi', 'hello', 'bye'],
    func1()  { 
        this.greetings.forEach((greet) => { //change to arrow function
            console.log(greet + ' ' +this.name) 
        }) 
    }
}

printme6.func1() //prints hello karthik2

//------------------------------------------------------------------------------------------------------------------//


var folks = [ 
    {name: "Bob", age: "32", occupation: "developer"}, 
    {name: "Bill", age: "17", occupation: "delinquent"}, 
    {name: "Bob", age: "34", occupation: "admin"}, 
    {name: "Brad", age: "40", occupation: "yes"} 
  ]
  Find:
  
  console.log(folks.find( fella => fella.name === "Bob")) // find returns the first occurrence
  //Returns an object: {name: "Bob", age: "32", occupation: "developer"}
  
  
  console.log(folks.filter( fella => fella.name === "Bob")) //filter will find all occurrences and return them as an array
  //Returns an array: [ {name: "Bob", age: "32", occupation: "developer"} ]

  //------------------------------------------------------------------------------------------------------------------//
