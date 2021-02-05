var http = require('http');
var fs = require('fs');
var qs = require('querystring');

var app = http.createServer(function (request, response) {
  var url = request.url;
  console.log(url)
  if (request.url == '/') {
    url = '/title.html';
  }
  else if (request.url == '/favicon.ico') {
    return response.writeHead(404);
  }
  else if (request.url == "/report") {
    url = '/report.html';
    var body = '';
    var name = "";
    var email ="";
    var aaaa = "";
    var product = "";
    request.on('data', function (data) { body = body + data; });
    request.on('end', function () {
      var post = qs.parse(body);
      name = post.name;
      email=post.email;
      aaaa=post.aaaa;
      product=post.product
      console.log(name, email, aaaa, product);
    })
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