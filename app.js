const http = require('http');
const port = process.env.PORT || 3000
var fs = require('fs');
var index = fs.readFileSync('index.html');


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(index);
});

server.listen(port,() => {
  console.log(`Server running at port `+port);
});