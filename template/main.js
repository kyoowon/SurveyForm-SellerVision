var http = require('http');
var fs = require('fs');
var url = require('url')
var express = require('express');
var appl = express();


var app = http.createServer(function(request,response){
  var _url = request.url;
  var queryData = url.parse(_url, true).query;
  var queryname = url.parse(_url, true).pathname;

  appl.use(express.static(__dirname)); // 1

  var port = 3000;
  app.listen(port, function(){
  console.log('server on! http://localhost:'+ port);
  });
  // if (queryname === '/'){
  //   if (queryData.id === undefined){
  //     fs.readFile(`data/title`, 'utf8', function(err, description){
  //       var template = `${description}`;
  //       response.end(template);
  //   })
  // } else {
  //     fs.readFile(`data/${queryData.id}`, 'utf8', function(err, description){
  //       var template = `${description}`;
  //       response.end(template);
  //   })
  // }
  // } else {
  //     response.writeHead(404);
  //     response.end('Not found');
  // }
});
// app.listen(3030);


var http = require('http');
var fs = require('fs');
var url = require('url');
 
var app = http.createServer(function(request,response){
    var _url = request.url;
    var queryData = url.parse(_url, true).query;
    var pathname = url.parse(_url, true).pathname;
    

    
 
 
 
});
app.listen(3000);
 