var http = require('http');
const PORT = process.env.PORT || 3000;

//create a server object:
http.createServer(function (req, res) {
  res.write('Hello World!'); //write a response to the client
  console.log(req);
  console.log(res);
  res.end(); //end the response
}).listen(PORT); //the server object listens on port 8080