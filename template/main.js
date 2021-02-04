var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/title.html';
    }
    if(request.url == '/favicon.ico'){
      return response.writeHead(404);
    }
    response.writeHead(200);
    console.log(__dirname);
    response.end(fs.readFileSync(__dirname + url));
    
});
app.listen(3000);

dbconfig = require('./database_survey');
var mysql = require('mysql');
var dbconn = mysql.createConnection(dbconfig); 

dbconn.connect(function (err) {
  if (!err) {
      console.log("Database is connected!");
  } else {
      console.log("Error connecting database...nn :" + err);
  }
})
dbconn.end();