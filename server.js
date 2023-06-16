// connecting to server

var http = require('http')    // import http

var url=   require('url')

http.createServer(function(req , res){       // callback function


  var route = req.url

  if(route ==='/'){

      res.end('This information is from frontend')  //(API call)
  }

   
   

  console.log('I have started my server')

}).listen(3000)



