// Modules - Encapulated code
// CommonJS, every file is a module (by default)
const names = require('./3-names')
const sayHi = require('./4-utils')
const data = require('./5-alternative-flavor')  //its a folder above so 2 dots
require('./6-mindgrenade') // this will run the function in this file
console.log(names)
console.log(data)

// sayHi('susan')
// sayHi(names.john)
// sayHi(names.peter)