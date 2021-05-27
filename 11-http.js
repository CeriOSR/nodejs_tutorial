const http = require('http');
const server = http.createServer((request, response)=> {
  if (request.url === '/') {
   response.end('Welcome to our home page.')
  }
  if (request.url === '/about') {
   response.end('Here is our About page.')
  }
  response.end(`
  <h1>Oops!</h1>
  <p>We cant seem to find the page you are looking for.</p>
  <a href="/">back home</a>
  `)


 // can put the text inside the write() or end()
  // response.write('Welcome to our homepage')
  // request.end()
})

server.listen(5000)