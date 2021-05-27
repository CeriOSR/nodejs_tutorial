// npm - global comman, comes with node
// npm --v - version number

// local dependency - use it only in this particular project
// npm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo npm install -g <packageName> (mac) 

// package.json - manifest file (stores import info about project/package)
// manual approach (create package.json in the root, create properties etc)
// npm init (step by step, press enter to skip)
// npm init -y (everything default flag)

// lodash in action
const _ = require('lodash')
const items = [1, [2, [3, [4, [5]]]]]
const newItems = _.flattenDeep(items)
console.log(newItems)