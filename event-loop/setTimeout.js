// start operating system process
console.log('First')
setTimeout(() => {
  console.log('Second')
}, 0)  // callBack will always be called last because async will get offloaded
console.log('Third')
// completed and exit operating system process