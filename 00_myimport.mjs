//below kind of imports are called named imports and the file name should be mjs or we need to define the type as module in package.json

import smth  from  './00_myutils2.js'
import * as bundle from  './00_myutils2.js'



console.log(`${smth}`)
//or to import all, use

//then do:
console.log(`${bundle.another}`)
