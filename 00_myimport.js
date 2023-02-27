//belpw kind of import using require is called a default import/export

const fromADifferentFile = require('./00_myutils.js')


const myvar2='Karthik'
console.log('hello',myvar2) //notice there is no space after hello. Node is automatically adding a space for me.
console.log('hello',fromADifferentFile.myvar)

console.log(fromADifferentFile.add2(2,3))
