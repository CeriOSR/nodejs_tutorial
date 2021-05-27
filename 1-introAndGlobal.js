// INTRO
const amount = 12

if (amount < 10) {
    console.log('small number')
} else {
    console.log('large number')
}

console.log('hello world')

// GLOBALS - NO WINDOW !!!

// __dirname - path to current directory
// __filename - path to current file
// require - function to use modules (CommonJS)
// module - info about current modules (file)
// process - info about environment where the program is being executed

console.log(__dirname);
console.log(__filename);
setInterval(() => {
    console.log('hello world')
}, 1000);