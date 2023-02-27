const myvar='tejaswy'

console.log('do this log!')

module.exports = myvar //without this explicit export, the file myimport.js will not be able to use myvar and i got an error saying 'ReferenceError: myvar is not defined'


const add = function(a,b) {
    return a+b
}

module.exports = add //this exports is overwriting the previous exports of myvar

//to import both, we need:

module.exports = {
    add2: add,
    myvar:myvar
}