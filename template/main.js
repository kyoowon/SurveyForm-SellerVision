var http = require('http');
var fs = require('fs');
var qs = require('querystring');

dbconfig = require('./database_survey');
var mysql = require('mysql');
const { Script } = require('vm');
var dbconn = mysql.createConnection(dbconfig);
var params = new Array();

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
    list=new Array();
    var test = '';
    var body2 = ''
    request.on('data', function (data) { body2 = body2 + data; });
    request.on('end', function () {
      var post = qs.parse(body2);
      test = post.test;
      console.log(test);
    })
    var body = '';
    var name = "";
    var email ="";
    var etc = "";
    var product = "";
    request.on('data', function (data) { body = body + data; });
    request.on('end', function () {
      var post = qs.parse(body);
      test = post.test;
      name = post.name;
      email=post.email;
      etc=post.etc;
      product=post.product
      params =[name, product, etc, email];
      console.log(test);
      var sql = "INSERT INTO survey_form (name, product, etc, email) VALUES (?,?,?,?)";
      console.log(params)
      dbconn.query(sql, params, function (error, rows) {
          if (error) {
              console.log(error);
          }
      });
    })
    
  }
  response.writeHead(200);
  response.end(fs.readFileSync(__dirname + url));
});
app.listen(3000);

// dbconn.end();