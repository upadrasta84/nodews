const fs = require('fs')
fs.writeFileSync('kar.txt',  'this file was written using node.. awesome!!')

const fs2 = require('fs')
fs2.writeFileSync('kar2.txt',  'this file was written using node.. awesome!! however, as a convention, use the same variable name as that of the module')

fs.appendFileSync('kar.txt', 'now i am gonna append some content')