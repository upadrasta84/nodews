const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 1000)
})

const processData = async () => { //async always always returns a promise
    let data = await getDataPromise(3)
    data = await getDataPromise(data)
    data = await getDataPromise(data)
    return data
}

processData().then((data) => {
    console.log('Data', data)
}).catch((error) => {
    console.log('Error', error)
})

/*
More recent additions to the JavaScript language are async functions and the await keyword, added in ECMAScript 2017. 

First of all we have the async keyword, which you put in front of a function declaration to turn it into an async function. An async function is a function 
that knows how to expect the possibility of the await keyword being used to invoke asynchronous code.

Try typing the following lines into your browser's JS console:

function hello() { return "Hello" };
hello();
Copy to Clipboard
The function returns "Hello" — nothing special, right?

But what if we turn this into an async function? Try the following:

async function hello() { return "Hello" };
hello();

Ah. Invoking the function now returns a promise. This is one of the traits of async functions — their return values are guaranteed to be converted to promises.

we can also do :
*/
let hello = async () => "Hello";

/*
To actually consume the value returned when the promise fulfills, since it is returning a promise, we could use a .then() block:


*/
hello().then((value) => console.log(value))

hello().then(console.log) //same as above - but shorthand

/*
The advantage of an async function only becomes apparent when you combine it with the await keyword. await only works inside async functions within regular
JavaScript code, however it can be used on its own with JavaScript modules.

await can be put in front of any async promise-based function to pause your code on that line until the promise fulfills, then return the resulting value.

You can use await when calling any function that returns a Promise, including web API functions.

Here is a trivial example:
*/
async function hello2() {
  return await Promise.resolve("Hello");
};

hello2().then(console.log);


/*
Async/await makes your code look synchronous, and in a way it makes it behave more synchronously. The await keyword blocks execution of all the code that 
follows it until the promise fulfills, exactly as it would with a synchronous operation. It does allow other tasks to continue to run in the meantime, but 
the awaited code is blocked.
*/